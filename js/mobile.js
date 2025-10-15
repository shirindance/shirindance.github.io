// Rileva se il browser è mobile
const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

// Percorso corrente
let path = window.location.pathname;

// Se è un dispositivo mobile e non siamo già nella cartella /mobile
if (isMobile && !path.startsWith("/mobile")) {
    // Costruisce il percorso della versione mobile corrispondente
    // Mantiene file e sottocartelle
    const mobilePath = "/mobile" + path;
    
    // Reindirizza
    window.location.href = mobilePath;
}
