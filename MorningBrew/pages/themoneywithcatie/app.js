const playpauseButton = document.querySelectorAll("#backgroundplaceholder");
const playIcon = document.querySelectorAll(".playpausebg .playpauseBtn .fa-play")

const expendUp = document.querySelector("#expendupMenu")
const boardaccordian = document.querySelectorAll(".board-accordian .cookie")
const description = document.querySelectorAll(".board-accordian .description")

console.log(boardaccordian)


description.forEach(element => {
    element.addEventListener('click', function(event){

        let targett = event.target;
          

        let changeText = targett.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.nextElementSibling.firstElementChild;
        let changePara = targett.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling;
 
            changeText.innerHTML = `<h5>Description</h5>`;
            changePara.innerHTML = `<p>This episode is a logistical examination of how to put systems in place that help you balance your short-term and long-term spending goals—after all, <br> “saving” is really just another name for “deferred spending,” <br> and the ideal scenario we’d find ourselves in is one in which the money we need <br> is available to us whenever we need it. 

            It’s my hope that after listening, you’ll have a solid understanding of <br>how to structure all of your savings and investing and—most importantly—you’ll eliminate the fear that you’re “missing something.”
            <br>
            —
            
            Mentioned in the Episode<br>
            
            - Atomic Habits by James Clear: https://jamesclear.com/atomic-habits<br>
            
            —<br>
            
            Follow Along<br>
            
            - Listen to Money with Katie here: https://www.podpage.com/money-with-katie-show/<br>
            
            - Read Money with Katie: https://moneywithkatie.com/<br>
            
            
            <br>
            Follow Money with Katie!<br>
            
            - Instagram: https://www.instagram.com/moneywithkatie/<br>
            
            - Twitter: https://twitter.com/moneywithkatie<br>
            
            - TikTok: https://www.tiktok.com/@moneywithkatie
            
             
            
            Subscribe to Morning Brew
            
            - Sign up for free today: https://bit.ly/morningbrewyt
            
            
            
            Follow The Brew!
            
            - Instagram: https://www.instagram.com/morningbrew/
            
            - Twitter: https://twitter.com/MorningBrew
            
            - TikTok: https://www.tiktok.com/@morningbrew</p>`

        console.log(changeText)
     
        if(targett.parentElement.parentElement.parentElement.previousElementSibling.classList.contains("dis-none")){
            targett.parentElement.parentElement.parentElement.previousElementSibling.classList.remove("dis-none")
            targett.parentElement.parentElement.parentElement.previousElementSibling.classList.add("dis-block")
        }
        else if(targett.parentElement.parentElement.parentElement.previousElementSibling.classList.contains("dis-block")){
            targett.parentElement.parentElement.parentElement.previousElementSibling.classList.remove("dis-block")
            targett.parentElement.parentElement.parentElement.previousElementSibling.classList.add("dis-none")
        }
    
    })

})




boardaccordian.forEach(element => {
    element.addEventListener('click', function(event){

        let targett = event.target;

        console.log(targett.parentElement.parentElement.parentElement.previousElementSibling)
        
        let changeText = targett.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.nextElementSibling.firstElementChild;
        let changePara = targett.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling;
 
            changeText.innerHTML = `<h5>Cookie Policy</h5>`;
            changePara.innerHTML = `<p>This player is hosted by Megaphone, a podcast publishing platform. By using Megaphone‘s player you are consenting to our use of cookies, which we use to improve user experience. Please refer to our privacy policy to learn more.</p>`

        if(targett.parentElement.parentElement.parentElement.previousElementSibling.classList.contains("dis-none")){
            targett.parentElement.parentElement.parentElement.previousElementSibling.classList.remove("dis-none")
            targett.parentElement.parentElement.parentElement.previousElementSibling.classList.add("dis-block")
        }
        else if(targett.parentElement.parentElement.parentElement.previousElementSibling.classList.contains("dis-block")){
            targett.parentElement.parentElement.parentElement.previousElementSibling.classList.remove("dis-block")
            targett.parentElement.parentElement.parentElement.previousElementSibling.classList.add("dis-none")
        }
    
    })

})




playpauseButton.forEach(element => {

         element.addEventListener('click', function(event){
             const target = event.target;

                       if(target.classList.contains("fa-play"))
                       {
                            target.classList.remove("fa-play")
                            target.classList.add("fa-pause")
                       }
                       else if(target.classList.contains("fa-pause")){

                            target.classList.remove("fa-pause")
                            target.classList.add("fa-play")
                    }                 
                       
        });

})

