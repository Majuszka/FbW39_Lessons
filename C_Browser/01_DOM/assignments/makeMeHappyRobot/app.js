console.log("Hallo!");

let eye1 = document.getElementsByClassName('.eye1');
let eye2 = document.getElementsByClassName('.eye2');


let smile = document.getElementsById("smile");
smile.addEventListener("click", function () {
    smile.style.backgroundColor = "red";
});

/* smile.addEventListener('click', function () {    
    smile.style["padding-top"] = "10px";
}); */

let head = document.querySelector('.head');

head.addEventListener('click', function () {
    head.style.backgroundColor = 'red';
});

let txt = document.getElementsByTagName(h1);

let arm1 = document.getElementsByClassName('.arm1');
let arm2 = document.getElementsByClassName('.arm2');
let hand1 = document.getElementsByClassName('.hand1');
let hand2 = document.getElementsByClassName('.hand2');

let belly = document.getElementsById('belly');

let leg1 = document.getElementsByClassName('.leg1');
let leg11 = document.getElementsByClassName('.leg11');
let leg111 = document.getElementsByClassName('.leg111');
let leg2 = document.getElementsByClassName('.leg2');
let leg22 = document.getElementsByClassName('.leg22');
let leg222 = document.getElementsByClassName('.leg222');