/**
 * ============================================================================
 * JAVASCRIPT DEL PORTAFOLIO
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Inicialización suave del carrusel de Bootstrap con intervalo automático de 4 segundos
  const carouselElement = document.querySelector('#carouselBootstrap');
  if (carouselElement && window.bootstrap) {
    new bootstrap.Carousel(carouselElement, {
      interval: 4000,
      ride: 'carousel',
      wrap: true
    });
  }
});
