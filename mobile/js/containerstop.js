// Attende che tutto l'HTML della pagina (il DOM) sia stato caricato
document.addEventListener('DOMContentLoaded', () => {

  // Seleziona tutti gli elementi che hanno la classe .hoverContainer2
  // (cioè i contenitori principali dei tuoi box interattivi)
  const hoverContainers = document.querySelectorAll('.hoverContainer2');

  // Per ogni container trovato...
  hoverContainers.forEach(container => {

    // Dentro ogni container, cerca il "trigger" (il bottone o area cliccabile)
    const trigger = container.querySelector('.hoverBox2');

    // ...e il "content", cioè il contenuto da mostrare/nascondere
    const content = container.querySelector('.hoverContent2');

    // Se in questo container manca uno dei due, esci e passa al successivo
    if (!trigger || !content) {
      return;
    }

    // Aggiunge un "ascoltatore" per l'evento click sul trigger
    trigger.addEventListener('click', (e) => {

      // Ferma la propagazione del click, per evitare che arrivi al document
      e.stopPropagation();

      // 🔹 CHIUSURA DI TUTTI GLI ALTRI CONTENUTI
      // Scorre tutti i container e chiude quelli che non sono quello cliccato
      hoverContainers.forEach(otherContainer => {
        const otherContent = otherContainer.querySelector('.hoverContent2');
        if (otherContainer !== container) {
          // Rimuove la classe "active" per chiudere gli altri
          otherContent.classList.remove('active');
        }
      });

      // 🔹 ATTIVA o DISATTIVA il contenuto del container cliccato
      // Se non è attivo, lo attiva; se è già attivo, lo chiude
      content.classList.toggle('active');
    });

  });

  // Aggiunge un listener al documento intero
  // Serve per chiudere tutti i menu se clicchi fuori da qualsiasi container
  document.addEventListener('click', (e) => {

    // Scorre tutti i container
    hoverContainers.forEach(container => {
      const content = container.querySelector('.hoverContent2');

      // Se il click NON è dentro questo container...
      if (!container.contains(e.target)) {
        // ...rimuove la classe "active", chiudendo il contenuto
        content.classList.remove('active');
      }
    });
  });

}); // 🔚 Fine del listener DOMContentLoaded
