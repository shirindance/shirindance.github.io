// Rileva se il browser NON è mobile
const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

// Percorso corrente
let path = window.location.pathname;

// Se non è mobile e siamo in /mobile, torna alla versione desktop
if (!isMobile && path.includes("/mobile")) {
    // Rimuove la cartella /mobile dal path
    const desktopPath = path.replace("/mobile", "");
    
    // Reindirizza
    window.location.href = desktopPath;
}
