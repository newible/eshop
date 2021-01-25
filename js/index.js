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
})
$(".email").click(function () {
    $(".mask").fadeIn();
    $(".popup").slideDown();
})
