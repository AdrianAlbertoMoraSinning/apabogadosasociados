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
function positionWhatsAppButton() {
  const whatsappButton = document.querySelector(".floating-whatsapp");

  if (!whatsappButton) return;

  const isMobile = window.innerWidth <= 600;

  whatsappButton.style.setProperty("position", "fixed", "important");
  whatsappButton.style.setProperty("z-index", "999999", "important");
  whatsappButton.style.setProperty("margin", "0", "important");
  whatsappButton.style.setProperty("padding", "0", "important");
  whatsappButton.style.setProperty("display", "flex", "important");
  whatsappButton.style.setProperty("align-items", "center", "important");
  whatsappButton.style.setProperty("justify-content", "center", "important");
  whatsappButton.style.setProperty("transform", "none", "important");

  if (isMobile) {
    whatsappButton.style.setProperty("right", "14px", "important");
    whatsappButton.style.setProperty("bottom", "125px", "important");
    whatsappButton.style.setProperty("width", "56px", "important");
    whatsappButton.style.setProperty("height", "56px", "important");
  } else {
    whatsappButton.style.setProperty("right", "20px", "important");
    whatsappButton.style.setProperty("bottom", "118px", "important");
    whatsappButton.style.setProperty("width", "60px", "important");
    whatsappButton.style.setProperty("height", "60px", "important");
  }

  const icon = whatsappButton.querySelector("i");

  if (icon) {
    icon.style.setProperty("display", "block", "important");
    icon.style.setProperty("margin", "0", "important");
    icon.style.setProperty("padding", "0", "important");
    icon.style.setProperty(
      "font-size",
      isMobile ? "31px" : "34px",
      "important"
    );
    icon.style.setProperty("line-height", "1", "important");
    icon.style.setProperty("transform", "translateY(1px)", "important");
  }
}

document.addEventListener("DOMContentLoaded", positionWhatsAppButton);
window.addEventListener("load", positionWhatsAppButton);
window.addEventListener("resize", positionWhatsAppButton);

/* Jotform puede terminar de cargar después de la página */
setTimeout(positionWhatsAppButton, 1000);
setTimeout(positionWhatsAppButton, 3000);
