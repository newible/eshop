$(".arrow-radio").click(function(){
    
})
$(".pro_quntity_plus").click(function () {
    changN(this, false);
})
$(".pro_quntity_minus").click(function () {
    changN(this, true);
})
// 计算与小计
function prodC() {
    var $tr = $("#shopping").find("tr[id]");
    var summer = 0;
    var integral = 0;
    $tr.each(function(i, dom) {
        var num = $(dom).children(".td_6").find("input").val(); //商品数量
        var price = num * $(dom).children(".td_5").text(); //商品小计
        $(dom).children(".td_7").html(price); //显示商品小计
        summer += price; //总价
        integral += $(dom).children(".td_4").text() * num; //积分ldren(".td_4").text() * num; //积分
    });
    $("#total").text(summer);
    $("#integral").text(integral);
}
// 改变数量
function changN(dom,flag) {
    var $input = $(dom).parent().find("input");
    var value = $input.val();
    if(flag) {
        value++;
    } 
    else {
        value--;
        if(value < 0) {
            value = 0;
            alert("宝贝数量不能为负值")
        }
    }
    $input.val(value);
    prodC();
};