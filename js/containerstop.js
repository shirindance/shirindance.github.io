// Attende che il DOM sia completamente caricato
document.addEventListener("DOMContentLoaded", () => {

  // Seleziona tutti i contenitori che vogliono avere l'effetto hover
  const containers = document.querySelectorAll(".hoverContainer2");

  // Per ciascun contenitore trovato
  containers.forEach(container => {

    // Seleziona il box visibile inizialmente
    const box2 = container.querySelector(".hoverBox2");

    // Seleziona il contenuto nascosto (calendario, immagine, testo, ecc.)
    const content2 = container.querySelector(".hoverContent2");

    // -------------------------------
    // Mostra il contenuto al passaggio del mouse sul box
    box2.addEventListener("mouseenter", () => {
      // Nasconde il box iniziale

      // Mostra il contenuto nascosto
      content2.style.display = "block";
    });

    
    // -------------------------------
    // Torna al box quando il mouse esce dal contenuto
    content2.addEventListener("mouseleave", () => {
      // Nasconde il contenuto
      content2.style.display = "none";
    });


    // 🔽 Quando il mouse esce da tutto il container (hamburger + menu)
    container.addEventListener("mouseleave", () => {
      content2.style.display = "none";
    });
     
  }); // fine del forEach
}); // fine del DOMContentLoaded
