/* jshint esversion:6 */
var data = sessionStorage.getItem("0");
var srcp = window.location.search;

function getUrlParams(srcp) {
  // 不传name返回所有值，否则返回对应值
  var url = window.location.search;
  if (url.indexOf("?") == 1) {
    return false;
  }
  url = url.substr(1);
  url = url.split("&");
  var name = name || "";
  var nameres;
  // 获取全部参数及其值
  for (var i = 0; i < url.length; i++) {
    var info = url[i].split("=");
    var obj = {};
    obj[info[0]] = decodeURI(info[1]);
    url[i] = obj;
  }
  // 如果传入一个参数名称，就匹配其值
  if (name) {
    for (var k = 0; k < url.length; k++) {
      for (const key in url[k]) {
        if (key == name) {
          nameres = url[k][key];
        }
      }
    }
  } else {
    nameres = url;
  }
  // 返回结果
  return nameres;
}

var srcp = getUrlParams(srcp)[0].type;
var src;
if (data == "" || data == null || data == undefined) {
  if (srcp != "0" && srcp != "1") {
    srcp = 2;
    src = srcp;
  } else {
    src = srcp;
  }
  sessionStorage.setItem("0", src);
} else {
  if (data == srcp) {
    src = data;
  } else if (srcp != "" && srcp != null && srcp != undefined) {
    src = srcp;
    sessionStorage.setItem("0", src);
  } else {
    src = data;
    sessionStorage.setItem("0", src);
  }
}
