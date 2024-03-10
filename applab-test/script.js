let navbar = document.querySelector(".navbar");
let navlinks = document.querySelectorAll(".navbar .nav-links .links > li");

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
const ctx = document.getElementById("myChart");

const herosection = document.querySelector(".heroSection");
const nav = document.querySelector("header nav");

class App {
  constructor() {
    this.menuOpen();
  }

  menuOpen() {
    menuOpenBtn.onclick = function () {
      navLinks.style.left = "0";
    };
    menuCloseBtn.onclick = function () {
      navLinks.style.left = "-100%";
    };
    navlinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        console.log(
          e.target.parentElement.querySelector("ul").classList.toggle("show1")
        );
      });
    });
  }
}

const app = new App();
