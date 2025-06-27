window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const logo = preloader.querySelector('img');

  // Espera 1700ms antes de iniciar el desvanecido
  setTimeout(() => {
    preloader.style.opacity = '0';
    logo.style.opacity = '0';

    // Espera 600ms antes de ocultar el preloader completamente
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 600);
  }, 1700);
});
