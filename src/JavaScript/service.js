document.addEventListener('DOMContentLoaded', function() {
  const overlayBtns = document.querySelectorAll('.overlay-btn');

  overlayBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const card = this.closest('.card');
      card.classList.remove('hover');
    });
  });
});
