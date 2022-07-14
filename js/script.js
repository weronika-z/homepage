console.log("Hello world!");

let button = document.querySelector(".js-changeBackgroundButton");
let body = document.querySelector(".body");
let nextColorName = document.querySelector(".js-nextColorName");

button.addEventListener("click", () => {
    body.classList.toggle("body--darkGreen");

    nextColorName.innerText = body.classList.contains("body--darkGreen") ? "jasny" : "ciemny";
});