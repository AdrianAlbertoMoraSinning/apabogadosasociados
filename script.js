const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => links.classList.toggle('open'));

document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => links.classList.remove('open'))
);

/* Evitar que Android Chrome recuerde la última posición */
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('pageshow', () => {
  window.scrollTo(0, 0);
});

window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});


document.addEventListener("DOMContentLoaded", positionWhatsAppButton);
window.addEventListener("load", positionWhatsAppButton);
window.addEventListener("resize", positionWhatsAppButton);

/* Jotform puede terminar de cargar después de la página */
setTimeout(positionWhatsAppButton, 1000);
setTimeout(positionWhatsAppButton, 3000);
