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

  // Box di debug temporaneo, visibile sullo schermo
  const debugBox = document.createElement('div');
  debugBox.style.cssText = 'position:fixed; top:0; left:0; right:0; background:black; color:lime; padding:8px; font-size:11px; z-index:9999; word-wrap:break-word;';
  document.body.appendChild(debugBox);

  let currentPlaying = null;

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

    debugBox.textContent = `Box totali: ${videoBoxes.length} | Più vicino: ${closestBox ? 'trovato' : 'NESSUNO'} | Distanza: ${Math.round(closestDistance)}`;

    if (closestBox && closestBox !== currentPlaying) {
      if (currentPlaying) {
        currentPlaying.pause();
        currentPlaying.currentTime = 0;
      }
      const newVideo = closestBox.querySelector('video');

      if (newVideo) {
        newVideo.play().then(() => {
          debugBox.textContent += ' | PLAY OK';
        }).catch(err => {
          debugBox.textContent += ' | PLAY FALLITO: ' + err.message;
        });
        currentPlaying = newVideo;
      } else {
        debugBox.textContent += ' | VIDEO NON TROVATO NEL BOX';
      }
    }
  }

  let scrollTimeout;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(checkMostCenteredBox, 150);
  });

  checkMostCenteredBox();
}

});