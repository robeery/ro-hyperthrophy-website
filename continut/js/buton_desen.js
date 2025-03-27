
document.addEventListener('DOMContentLoaded', function() {
    
  var contor=1;

  let sound = document.getElementById('motivation-sound_1');
  
 // popupContainer = document.getElementById('popup-container_ronnie');
  let popupContainer_ronnie = document.getElementById('popup-container_ronnie');
  let popupContainer_tom = document.getElementById('popup-container_tom');
  let popupContainer_goggins = document.getElementById('popup-container_goggins');
  const button = document.getElementById('buton_desen_1');
  
  
 
    /* 
    if(contor==2)
    {
      
    }
   */
    
    button.addEventListener('click', function() {
     
      button.disabled = true;
      
    
      let popup_curent;
      if(contor==1)
      {
        popup_curent=popupContainer_ronnie;
        sound.volume = 0.5;
      }
      else if(contor==2)
      {
        popup_curent=popupContainer_tom;
        sound.volume = 0.5;
      }
      else if(contor==3)
      {
        popup_curent=popupContainer_goggins;
        sound.volume = 0.5;
      }
      sound.currentTime = 0; 
      sound.play()
        .catch(error => {
          console.log('Audio playback failed:', error);
          // animatie daca nu merge audio
        });
      contor++;
      
      
      popup_curent.classList.add('show-popup');
      
      if(contor==2)
      {
            sound = document.getElementById('motivation-sound_2');
            button.innerHTML="Mai mult!!";
            

      }
      if(contor==3)
      {
            sound = document.getElementById('motivation-sound_3');
            button.innerHTML="Încă una!!!";
        
      }
      if(contor>3)
      {
            sound = document.getElementById('motivation-sound_1');
            button.innerHTML="Mai tare!";
            contor=1;
            
      }

      
      // 4. Hide the popup after 3 seconds
      setTimeout(function() {
        popup_curent.classList.remove('show-popup');
      }, 3000);
      setTimeout(function() {
        button.disabled = false;
    }, 3500);


    });
  });