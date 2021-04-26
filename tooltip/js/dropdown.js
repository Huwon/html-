$(function(){
    $(".nav>ul>li a:not(:only-child)").click(function(e){
        $(this).siblings(".submenu").toggle();

        //a 태그 속성 초기화
        e.prevaentDefault();

        // $(".submenu").not($(this).siblings()).hide();

        //서브메뉴를 만들 때 부모 요소의 속성을 해제
        e.stopPropagation();
    });

});