function loadGrade(){
    $.ajax({
        url : "${pageContext.request.contextPath}/getgradeList",
        type : "post",
        data : "",
        contentType : 'application/x-www-urlencoded; charset=utf-8', //수신방식
        dataType : "json" , //수신 데이터타입
        success : function(resData){
            $.each(resData, function(key, value) {
            	$("#grade").append("<option>"+value.grade_name+"</option>");
            });
        },
        error : function(){
            alert("시스템 에러");
        }
    
    });
}


