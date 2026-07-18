// ===============================
// SLIDER DINAMICO PER LA SEZIONE .HERO
// ===============================
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  if (!hero) return; //se non c'è hero fine programma

  const sliderContainer = hero.querySelector('.hero-slider'); 
  if (!sliderContainer) return; //se non c'è sliderConteiner stop

  // Seleziona tutte le immagini presenti nello slide
  const slides = sliderContainer.querySelectorAll('img'); //raccoglie tutte le immagini
  if (slides.length === 0) return; // Se non ci sono immagini, il codice si ferma

  let currentSlide = 0; //inizia da indice 0

  function showSlide(index) { //fa vedere la slide 
    slides.forEach((slide, i) => { 
      slide.classList.toggle('active', i === index); //se la slide corrisponde al numero dell'indice la mostra, altrimenti no
    }); //ad ogni giro i è incrementato di 1
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; //aggiunge di uno currentSlide
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; //toglie uno da currentSlide
    showSlide(currentSlide);
  }

  // ===============================
  // COLLEGAMENTO ALLE FRECCE GIÀ PRESENTI NELL'HTML
  // ===============================
  const leftArrow = document.getElementById('prevSlide');
  const rightArrow = document.getElementById('nextSlide');

  if (leftArrow) leftArrow.addEventListener('click', prevSlide);
  if (rightArrow) rightArrow.addEventListener('click', nextSlide);

  // ===============================
  // AVVIO DELLO SLIDER
  // ===============================
  showSlide(currentSlide);
  setInterval(nextSlide, 3000);
});