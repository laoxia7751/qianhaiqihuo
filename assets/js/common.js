/*18-05-28改版 by:lx*/
$(function(){
    //侧栏悬浮
    // $(window).scroll(function(event){
    //     $(window).scrollTop()<200?$(".fixed_aside").fadeOut():$(".fixed_aside").fadeIn()
    // });
	//index_banner
    var swiper = new Swiper('.index_banner .swiper-container', {
        pagination: '.index_banner .swiper-pagination',
        nextButton: '.index_banner .swiper-button-next',
        prevButton: '.index_banner .swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        loop: true,
		autoPlay:4000,
		speed:500
    });

    //index news tab
    $(".tab .head a").mouseover(function(){
        var $t = $(this).index();
        var $link = $(this).attr("href");
        $(this).closest(".tab").find(".head").children("a").removeClass("on");
        $(this).addClass('on');
        $(this).closest(".tab").find(".list_box").children("ul").removeClass("show");
        $(this).closest(".tab").find(".list_box").children("ul").eq($t).addClass("show");
        $(this).closest(".tab").find(".more").children("a").attr("href",$link);
    })

    //index activity tab
    $(".activity_tab .head li").mouseover(function(){
        var $t = $(this).index();
        $(".activity_tab .head li").removeClass("on");
        $(this).addClass('on');
        $(this).closest(".activity_tab").find(".list").children("ul").removeClass("show");
        $(this).closest(".activity_tab").find(".list").children("ul").eq($t).addClass("show");
    })

    //footer friend_link tab
    $(".footer_tab .head li").mouseover(function(){
        var $t = $(this).index();
        $(".footer_tab .head li").removeClass("on");
        $(this).addClass('on');
        $(this).closest(".footer_tab").find(".list").children("ul").removeClass("show");
        $(this).closest(".footer_tab").find(".list").children("ul").eq($t).addClass("show");
    })

    //单选样式调整
    $(".x_radio").click(function(){
        if($(this).is(':checked')){
            $(this).closest(".radio_box").find(".am-radio").removeClass("active");
            $(this).closest(".am-radio").addClass("active")
        }
    })

    //单选样式调整
    $(".x_checkbox").click(function(){
        if($(this).is(':checked')){
            $(this).closest(".am-radio").addClass("active");
        }else{
            $(this).closest(".am-radio").removeClass("active");
        }
    })

    //分支机构风采展示
    var swiper = new Swiper('.show_swiper .swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 15,
        nextButton: '.mien-next',
        prevButton: '.mien-prev',
        loop:true,
        autoplay:3000,
        speed:800
    });
})

//index world time
function getTimeString(date, timezone){
    var tz = date.getTimezoneOffset();
    var dt = new Date();
    dt.setTime(date.getTime() + tz*60000 + timezone*3600000);
    return format(dt.getHours()) + ':' + format(dt.getMinutes()) + ':' + format(dt.getSeconds());
    function format(n) {
        if (n < 10) return '0' + n;
        return ''+n;
    }
}