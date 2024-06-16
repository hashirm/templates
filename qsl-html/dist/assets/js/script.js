// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}

// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow-one");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let htmlcssArrowtwo = document.querySelector(".htmlcss-arrow-two");
htmlcssArrowtwo.onclick = function() {
 navLinks.classList.toggle("showTwo");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}
let jsArrowTwo = document.querySelector(".js-arrow-two");
jsArrowTwo.onclick = function() {
 navLinks.classList.toggle("show4");
}

$(document).ready(function(){
 
    $('.owl-carousel.owl-carousel-01').owlCarousel({
        dots:true,
        nav:false,
        loop:true,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $('.owl-carousel.owl-carousel-02').owlCarousel({
        dots:true,
        nav:false,
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:2
            },
            480:{
                items:2
            },
            600:{
                items:2.5
            },
            900:{
                items:3.5
            },
            1150:{
                items:4.5
            },
            1366:{
                items:5.5
            },
            1800:{
                items:6.5
            }
        }
    })

    



  });