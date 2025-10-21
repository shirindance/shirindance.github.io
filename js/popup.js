    // Mostra il popup automaticamente all'apertura della pagina
    window.addEventListener('load', () => {
      document.getElementById('popup-container').classList.remove('hidden');
    });

    // Chiudi il popup al click sulla X
    document.getElementById('closePopup').addEventListener('click', () => {
      document.getElementById('popup-container').classList.add('hidden');
    });