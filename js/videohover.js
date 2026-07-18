// ===============================
// GALLERIA VIDEO: desktop (hover) + mobile (scroll)
// ===============================
document.addEventListener("DOMContentLoaded", function() {

  // Rileva se il dispositivo ha un vero mouse (desktop) o no (touch/mobile)
  const supportsHover = window.matchMedia('(hover: hover)').matches;

  // Prende tutti i box video/immagine della galleria
  const videoBoxes = document.querySelectorAll('.video-box');

  if (supportsHover) {

    // ===============================
    // DESKTOP: play/pausa al passaggio del mouse
    // ===============================
    videoBoxes.forEach(box => {
      const video = box.querySelector('video');

      box.addEventListener('mouseenter', () => {
        video.play().catch(() => {});
      });

      box.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
      });
    });

  } else {

    // ===============================
    // MOBILE: fa partire il video del box più vicino al centro dello schermo
    // ===============================
    let currentPlaying = null; // il tag <video> attualmente in riproduzione

    function checkMostCenteredBox() {
      const screenCenter = window.innerHeight / 2;
      let closestBox = null;
      let closestDistance = Infinity;

      // Trova il box più vicino al centro dello schermo
      videoBoxes.forEach(box => {
        const rect = box.getBoundingClientRect();
        const boxCenter = rect.top + rect.height / 2;
        const distance = Math.abs(boxCenter - screenCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestBox = box;
        }
      });

      // Se il box più vicino è cambiato rispetto a prima, aggiorna quale video si vede
      if (closestBox && closestBox !== currentPlaying) {

        // Spegne visivamente e ferma tutti i box (garantisce che solo uno sia attivo alla volta)
        videoBoxes.forEach(box => {
          box.classList.remove('playing');
          const v = box.querySelector('video');
          if (v && v !== closestBox.querySelector('video')) {
            v.pause();
            v.currentTime = 0;
          }
        });

        const newVideo = closestBox.querySelector('video');
        if (newVideo) {
          newVideo.play().catch(() => {});
          closestBox.classList.add('playing'); // rende visibile questo video (vedi CSS)
          currentPlaying = newVideo;
        }
      }
    }

    // Ricalcola durante lo scroll, con un piccolo ritardo per non sovraccaricare
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(checkMostCenteredBox, 150);
    });

    // Controllo iniziale, appena la pagina è pronta
    checkMostCenteredBox();
  }

});