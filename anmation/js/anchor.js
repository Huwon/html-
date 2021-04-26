$(function(){
    // ^ :시작값
    $("a[href^='#']").click(function(e){
        // this는 현재 누르려는 그것-이름이 똑같을 때 씀, attr은 href값을 가져오기
        var id = $(this).attr("href");
        var target =  $(id).offset().top;
        // html, body, document는 화면
        $("html, body").animate({
            scrollTop: target
        }, 200);
        // a속성 쓸때만 
        e.preventDefault();
    });
});

$(function(){
    // 화면전환-window
    $(window).scroll(function(){
       if( $(this).scrollTop() > 700){
       $(".up").fadeIn(500);
       }else{
        $(".up").fadeOut(500);
       }
    });
});

$(function(){
    $(".up").click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 200);
    });
});