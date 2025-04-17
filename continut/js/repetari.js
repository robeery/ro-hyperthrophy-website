
function checkAnimation() {
  const repElement = document.getElementById('repetari');
  const haltera = document.querySelector('.haltera');
  let repetitions = 0;
  let isUp = false;
  let isDown = true;
  
  
  repElement.innerHTML = 'Repetări: ' + repetitions;
  
  
  function sendRepetitionData(reps) {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost:5678/update-repetitions', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      
      xhr.onload = function() {
          if (xhr.status >= 200 && xhr.status < 300) {
              console.log('Repetition data sent successfully');
          } else {
              console.error('Error sending repetition data:', xhr.statusText);
          }
      };
      
      xhr.onerror = function() {
          console.error('Network error occurred when sending repetition data');
      };
      
      xhr.send(JSON.stringify({ repetitions: reps }));
  }
  

  function checkAnimationFrame() {
      const transform = window.getComputedStyle(haltera).transform;
      const matrix = new DOMMatrix(transform);
      const scaleY = matrix.m22;
      
      if (scaleY > 1.05 && !isUp) {
          isUp = true;
          isDown = false;
      }
      else if (scaleY < 1.05 && !isDown && isUp) {
          isDown = true;
          isUp = false;
          repetitions++;
          repElement.innerHTML = 'Repetări: ' + repetitions;
          
          
          sendRepetitionData(repetitions);
      }
      
      requestAnimationFrame(checkAnimationFrame);
  }
  
  
  checkAnimationFrame();
  
  
  setupMotivationButton();
}

function setupMotivationButton() {
  var contor = 1;
  let sound = document.getElementById('motivation-sound_1');
  let popupContainer_ronnie = document.getElementById('popup-container_ronnie');
  let popupContainer_tom = document.getElementById('popup-container_tom');
  let popupContainer_goggins = document.getElementById('popup-container_goggins');
  const button = document.getElementById('buton_desen_1');
  
  if (!button) {
      console.error('Motivation button not found');
      return;
  }
  
  button.addEventListener('click', function() {
      button.disabled = true;
      let popup_curent;
      
      if (contor == 1) {
          popup_curent = popupContainer_ronnie;
          sound.volume = 0.5;
      } else if (contor == 2) {
          popup_curent = popupContainer_tom;
          sound.volume = 0.5;
      } else if (contor == 3) {
          popup_curent = popupContainer_goggins;
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
      
      if (contor == 2) {
          sound = document.getElementById('motivation-sound_2');
          button.innerHTML = "Mai mult!!";
      }
      
      if (contor == 3) {
          sound = document.getElementById('motivation-sound_3');
          button.innerHTML = "Încă una!!!";
      }
      
      if (contor > 3) {
          sound = document.getElementById('motivation-sound_1');
          button.innerHTML = "Mai tare!";
          contor = 1;
      }
      
      
      setTimeout(function() {
          popup_curent.classList.remove('show-popup');
      }, 3000);
      
      setTimeout(function() {
          button.disabled = false;
      }, 3500);
  });
}


if (typeof window.checkAnimationInitialized === 'undefined') {
  window.checkAnimationInitialized = true;
}