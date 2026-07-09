// Menú móvil
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Cerrar el menú al hacer clic en un enlace (móvil)
document.querySelectorAll('.nav__list a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

// Año actual en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Envío del formulario de contacto (demo, sin backend)
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
  contactForm.reset();
});
