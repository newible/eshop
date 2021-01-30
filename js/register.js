$(".register").click(function(){
    let http = new XMLHttpRequest()
    http.open("get",`http://192.168.43.248:8080/register?username=${$("#username").val()}&password=${$("#password").val()}`)
    http.send()
    http.onreadystatechange = function(){
        if(http.readyState === 4){
            if(http.responseText === "success"){
                alert("注册新用户成功，点击去登录");
                location.href = "http://192.168.43.248/eshop/login.html";
            }
            else{
                alert("注册失败")
            }
        }
    }
})