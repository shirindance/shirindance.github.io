// Quando il DOM è pronto, esegui tutto il codice del calendario
document.addEventListener("DOMContentLoaded", function() {

  // 1️⃣ Definizione degli eventi
  // Chiave: "YYYY-MM-DD", Valore: descrizione evento o oggetto con testo e URL
  const events = {
    "2025-10-12": { text: "Flashmob FCBD", url: "fcbd.html" },
    "2025-10-16": "Livello intermedio Kairos",
    "2025-10-14": "Livello intermedio-avanzato Longara",
    "2025-10-18": "Seminario di danza moderna",
    "2025-10-25": "Festa di fine corso",
    "2025-11-01": "Evento novembre"
  };

  // 2️⃣ Variabili per il mese e l'anno correnti
  let today = new Date();           // ottiene la data odierna
  let currentMonth = today.getMonth();  // mese corrente (0-11)
  let currentYear = today.getFullYear(); // anno corrente (4 cifre)

  // 3️⃣ Selezione degli elementi HTML necessari
  const table = document.getElementById("calendar"); // seleziona la tabella
  const tbody = table.querySelector("tbody");       // seleziona il corpo della tabella
  const monthYearLabel = document.getElementById("monthYear"); // dove mostrare mese e anno
  const prevBtn = document.getElementById("prevMonth"); // pulsante mese precedente
  const nextBtn = document.getElementById("nextMonth"); // pulsante mese successivo

  // 4️⃣ Funzione per generare il calendario
  function renderCalendar(month, year) {
    tbody.innerHTML = ""; // svuota eventuali righe precedenti nel calendario

    

    // Primo giorno del mese (0=Dom, 1=Lun, …)
    const firstDay = new Date(year, month, 1).getDay(); // 0=Dom, 1=Lun
    // Numero totale di giorni nel mese
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Array con i nomi dei mesi
    const monthNames = ["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno",
                        "Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];
    
    // Aggiorna la label con mese e anno
    monthYearLabel.textContent = `${monthNames[month]} ${year}`;

    // Calcolo giorno di inizio della settimana spostato: JS 0=Dom, noi vogliamo Lun=0
    const startDay = (firstDay + 6) % 7; // JS 0=Dom → Lun=0

    let dayCount = 1;  // contatore dei giorni del mese

    // Ciclo principale: genera righe finché non sono inseriti tutti i giorni
    while (dayCount <= daysInMonth) {
      const row = document.createElement("tr"); // crea una nuova riga per la settimana

      // 7 celle per settimana
      for (let i = 0; i < 7; i++) {
        const cell = document.createElement("td");// crea una cella della tabella

        // Se siamo nella prima riga e prima del primo giorno, oppure oltre l'ultimo giorno
        if ((dayCount === 1 && i < startDay) || dayCount > daysInMonth) {
          cell.textContent = "";// cella vuota
        } else {
          cell.textContent = dayCount;// scrive il numero del giorno

          const dayKey = `${year}-${String(month+1).padStart(2,'0')}-${String(dayCount).padStart(2,'0')}`;
          if (events[dayKey]) {
            cell.style.cursor = "pointer";
            cell.style.fontWeight = "bold";
            cell.title = typeof events[dayKey] === "object" ? events[dayKey].text : events[dayKey];
            cell.addEventListener("click", () => {
              if (typeof events[dayKey] === "object" && events[dayKey].url) {
                window.location.href = events[dayKey].url;
              }
            });
          }

          dayCount++;
        }

        row.appendChild(cell);
      }

      tbody.appendChild(row); // aggiungi riga completa
    }
    
  }

  // 5️⃣ Pulsanti mese precedente / successivo
  prevBtn.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
  });

  nextBtn.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
  });

  // 6️⃣ Mostra calendario iniziale
  renderCalendar(currentMonth, currentYear);

});
