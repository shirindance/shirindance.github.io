// accessibility.js
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // Legge lo stato salvato
  let dyslexiaMode = localStorage.getItem("dyslexiaFont") === "true";

  // Crea o trova il pulsante di toggle
  const toggleBtn = document.getElementById("toggleFont");

  function applyFontSetting() {
    if (dyslexiaMode) {
      body.classList.add("dyslexia-font");
      if (toggleBtn) toggleBtn.textContent = "Torna alle carattere predefinito";
    } else {
      body.classList.remove("dyslexia-font");
      if (toggleBtn) toggleBtn.textContent = "Aumenta la leggibilità";
    }
  }

  // Applica subito il font corretto
  applyFontSetting();

  // Se esiste il pulsante nella pagina, aggiunge l’evento
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      dyslexiaMode = !dyslexiaMode;
      localStorage.setItem("dyslexiaFont", dyslexiaMode);
      applyFontSetting();
    });
  }
});
