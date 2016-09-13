var writeUsShow = document.querySelector(".contacts > a.section-btn");
var writeUs = document.querySelector(".write-us");
var writeUsHide = document.querySelector(".write-us-buttons > a");
var itemBuy = document.querySelectorAll(".item-actions-buy");
var itemBuyClose = document.querySelector(".item-add-close");
var itemAdd = document.querySelector(".item-add");

writeUsShow.addEventListener("click", function (event) {
    event.preventDefault();
    writeUs.classList.add("show");
});
writeUsHide.addEventListener("click", function (event) {
    event.preventDefault();
    writeUs.classList.remove("show");
});
window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27 && writeUs.classList.contains("show")) {
        writeUs.classList.remove("show");
    }
});
for (var i = 0; i < itemBuy.length; i++) {
    itemBuy[i].addEventListener("click", function (event) {
        event.preventDefault();
        itemAdd.classList.add("show");
    });
}
itemBuyClose.addEventListener("click", function (event) {
    event.preventDefault();
    itemAdd.classList.remove("show");
});
window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27 && itemAdd.classList.contains("show")) {
        itemAdd.classList.remove("show");
    }
});


var prevEvent = function () {
    var c = document.querySelector(".center-slide");
    var r = document.querySelector(".right-slide");
    var l = document.querySelector(".left-slide");

    c.className = "feature-slide right-slide cr";

    if (r) {
        r.className = "feature-slide center-slide lc";
    } else if (l) {
        l.className = "feature-slide center-slide lc";
    }

    var b1 = document.querySelector(".slider-controls > .slider-btn-active");
    var b2 = document.querySelector(".slider-controls > span:not(.slider-btn-active)");

    b1.className = "";
    b2.className = "slider-btn-active";
};

var nextEvent = function () {
    var c = document.querySelector(".center-slide");
    var r = document.querySelector(".right-slide");
    var l = document.querySelector(".left-slide");

    c.className = "feature-slide left-slide cl";

    if (r) {
        r.className = "feature-slide center-slide rc";
    } else if (l) {
        l.className = "feature-slide center-slide rc";
    }

    var b1 = document.querySelector(".slider-controls > .slider-btn-active");
    var b2 = document.querySelector(".slider-controls > span:not(.slider-btn-active)");

    b1.className = "";
    b2.className = "slider-btn-active";
};
document.querySelector(".next").addEventListener("click", nextEvent);
document.querySelector(".prev").addEventListener("click", prevEvent);

document.querySelector(".slider-controls > span:first-child").addEventListener("click", function () {
    if (this.className != "slider-btn-active") {
        prevEvent();
    }

});
document.querySelector(".slider-controls > span:last-child").addEventListener("click", function () {
    if (this.className != "slider-btn-active") {
        nextEvent();
    }
});