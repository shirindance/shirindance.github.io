document.addEventListener("DOMContentLoaded", function() {

  const supportsHover = window.matchMedia('(hover: hover)').matches;
  console.log('Supporta hover?', supportsHover); // DEBUG

  const videoBoxes = document.querySelectorAll('.video-box');

  if (supportsHover) {
    videoBoxes.forEach(box => {
      const video = box.querySelector('video');

box.addEventListener('mouseenter', () => {
  console.log('Mouse entrato nel box'); // DEBUG
  video.play().catch(err => console.log('Errore play:', err)); // DEBUG
});

      box.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
      });
    });

  } else {
    let currentPlaying = null;

    const observer = new IntersectionObserver((entries) => {
      let mostVisible = null;
      let highestRatio = 0;

      entries.forEach(entry => {
        if (entry.intersectionRatio > highestRatio) {
          highestRatio = entry.intersectionRatio;
          mostVisible = entry.target;
        }
      });

      if (mostVisible && mostVisible !== currentPlaying && highestRatio > 0.6) {
        if (currentPlaying) {
          currentPlaying.pause();
          currentPlaying.currentTime = 0;
        }
        const newVideo = mostVisible.querySelector('video');
        newVideo.play().catch(() => {});
        currentPlaying = newVideo;
      }
    }, {
      threshold: [0.3, 0.6, 0.9]
    });

    videoBoxes.forEach(box => observer.observe(box));
  }

});