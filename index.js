function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left, 10);
    
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}
function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left, 10);
    
    if (left < (400 - dodger.offsetWidth)) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  
  