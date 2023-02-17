cookie = JSON.stringify($request.headers.cookie);
console.log("获取到cookie:\n " + cookie);
$notification.post('检测到京东网页', '成功获取到Cookie', cookie);
$done({});
