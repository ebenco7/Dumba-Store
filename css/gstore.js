// Add this script in your HTML or external JavaScript file
document.getElementById('form-container').addEventListener('mouseenter', function () {
    this.classList.add('hovered');
  });
  
  document.getElementById('form-container').addEventListener('mouseleave', function () {
    this.classList.remove('hovered');
  });
  