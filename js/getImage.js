"use strict";

window.displayImage = function (imageData) {
    var image = document.createElement("IMG");
    image.setAttribute("src", imageData.message);
    image.setAttribute("alt", "random dog image");
    document.body.appendChild(image);
};

window.onload = function () {
    fetch("https://dog.ceo/api/breeds/image/random").then(function (res) {
        return res.json().then(function (res) {
            displayImage(res);
        }).catch(function (err) {
            console.log(err);
        });
    });
};