// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", () => {
  navbar.classList.toggle("showInput");
  if (navbar.classList.contains("showInput")) {
    searchBox.classList.replace("bx-search", "bx-x");
  } else {
    searchBox.classList.replace("bx-x", "bx-search");
  }
});

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
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function () {
  navLinks.classList.toggle("show1");
};
// let moreArrow = document.querySelector(".more-arrow");
// moreArrow.onclick = function () {
//   navLinks.classList.toggle("show2");
// };
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function () {
  navLinks.classList.toggle("show3");
};

$(document).ready(function () {
  //   function Ymove() {
  //     $("header .scrollAnimation .dash").css("transform", "translateY(40px)");
  //     clearInterval();
  //   }
  //   setInterval(Ymove, 500);

  $(".section-02 .owl-carousel").owlCarousel({
    items: 3,
    loop: true,
    center: true,
    nav: true,
    lazyload: true,
    navText: ["<img src='./img/previous.png'/>", "<img src='./img/next.png'/>"],
    responsive: {
      0: {
        items: 1, // Number of items to display at 0px and up (e.g., mobile)
      },
      768: {
        items: 2, // Number of items to display at 768px and up (e.g., tablet)
      },
      1200: {
        items: 3, // Number of items to display at 1200px and up (e.g., desktop)
      },
    },
  });
  $(".section-05 .owl-carousel").owlCarousel({
    items: 3,
    nav: true,
    navText: [
      "<img src='./img/navArrow.png'/>",
      "<img src='./img/navArrow-next.png'/>",
    ],
    responsive: {
      0: {
        items: 1, // Number of items to display at 0px and up (e.g., mobile)
      },
      768: {
        items: 2, // Number of items to display at 768px and up (e.g., tablet)
      },
      1200: {
        items: 3, // Number of items to display at 1200px and up (e.g., desktop)
      },
    },
  });
});
