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
        video.play().catch(() => {}); // ignora eventuali interruzioni normali
      });

      box.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; // torna all'inizio, pronto per la prossima volta
      });
    });

  } else {

    // ===============================
    // MOBILE: fa partire il video del box più vicino al centro dello schermo
    // ===============================
    let currentPlaying = null; // tiene traccia del video attualmente in riproduzione

    // Controlla quale box è più centrato e, se è cambiato, avvia il suo video
    function checkMostCenteredBox() {
      const screenCenter = window.innerHeight / 2;
      let closestBox = null;
      let closestDistance = Infinity;

      videoBoxes.forEach(box => {
        const rect = box.getBoundingClientRect();
        const boxCenter = rect.top + rect.height / 2;
        const distance = Math.abs(boxCenter - screenCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestBox = box;
        }
      });

      // Se il box più centrato è cambiato rispetto a prima, ferma il vecchio e avvia il nuovo
      if (closestBox && closestBox !== currentPlaying) {
        if (currentPlaying) {
          currentPlaying.pause();
          currentPlaying.currentTime = 0;
        }
        const newVideo = closestBox.querySelector('video');
        newVideo.play().catch(() => {});
        currentPlaying = newVideo;
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