document.addEventListener('DOMContentLoaded', function () {
  // Handle consultation modal
  const modal = document.getElementById('consultationModal');
  const openButtons = document.querySelectorAll('.open-consultation');
  const closeBtn = document.getElementById('closeModalBtn');

  openButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      modal.style.display = 'flex';
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  }

  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
      modal.style.display = 'none';
    }
  });

  // Handle mobile dropdown toggle
  const dropdownLinks = document.querySelectorAll('.dropdown > a');
  dropdownLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      if (window.innerWidth < 768) {
        e.preventDefault();
        const dropdownContent = link.nextElementSibling;
        if (dropdownContent) {
          dropdownContent.classList.toggle('show');
        }
      }
    });
  });

  // Initialize AOS (if used on this page)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      once: true,
    });
  }
});
function togglePrivacy() {
  const dropdown = document.getElementById("privacyDropdown");
  dropdown.classList.toggle("show");
}



