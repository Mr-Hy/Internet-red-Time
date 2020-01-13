$(function() {
  // 点击遮罩层,也可以跳转到产品中心
  $(".filterDiv,.filterDiv2,.filterDiv3,.filterDiv4").on("click", function() {
    $(location).attr("href", "./src/productCenter.html");
  });

  $(".lookMore").on("click", function() {
    $(location).attr("href", "./src/productCenter.html");
  });

  $(".item-txt")[0].style.cssText = "color:#2dacfe;";
  $(".lookMore").on("mouseenter", function() {
    $(".lookMore")[0].style.cssText = "background-color:#2daefe";
    $(".lookMore-Text")[0].style.cssText = "color:#fff";
  });
  $(".lookMore").on("mouseleave", function() {
    $(".lookMore")[0].style.cssText = "background-color:''";
    $(".lookMore-Text")[0].style.cssText = "color:#2daefe";
  });
  // ===================================================
  $(".itemDiv").on("mouseenter", function() {
    $(".filterDiv")[0].style.cssText = "opacity: 0.88;";
  });
  $(".itemDiv").on("mouseleave", function() {
    $(".filterDiv")[0].style.cssText = "opacity: 0;";
  });
  $(".filterDiv").on("click", function() {});
  // ----------------------------------------2
  $(".itemDiv2").on("mouseenter", function() {
    $(".filterDiv2")[0].style.cssText = "opacity: 0.88;";
  });
  $(".itemDiv2").on("mouseleave", function() {
    $(".filterDiv2")[0].style.cssText = "opacity: 0;";
  });
  // ----------------------------------------3
  $(".itemDiv3").on("mouseenter", function() {
    $(".filterDiv3")[0].style.cssText = "opacity: 0.88;";
  });
  $(".itemDiv3").on("mouseleave", function() {
    $(".filterDiv3")[0].style.cssText = "opacity: 0;";
  });
  // ----------------------------------------4
  $(".itemDiv4").on("mouseenter", function() {
    $(".filterDiv4")[0].style.cssText = "opacity: 0.88;";
  });
  $(".itemDiv4").on("mouseleave", function() {
    $(".filterDiv4")[0].style.cssText = "opacity: 0;";
  });

  // 当进入页面,4个产品动画效果
  window.onload = function() {
    $(".particulars")[0].style.cssText = "top:30px;opacity: 1;";
    $(".border-left")[0].style.cssText = "height:100%";
    setTimeout(function() {
      $(".labelStyle")[0].style.cssText = "width:100%;opacity: 0.8;";
    }, 1000);
    // **************************************2
    $(".border-left2")[0].style.cssText = "height:100%";
    setTimeout(function() {
      $(".labelStyle2")[0].style.cssText = "width:100%;opacity: 0.8;";
    }, 1000);
    // **************************************3
    $(".border-left3")[0].style.cssText = "height:100%";
    setTimeout(function() {
      $(".labelStyle3")[0].style.cssText = "width:100%;opacity: 0.8;";
    }, 1000);
    // **************************************4
    $(".border-left4")[0].style.cssText = "height:100%";
    setTimeout(function() {
      $(".labelStyle4")[0].style.cssText = "width:100%;opacity: 0.8;";
    }, 1000);
  };
  // 因程序执行原因,不是每次进入页面4个产品都执行动画效果,因此监听滚动条来保证每次都能正确触发动画效果
  window.onbeforeunload = () => {
    $(".particulars")[0].style.cssText = "top:30px;opacity: 1;";
    $(".border-left")[0].style.cssText = "height:100%";
    setTimeout(function() {
      $(".labelStyle")[0].style.cssText = "width:100%;opacity: 0.8;";
    }, 1000);
    // **************************************2
    $(".border-left2")[0].style.cssText = "height:100%";
    setTimeout(function() {
      $(".labelStyle2")[0].style.cssText = "width:100%;opacity: 0.8;";
    }, 1000);
    // **************************************3
    $(".border-left3")[0].style.cssText = "height:100%";
    setTimeout(function() {
      $(".labelStyle3")[0].style.cssText = "width:100%;opacity: 0.8;";
    }, 1000);
    // **************************************4
    $(".border-left4")[0].style.cssText = "height:100%";
    setTimeout(function() {
      $(".labelStyle4")[0].style.cssText = "width:100%;opacity: 0.8;";
    }, 1000);
  };
  $(window).scroll(function() {
    var topp = $(document).scrollTop();
    if (topp > 0) {
      $(".particulars")[0].style.cssText = "top:30px;opacity: 1;";
      $(".border-left")[0].style.cssText = "height:100%";
      setTimeout(function() {
        $(".labelStyle")[0].style.cssText = "width:100%;opacity: 0.8;";
      }, 1000);
      // **************************************2
      $(".border-left2")[0].style.cssText = "height:100%";
      setTimeout(function() {
        $(".labelStyle2")[0].style.cssText = "width:100%;opacity: 0.8;";
      }, 1000);
      // **************************************3
      $(".border-left3")[0].style.cssText = "height:100%";
      setTimeout(function() {
        $(".labelStyle3")[0].style.cssText = "width:100%;opacity: 0.8;";
      }, 1000);
      // **************************************4
      $(".border-left4")[0].style.cssText = "height:100%";
      setTimeout(function() {
        $(".labelStyle4")[0].style.cssText = "width:100%;opacity: 0.8;";
      }, 1000);
    }
  });

  // let Url = '192.168.5.143:8084/official';
  var data = sessionStorage.getItem("0");
  $.ajax({
    type: "GET",
    data: {
      type: src
    },
    url: `http://${Url}/web/material/homepage`,
    success: function(response) {
      $("#filterimg01")[0].src = response.data.img01.matUrl;
      $(".labeltext-01")[0].innerHTML = response.data.img01.matTitle;
      $(".labeltext-02")[0].innerHTML = response.data.img01.matInfo;

      $("#filterimg02")[0].src = response.data.img02.matUrl;
      $(".labeltext02-01")[0].innerHTML = response.data.img02.matTitle;
      $(".labeltext02-02")[0].innerHTML = response.data.img02.matInfo;

      $("#filterimg03")[0].src = response.data.img03.matUrl;
      $(".labeltext03-01")[0].innerHTML = response.data.img03.matTitle;
      $(".labeltext03-02")[0].innerHTML = response.data.img03.matInfo;

      $("#filterimg04")[0].src = response.data.img04.matUrl;
      $(".labeltext04-01")[0].innerHTML = response.data.img04.matTitle;
      $(".labeltext04-02")[0].innerHTML = response.data.img04.matInfo;
      $("#viedeoSrc")[0].src = response.data.video;
    }
  });

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
  $(".borderBottom")[0].style.cssText = " display: block";

  // 导航栏各种方法
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

  // 加入止观下拉菜单Hover效果
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

  function getBrowser() {
    var UserAgent = navigator.userAgent.toLowerCase();
    var browser = null;
    var browserArray = {
      IE: window.ActiveXObject || "ActiveXObject" in window, // IE
      Chrome:
        UserAgent.indexOf("chrome") > -1 && UserAgent.indexOf("safari") > -1, // Chrome浏览器
      Firefox: UserAgent.indexOf("firefox") > -1, // 火狐浏览器
      Opera: UserAgent.indexOf("opera") > -1, // Opera浏览器
      Safari:
        UserAgent.indexOf("safari") > -1 && UserAgent.indexOf("chrome") == -1, // safari浏览器
      Edge: UserAgent.indexOf("edge") > -1, // Edge浏览器
      QQBrowser: /qqbrowser/.test(UserAgent), // qq浏览器
      WeixinBrowser: /MicroMessenger/i.test(UserAgent) // 微信浏览器
    };
    for (var i in browserArray) {
      if (browserArray[i]) {
        browser = i;
      }
    }
    return browser;
  }
});
