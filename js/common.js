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