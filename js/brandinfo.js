let http = new XMLHttpRequest()
http.open("get", `http://192.168.43.248:8080/brandinfo`);
http.send()
http.onreadystatechange = function () {
    if (http.readyState === 4) {
        let data = JSON.parse(http.responseText);
        for(let i =0;i  < data.length;i++){
            $(".main img").eq(i).attr("src",data[i].introuduce); 
        }      
    }
}
