var opts = {
    lines: 13, // The number of lines to draw
    length: 9, // The length of each line
    width: 19, // The line thickness
    radius: 17, // The radius of the inner circle
    corners: 1, // Corner roundness (0..1)
    rotate: 0, // The rotation offset
    color: '#c2aa87', // #rgb or #rrggbb
    speed: 3, // Rounds per second
    trail: 60, // Afterglow percentage
    shadow: false, // Whether to render a shadow
    hwaccel: false, // Whether to use hardware acceleration
    className: 'spinner', // The CSS class to assign to the spinner
    zIndex: 2e9, // The z-index (defaults to 2000000000)
    top: 'auto', // Top position relative to parent in px
    left: 'auto' // Left position relative to parent in px
};
var target = document.getElementById('ico');
var spinner = new Spinner(opts).spin(target);
//fullpage
$('#mypage').fullpage({
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'page11'],
    navigation: true,
    navigationPosition: 'right',
    afterRender: function() {
        console.log("ok")

    },
    afterLoad: function(el, index) {
        //$(".section").eq(index).find('.content').animate('transform', 'scale(1)');
    }
    // 'navigationTooltips': ['使用說明', '數據區域', '選擇模擬器', '練功設置']
});
$(".arrow").bind('click', function(event) {
    $.fn.fullpage.moveSectionDown();
});
//加載...
var f = ["pic/bg.jpg", "pic/bg1.jpg", "pic/bg2.jpg", "pic/bg3.jpg", "pic/bg4.jpg", "pic/tip.png", "pic/1.png", "pic/2.png", "pic/3.png", "pic/4.png", "pic/5.png", "pic/6.png", "pic/7.png", "pic/8.png", "pic/9.png", "pic/10.png"];
$(window).preload({
    imgs: f,
    onComplete: function(at) {
        //console.log(at.percent);
        $(".page-loader").fadeOut(500, function() {
            $(this).remove();
        });
    },
    loadFunction: function(at) {
        $(".page-loader").find("em").html(at.percent + "%");
    },
    timer: true,
    timerSpeed: 10
});
//背景動畫
$('body').mkinfinite({
    maxZoom: 1.4,
    animationTime: 4000,
    imagesRatio: (1920 / 1080),
    isFixedBG: true,
    zoomIn: true,
    imagesList: new Array(
        'pic/bg4.jpg',
        'pic/bg3.jpg',
        'pic/bg2.jpg',
        'pic/bg1.jpg',
        'pic/bg.jpg'
    )
});
//
var $sw = $(window).width();
var $mo = $(".mobmenu");
var $menu = $(".menu");
$(window).resize(function() {
    $sw = $(this).width();
    if (768 <= $sw) {
        $menu.removeAttr('style');
        $mo.removeAttr('style');
    }
});


$mo.bind('click', function(event) {
    event.stopPropagation();
    $menu.css('transform', 'translateX(0%)');
    $(this).hide();
});
$(".closewin").bind('click', function(event) {
    $menu.css('transform', 'translateX(-100%)');
    $mo.show();
});