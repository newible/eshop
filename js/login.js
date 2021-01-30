$("#login").click(function(){
    let http = new XMLHttpRequest()
    http.open("get",`http://192.168.43.248:8080/login?username=${$("#username").val()}&password=${$("#password").val()}`);
    // console.log($("#username").val())
    http.send()
    http.onreadystatechange = function(){
        if(http.readyState === 4){
            if(http.responseText === "success"){
                sessionStorage.setItem("username",$('#username').val())
                alert("登录成功");
                location.href = "http://192.168.43.248/eshop/index.html";
            }
            else{
                alert("用户名或密码错误")
            }
        }
    }
})

