  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    // Prova a creare un URL assoluto per il link (anche se è relativo)
    const url = new URL(href, window.location.origin);

    // Se il dominio del link è diverso dal tuo → è un link esterno
    if (url.hostname !== window.location.hostname) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  });