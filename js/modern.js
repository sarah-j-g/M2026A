document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.navbar');
  const menu = document.querySelector('.menu-btn');
  if (header && menu) menu.addEventListener('click', () => header.classList.toggle('menu-open'));

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
    });
  });
});
