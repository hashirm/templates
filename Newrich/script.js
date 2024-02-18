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

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: ["# of Votes"],
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
        barThickness: 115,
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
      labels: {
        render: "label",
        fontColor: "#000",
        fontSize: 16,
        fontWeight: "bold",
        fontFamily: "'Poppins', sans-serif",
        position: "top",
      },
    },
    scales: {
      y: {
        ticks: {
          suggestedMin: 10,
          callback: function (value, index, values) {
            return "$" + value * 100; // Add a dollar sign before the value
          },
        },
      },
    },
  },
});

const canvas = document.querySelector("canvas");
console.log(canvas);
