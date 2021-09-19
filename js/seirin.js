// var herder = $('#page-header').css('backgroundImage');
// console.log(herder.style.backgroundImage);
// console.log(herder);
// var rand_now = getRand(1, 178);
// if (herder.indexOf("rand") > 0) {
//     $('#page-header').css('backgroundImage', "url('https://cdn.jsdelivr.net/gh/AyagawaSeirin/Blog@gh-pages/img/headimg/" + rand_now + ".webp')");
//     $('#footer').css('backgroundImage', "url('https://cdn.jsdelivr.net/gh/AyagawaSeirin/Blog@gh-pages/img/headimg/" + rand_now + ".webp')");
// }
// $('.prev-cover').attr('data-original', 'https://cdn.jsdelivr.net/gh/AyagawaSeirin/Blog@gh-pages/img/headimg/' + getRand(1, 178) + '.webp');
$('.prev-cover').attr('data-lazy-src', 'https://cdn.jsdelivr.net/gh/AyagawaSeirin/Blog@gh-pages/img/headimg/' + getRand(1, 178) + '.webp');
// $('.next-cover').attr('data-original', 'https://cdn.jsdelivr.net/gh/AyagawaSeirin/Blog@gh-pages/img/headimg/' + getRand(1, 178) + '.webp');
$('.next-cover').attr('data-lazy-src', 'https://cdn.jsdelivr.net/gh/AyagawaSeirin/Blog@gh-pages/img/headimg/' + getRand(1, 178) + '.webp');
var relatedPosts_cover = document.getElementsByClassName('relatedPosts_cover');
for (j = 0; j < relatedPosts_cover.length; j++) {
    // relatedPosts_cover[j].setAttribute('data-original','https://cdn.jsdelivr.net/gh/AyagawaSeirin/Blog@gh-pages/img/headimg/' + getRand(1, 178) + '.webp');
    relatedPosts_cover[j].setAttribute('data-lazy-src','https://cdn.jsdelivr.net/gh/AyagawaSeirin/Blog@gh-pages/img/headimg/' + getRand(1, 178) + '.webp');
}
$('.comment-headline').html('<i class="fas fa-comments fa-fw"></i><span> 评论 (valine泄露隐私隐患已解决，请放心评论)</span>')

var browser = {
    versions: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1,
            presto: u.indexOf('Presto') > -1,
            webKit: u.indexOf('AppleWebKit') > -1,
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
            mobile: !!u.match(/AppleWebKit.*Mobile.*/),
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
            iPhone: u.indexOf('iPhone') > -1,
            iPad: u.indexOf('iPad') > -1,
            webApp: u.indexOf('Safari') == -1
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}

if (!browser.versions.mobile) {
    // L2Dwidget.init({pluginRootPath:"/live2dw/",pluginJsPath:"lib/",pluginModelPath:"assets/",model:{jsonPath:"/live2dw/assets/koharu.model.json"},display:{superSample:2,width:200,height:375,position:"right",hOffset:0,vOffset:-20},log:!1,tagMode:!1})
    L2Dwidget.init({pluginRootPath: "https://cdn.jsdelivr.net/gh/AyagawaSeirin/Blog@gh-pages/live2dw/", pluginJsPath: "lib/", pluginModelPath: "22/", model: {jsonPath: "https://cdn.jsdelivr.net/gh/AyagawaSeirin/Blog@gh-pages/live2dw/22/model.json"}, display: {superSample: 2, width: 220, height: 330, position: "right", hOffset: 0, vOffset: -20}, log: !1, tagMode: !1})
}

// var OriginTitile = document.title;
// (function(){
//     var d;
//     document.addEventListener("visibilitychange", function () {
//         document.hidden ? (clearTimeout(d), d = setTimeout(function () {
//             document.title = "\u007c\uff65\u03c9\uff65\uff40\u0029\u85cf\u8d77\u6765\u4e86\u2026\u2026\u85cf\u8d77\u6765\u4e86\u2026\u2026\u85cf\u8d77\u6765\u4e86\u2026\u2026"
//         }, 500)) : (document.title = "\u005f\u0028\u003a\u0033\u300d\u300d\u88ab\u53d1\u73b0\u60f9\uff01", d = setTimeout(function () {
//             document.title = OriginTitile
//         }, 2E3))
//     })
// })();
console.log("\n %c Blog article written %c by AyagawaSeirin | owomoe.net ", "color:#444;background:#eee;padding:5px;", "color:#F8F8FF;background:#F4A7B9;");

//console.log("%c ", "background:url(https://cdn.jsdelivr.net/gh/AyagawaSeirin/Blog@gh-pages/logo.jpg) no-repeat center;background-size:cover;padding-left:100%;padding-bottom:100%;overflow:hidden;border-radius:10px;margin:5px 0;width:200px;");

function getRand(y, x) {
    //x上限，y下限
    return parseInt(Math.random() * (x - y + 1) + y);
}