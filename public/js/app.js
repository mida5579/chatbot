const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const nextBtnSecond = document.querySelector(".secondNext");
const nextBtnThi = document.querySelector(".thirdNext");
const nextBtnFour = document.querySelector(".fourNext");
const prevBtnSec = document.querySelector(".prev-1");
const prevBtnThi = document.querySelector(".prev-2");
const prevBtnFour = document.querySelector(".prev-3");

let max = 5;
let current =1;

nextBtnFirst.addEventListener("click", function(){
    slidePage.style.marginLeft ="-25%";
    current += 1;
});

nextBtnSecond.addEventListener("click", function () {
    slidePage.style.marginLeft = "-50%";
    current += 1;
});

nextBtnThi.addEventListener("click", function () {
    slidePage.style.marginLeft = "-75%";
    current += 1;
});

nextBtnFour.addEventListener("click", function () {
    slidePage.style.marginLeft = "-100%";
    current += 1;
});


prevBtnSec .addEventListener("click", function(){
    slidePage.style.marginLeft = "0%";
    current -= 1;
});

prevBtnThi.addEventListener("click", function () {
    slidePage.style.marginLeft = "-25%";
    current -= 1;
});

prevBtnFour.addEventListener("click", function () {
    slidePage.style.marginLeft = "-50%";
    current -= 1;
});
