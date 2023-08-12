function toggleMenu() {
    var menuBtn = document.querySelector(".menu-btn");
    var menu = document.getElementById("menu");
    var first = document.querySelector(".first");
    var header =document.querySelector("header")
    menu.classList.toggle("active");
    header.classList.toggle("active");
    first.classList.toggle("active");
}