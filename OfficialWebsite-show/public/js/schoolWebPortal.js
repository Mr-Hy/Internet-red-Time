// let Url = '192.168.5.143:8084/official';
/* jshint esversion: 6 */
setTimeout(function() {
  $(".suspend")[0].style.cssText = "opacity:1;";
}, 2000);
$.ajax({
  url: `http://${Url}/web/material/loadCampusRecruit`,
  data: {
    type: src
  },
  success: function(response) {
    let itemList = response.data.campusJmp;
    for (var i = 0; i < itemList.length; i++) {
      $(`.F-itemImage0${i + 1}`)[0].src = itemList[i].url;
      $(`.fifthBtn0${i + 1}`)[0].id = itemList[i].baseJobId;
    }
  }
});
$(function() {
  $(".firstItem")[0].style.cssText = "top: 0%;opacity: 1;";
  setTimeout(function() {
    $(".secondItem")[0].style.cssText = "top: 75px;opacity: 1;";
  }, 500);
  setTimeout(function() {
    $(".thirdlyWire")[0].style.cssText = "top: 85px;opacity: 1;";
  }, 800);
  setTimeout(function() {
    $(".fourthlyItem")[0].style.cssText = "top: 100px;opacity: 1;";
  }, 800);
  setTimeout(function() {
    $(".fifthItem")[0].style.cssText = "top: 160px;opacity: 1;";
  }, 1300);

  // 点击查看按钮鼠标进入效果
  $(".fifthButton").on("mouseover", function() {
    $(this)[0].src = "../public/img/schoolWebPortal/校招入口-btn02.png";
  });
  $(".fifthButton").on("mouseout", function() {
    $(this)[0].src = "../public/img/schoolWebPortal/校招入口-btn01.png";
  });
  // 点击查看按钮带参数跳转页面
  $(".fifthBtn01").on("click", function() {
    window.location.href = "./schoolUse.html?id=" + $(this)[0].id;
  });
  $(".fifthBtn02").on("click", function() {
    window.location.href = "./schoolUse.html?id=" + $(this)[0].id;
  });
  $(".fifthBtn03").on("click", function() {
    window.location.href = "./schoolUse.html?id=" + $(this)[0].id;
  });
  $(".itemAllBtn").click(function() {
    window.location.href = "./schoolUse.html";
  });
  // 全部职位按钮鼠标进入效果
  $(".AllBtn").on("mouseover", function() {
    $(this)[0].src = "../public/img/schoolWebPortal/校招入口-05.png";
  });
  $(".AllBtn").on("mouseout", function() {
    $(this)[0].src = "../public/img/schoolWebPortal/校招入口-04.png";
  });
});
//迫不得已,把加入止观hover效果每个页面都写一次
$(function() {
  $(".hidDiv")[0].style.cssText = "height:47px";
});
$(".joinList")[1].style.cssText = "color:#2dacfe;";

$("#suspension").hover(
  function() {
    $("#suspension")[0].src =
      "../public/img/schoolWebPortal/悬浮导航栏-返回02.png";
  },
  function() {
    $("#suspension")[0].src =
      "../public/img/schoolWebPortal/悬浮导航栏-返回01.png";
  }
);

$(".borderBottom4")[0].style.cssText = " display: block";
$(".item-txt")[3].style.cssText = "color:#2dacfe;";

// 导航栏
$.ajax({
  type: "GET",
  data: {
    type: src
  },
  url: `http://${Url}/web/material/contact`,
  success: function(response) {
    $(".businessEmail").html(`商务合作:&nbsp;${response.data.businessEmail}`);
    $(".eliteEmail").html(`精英招聘:&nbsp;${response.data.recruitEmail}`);
    $(".recruitEmail").html(`游戏客服:&nbsp;${response.data.eliteEmail}`);
    $(".erweima")[0].src = `${response.data.qrImg}`;
  }
});

$(".joinList").hover(
  function() {
    $(".borderBottom4")[0].style.cssText = "display: block";
    $("#joinBtn")[0].style.cssText = "color:#2dacfe;";
  },
  function() {
    var src = window.location.href;
    src = src.split("/").slice(-1)[0];
    if (src === "JoinUse.html" || src === "schoolWebPortal.html") {
      $(".borderBottom4")[0].style.cssText = "display: block";
      $("#joinBtn")[0].style.cssText = "color:#2dacfe;";
    } else {
      $(".borderBottom4")[0].style.cssText = "display: none";
      $("#joinBtn")[0].style.cssText = "color:fff;";
    }
  }
);

(function() {
  $(document).bind("scroll", function() {
    if ($(document).scrollTop() > 400) {
      $(".suspend")[0].style.cssText = `top:500px`;
    } else {
      $(".suspend")[0].style.cssText = `top:100px`;
    }
  });
})();

// window.onresize = function () {
//     if ($('body').width() < 1500) {
//         $('.suspend')[0].style.cssText = `left:1280px`
//     }

// }
