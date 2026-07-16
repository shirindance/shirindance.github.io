// ===== HAMBURGER: apri/chiudi il menu mobile =====
const toggle = document.querySelector('.mobile-menu-toggle');
const menuList = document.querySelector('.mobile-menu-list');

toggle.addEventListener('click', () => {
  menuList.classList.toggle('open');
});

// Chiudi il menu se l'utente clicca fuori
document.addEventListener('click', (event) => {
  const clickedInsideMenu = toggle.contains(event.target) || menuList.contains(event.target);
  if (!clickedInsideMenu && menuList.classList.contains('open')) {
    menuList.classList.remove('open');
  }
});

// ===== ACCORDION: apri/chiudi le sezioni, una alla volta =====
const accordionSections = document.querySelectorAll('.accordion-section');

accordionSections.forEach((section) => {
  const header = section.querySelector('.accordion-header');

  header.addEventListener('click', () => {
    const isAlreadyOpen = section.classList.contains('open');

    // Chiudi tutte le sezioni
    accordionSections.forEach((s) => s.classList.remove('open'));

    // Se quella cliccata non era già aperta, riaprila
    if (!isAlreadyOpen) {
      section.classList.add('open');
    }
  });
});