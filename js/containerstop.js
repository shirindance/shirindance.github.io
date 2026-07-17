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


// ===== TOGGLE LEGGIBILITÀ =====
const toggleFontButtons = document.querySelectorAll('#toggleFont'); /*trova entrambi i bottoni (mobile e desktop) che condividono lo stesso id="toggleFont"*/

toggleFontButtons.forEach((button) => {
  button.addEventListener('click', () => {
    document.body.classList.toggle('readable-font'); /*aggiunge/toglie la classe sul body, attivando/disattivando il CSS di prima*/

    const isReadable = document.body.classList.contains('readable-font'); /*controlla lo stato dopo il toggle, per sapere se ora è attivo o no*/
    const newText = isReadable ? 'Versione originale' : 'Aumenta la leggibilità'; /*sceglie il testo giusto in base allo stato*/

    toggleFontButtons.forEach((btn) => { /*aggiorna il testo su entrambi i bottoni*/
      btn.textContent = newText;
    });
  });
});