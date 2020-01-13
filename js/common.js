//解决键盘弹出影响定位
let hrt = window.innerHeight;
$('body').height(hrt);
window.onresize = function(){
    let u = navigator.userAgent, app = navigator.appVersion;
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
    let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if(isIOS){
        let hrt = window.innerHeight;
        $('body').height(hrt);
    }
}
var ua = navigator.userAgent.toLowerCase();
var isWeixin = ua.indexOf('micromessenger') != -1;
if (!isWeixin) {
    window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=888";
}