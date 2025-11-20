// =====================================
// CREA HEADER
// =====================================
function createHeader() {
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

  initHeaderInteractions(); // Attiva i menu
}


// =====================================
// CREA FOOTER
// =====================================
function createFooter() {
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
// ATTIVA MENU
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
      if (!container.contains(e.target)) {
        container.querySelector('.hoverContent2').classList.remove('active');
      }
    });
  });
}


// =====================================
// AVVIO AUTOMATICO SU OGNI PAGINA
// =====================================
document.addEventListener("DOMContentLoaded", () => {
  createHeader();
  createFooter();
});
