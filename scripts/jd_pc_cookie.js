console.log("检测到京东网页");
let cookie = JSON.stringify($request.headers.cookie);
console.log("获取到cookie:\n " + cookie);
$notification.post('成功获取到Cookie', '到log中复制完整Cookie', cookie);
$done({});
