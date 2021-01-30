$(function(){
    if (sessionStorage.getItem("username") == null) {    
        document.querySelector(".user-login").innerHTML = "登录";
    }
    else{
        document.querySelector(".user-login").innerHTML = "欢迎登录~" + sessionStorage.getItem("username");
    }
})
$(".user-login").click(function(){
    window.location.href="http://192.168.43.248/eshop/login.html"
})
$(".head-help").click(function () {
    $(".mask").fadeIn();
    $(".popup").slideDown();
    $(".icon-gb").click(function () {
        $(".mask").fadeOut();
        $(".popup").slideUp();
    })
})
$(".search").click(function () {
    $(".search-mask").fadeIn();
    $(".search-popup").slideDown();

    $(".search-close").click(function () {
        $(".search-mask").fadeOut();
        $(".search-popup").slideUp();
    })

})
$(".chat").click(function () {
    $(".mask").fadeIn();
    $(".popup").slideDown();
    $(".icon-gb").click(function () {
        $(".mask").fadeOut();
        $(".popup").slideUp();
    })
})
$(".phone").click(function () {
    $(".mask").fadeIn();
    $(".popup").slideDown();
    $(".icon-gb").click(function () {
        $(".mask").fadeOut();
        $(".popup").slideUp();
    })
})
$(".email").click(function () {
    $(".mask").fadeIn();
    $(".popup").slideDown();
    $(".icon-gb").click(function () {
        $(".mask").fadeOut();
        $(".popup").slideUp();
    })
})


