    // =====================================
    // FUNZIONE CREATEHEADER
    // =====================================
function createHeader() {
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

          </div> <!-- fine extra-links -->

        </div> <!-- fine menu-container -->
      </div> <!-- fine top-bar -->
    </header>
  `;

  // Inserisce l'HTML
  const headerEl = document.getElementById("header");
  headerEl.innerHTML = headerHTML;

  // =====================================
  // EVENT DELEGATION: intercettiamo i click sugli hamburger
  // =====================================
  const dropdowns = headerEl.querySelectorAll('.hoverContainer2');

dropdowns.forEach(container => {
  const box = container.querySelector('.hoverBox2');
  const content = container.querySelector('.hoverContent2');

  // Mouse entra → apri
  box.addEventListener('mouseenter', () => {
    content.style.display = 'block';
  });

  // Mouse esce dall'intero container → chiudi
  container.addEventListener('mouseleave', () => {
    content.style.display = 'none';
  });
});;
}



    // =====================================
    // FUNZIONE CREATEFOOTER
    // =====================================
    function createFooter() {
      const footerHTML = `
        <footer>
            <div class="row">
                <div class="footer-left">
                    <img src="../../img/home/logofoot.png" >
                </div>
                <div class="footer-center">
                    <a style="font-size: 150%">®Shirin Dance di Silvana Difalco
                    <span style="display: block; line-height: 2;">Compagnia di Danza Orientale, Folklore, Fusion, FCBD®, Bollywood.</a>
                </div>
                <div class="footer-right">
                    <br><br>Sito a cura di
                    <br>Laura Porceddu
                </div>
            </div>
        </footer>
      `;
      document.getElementById("footer").innerHTML = footerHTML;
    }

    // =====================================
    // CARICAMENTO HEADER E FOOTER AL DOM READY
    // =====================================
    document.addEventListener("DOMContentLoaded", () => {
      createHeader();
      createFooter();
    });


    // <div id="header"></div>
 //<div id="footer"></div>
 //<script src="../../js/linkesterni.js" ></script>