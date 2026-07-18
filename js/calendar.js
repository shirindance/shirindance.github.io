// Aspetta che tutta la pagina sia caricata prima di eseguire il codice
document.addEventListener("DOMContentLoaded", function() {

  // Colori di sfondo associati a ogni categoria di evento
  const categoryColors = {
    "Eventi": "#ff9999",
    "LezioneKairos": "#99ccff",
    "LezioneLongara": "#ffcc66",
    "FCBD": "#99ff99",
    "Seminario": "#cccccc"
  };

  // Data di oggi, usata per sapere che mese/anno mostrare all'avvio
  let today = new Date();
  let currentMonth = today.getMonth();   // mese corrente (0 = Gennaio, 11 = Dicembre)
  let currentYear = today.getFullYear(); // anno corrente, es. 2026

  // Elementi HTML del calendario (tabella, etichetta mese, frecce)
  const table = document.getElementById("calendar");
  const tbody = table.querySelector("tbody");
  const monthYearLabel = document.getElementById("monthYear");
  const prevBtn = document.getElementById("prevMonth");
  const nextBtn = document.getElementById("nextMonth");

  // Elementi HTML del tooltip (il fumetto che mostra il testo dell'evento)
  const tooltip = document.getElementById('event-tooltip');
  const tooltipText = document.getElementById('event-tooltip-text');
  const tooltipLink = document.getElementById('event-tooltip-link');

  // Mostra il tooltip vicino alla cella cliccata, con testo (ed eventuale link) dell'evento
function showEventTooltip(eventObj, cell, dayKey) {
  tooltipText.textContent = eventObj.text;

  if (eventObj.url) {
    tooltipLink.href = eventObj.url;
    tooltipLink.style.display = 'inline-block';
  } else {
    tooltipLink.style.display = 'none';
  }

  const cellRect = cell.getBoundingClientRect();
  const viewportWidth = document.documentElement.clientWidth; // larghezza visibile reale, senza scrollbar

  let left = cellRect.left;
  const top = cellRect.bottom + 6;

  tooltip.style.left = '-9999px';
  tooltip.classList.remove('hidden');
  const tooltipWidth = tooltip.offsetWidth;

  const margin = 12; // margine di sicurezza dai bordi

  // Troppo a destra? Sposta a sinistra
  if (left + tooltipWidth > viewportWidth - margin) {
    left = viewportWidth - tooltipWidth - margin;
  }

  // Troppo a sinistra? Sposta a destra
  if (left < margin) {
    left = margin;
  }

  tooltip.style.top = `${top}px`;
  tooltip.style.left = `${left}px`;

  tooltip.dataset.currentCell = dayKey;
}

  // Nasconde il tooltip
  function hideEventTooltip() {
    tooltip.classList.add('hidden');
    tooltip.dataset.currentCell = ""; // dimentica quale giorno stava mostrando
  }

  // Se l'utente clicca in un punto qualsiasi della pagina (fuori da una cella), chiudi il tooltip
  document.addEventListener('click', () => {
    hideEventTooltip();
  });

  // Costruisce il calendario per il mese e l'anno indicati
  function renderCalendar(month, year) {
    tbody.innerHTML = ""; // svuota le righe del mese precedente

    const firstDay = new Date(year, month, 1).getDay(); // giorno della settimana del 1° (0=Dom)
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // quanti giorni ha il mese

    const monthNames = ["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno",
                        "Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];

    monthYearLabel.textContent = `${monthNames[month]} ${year}`; // aggiorna la scritta "Mese Anno"

    const startDay = (firstDay + 6) % 7; // sposta l'inizio settimana da Domenica a Lunedì

    let dayCount = 1; // contatore dei giorni via via inseriti

    // Continua a creare righe (settimane) finché non sono stati inseriti tutti i giorni del mese
    while (dayCount <= daysInMonth) {
      const row = document.createElement("tr"); // nuova riga = nuova settimana

      // Ogni riga ha 7 celle (Lun-Dom)
      for (let i = 0; i < 7; i++) {
        const cell = document.createElement("td");

        // Cella vuota: prima dell'inizio del mese, o dopo la sua fine
        if ((dayCount === 1 && i < startDay) || dayCount > daysInMonth) {
          cell.textContent = "";
        } else {
          cell.textContent = dayCount; // scrive il numero del giorno

          // Chiave usata per cercare l'evento, es. "2026-01-25"
          const dayKey = `${year}-${String(month+1).padStart(2,'0')}-${String(dayCount).padStart(2,'0')}`;

          // Se in questo giorno c'è un evento...
          if (events[dayKey]) {
            cell.style.cursor = "pointer";   // mostra la manina al passaggio del mouse
            cell.style.fontWeight = "bold";  // testo in grassetto

            // Uniforma il formato: se l'evento è solo testo, lo trasforma in oggetto {text, category}
            let eventObj = typeof events[dayKey] === "object"
               ? events[dayKey]
               : { text: events[dayKey], category: "altro" };

            cell.style.backgroundColor = categoryColors[eventObj.category]; // colora la cella

            // Click sulla cella: apre il tooltip, o lo richiude se era già aperto su questo stesso giorno
            cell.addEventListener("click", (e) => {
              const isAlreadyShowingThisDay = !tooltip.classList.contains('hidden') && tooltip.dataset.currentCell === dayKey;

              if (isAlreadyShowingThisDay) {
                hideEventTooltip(); // stesso giorno ricliccato: chiudi
              } else {
                showEventTooltip(eventObj, cell, dayKey); // giorno nuovo: apri/aggiorna
              }

              e.stopPropagation(); // evita che il click "risalga" e faccia scattare la chiusura globale
            });
          }

          dayCount++; // passa al giorno successivo
        }

        row.appendChild(cell); // aggiunge la cella alla riga
      }

      tbody.appendChild(row); // aggiunge la riga (settimana) completa alla tabella
    }
  }

  // Click sulla freccia "<": va al mese precedente
  prevBtn.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {       // se scendiamo sotto Gennaio...
      currentMonth = 11;          // ...torna a Dicembre...
      currentYear--;              // ...dell'anno prima
    }
    renderCalendar(currentMonth, currentYear);
  });

  // Click sulla freccia ">": va al mese successivo
  nextBtn.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {      // se superiamo Dicembre...
      currentMonth = 0;           // ...torna a Gennaio...
      currentYear++;              // ...dell'anno dopo
    }
    renderCalendar(currentMonth, currentYear);
  });

  // Disegna il calendario per la prima volta, al caricamento della pagina
  renderCalendar(currentMonth, currentYear);

});