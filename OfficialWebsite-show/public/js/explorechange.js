setTimeout(function() {
  $(".item-img-01")[0].style.cssText = "opacity: 1;transform: rotate(-32deg);";
  $(".item-img-02")[0].style.cssText = "opacity: 1;transform: rotate(-9deg);";
  $(".item-img-03")[0].style.cssText = "opacity: 1;transform: rotate(3deg);";
  $(".item-img-04")[0].style.cssText = "opacity: 1;transform: rotate(-15deg);";
  $(".item-img-05")[0].style.cssText = "opacity: 1;transform: rotate(15deg);";
  $(".item-img-06")[0].style.cssText = "opacity: 1;transform: rotate(-5deg);";
  $(".item-img-07")[0].style.cssText = "opacity: 1;transform: rotate(19deg);";
  $(".item-img-08")[0].style.cssText = "opacity: 1;transform: rotate(5deg);";
}, 300);

$(".item-img-01").on("mouseover", function() {
  $(".item-img-01")[0].style.cssText =
    "width:210px;transform: rotate(-23deg);opacity: 1;z-index:222";
});
$(".item-img-01").on("mouseout", function() {
  $(".item-img-01")[0].style.cssText = "opacity: 1;";
});

// 第二张
$(".item-img-02").on("mouseover", function() {
  $(".item-img-02")[0].style.cssText =
    " width: 230px;transform: rotate(-8deg);opacity: 1;z-index:222";
});
$(".item-img-02").on("mouseout", function() {
  $(".item-img-02")[0].style.cssText = "opacity: 1;";
});

// 第三张
$(".item-img-03").on("mouseover", function() {
  $(".item-img-03")[0].style.cssText =
    "width:275px;transform: rotate(3deg);opacity: 1;z-index:222";
});
$(".item-img-03").on("mouseout", function() {
  $(".item-img-03")[0].style.cssText = "opacity: 1;";
});

// 第四张
$(".item-img-04").on("mouseover", function() {
  $(".item-img-04")[0].style.cssText =
    " width: 310px;transform: rotate(-15deg);opacity: 1;z-index:222";
});
$(".item-img-04").on("mouseout", function() {
  $(".item-img-04")[0].style.cssText = "opacity: 1;";
});

// 第五张
$(".item-img-05").on("mouseover", function() {
  $(".item-img-05")[0].style.cssText =
    "width: 310px;transform: rotate(15deg);opacity: 1;z-index:222";
});
$(".item-img-05").on("mouseout", function() {
  $(".item-img-05")[0].style.cssText = "opacity: 1;";
});

// 第六张
$(".item-img-06").on("mouseover", function() {
  $(".item-img-06")[0].style.cssText =
    "width: 360px;transform: rotate(0deg);opacity: 1;z-index:222";
});
$(".item-img-06").on("mouseout", function() {
  $(".item-img-06")[0].style.cssText = "opacity: 1;";
});

// 第七张
$(".item-img-07").on("mouseover", function() {
  $(".item-img-07")[0].style.cssText =
    "width:220px;transform: rotate(15deg);opacity: 1;z-index:222";
});
$(".item-img-07").on("mouseout", function() {
  $(".item-img-07")[0].style.cssText = "opacity: 1;";
});

// 第八张
$(".item-img-08").on("mouseover", function() {
  $(".item-img-08")[0].style.cssText =
    "width: 230px;transform: rotate(5deg);opacity: 1;z-index:222";
});
$(".item-img-08").on("mouseout", function() {
  $(".item-img-08")[0].style.cssText = "opacity: 1;";
});
