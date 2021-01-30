let http = new XMLHttpRequest()
http.open("get", `http://192.168.43.248:8080/goods-list1`);
http.send()
http.onreadystatechange = function () {
    if (http.readyState === 4) {
        let data = JSON.parse(http.responseText);
        for (let i = 0; i < data.length; i++) {
            let newItem = $(".dress-col1").clone(true);
            newItem.attr("class", "dress-col1-" + i);
            newItem.attr("id", "#dress-col1");
            newItem.css({"display":"block"});
             newItem.appendTo($(".dress-row"));
            $(".dress-col-img img").eq(i).attr("src",data[i].goodimg);
            $(".dress-text .goodsname").eq(i).html(data[i].goodname); 
            $(".dress-text .price").eq(i).html(data[i].goodprice+".00");
        }

    }
}
