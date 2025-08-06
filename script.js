
// Modal functionality
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('consultationModal');
  const openButtons = document.querySelectorAll('.open-consultation');
  const closeBtn = document.getElementById('closeModalBtn');

  // Show modal
  openButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      modal.style.display = 'flex';
    });
  });

  // Close modal via button
  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  }

  // Close modal by clicking outside modal content
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Close modal on ESC key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = 'none';
    }
  });
});

// Dropdown functionality for mobile
document.addEventListener('DOMContentLoaded', () => {
  const dropdownLinks = document.querySelectorAll('.dropdown > a');

  dropdownLinks.forEach(link => {
    link.addEventListener('click', e => {
      if (window.innerWidth <= 767) {
        e.preventDefault();
        const dropdownContent = link.nextElementSibling;
        
        // Close other dropdowns first
        document.querySelectorAll('.dropdown-content.show').forEach(content => {
          if (content !== dropdownContent) {
            content.classList.remove('show');
          }
        });
        
        // Toggle current dropdown
        dropdownContent.classList.toggle('show');
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown-content.show').forEach(content => {
        content.classList.remove('show');
      });
    }
  });
});

// Initialize AOS animations
document.addEventListener('DOMContentLoaded', function() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      once: true,
    });
  }
});
