







    
    const mobileslideicon = document.querySelector(".menuContent .menuIcon");
    const subscribe = $(".menuContent .subscribe");
    const enterEmail = $(".menuContent .EnterEmail");
    console.log(subscribe);
    const mobileSlide = document.querySelector(".mobileSlide");
    const mobileSlidecross = document.querySelector(".mobileSlide .fa-xmark");
    const flexItem002 = document.querySelector(".section-01-flex .flexitem-02 img");
    const moneyScoopSection = $(".section-03");
    let gameSection = $(".morningbrewbody");

    console.log(moneyScoopSection)

    console.log(flexItem002)

    subscribe.click(() => {


      subscribe.css("display","none");
      enterEmail.addClass("d-flex");



    })
   

//     for (const button of logos) {
//     button.addEventListener('click', function(event) {
//         //var text = $(event.target).text();

//         var target = event.target,
//         text = target.textContent;
//         console.log(text)
//     })
//     }
//     // logos.forEach(e => e.click())

//     // // logos.onclick((e) => {each(function(e){

//     // //     console.log(e.target.value)


//     // // })

//     // // })
//     // $('.subMenu ul .logo').on("click", function() {
//     // console.log($(this).text())

//     // })

//     const moneyScoop = $(".subMenu ul .moneyScoop")
//     const game = $(".subMenu ul .game")
//     const morningBreww = $(".subMenu ul .morningBrew")
//     const sidekick = $(".subMenu ul .sidekick")
//     const sect01bg = $(".section-01-flex .flexitem-01")

// const logo = document.querySelector(".nav .menuContent .logo a img")

// console.log(game);

// const moneyScoopp = "./assets/moneyScoop.webp"
// const morningBrew = "./assets/logo.webp"
// const sidekickk = "./assets/sidekick.webp"

// function setCookie(c_name, value, exdays) {
//     var exdate = new Date();
//     exdate.setDate(exdate.getDate() + exdays);
//     var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
//     document.cookie = c_name + "=" + c_value;
// }

// function getCookie(c_name) {
//     var i, x, y, ARRcookies = document.cookie.split(";");
//     for (i = 0; i < ARRcookies.length; i++) {
//         x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
//         y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
//         x = x.replace(/^\s+|\s+$/g, "");
//         if (x == c_name) {
//             return unescape(y);
//         }
//     }
// }

// setCookie("moneyscoop", moneyScoopp, 1 );
// setCookie("morningBrew", morningBrew, 1 );
// setCookie("sidekick", sidekickk, 1);


// (function thename(){
//     let moneyScoope = getCookie("moneyscoop")
//     let morningBrew = getCookie("morningBrew")

//     let sites = [morningBrew, moneyScoope]

//     if(logo.getAttribute("src") == moneyScoope){

//         logo.setAttribute("src", moneyScoope)
//         sect01bg.css("backgroundColor", "red");
//     }

// }()); 

// (function morning(){
//     let moneyScoope = getCookie("moneyscoop")
//     let morningBrew = getCookie("morningBrew")

//     let sites = [morningBrew,  moneyScoope]

//     if(morningBrew){

//     logo.setAttribute("src", morningBrew)
//     sect01bg.css("backgroundColor", "rgb(28, 127, 242)");
    
//     }

//     }()); 


  
//     moneyScoop.click(function(e){
      
//     e.preventDefault();
        
//     let moneyScoope = getCookie("moneyscoop")
    
//     if(moneyScoope){
        
//         logo.setAttribute("src", moneyScoope)
//         sect01bg.css("backgroundColor", "#10157D");
//         flexItem002.setAttribute("src", "./assets/moneyscoopImage01.webp")
     
//         moneyScoopSection.load("./component/moneyScoopSection.html .section-03")
        

//     }



//     morningBreww.click(function(e){

        
//         logo.setAttribute("src", "./assets/logo.webp")
//         sect01bg.css("backgroundColor", "rgb(28, 127, 242)");
//         flexItem002.setAttribute("src", "./assets/newpaper.webp")
//         moneyScoopSection.load("index.html .section-03")


//     })

   
    

// })







mobileslideicon.addEventListener('click', () => {
    
    mobileSlide.style.display = "block";

    mobileSlidecross.addEventListener('click', () =>{

        mobileSlide.style.display = "none";

    })

})





    


