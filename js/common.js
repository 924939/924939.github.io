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

// function is_weixin(){
//     let ua = navigator.userAgent.toLowerCase();
//     if(ua.match(/MicroMessenger/i)=="micromessenger") {
//         return true;
//     } else {
//         return false;
//     }
// };

// let wxUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxdf3f22ebfe96b912&redirect_uri=xxx&response_type=code&scope=snsapi_base&state=hyxt#wechat_redirect';

// if (!is_weixin()) { 
//     window.location.href = wxUrl;
// };

$(function(){

    $('.point-focus').on('keyup',function () {
        var val = $(this).val();
        $(this).val($(this).val().replace(".","$#$").replace(/\./g, "").replace("$#$", ".").replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3').replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3'));
        if (val.indexOf(".") < 0 && val!= "") {
            $(this).val(parseFloat($(this).val()));
        } else if (val.indexOf(".") == 0) {
            $(this).val($(this).val().replace(/[^$#$]/g, "0.")) ;
            $(this).val( $(this).val().replace(/\.{2,}/g, "."));
        }
    })      

              
        
    $('.payment-btn button').on('click',function(){
        $('.mask').show();
        $('.popup').show();       
    })
    $('.close').on('click',function(){
        $('.mask').hide();
        $('.popup').hide();
    }); 
});