// ===============================
// Slider immagini dinamico dentro .hero
// ===============================

// Seleziona la sezione .hero presente nell'HTML
const hero = document.querySelector('.hero'); // prende il div/section con classe 'hero'

// Array contenente i percorsi delle immagini da mostrare nello slider
const images = [
  'img/logo.colorato.jpeg', // prima immagine: logo
  '/img/img2.jpeg',           // seconda immagine
  '/img/img3.jpeg',           // terza immagine
  '/img/img4.jpeg',           // quarta immagine
  '/img/img5.jpeg',           // quinta immagine
  '/img/img6.jpeg'            // sesta immagine
];

// Crea il contenitore delle immagini
const sliderContainer = document.createElement('div'); // crea un div
sliderContainer.classList.add('hero-slider');          // aggiunge la classe 'hero-slider' al div
hero.appendChild(sliderContainer);                     // aggiunge il div creato dentro .hero

// Ciclo per creare e aggiungere tutte le immagini dentro sliderContainer
images.forEach((src, i) => {
  const img = document.createElement('img'); // crea un elemento img
  img.src = src;                              // imposta il percorso dell'immagine
  img.alt = `Immagine ${i + 1}`;             // imposta testo alternativo
  if(i === 0) img.classList.add('active');   // rende visibile la prima immagine
  sliderContainer.appendChild(img);          // aggiunge l'immagine al container
});

// ===============================
// Creazione freccia sinistra
// ===============================
const leftArrow = document.createElement('button'); // crea bottone
leftArrow.classList.add('arrow', 'left');          // aggiunge classi per stile
leftArrow.innerHTML = '&#10094;';                 // simbolo freccia sinistra
leftArrow.onclick = prevSlide;                     // al click chiama funzione prevSlide
hero.appendChild(leftArrow);                       // aggiunge bottone dentro .hero

// ===============================
// Creazione freccia destra
// ===============================
const rightArrow = document.createElement('button'); // crea bottone
rightArrow.classList.add('arrow', 'right');         // aggiunge classi per stile
rightArrow.innerHTML = '&#10095;';                  // simbolo freccia destra
rightArrow.onclick = nextSlide;                     // al click chiama funzione nextSlide
hero.appendChild(rightArrow);                        // aggiunge bottone dentro .hero

// ===============================
// Creazione box Blog in alto a sinistra
// ===============================
                      // aggiunge il box dentro .hero

// ===============================
// Creazione box Calendario in alto a destra
// ===============================
                      // aggiunge il box dentro .hero

// ===============================
// Funzionalità slider
// ===============================

// Variabile per tracciare l'immagine attuale
let currentSlide = 0;

// Seleziona tutte le immagini appena create nello slider
const slides = sliderContainer.querySelectorAll('img');

// Funzione per mostrare l'immagine all'indice specificato
function showSlide(index) {
  slides.forEach((slide, i) => {         // cicla tutte le immagini
    slide.classList.remove('active');     // rimuove classe 'active' da tutte
    if(i === index) slide.classList.add('active'); // aggiunge 'active' solo all'immagine corrente
  });
}

// Funzione per passare all'immagine successiva
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length; // incrementa e cicla all'inizio se necessario
  showSlide(currentSlide);                            // mostra l'immagine aggiornata
}

// Funzione per tornare all'immagine precedente
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; // decrementa e cicla alla fine se necessario
  showSlide(currentSlide);                                           // mostra l'immagine aggiornata
}

// Mostra la prima immagine all'avvio
showSlide(currentSlide);

// Avanzamento automatico ogni 5 secondi (opzionale)
setInterval(nextSlide, 5000);
