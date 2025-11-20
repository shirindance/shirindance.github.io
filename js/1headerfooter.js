// ==================================================
// HEADER, FOOTER, MENU MOBILE/DESKTOP, TOGGLE FONT, HERO SLIDER
// ==================================================

// ===============================
// FUNZIONE: HEADER DESKTOP
// ===============================
function createHeaderDesktop() {
  const headerHTML = `
<header>
  <div class="top-bar">
    <div class="menu-container">

      <!-- HAMBURGER + MENU -->
      <div class="hoverContainer2">
        <div class="hoverBox2">
          <div class="hamburger"><div></div><div></div><div></div></div>
        </div>
        <div class="hoverContent2">
          <a href="../../index.html">Home</a>
          <a href="about.html">About</a>
          <a href="contacts.html">Contacts</a>
        </div>
      </div>

      <!-- EXTRA LINKS -->
      <div class="extra-links">
        <a href="../../index.html">HOME</a>

        <!-- Chi siamo -->
        <div class="hoverContainer2">
          <div class="hoverBox2">CHI SIAMO</div>
          <div class="hoverContent2">
            <a href="../chi siamo/lanostrastoria.html">La nostra storia</a>
            <a href="../chi siamo/base.html">La Scuola</a>
            <a href="../chi siamo/base.html">La Compagnia</a>
            <a href="../chi siamo/base.html">Rainbow Tribe</a>
          </div>
        </div>

        <!-- Gallery -->
        <div class="hoverContainer2">
          <div class="hoverBox2">GALLERY</div>
          <div class="hoverContent2">
            <a href="../Gallery/base.html">Foto</a>
            <a href="../Gallery/base.html">Video</a>
            <a href="../Gallery/base.html">Racconti</a>
          </div>
        </div>

        <!-- Blog -->
        <div class="hoverContainer2">
          <div class="hoverBox2">BLOG</div>
          <div class="hoverContent2">
            <a href="../Blog/base.html">Articoli</a>
            <a href="../Blog/base.html">Reel</a>
            <a href="../Blog/base.html">Storie</a>
          </div>
        </div>

        <!-- Toggle font leggibilità -->
        <div class="hoverContainer2">
          <div class="hoverBox2" style="font-family: Arial, Helvetica, sans-serif">Leggibilità</div>
          <div class="hoverContent2" style="font-family: Arial, Helvetica, sans-serif; margin-left: -60%;">
            <span id="toggleFont" style="cursor:pointer; text-decoration: underline; text-align: center">Aumenta la leggibilità</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</header>
  `;
  const headerEl = document.getElementById("header");
  if (headerEl) headerEl.innerHTML = headerHTML;

  // Dropdown desktop (hover)
  const dropdowns = headerEl.querySelectorAll('.hoverContainer2');
  dropdowns.forEach(container => {
    const box = container.querySelector('.hoverBox2');
    const content = container.querySelector('.hoverContent2');
    box.addEventListener('mouseenter', () => content.style.display = 'block');
    container.addEventListener('mouseleave', () => content.style.display = 'none');
  });

  // Inizializza toggle font
  initDyslexiaToggle();
}

// ===============================
// FUNZIONE: HEADER MOBILE
// ===============================
function createHeaderMobile() {
  const headerHTML = `
<header>
  <div class="top-bar-mobile">
    <div class="menu-container">

      <!-- HAMBURGER -->
      <div class="hoverContainer2">
        <div class="hoverBox2">
          <div class="hamburger"><div></div><div></div><div></div></div>
        </div>
        <div class="hoverContent2">
          <a href="../../index.html">Home</a>
          <a href="about.html">About</a>
          <a href="contacts.html">Contacts</a>
        </div>
      </div>

      <!-- EXTRA LINKS MOBILE -->
      <div class="extra-links">
        <!-- Chi siamo -->
        <div class="hoverContainer2">
          <div class="hoverBox2">CHI SIAMO</div>
          <div class="hoverContent2">
            <a href="../chi siamo/lanostrastoria.html">La nostra storia</a>
            <a href="scuola.html">La Scuola</a>
            <a href="compagnia.html">La Compagnia</a>
            <a href="fcbd.html">Rainbow Tribe</a>
          </div>
        </div>

        <!-- Gallery -->
        <div class="hoverContainer2">
          <div class="hoverBox2">GALLERY</div>
          <div class="hoverContent2">
            <a href="foto.html">Foto</a>
            <a href="video.html">Video</a>
            <a href="interviste.html">Racconti</a>
          </div>
        </div>

        <!-- Blog -->
        <div class="hoverContainer2">
          <div class="hoverBox2">BLOG</div>
          <div class="hoverContent2">
            <a href="articoli.html">Articoli</a>
            <a href="reel.html">Reel</a>
            <a href="storie.html">Storie</a>
          </div>
        </div>

        <!-- Toggle font leggibilità -->
        <div class="hoverContainer2">
          <div class="hoverBox2" style="font-family: Arial, Helvetica, sans-serif">Leggibilità</div>
          <div class="hoverContent2" style="font-family: Arial, Helvetica, sans-serif;">
            <span id="toggleFont" style="cursor:pointer; text-decoration: underline; text-align: center; font-size: 150%">Aumenta la leggibilità</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</header>
  `;
  const headerEl = document.getElementById("header");
  if (headerEl) headerEl.innerHTML = headerHTML;

  // Inizializza click menu mobile
  initMobileMenuInteractions();

  // Inizializza toggle font
  initDyslexiaToggle();
}

// ===============================
// FUNZIONE: FOOTER
// ===============================
function createFooter() {
  const footerHTML = `
<footer>
  <div class="row">
    <div class="footer-left">
      <img src="../../img/home/logofoot.png">
    </div>
    <div class="footer-center">
      <a style="font-size: 150%">®Shirin Dance di Silvana Difalco
        <span style="display:block; line-height:2;">Compagnia di Danza Orientale, Folklore, Fusion, FCBD®, Bollywood.</span>
      </a>
    </div>
    <div class="footer-right">
      <br><br>Sito a cura di Laura Porceddu
    </div>
  </div>
</footer>
  `;
  const footerEl = document.getElementById("footer");
  if (footerEl) footerEl.innerHTML = footerHTML;
}

// ===============================
// FUNZIONE: MENU MOBILE CLICK
// ===============================
function initMobileMenuInteractions() {
  const hoverContainers = document.querySelectorAll('.hoverContainer2');

  hoverContainers.forEach(container => {
    const trigger = container.querySelector('.hoverBox2');
    const content = container.querySelector('.hoverContent2');
    if (!trigger || !content) return;

    trigger.addEventListener('click', e => {
      e.stopPropagation();
      // Chiude tutte le altre tendine aperte
      hoverContainers.forEach(other => {
        if (other !== container) {
          const otherContent = other.querySelector('.hoverContent2');
          if (otherContent) otherContent.classList.remove('active');
        }
      });
      content.classList.toggle('active'); // apre/chiude quella cliccata
    });
  });

  // Click fuori chiude tutte
  document.addEventListener('click', e => {
    hoverContainers.forEach(container => {
      const content = container.querySelector('.hoverContent2');
      if (!container.contains(e.target)) content.classList.remove('active');
    });
  });
}

// ===============================
// FUNZIONE: HERO SLIDER
// ===============================
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slider img');
  let current = 0;
  if (!slides.length) return;

  slides[current].classList.add('active');

  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 5000);
}

// ===============================
// FUNZIONE: TOGGLE FONT DYSLEXIA
// ===============================
function initDyslexiaToggle() {
  const body = document.body;
  let dyslexiaMode = localStorage.getItem("dyslexiaFont") === "true";
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

  // Evento click sul pulsante
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      dyslexiaMode = !dyslexiaMode;
      localStorage.setItem("dyslexiaFont", dyslexiaMode);
      applyFontSetting();
    });
  }
}

// ===============================
// FUNZIONE PRINCIPALE
// ===============================
function initHeaderFooter() {
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    createHeaderMobile();
  } else {
    createHeaderDesktop();
  }
  createFooter();
}

// ===============================
// AVVIO AUTOMATICO
// ===============================
document.addEventListener('DOMContentLoaded', () => {
  initHeaderFooter();
  initHeroSlider();
});
