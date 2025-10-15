// Attende che il DOM sia completamente caricato
document.addEventListener("DOMContentLoaded", () => {

  // Seleziona tutti i contenitori che vogliono avere l'effetto hover
  const containers = document.querySelectorAll(".hoverContainer");

  // Per ciascun contenitore trovato
  containers.forEach(container => {

    // Seleziona il box visibile inizialmente
    const box = container.querySelector(".hoverBox");

    // Seleziona il contenuto nascosto (calendario, immagine, testo, ecc.)
    const content = container.querySelector(".hoverContent");

    // -------------------------------
    // Mostra il contenuto al passaggio del mouse sul box
    box.addEventListener("mouseenter", () => {
      // Nasconde il box iniziale
      box.style.display = "none";

      // Mostra il contenuto nascosto
      content.style.display = "block";
    });



    
    // -------------------------------
    // Torna al box quando il mouse esce dal contenuto
    content.addEventListener("mouseleave", () => {
      // Nasconde il contenuto
      content.style.display = "none";

      // Mostra di nuovo il box iniziale
      box.style.display = "block";
    });

  }); // fine del forEach
}); // fine del DOMContentLoaded
