document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('consultationModal');
  const openButtons = document.querySelectorAll('.open-consultation');
  const closeBtn = document.getElementById('closeModalBtn');
  
  // Show modal
  openButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      modal.style.display = 'flex';
    });
  });

  // Close modal via button
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  }

  // Close modal by clicking outside modal content
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Close modal on ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const dropdownLinks = document.querySelectorAll('.dropdown > a');
  dropdownLinks.forEach(link => {
    link.addEventListener('click', e => {
      if (window.innerWidth < 768) {
        e.preventDefault();
        const dropdownContent = link.nextElementSibling;
        dropdownContent.classList.toggle('show');
      }
    });
  });
});
