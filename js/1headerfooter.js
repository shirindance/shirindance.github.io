// =====================================
// HEADER E FOOTER UNIFICATI PER DESKTOP E MOBILE
// =====================================

// =====================================
// FUNZIONE: CREA HEADER DESKTOP
// =====================================
function createHeaderDesktop() {
  // HTML dell'header desktop
  const headerHTML = `
<header>
  <div class="top-bar">
    <div class="menu-container">

      <!-- MENU HAMBURGER -->
      <div class="hoverContainer2">
        <div class="hoverBox2">
          <div class="hamburger">
            <div></div>
            <div></div>
            <div></div>
          </div>
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
          <div class="hoverContent2">
            <a href="../Contatti/base.html">Contatti</a>
            <a href="../Contatti/iscrizioneNewsletter.html">Newsletter</a>
          </div>
        </div>

        <!-- BLOCCO PER CAMBIO FONT -->
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

  // Inserisce l'HTML nel div con id="header"
  const headerEl = document.getElementById("header");
  if (headerEl) headerEl.innerHTML = headerHTML;

  // Gestione hover menu per desktop (apertura al passaggio del mouse)
  const dropdowns = headerEl.querySelectorAll('.hoverContainer2');
  dropdowns.forEach(container => {
    const box = container.querySelector('.hoverBox2');
    const content = container.querySelector('.hoverContent2');

    box.addEventListener('mouseenter', () => {
      content.style.display = 'block';
    });

    container.addEventListener('mouseleave', () => {
      content.style.display = 'none';
    });
  });
}

// =====================================
// FUNZIONE: CREA FOOTER DESKTOP
// =====================================
function createFooterDesktop() {
  // HTML footer desktop
  const footerHTML = `
<footer>
  <div class="row">
    <div class="footer-left">
      <img src="../../img/home/logofoot.png" >
    </div>
    <div class="footer-center">
      <a style="font-size: 150%">®Shirin Dance di Silvana Difalco
      <span style="display: block; line-height: 2;">Compagnia di Danza Orientale, Folklore, Fusion, FCBD®, Bollywood.</span></a>
    </div>
    <div class="footer-right">
      <br><br>Sito a cura di
      <br>Laura Porceddu
    </div>
  </div>
</footer>
  `;

  const footerEl = document.getElementById("footer");
  if (footerEl) footerEl.innerHTML = footerHTML;
}

// =====================================
// FUNZIONE: CREA HEADER MOBILE
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

  // Attiva il menu cliccabile su mobile
  initHeaderInteractions();
}

// =====================================
// FUNZIONE: CREA FOOTER MOBILE
// =====================================
function createFooterMobile() {
  const footerHTML = `
<footer>
  <div class="row">
    <div class="footer-left">
      <img src="../../../img/home/logofoot.png">
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
// FUNZIONE: ATTIVA MENU MOBILE
// =====================================
function initHeaderInteractions() {
  // Seleziona tutti i contenitori hover
  const hoverContainers = document.querySelectorAll('.hoverContainer2');

  hoverContainers.forEach(container => {
    const trigger = container.querySelector('.hoverBox2');
    const content = container.querySelector('.hoverContent2');
    if (!trigger || !content) return;

    // Click sul trigger apre/chiude il menu
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      hoverContainers.forEach(other => {
        if (other !== container)
          other.querySelector('.hoverContent2').classList.remove('active');
      });
      content.classList.toggle('active');
    });
  });

  // Click fuori dal menu chiude tutti i menu
  document.addEventListener('click', (e) => {
    hoverContainers.forEach(container => {
      if (!container.contains(e.target)) {
        container.querySelector('.hoverContent2').classList.remove('active');
      }
    });
  });
}

// =====================================
// FUNZIONE PRINCIPALE: DECIDE SE MOBILE O DESKTOP
// =====================================
function initHeaderFooter() {
  const isMobile = window.innerWidth <= 768; // breakpoint mobile

  if (isMobile) {
    // Carica header e footer mobile
    createHeaderMobile();
    createFooterMobile();
  } else {
    // Carica header e footer desktop
    createHeaderDesktop();
    createFooterDesktop();
  }
}

// =====================================
// AVVIO AUTOMATICO AL DOM READY
// =====================================
document.addEventListener("DOMContentLoaded", () => {
  initHeaderFooter(); // decide automaticamente desktop/mobile
});
