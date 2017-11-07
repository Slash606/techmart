/*var nimPrice = document.getElementById("minPrice");

minPrice.onfocus = function () {
    if (minPrice.value == "0") {
        minPrice.value = "";
    }
};

minPrice.onblur = function () {
    if (minPrice.value == "") {
        minPrice.value = "0";
    }
};

var maxPrice = document.getElementById("maxPrice");

maxPrice.onfocus = function () {
    if (maxPrice.value == "30000") {
        maxPrice.value = "";
    }
};

maxPrice.onblur = function () {
    if (maxPrice.value == "") {
        maxPrice.value = "30000";
    }
};*/

var sliderImage = document.getElementById("sliderImage");
var imageArray = ["img/slider1.jpg" , "img/slider2.jpg" , "img/slider3.jpg" , "img/slider4.jpg"];
var imageIndex = 0;

function slider() {
    sliderImage.setAttribute("src" , imageArray[imageIndex]);
    imageIndex ++;
    if (imageIndex >= imageArray.length) {
        imageIndex = 0;
    }
}

var intervalHandle = setInterval(slider , 3000);

sliderImage.onclick = function () {
    clearInterval(intervalHandle);
};
