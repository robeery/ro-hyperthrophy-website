
document.addEventListener('DOMContentLoaded', function() {
    
    const repElement = document.getElementById('repetari');
    
    
    const haltera = document.querySelector('.haltera');
    
    
    let repetitions = 0;
    let isUp = false;
    let isDown = true;
    
    
    repElement.innerHTML = 'Repetări: ' + repetitions;
    
    
    function checkAnimation() {
      
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
      }
      
      
      requestAnimationFrame(checkAnimation);
    }
    
    
    checkAnimation();
  });