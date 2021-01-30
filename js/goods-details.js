let id = window.location.search.split("&")[0].split("=")[1];
let http = new XMLHttpRequest()
http.open("get", `http://192.168.43.248:8080/goods-details?id=${id}`);
http.send()
http.onreadystatechange = function () {
    if (http.readyState === 4) {
        // console.log(http.responseText)
        let data = JSON.parse(http.responseText)[0];
        console.log(data)
        $(".img1").attr("src",data.img1); 
        $(".img2").attr("src",data.img2);
        $(".img3").attr("src",data.img3);
        $(".img4").attr("src",data.img4);
        $(".img5").attr("src",data.img5);
        $(".img6").attr("src",data.img6);
        $(".detail-list h4") .html(data.goodsname);
        $(".detail-list-Price h1").html("￥"+data.goodsprice);
        $(".c-material").html(data.material);
        $(".size-defaultXS").html(data.size1+"<br>");
        $(".size-defaultS").html(data.size2+"<br>");
        $(".size-defaultM").html(data.size3+"<br>");
        $(".size-defaultL").html(data.size4+"<br>");      
    }
}
$("")