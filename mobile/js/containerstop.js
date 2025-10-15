// Attende che il DOM sia completamente caricato
document.addEventListener('DOMContentLoaded', () => {
  console.log("JS caricato");

  const hoverContainers = document.querySelectorAll('.hoverContainer2');
  console.log("hoverContainers trovati:", hoverContainers.length);

  hoverContainers.forEach(container => {
    const trigger = container.querySelector('.hoverBox2');
    const content = container.querySelector('.hoverContent2');

    console.log("Trigger trovato:", trigger);
    console.log("Content trovato:", content);

    if (!trigger || !content) {
      console.warn("Elemento trigger o content non trovato per un container", container);
      return;
    }

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      content.classList.toggle('active');
      console.log("Toggle attivato", content.classList);
    });


  });

  document.addEventListener('click', (e) => {
    hoverContainers.forEach(container => {
      const content = container.querySelector('.hoverContent2');

      // Se il click NON è dentro il container, chiudi il menu
      if (!container.contains(e.target)) {
        content.classList.remove('active');
      }
    });
  });

}); // fine del DOMContentLoaded
