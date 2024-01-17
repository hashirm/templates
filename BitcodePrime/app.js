var owl = $(".owl-carousel");

owl.owlCarousel({
  loop: true,

  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: false,
    },
    600: {
      items: 3,
      nav: false,
      dots: false,
    },

    768: {
      items: 3,
      nav: false,
      loop: true,
    },
    1024: {
      items: 6,
      nav: false,
    },
    1200: {
      items: 8,
      nav: false,
      loop: true,
    },
    1920: {
      items: 8,
      nav: false,
      loop: true,
    },
  },
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});
