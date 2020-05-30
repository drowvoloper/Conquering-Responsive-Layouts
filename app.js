const burger = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => nav.classList.toggle("nav--visible"));
