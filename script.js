// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        toggle.classList.remove('open');
        links.classList.remove('open');
      });
    });
  }

  // gentle reveal-on-scroll for cards and timeline items
  const revealables = document.querySelectorAll('.card, .timeline-item, .about-visual');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fade-up .6s ease forwards';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealables.forEach(el => {
      el.style.opacity = '0';
      io.observe(el);
    });
  }
});

const wrapper = document.querySelector('.carousel-pin-wrapper');
  const carousel = document.querySelector('.projects-carousel');

  if (wrapper && carousel) {
    window.addEventListener('scroll', () => {
      const wrapperRect = wrapper.getBoundingClientRect();
      const wrapperTop = wrapperRect.top;
      const wrapperHeight = wrapperRect.height - window.innerHeight;

      // Calcula cuánto se ha scrolleado dentro de la sección (entre 0 y 1)
      if (wrapperTop <= 0 && Math.abs(wrapperTop) <= wrapperHeight) {
        const progress = Math.abs(wrapperTop) / wrapperHeight;
        
        // Calcula el desplazamiento máximo posible en horizontal
        const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
        
        // Asigna la posición del carrusel proporcionalmente al scroll vertical
        carousel.scrollLeft = progress * maxScrollLeft;
      }
    });
  }

const styleSheet = document.createElement('style');
styleSheet.textContent = `
@keyframes fade-up {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}`;
document.head.appendChild(styleSheet);
