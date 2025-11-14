// pour ouvrir le planning 

document.addEventListener('DOMContentLoaded', function() {
  const img = document.getElementById('planning-img');
  const modal = document.getElementById('planning-modal');
  const modalImg = document.getElementById('planning-modal-img');
  const overlay = document.getElementById('planning-overlay');
  
  if (img) {
    img.onclick = function() {
      modal.style.display = 'flex';
      modalImg.src = this.src;
      document.body.style.overflow = 'hidden';
    };
  }
  if (modal) {
    modal.onclick = function() {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    };
  }
});
