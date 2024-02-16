// search-box open close js code
let navbar = document.querySelector(".navbar");
let navlinks = document.querySelectorAll(".navbar .nav-links .links > li");

console.log(navlinks);

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
};

// sidebar submenu open close js code

navlinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // let lists = document.querySelectorAll(
    //   ".navbar .nav-links .links > li > ul.sub-menu"
    // );

    // lists.forEach((li) => {
    //   if (li.classList.contains("show1")) li.classList.remove("show1");
    // });

    console.log(
      e.target.parentElement.querySelector("ul").classList.toggle("show1")
    );

    // e.target.closest("ul").classList.toggle("show1");
  });
});

// let htmlcssArrow = document.querySelector(".htmlcss-arrow");
// htmlcssArrow.onclick = function () {
//   navLinks.classList.toggle("show1");
// };
// let moreArrow = document.querySelector(".more-arrow");
// moreArrow.onclick = function () {
//   navLinks.classList.toggle("show2");
// };
// let jsArrow = document.querySelector(".js-arrow");
// jsArrow.onclick = function () {
//   navLinks.classList.toggle("show3");
// };
