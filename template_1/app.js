function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  window.onscroll = function() {mymenu()};

  // Get the header
  var header = document.getElementById("myTopnav");
  
  // Get the offset position of the navbar
  var sticky = header.offsetTop;
  
  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function mymenu() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
/*
Author : Mohd Shibli
Year : 2017
*/
$('.owl-carousel-two').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay:true,
  autoplayTimeout:2000,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})
$('.owl-carousel-three').owlCarousel({
  loop:true,
  margin:10,
  autoplay:true,
  nav:false,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
        items:2
      },

    768:{
      items:2
    },

      1000:{
        items:3
    },
    1200:{
      items:3
    }
  }
})

$('.owl-carousel-four').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay:true,
  dots:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:2
      },
      1200:{
        items:4
      }
  }
})
