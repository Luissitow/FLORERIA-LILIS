window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');

  // Espera 2000ms antes de empezar a desvanecer
  setTimeout(() => {
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 0.5s ease';

    // Espera otros 600ms después de desvanecerse antes de ocultarlo
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 600);
  }, 1700); // <- tiempo que se muestra completo el preloader
});
