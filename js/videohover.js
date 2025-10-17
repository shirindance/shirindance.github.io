document.querySelectorAll('.video-box').forEach(box => {
      const video = box.querySelector('video');
      box.addEventListener('mouseenter', () => { video.play(); }); // parte il video
      box.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; }); // si ferma e torna all'inizio
    })