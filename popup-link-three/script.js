

  $(".dropdown-menu a").click(function () {
    $(this)
      .parents(".dropdown")
      .find(".btn")
      .html($(this).html() + ' <span class="caret"></span>');
    $(this).parents(".dropdown").find(".btn").val($(this).data("value"));
  });

  $(document).ready(function () {
    $("#myInput").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#myTable a").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  });
  $(document).ready(function () {
    $("#myInput-leverage").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#myTable-leverage a").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });

    $(".currencies-dropdown.currency button").click((event) => {
        
        event.preventDefault();
        event.stopPropagation();
        
        if($(".currencies-dropdown.currency .dropdown-menu").find(".show")){
            //$(".currencies-dropdown.currency").prev().text("Please Select").css("font-size","10px");
        }
        if($(".currencies-dropdown.leverage .dropdown-menu").find(".show")){
          $(".currencies-dropdown.leverage .dropdown-menu").removeClass("show");
          $(".currencies-dropdown.leverage").prev().text("Account Leverage").css("font-size","15px");
        }
        if($(".currencies-dropdown.deposit .dropdown-menu").find(".show")){
          $(".currencies-dropdown.deposit .dropdown-menu").removeClass("show");
          $(".currencies-dropdown.deposit").prev().text("Deposit").css("font-size","15px");

        }

    });

  $(".currencies-dropdown.leverage button").click((event) => {
        
    event.preventDefault();
    event.stopPropagation();
    
    if($(".currencies-dropdown.leverage .dropdown-menu").find(".show")){
        
        $(".currencies-dropdown.leverage").prev().text("Please Select").css("font-size","10px");
    }
    if($(".currencies-dropdown.deposit .dropdown-menu").find(".show")){
        
      $(".currencies-dropdown.deposit .dropdown-menu").removeClass("show");
      $(".currencies-dropdown.deposit").prev().text("Deposit").css("font-size","15px");
    }
    if($(".currencies-dropdown.currency .dropdown-menu").find(".show")){
        
      $(".currencies-dropdown.currency .dropdown-menu").removeClass("show");
      $(".currencies-dropdown.currency").prev().text("Account Currency").css("font-size","15px");
    }

  });
  $(".currencies-dropdown.deposit button").click((event) => {
        
    event.preventDefault();
    event.stopPropagation();
    
    if($(".currencies-dropdown.deposit .dropdown-menu").find(".show")){
        
        $(".currencies-dropdown.deposit").prev().text("Please Select").css("font-size","10px");
  
    }

    if($(".currencies-dropdown.currency .dropdown-menu").find(".show")){
        
        $(".currencies-dropdown.currency .dropdown-menu").removeClass("show");
        $(".currencies-dropdown.currency").prev().text("Account Currency").css("font-size","15px");
        
    }
    if($(".currencies-dropdown.leverage .dropdown-menu").find(".show")){
        
        $(".currencies-dropdown.leverage .dropdown-menu").removeClass("show");
        $(".currencies-dropdown.leverage").prev().text("Account Leverage").css("font-size","15px");
    }


  });
$("body").click(() => {

    if($(".currencies-dropdown.leverage .dropdown-menu").find(".show")){
        $(".currencies-dropdown.leverage").prev().text("Account Leverage").css("font-size","15px");
    }
    if($(".currencies-dropdown.currency .dropdown-menu").find(".show")){
            
      $(".currencies-dropdown.currency").prev().text("Account Currency").css("font-size","15px");
    }
    if($(".currencies-dropdown.deposit .dropdown-menu").find(".show")){
            
      $(".currencies-dropdown.deposit").prev().text("Deposit").css("font-size","15px");
    }

})


    // if($(window).width() <= 600){

    //     $(".currencies-dropdown.currency button").click((event) => {
        
            
    //         event.stopPropagation();
    //        if($(".currencies-dropdown.leverage .dropdown-menu").hasClass(".show")){
    //         $(".currencies-dropdown.leverage .dropdown-menu").remove(".show");
    //        }
                
            
    //     });
    //     $(".currencies-dropdown.leverage button").click((event) => {
        
    //         event.stopPropagation();
    //         if($(".currencies-dropdown.currency .dropdown-menu").hasClass("show")){
    //          $(".currencies-dropdown.currency .dropdown-menu").remove(".show");
    //         }
                 
             
    //      });
    // }
        
    // });
  
    

    $('input[type="checkbox"]').on('change', function() {
      $('input[type="checkbox"]').not(this).prop('checked', false);
    });


    
    $('input[type="checkbox"]').on('change', function() {
      $('input[type="checkbox"]').not(this).prop('checked', false);
    });

    $(".currencies-dropdown .coin-individual input").click(()=>
    {     

      setTimeout(()=>{

        $(".currencies-dropdown .dropdown-menu").removeClass("show");

      }, 300)



    })




  });