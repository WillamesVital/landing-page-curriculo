
// smooth-scroll.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
  });
  
  
  // JavaScript
  const backToTopButton = document.getElementById('backToTop');
  
  // Mostrar/ocultar botão
  window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
          backToTopButton.classList.add('show');
      } else {
          backToTopButton.classList.remove('show');
      }
  });
  
  // Rolagem suave
  backToTopButton.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
  
  // Teclado (acessibilidade)
  backToTopButton.addEventListener('keyup', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
      }
  });