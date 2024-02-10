const menuIcon = $("nav .social-links .menu-icon");
const mobileMenuBg = $(".mobile-menu-bg");
const searchDiv = $(".search-textbox");
const searchTextbox = $(".search-textbox");
const searchicon = $("nav .fa-magnifying-glass");

menuIcon.on("click", function () {
  if (mobileMenuBg.css("height") == "0px") {
    mobileMenuBg.css({ height: "350px", transition: "all 500ms ease-in-out" });
    console.log("true");
  } else if (mobileMenuBg.css("height") == "350px") {
    mobileMenuBg.css({ height: "0px", transition: "all 500ms ease-in-out" });
  }
});

$("nav .mobile-menu-bg .mobile-menu-listItem-ms").on("click", function () {
  if (
    $(".mobile-menu-bg .mobile-menu-listItem-ms .mobile-submenu").css(
      "height"
    ) == "0px"
  ) {
    $(".mobile-menu-bg .mobile-menu-listItem-ms .mobile-submenu").css({
      height: "100px",
      transition: "all 500ms ease-in-out",
    });
    console.log("true");
  } else if (
    $(".mobile-menu-bg .mobile-menu-listItem-ms .mobile-submenu").css(
      "height"
    ) == "100px"
  ) {
    $(".mobile-menu-bg .mobile-menu-listItem-ms .mobile-submenu").css({
      height: "0px",
      transition: "all 500ms ease-in-out",
    });
  }
});

$("nav .mobile-menu-bg .mobile-menu-listItem-kexino").on("click", function () {
  if (
    $(".mobile-menu-bg .mobile-menu-listItem-kexino .mobile-submenu").css(
      "height"
    ) == "0px"
  ) {
    $(".mobile-menu-bg .mobile-menu-listItem-kexino .mobile-submenu").css({
      height: "100px",
      transition: "all 500ms ease-in-out",
    });
    console.log("true");
  } else if (
    $(".mobile-menu-bg .mobile-menu-listItem-kexino .mobile-submenu").css(
      "height"
    ) == "100px"
  ) {
    $(".mobile-menu-bg .mobile-menu-listItem-kexino .mobile-submenu").css({
      height: "0px",
      transition: "all 500ms ease-in-out",
    });
  }
});

$(".body").on("click", function (e) {
  console.log($(".mobile-menu-bg"));
  const menuItems = $(".mobile-menu-bg");
  if (mobileMenuBg.css("height") == "350px") {
    mobileMenuBg.css({ transition: "all 500ms ease", height: "0px" });
  }
});

$(".section-03 .video-div .trigger_popup_fricc").click(function () {
  $(".hover_bkgr_fricc").show();
});
$(".hover_bkgr_fricc").click(function () {
  $(".hover_bkgr_fricc").hide();
});
$(".popupCloseButton").click(function () {
  $(".hover_bkgr_fricc").hide();
});

searchTextbox.click(function (e) {
  console.log(e.target.classList);

  if (e.target.classList.contains("form-control")) {
    console.log(e.target);
  } else {
    $(".search-textbox").css("display", "none");
  }
});
searchicon.click(function () {
  $(".search-textbox").css("display", "flex");
  $(".search-textbox input").focus();
});

$(".marketing-service-section-03 .row i").hover(
  function () {
    $(this).removeClass("fa-regular");
    $(this).addClass("fa-solid");
  },
  function () {
    $(this).removeClass("fa-solid");
    $(this).addClass("fa-regular");
  }
);

const sectionOne = document.querySelector(".section-01");
console.log(sectionOne);

const stickyNav = (entries, observer) => {
  console.log(entries);
  //   entries.foreach((entry) => {
  //     console.log(entry);
  //   });
};

const objectSticky = {
  root: null,
  threshold: 0.1,
};

const observer = new IntersectionObserver(stickyNav, objectSticky);
observer.observe(sectionOne);
