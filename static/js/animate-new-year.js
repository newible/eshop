"use strict";

(function () {
    var random = function random(min, max) {
        return Math.floor(Math.random() * (max + 1 - min)) + min;
    };

    var imgsData = [{
        url: 'https://img.alicdn.com/imgextra/i3/2104668892/O1CN015GJLbN2FYaOZBLtPv_!!2104668892.png',
        width: 212,
        height: 225
    }, {
        url: 'https://img.alicdn.com/imgextra/i3/2104668892/O1CN01xo4ucw2FYaOXI2YHQ_!!2104668892.png',
        width: 293,
        height: 235
    }, {
        url: 'https://img.alicdn.com/imgextra/i4/2104668892/O1CN01u3qvFM2FYaOYhai7i_!!2104668892.png',
        width: 267,
        height: 309
    }, {
        url: 'https://img.alicdn.com/imgextra/i4/2104668892/O1CN019phMvB2FYaOXI3l5U_!!2104668892.png',
        width: 262,
        height: 237
    }];
    var mask = document.querySelector('.ur191219 .mask');
    setInterval(function () {
        main();
    }, 300);

    var main = function main() {
        var elScale = random(5, 10) / 10; //缩放元素的概率

        var item = random(0, 3); //选择元素的概率

        var elWidth = imgsData[item].width / 556 * 100;
        var left = random(0, 100 - elWidth); //元素位置概率

        var speed = (random(0, 1) ? 1.5 : 3) / (window.innerWidth / 1920); //下降速度概率

        var El = new Image();
        El.src = imgsData[item].url;
        El.style.cssText = "transform:scale(".concat(elScale, ");-webkit-transform:scale(")
            .concat(elScale, ");-moz-transform:scale(").concat(elScale, ");-o-transform:scale(")
            .concat(elScale, ");-ms-transform:scale(").concat(elScale, ");position: absolute;left: ")
            .concat(left, "%;top: -50%;width: ").concat(elWidth, "%;transition:linear ")
            .concat(speed, "s;-moz-transition:linear ").concat(speed, "s; -webkit-transition:linear ")
            .concat(speed, "s; -o-transition:linear ").concat(speed, "s;-ms-transition:linear ")
            .concat(speed, "s;margin-top: 0;");
        mask.appendChild(El);
        setTimeout(function () {
            return El.style.marginTop = '2000px';
        }, 100);
        setTimeout(function () {
            return mask.removeChild(El);
        }, 3000);
    };
})();
""