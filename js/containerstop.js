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

// ===== NEWS/CALENDARIO MOBILE: apri/chiudi al click =====
const hoverContainers = document.querySelectorAll('.hoverContainer');
const allCornerBoxes = document.querySelectorAll('.news-calendar-mobile .corner-box');

hoverContainers.forEach((container) => {
  const label = container.querySelector('.hoverBox');
  const cornerBox = container.closest('.corner-box');

  label.addEventListener('click', () => {
    const isAlreadyOpen = container.classList.contains('open');

    // Chiudi tutto e mostra di nuovo entrambi i box
    hoverContainers.forEach((c) => c.classList.remove('open'));
    allCornerBoxes.forEach((box) => {
      box.classList.remove('open');
      box.classList.remove('mobile-hidden');
    });

    // Se non era già aperto, apri questo e nascondi l'altro
    if (!isAlreadyOpen) {
      container.classList.add('open');
      cornerBox.classList.add('open');

      allCornerBoxes.forEach((box) => {
        if (box !== cornerBox) {
          box.classList.add('mobile-hidden');
        }
      });
    }
  });
});


// Chiudi il box aperto se l'utente clicca fuori da entrambi i box
document.addEventListener('click', (event) => {
  const clickedInsideABox = Array.from(allCornerBoxes).some(box => box.contains(event.target));

  if (!clickedInsideABox) {
    hoverContainers.forEach((c) => c.classList.remove('open'));
    allCornerBoxes.forEach((box) => {
      box.classList.remove('open');
      box.classList.remove('mobile-hidden');
    });
  }
});


// ===== CARD RUOTABILI: tap per girare su mobile =====
const flipCards = document.querySelectorAll('.card-flip');

flipCards.forEach(card => {
  card.addEventListener('click', (e) => {
    e.stopPropagation();

    // solo mobile/tablet senza hover
    if (!window.matchMedia('(hover: hover)').matches) {

      // chiude tutte le altre card
      flipCards.forEach(otherCard => {
        if (otherCard !== card) {
          otherCard.classList.remove('flipped');
        }
      });

      // gira/rigira quella cliccata
      card.classList.toggle('flipped');
    }
  });
});

// clic fuori da tutte le card: reset
document.addEventListener('click', () => {
  flipCards.forEach(card => {
    card.classList.remove('flipped');
  });
});