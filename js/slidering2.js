// ===============================
// SLIDER DINAMICO PER LA SEZIONE .HERO
// ===============================

// Attende che tutto l'HTML sia stato caricato prima di eseguire il codice
document.addEventListener('DOMContentLoaded', () => {

  // Seleziona la sezione principale .hero nella pagina
  const hero = document.querySelector('.hero');
  if (!hero) return; // Se non esiste nessun .hero, il codice si interrompe

  // Seleziona il contenitore delle immagini all'interno della sezione .hero
  const sliderContainer = hero.querySelector('.hero-slider');
  if (!sliderContainer) return; // Se manca il contenitore, non fa nulla

  // Seleziona tutte le immagini presenti nello slider
  const slides = sliderContainer.querySelectorAll('img');
  if (slides.length === 0) return; // Se non ci sono immagini, il codice si ferma

  // ===============================
  // VARIABILI E FUNZIONI PRINCIPALI
  // ===============================

  // Tiene traccia dell'indice dell'immagine attualmente visibile
  let currentSlide = 0;

  // Funzione per mostrare l'immagine corrispondente all'indice ricevuto
  function showSlide(index) {
    // Cicla tutte le immagini
    slides.forEach((slide, i) => {
      // Aggiunge la classe "active" solo all'immagine corrispondente
      slide.classList.toggle('active', i === index);
    });
  }

  // Funzione per passare all'immagine successiva
  function nextSlide() {
    // Incrementa l'indice e, se supera l'ultima immagine, torna a 0 (effetto loop)
    currentSlide = (currentSlide + 1) % slides.length;
    // Mostra la nuova immagine
    showSlide(currentSlide);
  }

  // Funzione per tornare all'immagine precedente
  function prevSlide() {
    // Decrementa l'indice e, se scende sotto 0, torna all'ultima immagine
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    // Mostra la nuova immagine
    showSlide(currentSlide);
  }

  // ===============================
  // CREAZIONE DELLE FRECCE DI NAVIGAZIONE
  // ===============================

  // Crea il bottone per la freccia sinistra
  const leftArrow = document.createElement('button');
  leftArrow.classList.add('arrow', 'left'); // aggiunge le classi per lo stile
  leftArrow.innerHTML = '&#10094;'; // simbolo "‹"
  leftArrow.addEventListener('click', prevSlide); // al click mostra l’immagine precedente
  hero.appendChild(leftArrow); // aggiunge il bottone alla sezione .hero

  // Crea il bottone per la freccia destra
  const rightArrow = document.createElement('button');
  rightArrow.classList.add('arrow', 'right'); // aggiunge le classi per lo stile
  rightArrow.innerHTML = '&#10095;'; // simbolo "›"
  rightArrow.addEventListener('click', nextSlide); // al click mostra l’immagine successiva
  hero.appendChild(rightArrow); // aggiunge il bottone alla sezione .hero

  // ===============================
  // AVVIO DELLO SLIDER
  // ===============================

  // Mostra la prima immagine all'avvio (indice 0)
  showSlide(currentSlide);

  // Fa avanzare automaticamente lo slider ogni 5 secondi
  setInterval(nextSlide, 3000);
});
