var turnPrice = document.querySelector(".turn-price");
var price = document.querySelector(".catalog-filters-price");
var turnBrand = document.querySelector(".turn-brand");
var brand = document.querySelector(".catalog-filters-brand");
var turnPower = document.querySelector(".turn-power");
var power = document.querySelector(".catalog-filters-power");
var itemBuy = document.querySelectorAll(".item-actions-buy");
var itemBuyClose = document.querySelector(".item-add-close");
var itemAdd = document.querySelector(".item-add");

turnPrice.addEventListener("click", function (event) {
    event.preventDefault();
    price.classList.toggle("turn");
    turnPrice.classList.toggle("expand");
});
turnBrand.addEventListener("click", function (event) {
    event.preventDefault();
    brand.classList.toggle("turn");
    turnBrand.classList.toggle("expand");
});
turnPower.addEventListener("click", function (event) {
    event.preventDefault();
    power.classList.toggle("turn");
    turnPower.classList.toggle("expand");
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