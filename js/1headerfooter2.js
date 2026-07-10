// ==================================================
// HEADER, FOOTER, MENU MOBILE/DESKTOP, TOGGLE FONT
// ==================================================

// =====================================
// CREA HEADER DESKTOP
// =====================================
function createHeaderDesktop() {
  const headerHTML = `
<header>
  <div class="top-bar">
    <div class="menu-container">

      <!-- MENU HAMBURGER -->
      <div class="hoverContainer2">
        <div class="hoverBox2">HOME</div>
      </div>

      <div class="hoverContainer2">
        <div class="hoverBox2">CHI SIAMO</div>
          <div class="hoverContent2">
            <a href="../chi siamo/lanostrastoria.html">La nostra storia</a>
            <a href="../chi siamo/base.html">La Scuola</a>
            <a href="../chi siamo/base.html">La Compagnia</a>
            <a href="../chi siamo/base.html">Rainbow Tribe</a>
          </div>
        </div>

        <div class="hoverContainer2">
          <div class="hoverBox2">GALLERY</div>
          <div class="hoverContent2">
            <a href="../Gallery/base.html">Foto</a>
            <a href="../Gallery/base.html">Video</a>
            <a href="../Gallery/base.html">Racconti</a>
          </div>
        </div>

        <div class="hoverContainer2">
          <div class="hoverBox2">BLOG</div>
          <div class="hoverContent2">
            <a href="../Blog/base.html">Articoli</a>
            <a href="../Blog/base.html">Reel</a>
            <a href="../Blog/base.html">Storie</a>
          </div>
        </div>
    
        <div class="hoverContainer2">
            <div class="hoverBox2">CONTATTI</div>
        </div>

        <div class="hoverContainer2">
          <div class="hoverBox2" style="font-family: Arial, Helvetica, sans-serif">Leggibilità</div>
          <div class="hoverContent2" style="font-family: Arial, Helvetica, sans-serif; margin-left: -60%;">
            <span id="toggleFont" style="cursor:pointer; text-decoration: underline; text-align: center">
              Aumenta la leggibilità
            </span>
          </div>
        </div>

      </div> <!-- fine extra-links -->

    </div> <!-- fine menu-container -->
  </div> <!-- fine top-bar -->
</header>
  `;
  const headerEl = document.getElementById("header");
  if (headerEl) headerEl.innerHTML = headerHTML;

  // =====================================
  // HOVER MENU DESKTOP
  // =====================================
  const dropdowns = headerEl.querySelectorAll('.hoverContainer2');
  dropdowns.forEach(container => {
    const box = container.querySelector('.hoverBox2');
    const content = container.querySelector('.hoverContent2');
    box.addEventListener('mouseenter', () => content.style.display = 'block');
    container.addEventListener('mouseleave', () => content.style.display = 'none');
  });

  // FIX: il toggle "leggibilità" deve funzionare anche su desktop
  initDyslexiaToggle();
}

// =====================================
// CREA HEADER MOBILE
// =====================================
function createHeaderMobile() {
  const headerHTML = `
<header>
  <div class="top-bar-mobile">
    <div class="menu-container">

      <div class="hoverContainer2">
        <div class="hoverBox2">
          <div class="hamburger">
            <div></div><div></div><div></div>
          </div>
        </div>
        <div class="hoverContent2">              
          <a href="../1Home/index.html">Home</a>
          <a href="about.html">About</a>
          <a href="contacts.html">Contacts</a>
        </div>
      </div>

      <div class="extra-links">
        <div class="hoverContainer2">
          <div class="hoverBox2"><a>CHI SIAMO</a></div>
          <div class="hoverContent2">              
            <a href="../chi siamo/lanostrastoria.html">La nostra storia</a>
            <a href="scuola.html">La Scuola</a>
            <a href="compagnia.html">La Compagnia</a>
            <a href="fcbd.html">Rainbow Tribe</a>
          </div>
        </div>

        <div class="hoverContainer2">
          <div class="hoverBox2"><a>GALLERY</a></div>
          <div class="hoverContent2">              
            <a href="foto.html">Foto</a>
            <a href="video.html">Video</a>
            <a href="interviste.html">Racconti</a>
          </div>
        </div>

        <div class="hoverContainer2">
          <div class="hoverBox2"><a>BLOG</a></div>
          <div class="hoverContent2"> 
            <a href="../Blog/base.html">Base</a>             
            <a href="articoli.html">Articoli</a>
            <a href="reel.html">Reel</a>
            <a href="storie.html">Storie</a>
          </div>
        </div>


        <div class="hoverContainer2">
          <div class="hoverBox2" style="font-family: Arial, Helvetica, sans-serif">Leggibilità</div>
          <div class="hoverContent2" style="font-family: Arial, Helvetica, sans-serif;">              
            <span id="toggleFont" style="cursor:pointer; text-decoration: underline; text-align: center; font-size: 150%">
              Aumenta la leggibilità
            </span>
          </div>
        </div>

      </div>
    </div>
  </div>
</header>
  `;

  const headerEl = document.getElementById("header");
  if (headerEl) headerEl.innerHTML = headerHTML;

  initHeaderInteractions(); // Attiva i menu (click mobile)

  // FIX: mancava questa chiamata, per questo il toggle non funzionava su mobile
  initDyslexiaToggle();
}

// =====================================
// CREA FOOTER DESKTOP
// =====================================
function createFooter() {
  const footerHTML = `
<footer>
  <div class="row">
    <div class="footer-left">
      <img src="../../img/home/logofoot.png">
    </div>
    <div class="footer-center">
      <a style="font-size: 150%">®Shirin Dance di Silvana Difalco
        <span style="display: block; line-height: 2;">
          Compagnia di Danza Orientale, Folklore, Fusion, FCBD®, Bollywood.
        </span>
      </a>
    </div>
    <div class="footer-right">
      <br><br>Sito a cura di<br>Laura Porceddu
    </div>
  </div>
</footer>
  `;
  const footerEl = document.getElementById("footer");
  if (footerEl) footerEl.innerHTML = footerHTML;
}

// =====================================
// CREA FOOTER MOBILE
// =====================================
function createFooterMobile() {
  const footerHTML = `
<footer>
  <div class="row">
    <div class="footer-left">
      <img src="../../img/home/logofoot.png" width="60">
    </div>
    <div class="footer-center">
      <a style="font-size: 100%">®Shirin Dance di Silvana Difalco
        <span style="display: block; line-height: 2; font-size: 70%">
          Compagnia di Danza Orientale, Folklore, Fusion, FCBD®, Bollywood.
        </span>
      </a>
    </div>
    <div class="footer-right">
      <br><br><span style="font-size: 50%">Sito a cura di<br>Laura Porceddu</span>
    </div>
  </div>
</footer>
  `;
  const footerEl = document.getElementById("footer");
  if (footerEl) footerEl.innerHTML = footerHTML;
}

// =====================================
// MENU MOBILE CLICK
// =====================================
function initHeaderInteractions() {
  const hoverContainers = document.querySelectorAll('.hoverContainer2');
  hoverContainers.forEach(container => {
    const trigger = container.querySelector('.hoverBox2');
    const content = container.querySelector('.hoverContent2');
    if (!trigger || !content) return;

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      hoverContainers.forEach(other => {
        if (other !== container)
          other.querySelector('.hoverContent2').classList.remove('active');
      });
      content.classList.toggle('active');
    });
  });

  document.addEventListener('click', (e) => {
    hoverContainers.forEach(container => {
      const content = container.querySelector('.hoverContent2');
      if (!container.contains(e.target)) content.classList.remove('active');
    });
  });
}

// =====================================
// TOGGLE FONT DYSLEXIA
// =====================================
function initDyslexiaToggle() {
  const body = document.body;
  let dyslexiaMode = localStorage.getItem("dyslexiaFont") === "true";
  const toggleBtn = document.getElementById("toggleFont");

  function applyFontSetting() {
    if (dyslexiaMode) {
      body.classList.add("dyslexia-font");
      if (toggleBtn) toggleBtn.textContent = "Torna al carattere predefinito";
    } else {
      body.classList.remove("dyslexia-font");
      if (toggleBtn) toggleBtn.textContent = "Aumenta la leggibilità";
    }
  }

  applyFontSetting();

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      dyslexiaMode = !dyslexiaMode;
      localStorage.setItem("dyslexiaFont", dyslexiaMode);
      applyFontSetting();
    });
  }
}

// =====================================
// FUNZIONE PRINCIPALE
// =====================================
const MOBILE_BREAKPOINT = 768;

// Tiene traccia di quale versione (mobile/desktop) è attualmente montata,
// così ricostruiamo l'header/footer solo quando serve davvero.
let currentLayout = null; // "mobile" | "desktop" | null

function renderHeaderFooter() {
  const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
  const targetLayout = isMobile ? "mobile" : "desktop";

  // FIX: evita di ricostruire tutto se il layout non è cambiato
  // (prima succedeva ad ogni singolo pixel di resize)
  if (targetLayout === currentLayout) return;
  currentLayout = targetLayout;

  if (isMobile) {
    createHeaderMobile();
    createFooterMobile();
  } else {
    createHeaderDesktop();
    createFooter();
  }
}

// FIX: piccolo debounce sul resize, per non ricalcolare
// centinaia di volte mentre l'utente ridimensiona la finestra
// o ruota lo smartphone.
function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

// =====================================
// AVVIO AUTOMATICO
// =====================================
// FIX: un solo punto di avvio (prima veniva chiamato due volte:
// sia su DOMContentLoaded sia su "load", causando doppio lavoro
// ad ogni apertura pagina).
document.addEventListener("DOMContentLoaded", renderHeaderFooter);
window.addEventListener("resize", debounce(renderHeaderFooter, 200));