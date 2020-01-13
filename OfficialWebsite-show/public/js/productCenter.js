/* jshint esversion: 6 */
// let Url = '192.168.5.143:8084/official';
var data = sessionStorage.getItem("0");
var dataArr = null;
$.ajax({
  type: "GET",
  data: {
    type: data
  },
  url: `http://${Url}/web/material/productCenter`,
  success: function(res) {
    $(".video")[0].src = res.data.video;
    dataArr = res.data.productVos;
    $(".clear")[0].style.cssText = `height:${80 * dataArr.length}px`;
    var topNum = 0;
    for (var i = 0; i < dataArr.length; i++) {
      if (i % 2 == 0) {
        $(".productList ").append(`
                <div class="productFirst" style="top:${topNum}px" id="productFirst${i}">
                    <div class="productItem-left">
                        <div class="firstImage" id="firstImage${i}" onclick="showImageBtn(${dataArr[i].id})">
                            <img src="${dataArr[i].matUrl}">
                            <div class="firstImageShade"></div>
                        </div>
                        <div class="firstText" id="firstText${i}">
                            <div class="AboutImg-left">
                                <img src="../public/img/product/About.png">
                            </div>
                        <div class="iconText">
                            <div class="firstIcon" onclick="showImageBtn(${dataArr[i].id})">
                                <img src="${dataArr[i].matIcon}">
                            </div>
                            <div class="firstHeadline">
                                <p>
                                    ${dataArr[i].matTitle}
                                </p>
                            </div>
                        </div>

                            <div class="firstTxt">
                                <p>
                                    ${dataArr[i].matInfo}
                                </p>
                            </div>
                        </div>
                        <div class="firstBackImg"  id="firstBackImg${i}">
                            <img src="../public/img/product/底板.png">
                        </div>
                    </div>
                </div>
                `);
        topNum += 10;
      } else {
        $(".productList").append(`
                <div class="productSecond" style="top:${topNum}px" id="productSecond${i}">
                    <div class="productItem-right">
                        <div class="secondText" id="secondText${i}">
                            <div class="AboutImg-right">
                                <img src="../public/img/product/About.png">
                            </div>
                        <div class="iconText-02">
                            <div class="secondIcon" onclick="showImageBtn(${dataArr[i].id})">
                                <img src="${dataArr[i].matIcon}">
                            </div>
                            <div class="secondHeadline">
                                <p>
                                    ${dataArr[i].matTitle}
                                </p>
                            </div>
                        </div>
                            <div class="secondTxt">
                                <p>
                                    ${dataArr[i].matInfo}
                                </p>
                            </div>
                        </div>
                        <div class="secondImage" id="secondImage${i}" onclick="showImageBtn(${dataArr[i].id})">
                            <img src="${dataArr[i].matUrl}">
                        </div>
                    </div>
                </div>
                `);
        topNum += 100;
      }
    }
    showImageBtn = function(val) {
      $("#IconImage")[0].src = "";
      $(".Icon-backImg").fadeToggle();
      for (var p = 0; p < dataArr.length; p++) {
        if (dataArr[p].id === val) {
          $("#IconImage")[0].src = dataArr[p].matPopIcon;
        }
      }
    };
    // icon弹窗点击周边也能关闭
    $(".Icon-backImg").on("click", function(event) {
      event.stopPropagation();
      event.stopImmediatePropagation();
      $(".Icon-backImg").fadeToggle();
    });

    let setHeight = 0;

    function showload() {
      //如果滚动条高度大于元素位置,则显示图片文字内容
      if (dataArr.length > 0) {
        if ($(document).scrollTop() > $(`#productFirst0`).offset().top - 800) {
          $(`#firstImage0`)[0].style.cssText = "margin-left: 237px;opacity: 1;";
          $(`#firstText0`)[0].style.cssText = "left:1150px;opacity: 1;";
          $(`#firstBackImg0`)[0].style.cssText = "opacity: 1;";
        }
      }
      if (dataArr.length > 1) {
        if ($(document).scrollTop() > $(`#productSecond1`).offset().top - 700) {
          $(`#secondImage1`)[0].style.cssText = "margin-left:900px;opacity: 1;";
          $(`#secondText1`)[0].style.cssText = "left:313px;opacity: 1;";
        }
      }
      if (dataArr.length > 2) {
        if ($(document).scrollTop() > $(`#productFirst2`).offset().top - 500) {
          $(`#firstImage2`)[0].style.cssText = "margin-left: 237px;opacity: 1;";
          $(`#firstText2`)[0].style.cssText = "left:1150px;opacity: 1;";
          $(`#firstBackImg2`)[0].style.cssText = "opacity: 1;";
        }
      }
      if (dataArr.length > 3) {
        if ($(document).scrollTop() > $(`#productSecond3`).offset().top - 600) {
          $(`#secondImage3`)[0].style.cssText = "margin-left:900px;opacity: 1;";
          $(`#secondText3`)[0].style.cssText = "left:313px;opacity: 1;";
        }
      }
      if (dataArr.length > 4) {
        if ($(document).scrollTop() > $(`#productFirst4`).offset().top - 800) {
          $(`#firstImage4`)[0].style.cssText = "margin-left: 237px;opacity: 1;";
          $(`#firstText4`)[0].style.cssText = "left:1150px;opacity: 1;";
          $(`#firstBackImg4`)[0].style.cssText = "opacity: 1;";
        }
      }
      if (dataArr.length > 5) {
        if ($(document).scrollTop() > $(`#productSecond5`).offset().top - 800) {
          $(`#secondImage5`)[0].style.cssText = "margin-left:900px;opacity: 1;";
          $(`#secondText5`)[0].style.cssText = "left:313px;opacity: 1;";
        }
      }
    }
    $(document).bind("scroll", function() {
      //当滚动条滚动时,触发函数
      showload();
    });
    // $('#WindowHeight')[0].style.cssText = `height:${dataArr.length * 500}px`
  }
});

// $('#headTxt3')[0].style.cssText =
//     "background-color: rgba(255, 255, 255, 0.5);border-bottom: 5px solid #2dacfe;"
$(".item-txt")[2].style.cssText = "color:#2dacfe;";
// $('.closeDiv').on('click', function () {
//     $('.Icon-backImg').fadeToggle()
// })

//迫不得已,把加入止观hover效果每个页面都写一次
$(function() {
  $("#head-hover").on("mouseenter", function() {
    $(".hidDiv")[0].style.cssText = "height:47px";
  });
  $("#head-hover").on("mouseleave", function() {
    $(".hidDiv")[0].style.cssText = "height:0px";
  });
  $(".hidDiv").on("mouseenter", function() {
    $(".hidDiv")[0].style.cssText = "height:47px";
  });
  $(".hidDiv").on("mouseleave", function() {
    $(".hidDiv")[0].style.cssText = "height:0px";
  });
});
$(".borderBottom3")[0].style.cssText = " display: block";
