const cookie2object = (cookie) => {
  var obj = {};
  var arr = cookie.split("; ");
  arr.forEach(function (val) {
    var brr = val.split("=");
    obj[brr[0]] = brr[1];
  });
  return obj;
};
const config = {
  cookie: {},
  headers: {}
};

config.headers = $request.headers;
config.cookie = cookie2object(config.headers.cookie);
var nessary_headers = {};
cookie = `pt_key=${config.cookie.pt_key}; pt_pin=${config.cookie.pt_pin}`;
console.log(cookie);
$notification.post("京东cookie获取", "获取成功", cookie);
$done({});
