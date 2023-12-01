(() => {
  const mobileMenu = document.querySelector('.js-menu');
  const openMenuBtn = document.querySelector('.js-button-open');
  const closeMenuBtn = document.querySelector('.js-button-close');
  const body = document.body;

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    closeMenuBtn.classList.toggle('is-open');

    if (window.innerWidth < 1200 && isMenuOpen === false) {
      body.classList.add('is-hidden');
    } else {
      body.classList.remove('is-hidden');
    }
  };

  mobileMenu.addEventListener('click', toggleMenu);
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 1200px)').addEventListener('change', e => {
    if (!e.matches) return;
    bodyScrollLock.enableBodyScroll(document.body);
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    body.classList.remove('is-hidden');
    mobileMenu.removeEventListener(toggleMenu);
  });
})();
