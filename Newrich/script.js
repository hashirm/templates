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
  });
});

const ctx = document.getElementById("myChart");

console.log(ctx);

const mychart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "vote",
        data: [2.5, 3.5, 5.5, 4.5, 5, 7.5],
        backgroundColor: [
          "rgba(255, 84, 62, 0.2)",
          "rgba(30, 153, 204, 0.2)",
          "rgba(46,198,163,0.2)",
          "rgba(107, 3, 137, 0.2)",
          "rgba(255, 222, 85, 0.2)",
          "rgba(110, 111, 128, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        barThickness: 105,
        borderColor: [
          "rgb(255, 84, 62)",
          "rgb(30, 153, 204)",
          "rgb(46,198,163)",
          "rgb(107, 3, 137)",
          "rgb(255, 222, 85)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      datalabels: {
        formatter: function (value, context) {
          return null; // return null to hide the labels
        },
      },
    },
    scales: {
      y: {
        ticks: {
          font: {
            size: 20,
            family: "Poppins",
          },

          suggestedMin: 10,
          callback: function (value, index, values) {
            return "$" + value * 100; // Add a dollar sign before the value
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 20,
            family: "Poppins",
          },
        },
      },
    },
  },
});

const canvas = document.querySelector("canvas");

if (window.innerWidth <= 1100) {
  mychart.data.datasets.forEach((ele) => (ele.barThickness = 65));
  mychart.options.scales.y.ticks.font.size = 16;
  mychart.options.scales.x.ticks.font.size = 16;
  mychart.update();
}
if (window.innerWidth <= 600) {
  mychart.data.datasets.forEach((ele) => (ele.barThickness = 40));
  mychart.options.scales.y.ticks.font.size = 14;
  mychart.options.scales.x.ticks.font.size = 14;
  canvas.style.height = "481px !important";
  mychart.update();
}

mychart.data.datasets.forEach((ele) => console.log(ele.label));

/**
 * Animation on scroll
 */
window.addEventListener("load", () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
});

const herosection = document.querySelector(".heroSection");
const nav = document.querySelector("header nav");

console.log(herosection);

const stickyNav = (entries) => {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add("stickyNav");
  else nav.classList.remove("stickyNav");
};

const observer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.1,
});

observer.observe(herosection);
