<template>
  <div>
    <div class="timecontainer" id="timecontainer" @mousedown="mousedownfn">
      <div class="swrap">
        <div class="leftweek">
          <div class="headtar">星期/时间</div>
          <div class="weekname">{{weekName[0]}}</div>
          <div class="weekname">{{weekName[1]}}</div>
          <div class="weekname">{{weekName[2]}}</div>
          <div class="weekname">{{weekName[3]}}</div>
          <div class="weekname">{{weekName[4]}}</div>
          <div class="weekname">{{weekName[5]}}</div>
          <div class="weekname">{{weekName[6]}}</div>
          <!-- <div class="weekname" v-for="(item,index) in weekName" :key="index">{{item}}</div> -->
        </div>
        <div class="mainbox">
          <!-- 时间段 -->
          <div class="bottomtime">
            <div class="timeList" v-for="(item,index) in timeName" :key="index">{{item}}</div>
          </div>
          <div class="doublenumber">
            <div
              class="timedouble"
              :title="`${timedb}`"
              v-for="(item,index) in 24"
              :key="index"
            >{{item}}</div>
          </div>
          <div class="boxlist">
            <div
              class="list"
              :title="`${timeSetp}小时`"
              v-for="(item,index) in timeList"
              :class="{selected:item==1}"
              @click="setcurrent(item,index)"
              :key="index"
            ></div>
          </div>
        </div>
      </div>
      <div class="detailslist">
        <div class="listname">
          <p v-if="show == true">可拖动鼠标选择时间段</p>
          <p v-else>已选择时间段</p>
          <p>
            <a href="#" @click="clear">清除</a>
          </p>
        </div>
      </div>
      <button @click="addBtn"></button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      weekName: [
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
        "星期日"
      ],
      timeName: ["00:00~12:00", "12:00~24:00"],
      timeList: this.timeString.split(""),
      isSelect: true,
      selectBoxDashed: null,
      startX: null,
      startY: null,
      initx: null,
      scrollX: null,
      scrollY: null,
      inity: null,
      alterclass: "",
      show: true
    };
  },
  props: {
    timeSetp: {
      type: Number,
      default() {
        return 0.5;
      }
    },
    timedb: {
      type: Number,
      default() {
        return 1;
      }
    },
    timeString: {
      type: String,
      default() {
        let _timeArray = [];
        for (let i = 0; i < (24 / this.timeSetp) * 7; i++) {
          _timeArray.push("0");
        }
        return _timeArray.join("");
      }
    }
  },
  model: {
    prop: "timeString",
    event: "triggertime"
  },
  mounted() {},
  methods: {
    addBtn() {
      console.log(this.timeString);
      // function group(array, subGroupLength) {
      //   let index = 0;
      //   let newArray = [];
      //   while (index < array.length) {
      //     newArray.push(array.slice(index, (index += subGroupLength)));
      //   }
      //   return newArray;
      // }
      // var a = group(this.timeString, 48);
      // console.log(a);
    },

    clearBubble(e) {
      if (e.stopPropagation) {
        e.stopPropagation();
      } else {
        e.cancelBubble = true;
      }
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
    },
    mousedownfn(e) {
      //  创建选框节点
      this.selectBoxDashed = document.createElement("div");
      this.selectBoxDashed.className = "select-box-dashed";

      document.body.appendChild(this.selectBoxDashed);
      console.log(document.body)
      this.scrollX =
        document.documentElement.scrollLeft || document.body.scrollLeft;
      this.scrollY =
        document.documentElement.scrollTop || document.body.scrollTop;
      //  设置选框的初始位置
      this.startX = e.x + this.scrollX || e.clientX + this.scrollX;
      this.startY = e.y + this.scrollY || e.clientY + this.scrollY;
      this.selectBoxDashed.style.cssText = `left:${this.startX}px;top:${this.startY}px`;
      //  清除事件冒泡、捕获
      this.clearBubble(e);
      document
        .getElementById("timecontainer")
        .addEventListener("mousemove", this.mousemovefn);
      document.body.addEventListener("mouseup", this.mouseUpfn);
    },
    mousemovefn(e) {
      //  设置选框可见
      this.selectBoxDashed.style.display = "block";
      //  根据鼠标移动，设置选框的位置、宽高
      this.initx = e.x + this.scrollX || e.clientX + this.scrollX;

      this.inity = e.y + this.scrollY || e.clientY + this.scrollY;
      //  暂存选框的位置及宽高，用于将 select-item 选中

      this.left = Math.min(this.initx-100, this.startX-100);
      this.top = Math.min(this.inity, this.startY);
      this.width = Math.abs(this.initx - this.startX);
      this.height = Math.abs(this.inity - this.startY);
      this.selectBoxDashed.style.left = `${this.left+100}px`;
      this.selectBoxDashed.style.top = `${this.top}px`;
      this.selectBoxDashed.style.width = `${this.width}px`;
      this.selectBoxDashed.style.height = `${this.height}px`;
      console.log(this.selectBoxDashed)
      let fileDivs = document.getElementsByClassName("list");
      for (let i = 0; i < fileDivs.length; i++) {
        let itemX_pos = fileDivs[i].offsetWidth + fileDivs[i].offsetLeft;
        let itemY_pos = fileDivs[i].offsetHeight + fileDivs[i].offsetTop;
        let condition1 = itemX_pos > this.left;
        let condition2 = itemY_pos > this.top;
        let condition3 = fileDivs[i].offsetLeft < this.left + this.width;
        let condition4 = fileDivs[i].offsetTop < this.top + this.height;
        
        if (condition1 && condition2 && condition3 && condition4) {
          fileDivs[i].classList.add("temp-selected");
        } else {
          fileDivs[i].classList.remove("temp-selected");
        }
      }
      this.clearBubble(e);
    },
    mouseUpfn(e) {
      document
        .getElementById("timecontainer")
        .removeEventListener("mousemove", this.mousemovefn);
      let selectDom = document.getElementsByClassName("temp-selected");
      [].slice.call(selectDom).forEach(item => {
        if (item.classList.contains("selected")) {
          item.classList.remove("selected");
        } else {
          item.classList.add("selected");
        }
        item.classList.remove("temp-selected");
      });
      if (this.selectBoxDashed) {
        try {
          this.selectBoxDashed.parentNode.removeChild(this.selectBoxDashed);
        } catch (err) {
          // console.log(err)
        }
      }
      let fileDivs = document.getElementsByClassName("list");
      for (let i = 0; i < fileDivs.length; i++) {
        if (fileDivs[i].classList.contains("selected")) {
          this.timeList[i] = "1";
        } else {
          this.timeList[i] = "0";
        }
      }
      this.$emit("triggertime", this.timeList.join(""));
      this.clearBubble(e);
    },
    setcurrent(item, index) {
      if (item == 0) {
        this.timeList.splice(index, 1, "1");
      } else {
        this.timeList.splice(index, 1, "0");
      }
    },
    selectAllornot(e) {
      this.timeList.forEach((item, index) => {
        this.timeList.splice(index, 1, Number(e.target.checked));
      });
      this.$emit("triggertime", this.timeList.join(""));
    },
    clear() {
     let list = [];
     list = document.getElementsByClassName('selected');
     console.log(list)
      this.timeList.forEach((item, index) => {
        this.timeList.splice(index, 1, 0);
      });
    }
  }
};
</script>
<style  scoped>
.doublenumber {
  width: 553px;
  display: flex;
  margin-top: -1px;
  margin-left: -1px;
}

.timedouble {
  width: 31px;
  border: 1px solid #e4e9ed;
  height: 22px;
  line-height: 20px;
  font-size: 8px;
  text-align: center;
  margin-bottom: -1px;
  margin-right: -1px;
  background: #f8f9fa;
}

/* ----------------------------------- */
.timecontainer {
  width: 780px;
  /* overflow: hidden; */
  padding-top: 30px;
}
.swrap {
  width: 780px;
  /* overflow: hidden; */
}

/* ------------------------------------ */
.headtar {
  width: 74.4px;
  height: 54px;
  border-bottom: 1px solid #e4e9ed;
  font-size: 10px;
  text-align: center;
  line-height: 54px;
  font-weight: bold;
}
.leftweek {
  display: inline-block;
  width: 74.4px;
  height: 201px;
  border: 1px solid #e4e9ed;
  vertical-align: top;
  position: relative;
  left: 10px;
  top: 0px;
  font-size: 12px;
  font-weight: bold;
  background: #f8f9fa;
}
.leftweek .weekname {
  line-height: 20px;
  text-align: center;
  border-bottom: 1px solid #e4e9ed;
  font-size: 10px;
  font-weight: bold;
}
.mainbox {
  display: inline-block;
  vertical-align: middle;
  padding: 0px 0px 2px 10px;
  width: 495px;
  height: 202px;
  /* overflow: hidden; */
  /* background-color: #eee; */
}
.boxlist {
  width: 565.5px;
  height: 139px;
}
.boxlist .list {
  float: left;
  height: 20px;
  width: 11.5px;
  border: 1px solid #e4e9ed;

  /* border-radius: 2px; */
  margin: 0 -1px -1px;
  cursor: pointer;
  background-color: #fff;
}
.boxlist .list:nth-of-type(48n) {
  margin-right: 10px;
}
.boxlist .list.selected {
  background-color: #0099ff;
  border-color: #e4e9ed;
}
.selectall {
  float: left;
  font-size: 12px;
  margin-left: 50px;
}
.righttips {
  font-size: 12px;
  float: right;
}
.righttips .tiplist {
  display: inline-block;
  margin-right: 10px;
}
.righttips .tiplist span {
  display: inline-block;
  width: 20px;
  height: 10px;
  border: 1px solid #e4e9ed;
  margin-right: 3px;
}
.righttips .tiplist span.current {
  background: #43a9ed;
  border-color: #43a9ed;
}

.bottomtime {
  width: 553px;
  background: #f8f9fa;
  border: 1px solid #e4e9ed;
  display: flex;
  margin-left: -2px;
}
.timeList {
  text-align: center;
  border-left: 1px solid #e4e9ed;
  width: 282px;
  font-size: 12px;
  font-weight: bold;
  padding: 7.75px 0px;
}
</style>
<style>
.select-box-dashed {
  position: absolute;
  display: none;
  width: 0px;
  height: 0px;
  padding: 0px;
  margin: 0px;
  border: 1px dashed #0099ff;
  background-color: #c3d5ed;
  opacity: 0.5;
  filter: alpha(opacity=50);
  font-size: 0px;
  z-index: 99999;
}
/* ------------------------------ */
.detailslist {
  width: 627px;
  height: 200px;
  border: 1px solid #e4e9ed;
  position: relative;
  top: -1px;
  left: 10px;
}
/* -------------------------- */
.listname {
  display: flex;
  justify-content: space-around;
}

.listname p {
  font-size: 12px;
}

.listname a {
  text-decoration: none;
  color: #2f88ff;
}
</style>

