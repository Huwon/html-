$(function(){
    $(".header-wrap").click(function(){
        $(".chat-history").slideToggle(100);
        $(".frm").slideToggle(100);
        $(".chat-msg-counter").toggle(100);
    });

    $(".chat-close").click(function(e){
        alert("라이브채팅창을 닫습니다.")
        $(".live-chat").fadeOut(100);
        // a태그 속성 중 다음 페이지로 이동을 못하게 막는 것
        e.preventDefault();
    });
});