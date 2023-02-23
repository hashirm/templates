
const menuIcon = $("nav .social-links .menu-icon");
const mobileMenuBg = $(".mobile-menu-bg");

menuIcon.on("click", function(){
   
        if(mobileMenuBg.css("height") == "0px"){
            mobileMenuBg.css({height:"350px", transition:"all 500ms ease-in-out"})
            console.log("true");
        }
        else if(mobileMenuBg.css("height") == "350px"){
            mobileMenuBg.css({height:"0px", transition:"all 500ms ease-in-out"})
        }

    });

$(".body").on('click', function(e){

    console.log($(".mobile-menu-bg"));
    const menuItems = $(".mobile-menu-bg");
    if(mobileMenuBg.css("height") == "350px"){

        mobileMenuBg.css({transition:"all 500ms ease", height:"0px"})

    }
    

}); 