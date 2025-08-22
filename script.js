const menuBtn = document.querySelector('.menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.overlay');

    menuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('show');
      overlay.classList.toggle('show');
    });

    overlay.addEventListener('click', () => {
      mobileNav.classList.remove('show');
      overlay.classList.remove('show');
    });