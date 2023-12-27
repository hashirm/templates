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

  $('.currencies-dropdown input[type="checkbox"]').on("change", function () {
    $('.currencies-dropdown input[type="checkbox"]').not(this).prop("checked", false);
  });

  $(".currencies-dropdown .coin-individual input").click(() => {
    setTimeout(() => {
      $(".currencies-dropdown .dropdown-menu").removeClass("show");
    }, 300);
  });

  //   let a = false;

  // if(a == false){
  //     $(".submit-button-wrapper .need-to-unwrap").click((event)=>{
  //       event.preventDefault();
  //       event.stopPropagation()
  //       console.log("unwrapper button clicked")
  //       $(".popup-steps .step-1").css("background-color", "#178BFB");
  //       $(".submit-button-wrapper .need-to-unwrap .continueButton").unwrap();
  //       a = true;

  //   })

  // }


  
          $(".append-questionnairs .continueButton").click(()=>{
            $(".popup-steps .step-1").css("background-color", "#178BFB");
             if($(window).width() < 767){
  
                  $(".popup-steps .popup-step.step-1 .step-num-two").css("display","flex");
                  $(".popup-steps .popup-step.step-1 .step-num-three").css("display","flex");
  
                }
            $(".append-questionnairs .continueButton").click(()=>{
              $(".append-questionnairs").removeClass("popupActive");
              $(".append-questionnairs").addClass("popupInactive");

              $(".details").removeClass("popupActive");
              $(".details").addClass("popupInactive");
              $(".popup-form-title").removeClass("popupInactive");
              $(".second-step").removeClass("popupInactive");
              $(".popup-form-title").addClass("popupActive");
              $(".second-step").addClass("popupActive");
              $(".popup-steps .step-1").css("background-color", "#178BFB");
              $(".popup-steps .step-2 ").css("background-color", "#178BFB");
              $(".submit-button-wrapper > div").removeClass("popupInvisible");
              $(".submit-button-wrapper > div").addClass("popupVisible");


              $(".modal-body .popup-steps .popup-step .step-num-one").text(" ");
              $(".modal-body .popup-steps .popup-step .step-num-one").html("<img src='./check-blue.png' /> ");
              $(".modal-body .popup-steps .popup-step .step-num-one").css("border-color", "#178BFB");

              $(".modal-body .title-subtitle-steps .activateyouraccount").hide();

              if($(window).width() < 767){

                $(".step-names-div .step-one-name").hide();
                $(".step-names-div .step-two-name").show();
                $(".popup-steps .step-1").css("justify-content", "start");
                $(".popup-steps .step-1 .step-num-two").css({right:'0px',left:'0px', margin:'auto'})

                $(".modal-body .dots .dot-1").removeClass("active");
                $(".modal-body .dots .dot-2").addClass("active");

              }
    
            })

          });
          $(".second-step .continueButton").click(()=>{
                            $(".popup-form-titleFinish").removeClass("popupInactive");
                            $(".popup-form-titleFinish").addClass("popupActive");
                            // $(".append-questionnairs").addClass("popupInactive");
                            $(".second-step").removeClass("popupActive");
                            $(".second-step").addClass("popupInactive");
                        
                          
                          // $(".details").addClass("popupInactive");
                          
                          $(".popup-form-title").removeClass("popupActive");
                          $(".popup-form-title").addClass("popupInactive");
                          
  
                          $(".popup-steps .step-1").css("background-color", "#178BFB");
                          $(".popup-steps .step-3").css("background-color", "#178BFB");
                          $(".submit-button-wrapper > div").removeClass("popupInvisible");
                          $(".submit-button-wrapper > div").addClass("popupVisible");
  
                        
                            $(".modal-body .popup-steps .popup-step .step-num-two").text(" ");
                            $(".modal-body .popup-steps .popup-step .step-num-two").html("<img src='./check-blue.png' /> ");
                            $(".modal-body .popup-steps .popup-step .step-num-two").css("border-color", "#178BFB");
  
                            if($(window).width() < 767){
                              
                              $(".step-names-div .step-two-name").hide();
                              $(".step-names-div .step-three-name").show();
                              $(".popup-steps .step-1 .step-num-two").css({right:'auto', left: '12px'});
                              $(".popup-steps .step-1 .step-num-three").css({right:"0",left:"0",margin:"auto"})
      
                              $(".modal-body .dots .dot-2").removeClass("active");
                              $(".modal-body .dots .dot-3").addClass("active");

                            }



          })



          $(".continue-back-button .backbtn").click(()=>{

            $(".second-step").removeClass("popupActive");
              $(".second-step").addClass("popupInactive");
              $(".popup-form-titleDetails").removeClass("popupInactive");
              $(".popup-form-titleDetails").addClass("popupActive");
              $(".popup-form-title").addClass("popupInactive");
              $(".popup-form-title").removeClass("popupActive");
        
              $(".append-questionnairs").removeClass("popupInactive");
              $(".append-questionnairs").addClass("popupActive");
              $(".popup-steps .step-2 ").css("background-color", "white");
        
        
              $(".submit-button-wrapper .backbtn").removeClass("popupVisible");
              $(".submit-button-wrapper .backbtn").addClass("popupInvisible");

              $(".submit-button-wrapper .continueButton").removeClass("d-none")
              $(".submit-button-wrapper .activateButton").addClass("d-none")
              $(".modal-body .title-subtitle-steps .activateyouraccount").show();


              if($(window).width() < 767){

                $(".popup-steps .step-1").css("justify-content", "center");
                $(".modal-body .popup-steps .popup-step .step-num-one").html("");
                $(".modal-body .popup-steps .popup-step .step-num-one").text("1");

                $(".modal-body .dots .dot-2").removeClass("active");
                $(".modal-body .dots .dot-1").addClass("active");
                $(".step-names-div .step-one-name").show();
                $(".step-names-div .step-two-name").hide();

              }


            });


            $(".disclaimer .activate-account-button button").click((e)=>{

              e.preventDefault();
            
              $(".popup-form-titleFinish").removeClass("popupActive");
              $(".popup-form-titleFinish").addClass("popupInactive");
              $(".application-successfully-submitted").removeClass("d-none");
            
              $(".modal-body .popup-steps .popup-step .step-num-three").text(" ");
              $(".modal-body .popup-steps .popup-step .step-num-three").html("<img src='./check-blue.png' /> ");
              $(".modal-body .popup-steps .popup-step .step-num-three").css("border-color", "#178BFB");

              if($(window).width() < 767){

                $(".popup-steps .step-1 .step-num-one").css("display","none");
                $(".popup-steps .step-1 .step-num-two").css("display","none");

                $(".popup-steps .step-1 .step-num-three").css("right", "0")
                $(".popup-steps .step-1 .step-num-three").css("left", "0")
                $(".popup-steps .step-1 .step-num-three").css("margin", "auto")


              }
            

            })



});











  window.onload = function () {
    //Reference the DropDownList.
    var ddlYears = document.querySelector(".ddlYears");
  
    //Determine the Current Year.
    var currentYear = (new Date()).getFullYear();
  
    //Loop and add the Year values to DropDownList.
    for (var i = 1950; i <= currentYear; i++) {
        // let option = document.createElement("span");
        ddlYears.innerHTML += `<a class="dropdown-item coin-individual" data-value="` + i + `" href="#" ><span>`+ i + `</span></a>`; 
        
    }
  };



  setTimeout(()=>
  {
    $(".currencies-dropdown .dropdown-menu .ddlYears a").click((event)=>{

         
    
      
      const yearTime = event.currentTarget.attributes['data-value'].nodeValue;
   
      const timeyear = yearTime;

  
      $(".currencies-dropdown.yearTime button span#abc").html(timeyear).css("color","#DEDEDE"); 

  
  
  
  
    })


  },1000)





$(function () {
  $('[id*=txtZipCode]').on('blur', function () {

    var url = 'http://ziptasticapi.com/' + $(this).val().trim();
      $.get(url, function (response) {

        console.log(response.city)
          // $('[id*=lblCity]').html(response.city);
          // $('[id*=lblState]').html(response.state);
          // $('[id*=lblCountry]').html(response.country);
      });
      
  });
});


$(document).ready(function(){

$.ajax({
  type: "GET",
  url:"./phoneCodes.json",
  data: {
      get_param: "value",
  },
  dataType: "json",
  success: function (result) {
      result.countries.map(ele => {
      
       
        $(".phonecode .dropdown-menu .countryPhonecodes").append(`
        <a class="dropdown-item coin-individual" data-value="`+ele.code+`" href="#" ><span>`+ele.code+`</span></a>`);




      });




  },
});



});


setTimeout(()=>
{
  $(".phonecode .dropdown-menu .countryPhonecodes a").click((event)=>{

    const phoneNumbercode = event.currentTarget.attributes['data-value'].nodeValue;
 
    // if($(".currencies-dropdown .dropdown-menu a").css("color") == "#535353"){
    //   $(".phonecode button span#code").html(phoneNumbercode).css("color","#535353"); 
    // }
    // else{
    //   $(".phonecode button span#code").html(phoneNumbercode).css("color","#DEDEDE"); 
    // }


    })


},1000)


