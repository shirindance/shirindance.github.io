    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('ytPlayer');
    }

    // Se l’utente passa il mouse sopra, il video parte
    document.getElementById('videoBox').addEventListener('mouseenter', function() {
      if (player) player.playVideo();
    });

    // Quando il mouse esce, il video si ferma
    document.getElementById('videoBox').addEventListener('mouseleave', function() {
      if (player) player.pauseVideo();
    });