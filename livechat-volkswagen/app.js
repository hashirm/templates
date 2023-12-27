                 // Grab elements, create settings, etc.
                 var video = document.getElementById('video');

                 // Get access to the camera!
                 if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                     // Not adding `{ audio: true }` since we only want video now
                     navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
                         //video.src = window.URL.createObjectURL(stream);
                         video.srcObject = stream;
                         video.play();
                     });
                 }
 
                 /* Legacy code below: getUserMedia 
                 else if(navigator.getUserMedia) { // Standard
                     navigator.getUserMedia({ video: true }, function(stream) {
                         video.src = stream;
                         video.play();
                     }, errBack);
                 } else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
                     navigator.webkitGetUserMedia({ video: true }, function(stream){
                         video.src = window.webkitURL.createObjectURL(stream);
                         video.play();
                     }, errBack);
                 } else if(navigator.mozGetUserMedia) { // Mozilla-prefixed
                     navigator.mozGetUserMedia({ video: true }, function(stream){
                         video.srcObject = stream;
                         video.play();
                     }, errBack);
                 }
                 */




                let chatSend = document.querySelector('.chatbox .msger-inputarea .msger-send-btn');
            
                 chatSend.addEventListener('click', function(e){

                    e.preventDefault();

                    let chatTextbox = document.querySelector('.chatbox .msger-inputarea .msger-input');
                        
                  let text = chatTextbox.value;
                

                  let postText = document.querySelector('.msger-chat');

                            postText.innerHTML += `
                            <div class="msg right-msg">
                            
                            <div class="msg-img"></div>

                            <div class="msg-bubble">
                                <div class="msg-info">
                                </div>

                                <div class="msg-text">
                                   ${text}
                                </div>
                            </div> </br>
                            </div>`;
                        $('.msger-chat').animate({
                                scrollTop: $('.msger-chat').prop("scrollHeight")
                        }, 1000);  
                 })

                 $('.chatbox .msger-inputarea .msger-input').keydown(function (){ 
         
                    console.log($('.chatbox .msger-inputarea'));

                    $('.chatbox .label-typingBox').text("typing...");

                });
                 $('.chatbox .msger-inputarea .msger-input').keyup(function (){ 
                       
               
                    console.log($('.chatbox .msger-inputarea'));

                    $('.chatbox .label-typingBox').text("");

                });

          

                 
 
 