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
};

function is_weixin(){
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=="micromessenger") {
        return true;
    } else {
        return false;
    }
};

if (!is_weixin()) { 
    window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxdf3f22ebfe96b912&redirect_uri=xxx&response_type=code&scope=snsapi_base&state=hyxt#wechat_redirect';
};

$(function(){
    $('.payment-btn').on('click',function(){
        $('.mask').show();
        $('.popup').show();       
    })
    $('.close').on('click',function(){
        $('.mask').hide();
        $('.popup').hide();
    });
});