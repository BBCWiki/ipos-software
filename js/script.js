var vistaCorrente = 'view-cassa';
tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: {
          bluePrimary: '#1d4ed8',
          blueHover: '#1e40af',
          steelBlue: '#5a82c4',
          navyText: '#0f172a',
          slateBody: '#334155',
          slateMuted: '#64748b',
          emeraldLive: '#10b981',
          bgLight: '#f8fafc',
          borderLight: '#e2e8f0'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        courier: ['Courier Prime', 'monospace'],
        fashion: ['Playfair Display', 'serif']
      }
    }
  }
};

// Catalogo prodotti demo
var prodotti = [
  // SCIARPE (Taglia Unica T.U)
  { id: 0, prodId: "550B", codice: "239771", nome: "SCALDA COLLO MAGLIA DOPPIO GIRO", cat: "UOMO ABBIGLIAM. -SCIARPA", descBreve: "SCIARPA", prezzo: 16.99, stagione: "AI 2022", taglie: ["T.U"], colori: ["BLU BLU [036]", "NERO NERO [130]"] },
  { id: 1, prodId: "550S", codice: "239788", nome: "SCIARPA MOULINE CON RIGHE IN TINTA UNITA 30x180", cat: "UOMO ABBIGLIAM. -SCIARPA", descBreve: "SCIARPA", prezzo: 19.99, stagione: "AI 2022", taglie: ["T.U"], colori: ["BLU BLU [036]", "NERO NERO [130]", "GRIGIO MELANGE [089]"] },
  { id: 3, prodId: "55BJ", codice: "240175", nome: "CUFFIA NYLON CON PON PON E RISVOLTO COSTINE", cat: "DONNA ABBIGLIAM -CAPPELLO", descBreve: "CAPPELLO", prezzo: 19.99, stagione: "AI 2022", taglie: ["T.U"], colori: ["BLU BLU [036]", "NERO NERO [130]", "ROSA CIPRIA [024]"] },
  { id: 4, prodId: "55CM", codice: "240214", nome: "BASCO CANNETTATO TINTA UNITA", cat: "DONNA ABBIGLIAM -CAPPELLO", descBreve: "CAPPELLO", prezzo: 14.99, stagione: "AI 2022", taglie: ["T.U"], colori: ["BLU BLU [036]", "NERO NERO [130]"] },

  // --- MAGLIERIA & FELPE ---
  { id: 2, prodId: "554U", codice: "239934", nome: "MEZZA MAGLIA MEZZA FELPA CON MARSUPIO E FIBBIE", cat: "B.NO ABBIGLIAM. -MAGLIA GRANDE", descBreve: "MAGLIA GRANDE", prezzo: 19.99, stagione: "AI 2022", taglie: ["S", "M", "L", "XL"], colori: ["BLU BLU [036]", "NERO NERO [130]", "BIANCO OTTICO [001]"] },
  { id: 5, prodId: "55DE", codice: "240242", nome: "MAGLIA STAMPA ASTRONAUTA", cat: "B.NO ABBIGLIAM. -NEONATO", descBreve: "MAGLIA NEONATO", prezzo: 9.99, stagione: "AI 2022", taglie: ["3A", "4A", "6A", "8A", "10A"], colori: ["BLU BLU [036]", "ROSSO VIVO [045]", "NERO NERO [130]"] },
  { id: 6, prodId: "55HT", codice: "240401", nome: "MAGLIA CON DINOSAURO", cat: "B.NO ABBIGLIAM. -NEONATO", descBreve: "MAGLIA NEONATO", prezzo: 9.99, stagione: "AI 2022", taglie: ["3A", "4A", "6A", "8A", "10A"], colori: ["VERDE BOSCO [062]", "BLU BLU [036]", "NERO NERO [130]"] },
  { id: 15, prodId: "55FL", codice: "241450", nome: "FELPA OVERSIZE CON CAPPUCCIO E STAMPA RETRO", cat: "DONNA ABBIGLIAM -FELPA", descBreve: "FELPA", prezzo: 45.99, stagione: "AI 2022", taglie: ["XS", "S", "M", "L"], colori: ["GRIGIO MELANGE [089]", "NERO NERO [130]", "PANNA [005]"] },
  { id: 16, prodId: "55TS", codice: "241510", nome: "T-SHIRT MANICA CORTA LOGO EMBOSSED", cat: "UOMO ABBIGLIAM. -T-SHIRT", descBreve: "T-SHIRT", prezzo: 22.99, stagione: "PE 2022", taglie: ["S", "M", "L", "XL", "XXL"], colori: ["BIANCO [001]", "NERO [130]", "BLU NAVY [037]"] },

  // --- ABITI ---
  { id: 7, prodId: "55IV", codice: "240439", nome: "ABITO MAGLIA TRECCE", cat: "DONNA ABBIGLIAM -MAGLIA GIOVANE", descBreve: "ABITO MAGLIA", prezzo: 29.99, stagione: "AI 2022", taglie: ["XS", "S", "M", "L", "XL"], colori: ["BLU BLU [036]", "NERO NERO [130]", "BEIGE CAMMELLO [018]"] },
  { id: 8, prodId: "55J-", codice: "240468", nome: "ABITO MAGLIA GC TASCHE A MARSUPIO", cat: "DONNA CONFEZ. -ABITO GIOV.", descBreve: "ABITO GIOV.", prezzo: 34.99, stagione: "AI 2022", taglie: ["S", "M", "L", "XL"], colori: ["BLU BLU [036]", "NERO NERO [130]"] },
  { id: 9, prodId: "55JN", codice: "240467", nome: "ABITO MAGLIA DV TASCHE A MARSUPIO", cat: "DONNA CONFEZ. -ABITO GIOV.", descBreve: "ABITO GIOV.", prezzo: 39.99, stagione: "AI 2022", taglie: ["S", "M", "L", "XL"], colori: ["BLU BLU [036]", "NERO NERO [130]"] },
  { id: 17, prodId: "55AB", codice: "241620", nome: "ABITO MIDI FLOREALE CON SCOLLO A V", cat: "DONNA CONFEZ. -ABITO", descBreve: "ABITO MIDI", prezzo: 49.99, stagione: "PE 2022", taglie: ["38", "40", "42", "44", "46"], colori: ["MULTICOLOR FIORE [999]", "NERO/BIANCO [131]"] },

  // --- PANTALONI & JEANS ---
  { id: 10, prodId: "55PA", codice: "241011", nome: "PANTALONE CLASSICO TINTA UNITA", cat: "UOMO ABBIGLIAM. -PANTALONI", descBreve: "PANTALONE", prezzo: 49.99, stagione: "AI 2022", taglie: ["44", "46", "48", "50", "52", "54"], colori: ["BLU BLU [036]", "NERO NERO [130]", "GRIGIO SCURO [091]"] },
  { id: 11, prodId: "55PB", codice: "241028", nome: "JEANS SLIM FIT CINQUE TASCHE", cat: "UOMO ABBIGLIAM. -JEANS", descBreve: "JEANS", prezzo: 59.99, stagione: "AI 2022", taglie: ["44", "46", "48", "50", "52"], colori: ["DENIM SCURO [040]", "DENIM CHIARO [041]"] },
  { id: 18, prodId: "55PC", codice: "241700", nome: "PANTALONE CARGO UTILITY CON TASCONI", cat: "UOMO ABBIGLIAM. -PANTALONI", descBreve: "CARGO", prezzo: 54.99, stagione: "AI 2022", taglie: ["46", "48", "50", "52", "54"], colori: ["VERDE MILITARE [065]", "NERO [130]", "BEIGE [015]"] },
  { id: 19, prodId: "55JD", codice: "241755", nome: "JEANS DONNA MOM FIT VITA ALTA", cat: "DONNA ABBIGLIAM -JEANS", descBreve: "JEANS MOM", prezzo: 49.99, stagione: "AI 2022", taglie: ["38", "40", "42", "44", "46"], colori: ["DENIM MEDIUM [042]", "DENIM VINTAGE [043]"] },
  { id: 20, prodId: "55PL", codice: "241810", nome: "PANTALONE PALAZZO ELEGANTE FLUIDO", cat: "DONNA ABBIGLIAM -PANTALONI", descBreve: "PANTALONE", prezzo: 44.99, stagione: "AI 2022", taglie: ["38", "40", "42", "44"], colori: ["NERO [130]", "BLU NAVY [037]", "PANNA [005]"] },

  // --- GIACCHE & CAPPOTTI ---
  { id: 12, prodId: "55GC", codice: "241150", nome: "GIACCA BLAZER IN TESSUTO STRUCTURED", cat: "DONNA ABBIGLIAM -GIACCA", descBreve: "GIACCA BLAZER", prezzo: 89.99, stagione: "AI 2022", taglie: ["38", "40", "42", "44", "46"], colori: ["NERO NERO [130]", "BLU NAVY [037]", "BEIGE [015]"] },
  { id: 13, prodId: "55GD", codice: "241182", nome: "CAPPOTTO LUNGO CON BOTTONI A CONTRASTO", cat: "DONNA CONFEZ. -CAPPOTTO", descBreve: "CAPPOTTO", prezzo: 129.99, stagione: "AI 2022", taglie: ["40", "42", "44", "46"], colori: ["CAMMELLO [018]", "NERO NERO [130]"] },
  { id: 21, prodId: "55GB", codice: "241900", nome: "GIUBBOTTO BOMBER IMBOTTITO EFFETTO LUCIDO", cat: "UOMO ABBIGLIAM. -GIUBBOTTO", descBreve: "BOMBER", prezzo: 99.99, stagione: "AI 2022", taglie: ["46", "48", "50", "52", "54"], colori: ["NERO [130]", "VERDE MILITARE [065]", "BLU [036]"] },
  { id: 22, prodId: "55CH", codice: "241950", nome: "GIACCA IN ECOPELLE CHIUSURA ASIMMETRICA", cat: "DONNA ABBIGLIAM -GIACCA", descBreve: "GIACCA PELLE", prezzo: 79.99, stagione: "AI 2022", taglie: ["38", "40", "42", "44"], colori: ["NERO [130]", "BORDEAUX [048]"] },

  // --- CAMICIE ---
  { id: 14, prodId: "55CA", codice: "241300", nome: "CAMICIA CLASSICA POPELINE COTONE", cat: "UOMO ABBIGLIAM. -CAMICIA", descBreve: "CAMICIA", prezzo: 39.99, stagione: "AI 2022", taglie: ["S", "M", "L", "XL", "XXL"], colori: ["BIANCO OTTICO [001]", "AZZURRO CIELO [042]", "BLU BLU [036]"] },
  { id: 23, prodId: "55CB", codice: "242010", nome: "CAMICIA OVERSIZE IN LINO Misto", cat: "DONNA ABBIGLIAM -CAMICIA", descBreve: "CAMICIA LINO", prezzo: 35.99, stagione: "PE 2022", taglie: ["XS", "S", "M", "L"], colori: ["BIANCO [001]", "BEIGE [015]", "VERDE SALVIA [063]"] },

  // --- GONNE & ALTRI ---
  { id: 24, prodId: "55GN", codice: "242100", nome: "GONNA PLISSETTATA MIDI EFFETTO SETA", cat: "DONNA ABBIGLIAM -GONNA", descBreve: "GONNA MIDI", prezzo: 39.99, stagione: "AI 2022", taglie: ["38", "40", "42", "44"], colori: ["NERO [130]", "BRONZO [075]", "VERDE BOTTIGLIA [066]"] },
  { id: 25, prodId: "55SH", codice: "242200", nome: "BERMUDA CHINOS IN COTONE STRETCH", cat: "UOMO ABBIGLIAM. -BERMUDA", descBreve: "BERMUDA", prezzo: 34.99, stagione: "PE 2022", taglie: ["44", "46", "48", "50", "52"], colori: ["BEIGE [015]", "BLU [036]", "VERDE [060]"] }
];

// Stato globale simulatore
// Stato globale simulatore
var carrello = [];
var prodottoCorrente = null;
var tagliaSelezionata = null;
var coloreSelezionato = "BLU";
var coloreLabelSelezionato = "BLU BLU [036]";
var rowSelezionata = 0;
var colSelezionata = 0;
var pagamenti = [];
var ultimaQueryRicerca = "";
var importoInseritoTastierino = "0,00";
var provenienzaRicerca = "cassa";
var vistaPrecedenteDettaglio = "view-ricerca-prodotti";

// Indice unico della riga attiva per modifiche (Prezzo / Sconto)
var indiceRigaSelezionata = null;
var prezzoInputVal = "0,00";
var causaleSelezionataCorrente = "";

// Variabili per modifica Quantità e IVA
var qtaInputVal = "1";
var indiceRigaQtaSelezionata = null;
var authInputVal = "0";
var indiceRigaIvaSelezionata = null;
var inputTastierino = "0,00";

function eur(v) { return v.toFixed(2).replace(".", ",") + " €"; }
function num(v) { return v.toFixed(2).replace(".", ","); }
function aliquotaIva(riga) {
  var aliquota = Number(riga.iva);
  return riga.iva === undefined || riga.iva === null || isNaN(aliquota) ? 22 : aliquota;
}
function $(id) { return document.getElementById(id); }

function closePopup(id) {
  var el = $(id);
  if (!el) return;
  el.classList.remove("open");
  el.style.display = "none";
}

function clearSearch() {
  if ($("search-input")) {
    $("search-input").value = "";
    $("search-input").focus();
  }
}

// Uniforma le icone della sidebar destra
function uniformaSidebarOriginali() {
  document.querySelectorAll('.ipos-sidebar').forEach(function(sb) {
    var center = sb.querySelector('.ipos-sidebar-center');
    if (!center) return;

    var btnPag = center.querySelector('.ipos-btn-pagamento .ico-container');
    if (btnPag) {
      btnPag.innerHTML = '<svg width="34" height="34" viewBox="0 0 32 32" fill="none"><rect x="6" y="4" width="13" height="24" stroke="#fff" stroke-width="2" fill="rgba(255,255,255,0.15)"/><rect x="8" y="6" width="9" height="20" stroke="#fff" stroke-width="1"/><circle cx="12.5" cy="16" r="3" fill="#fff"/><path d="M20 16h7m0 0l-3.5-3.5M27 16l-3.5 3.5" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    }

    var btnCli = center.querySelector('.ipos-btn-cliente .ico-container');
    if (btnCli) {
      btnCli.innerHTML = '<svg width="36" height="36" viewBox="0 0 24 24" fill="#fff"><circle cx="12" cy="7.5" r="4.2"/><path d="M4.5 21c0-3.8 3.2-6.5 7.5-6.5s7.5 2.7 7.5 6.5h-15z"/><path d="M11 14.5l1 4.5 1-4.5-1-1-1 1z" fill="#999"/></svg>';
    }
  });
}

function mostraPopupRicerca(query) {
  var modal = document.getElementById("modal-ricerca-avanzata");
  var btnOk = document.getElementById("btn-popup-ok");
  if (modal) {
    modal.style.display = "flex";
    if (btnOk) {
      btnOk.onclick = function() {
        chiudiPopupRicerca();
        provenienzaRicerca = "cassa";
        ultimaQueryRicerca = query;
        renderTabellaRisultati(ultimaQueryRicerca);
        showView('view-ricerca-prodotti');
      };
    }
  }
}

function chiudiPopupRicerca() {
  var modal = document.getElementById("modal-ricerca-avanzata");
  if (modal) modal.style.display = "none";
}

function funzioneNonDisponibile(e) {
  if (e && typeof e.preventDefault === "function") {
    e.preventDefault();
    e.stopPropagation();
  }
  mostraModalIpos("Funzione non disponibile per questa dimostrazione", "error", false, null);
}

function removeCustomer() { funzioneNonDisponibile(); }
function openPosInternalModal() { funzioneNonDisponibile(); }

function collegaBottoniNonDisponibili() {
  var selettoriDiretti = [
    '#view-cassa .ipos-btn-funzioni',
    '#view-cassa .ipos-btn-finanziario',
    '#view-cassa .ipos-btn-cliente',
    '#view-cassa .ipos-sidebar-center > button:last-child',
    '#view-cassa .ipos-subtotal-box',
    '#view-cassa .ipos-pts-row button',
    '#view-cassa .ipos-pts-icon',
    '#view-cassa .ipos-pts-row > div:last-child',
    '#view-dettaglio button[onclick^="alert"]',
    '#view-dettaglio button[title="Stile"]',
    '#view-dettaglio button[title="Colore"]'
  ];

  document.querySelectorAll(selettoriDiretti.join(', ')).forEach(function(el) {
    el.removeAttribute('onclick');
    el.style.cursor = 'pointer';
    el.onclick = funzioneNonDisponibile;
  });

  document.querySelectorAll('#view-pagamento button').forEach(function(btn) {
    var onclickAttr = btn.getAttribute('onclick') || '';
    var isAttivo = btn.classList.contains('ipos-btn-indietro') ||
                   btn.id === 'btn-stampa' ||
                   onclickAttr.indexOf('selezionaMetodoPagamento') !== -1 ||
                   onclickAttr.indexOf('keypadPress') !== -1 ||
                   onclickAttr.indexOf('stampaScontrino') !== -1 ||
                   onclickAttr.indexOf('rimuoviPagamento') !== -1;
    if (!isAttivo) {
      btn.removeAttribute('onclick');
      btn.onclick = funzioneNonDisponibile;
    }
  });

  document.querySelectorAll('#view-ricerca-prodotti div[style*="cursor: pointer"]').forEach(function(el) {
    if (el.textContent.indexOf('Edit Filter') !== -1) {
      el.onclick = funzioneNonDisponibile;
    }
  });

  document.querySelectorAll('#view-filtro-prodotti input:not(#input-filtro-desc), #view-filtro-prodotti select').forEach(function(el) {
    el.addEventListener('mousedown', function(e) {
      e.preventDefault();
      this.blur();
      funzioneNonDisponibile(e);
    });
    el.addEventListener('click', function(e) {
      e.preventDefault();
      this.blur();
      funzioneNonDisponibile(e);
    });
  });

  document.querySelectorAll('#view-voucher button:not(.ipos-btn-indietro):not(.ipos-btn-uscita), #view-voucher div[style*="cursor: pointer"]').forEach(function(el) {
    el.removeAttribute('onclick');
    el.onclick = funzioneNonDisponibile;
  });

  document.querySelectorAll('.ipos-sidebar.inactive .ipos-side-btn').forEach(function(el) {
    el.style.cursor = 'pointer';
    el.onclick = funzioneNonDisponibile;
  });
}

// Inizializzazione DOM (Cassa, Ricerca, F12, Menu Mobile)
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) lucide.createIcons();
  uniformaSidebarOriginali();
  collegaBottoniNonDisponibili();

  var searchInput = $("search-input");
  if (searchInput) {
    searchInput.addEventListener("keydown", function(e) {
      if (e.key !== "Enter") return;
      var v = this.value.trim();
      if (!v) return;

      // Se è un codice numerico esatto, apre direttamente il dettaglio
      if (/^\d+$/.test(v)) {
        var prodottoEsatto = prodotti.find(function(prodotto) {
          return prodotto.codice === v;
        });
        if (prodottoEsatto) {
          apriDettaglio(prodottoEsatto.id);
          return;
        }
      }

      // Altrimenti mostra il popup di ricerca non univoca
      mostraPopupRicerca(v);
    });
  }
  // Gestione Menu Mobile unificato
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconMenu = document.getElementById('icon-menu');
  const iconClose = document.getElementById('icon-close');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('flex', !isHidden);
      mobileBtn.setAttribute('aria-expanded', !isHidden);
      if (iconMenu) iconMenu.classList.toggle('hidden', !isHidden);
      if (iconClose) iconClose.classList.toggle('hidden', isHidden);
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
        mobileBtn.setAttribute('aria-expanded', 'false');
        if (iconMenu) iconMenu.classList.remove('hidden');
        if (iconClose) iconClose.classList.add('hidden');
      });
    });
  }
});

function showView(viewId, isDaCaricamento, mantieniFiltri) {
  var initialViewStyle = $("ipos-initial-view-style");
  if (initialViewStyle) initialViewStyle.remove();

  if (viewId === "view-filtro-prodotti" && !isDaCaricamento && !mantieniFiltri) {
    pulisciFiltri();
  }

  if (viewId !== "view-cassa" && viewId !== "view-causale-prezzo") {
    chiudiTastieraPrezzo();
  }

  var views = document.querySelectorAll('.ipos-view');
  views.forEach(function(v) {
    v.style.display = 'none';
    v.classList.remove('active');
  });
  
  var target = document.getElementById(viewId);
  if (target) {
    target.style.display = 'flex';
    target.classList.add('active');
  }

  vistaCorrente = viewId;

  if (!isDaCaricamento) {
    salvaStato();
  }

  if (viewId === "view-cassa") aggiornaCassa();
  if (viewId === "view-pagamento") renderPagamento();
  if (viewId === "view-ricerca-prodotti") renderTabellaRisultati(ultimaQueryRicerca);
  if (viewId === "view-dettaglio" && prodottoCorrente) {
    popolaCampiDettaglio();
    disegnaMatriceDettaglio();
    aggiornaTitoloDettaglio();
  }
}

function pulisciFiltri() {
  document.querySelectorAll('#view-filtro-prodotti input[type=\'text\']').forEach(function(i) { 
    i.value = ''; 
  });
  document.querySelectorAll('#view-filtro-prodotti select').forEach(function(s) { 
    s.selectedIndex = 0; 
  });
  
  var inputDesc = $("input-filtro-desc");
  if (inputDesc) inputDesc.focus();
}

function aggiornaTitoloDettaglio() {
  if (!prodottoCorrente) return;
  var titoloSpan = $("d-titolo-header");
  if (!titoloSpan) {
    var btnIndietro = document.querySelector("#view-dettaglio .ipos-btn-indietro");
    if (btnIndietro && btnIndietro.parentNode) {
      btnIndietro.setAttribute("onclick", "tornaIndietroDettaglio()");
      titoloSpan = document.createElement("span");
      titoloSpan.id = "d-titolo-header";
      titoloSpan.style.cssText = "font-size: 15px; color: #111; font-weight: normal; margin-left: 6px;";
      btnIndietro.parentNode.appendChild(titoloSpan);
    }
  }
  if (titoloSpan) {
    titoloSpan.textContent = prodottoCorrente.nome + " [" + coloreLabelSelezionato + " - " + tagliaSelezionata + "]";
  }
}

function prodottoCorrispondeQuery(prodotto, query) {
  var q = String(query || "").trim().toLowerCase();
  if (!q) return true;

  var parole = q.split(/\s+/).filter(function(w) { return w.length > 1; });
  if (parole.length === 0) parole = [q];

  var testoProdotto = [
    prodotto.nome,
    prodotto.cat,
    prodotto.codice,
    prodotto.prodId,
    prodotto.descBreve
  ].join(" ").toLowerCase();

  return parole.some(function(parola) {
    var radice = parola.length > 4 ? parola.slice(0, -1) : parola;
    return testoProdotto.indexOf(parola) >= 0 || testoProdotto.indexOf(radice) >= 0;
  });
}

function renderTabellaRisultati(query) {
  var risultati = prodotti.filter(function(prodotto) {
    return prodottoCorrispondeQuery(prodotto, query);
  });

  var containerTabella = $("risultati-ricerca-body");
  
  // Selezioniamo il contenitore delle card (se non esiste nella vista, lo creiamo o usiamo un ID dedicato)
  var viewRicerca = $("view-ricerca-prodotti");
  if (!viewRicerca) return;

  var containerGrid = viewRicerca.querySelector("#layout-grid-card");
  var wrapperTabella = viewRicerca.querySelector("table") ? viewRicerca.querySelector("table").parentNode : null;

  if (provenienzaRicerca === "f12") {
    // FLUSSO F12: Mostra la tabella classica
    if (containerGrid) containerGrid.style.display = "none";
    if (wrapperTabella) wrapperTabella.style.display = "block";

    if (containerTabella) {
      var htmlTabella = "";
      risultati.forEach(function(p) {
        htmlTabella += '<tr onclick="apriDettaglio(' + p.id + ')" style="cursor: pointer; border-bottom: 1px solid #b8bec8; background: #fff;">' +
                  '<td style="padding: 6px; color: #222; border-right: 1px solid #e2e8f0;">No image data</td>' +
                  '<td style="padding: 6px; color: #222; border-right: 1px solid #e2e8f0;">' + p.prodId + '</td>' +
                  '<td style="padding: 0; border-right: 1px solid #e2e8f0;">' +
                    '<div style="padding: 2px 6px; font-weight: bold; font-size: 12px; color: #111; border-bottom: 1px solid #f1f5f9;">' + p.nome + '</div>' +
                    '<div style="padding: 2px 6px; font-size: 10px; color: #222; border-bottom: 1px solid #f1f5f9;">' + p.cat + '</div>' +
                    '<div style="padding: 2px 6px; font-weight: bold; font-size: 12px; color: #111;">' + p.codice + '</div>' +
                  '</td>' +
                  '<td style="padding: 0; border-right: 1px solid #e2e8f0;">' +
                    '<div style="padding: 2px 6px; border-bottom: 1px solid #f1f5f9;">&nbsp;</div>' +
                    '<div style="padding: 2px 6px; font-size: 10px; color: #222; border-bottom: 1px solid #f1f5f9;">' + num(p.prezzo) + '</div>' +
                    '<div style="padding: 2px 6px; font-size: 10px; color: #222;">' + p.stagione + '</div>' +
                  '</td>' +
                  '<td></td>' +
                '</tr>';
      });
      containerTabella.innerHTML = htmlTabella;
    }
  } else {
    // FLUSSO BARRA CASSA: Mostra la griglia a tessere con le borse gialle
    if (wrapperTabella) wrapperTabella.style.display = "none";

    if (!containerGrid) {
      containerGrid = document.createElement("div");
      containerGrid.id = "layout-grid-card";
      containerGrid.style.cssText = "padding: 10px; background: #eef2f6; display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px; box-sizing: border-box;";
      if (wrapperTabella && wrapperTabella.parentNode) {
        wrapperTabella.parentNode.appendChild(containerGrid);
      } else {
        viewRicerca.appendChild(containerGrid);
      }
    }
    containerGrid.style.display = "grid";

    var htmlCards = "";
    risultati.forEach(function(p) {
      var borsaGiallaSvg = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M6 8H18L19 21H5L6 8Z" fill="#FACC15" stroke="#CA8A04" stroke-width="1.5" stroke-linejoin="round"/>' +
        '<path d="M9 8V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V8" stroke="#CA8A04" stroke-width="1.5" stroke-linecap="round"/>' +
        '</svg>';

      htmlCards += '<div onclick="apriDettaglio(' + p.id + ')" style="background:#fff; border:1px solid #cbd5e1; border-radius:2px; padding:6px; cursor:pointer; display:flex; flex-direction:column; justify-content:space-between; height:115px; font-family: Tahoma, sans-serif;">' +
                '<div style="display:flex; justify-content:space-between; align-items:center; font-size:10px; color:#475569; border-bottom:1px solid #f1f5f9; padding-bottom:3px;">' +
                  '<span style="font-weight:bold;">' + p.codice + '</span>' +
                  '<span style="color:#15803d; font-weight:bold;">' + num(p.prezzo) + '</span>' +
                '</div>' +
                '<div style="display:flex; align-items:center; gap:6px; margin:4px 0;">' +
                  '<div>' + borsaGiallaSvg + '</div>' +
                  '<div style="font-size:9px; color:#334155; line-height:1.1; overflow:hidden; text-overflow:ellipsis; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical;">' + p.cat + '</div>' +
                '</div>' +
                '<div style="font-size:10px; font-weight:bold; color:#0f172a; text-transform:uppercase; overflow:hidden; text-overflow:ellipsis; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; border-top:1px solid #f1f5f9; padding-top:2px;">' + p.nome + '</div>' +
              '</div>';
    });
    containerGrid.innerHTML = htmlCards;
  }
}

function eseguiRicercaFiltrata() {
  var inputDesc = $("input-filtro-desc");
  var inputCod = $("input-codice");
  var query = "";

  if (inputDesc && inputDesc.value.trim() !== "") {
    query = inputDesc.value.toLowerCase().trim();
  } else if (inputCod && inputCod.value.trim() !== "") {
    query = inputCod.value.toLowerCase().trim();
  }

  if (!query) {
    if (inputDesc) inputDesc.focus();
    return;
  }

  var risultati = prodotti.filter(function(prodotto) {
    return prodottoCorrispondeQuery(prodotto, query);
  });

  if (risultati.length === 0) {
    mostraModalIpos("Nessun prodotto trovato con questa descrizione.", "error", false, null);
    return;
  }

  provenienzaRicerca = "f12";
  ultimaQueryRicerca = query;
  renderTabellaRisultati(ultimaQueryRicerca);
  showView('view-ricerca-prodotti');
}

function popolaCampiDettaglio() {
  if (!prodottoCorrente) return;
  if ($("d-code")) $("d-code").value = prodottoCorrente.codice;
  if ($("d-prezzo")) $("d-prezzo").textContent = eur(prodottoCorrente.prezzo);
  if ($("d-listino")) $("d-listino").textContent = "";
  if ($("d-desc")) $("d-desc").textContent = prodottoCorrente.cat.replace(" -", " ");
  if ($("d-taglia-badge")) $("d-taglia-badge").textContent = prodottoCorrente.prodId;
  if ($("btn-agg")) $("btn-agg").disabled = false;
}

function apriDettaglio(id) {
  vistaPrecedenteDettaglio = vistaCorrente === "view-cassa" ? "view-cassa" : "view-ricerca-prodotti";
  prodottoCorrente = prodotti.find(function(p) { return p.id === id; }) || prodotti[0];
  var taglieProd = prodottoCorrente.taglie || ["T.U"];
  var coloriProd = prodottoCorrente.colori || ["BLU BLU [036]", "NERO NERO [130]"];

  rowSelezionata = 0;
  colSelezionata = 0;
  tagliaSelezionata = taglieProd[0];
  coloreLabelSelezionato = coloriProd[0];
  coloreSelezionato = coloreLabelSelezionato.split(" ")[0];

  popolaCampiDettaglio();
  disegnaMatriceDettaglio();
  aggiornaTitoloDettaglio();

  showView("view-dettaglio");
}

function tornaIndietroDettaglio() {
  showView(vistaPrecedenteDettaglio || "view-ricerca-prodotti");
}

// =========================================================
// GESTIONE QUANTITÀ, PREZZO, CAUSALI E SCONTI SCONTRINO
// =========================================================

function modificaQuantitaCarrello(i) {
  indiceRigaQtaSelezionata = i;
  qtaInputVal = carrello[i].qta.toString();
  if ($("qta-display")) $("qta-display").textContent = qtaInputVal;
  var pop = $("popup-qta");
  if (pop) pop.style.display = "flex";
}

function qtaKey(val) {
  if (val === 'Clear') qtaInputVal = "0";
  else if (val === 'BkSp') qtaInputVal = qtaInputVal.length > 1 ? qtaInputVal.slice(0, -1) : "0";
  else if (val === '+/-') {
    if (qtaInputVal.startsWith("-")) qtaInputVal = qtaInputVal.substring(1);
    else if (qtaInputVal !== "0") qtaInputVal = "-" + qtaInputVal;
  } else {
    qtaInputVal = (qtaInputVal === "0") ? val : qtaInputVal + val;
  }
  if ($("qta-display")) $("qta-display").textContent = qtaInputVal;
}

function confermaModificaQta() {
  closePopup('popup-qta');
  if (indiceRigaQtaSelezionata !== null && carrello[indiceRigaQtaSelezionata]) {
    var qta = parseInt(qtaInputVal.replace(',', '.'), 10);
    if (!isNaN(qta) && qta > 0) {
      carrello[indiceRigaQtaSelezionata].qta = qta;
      aggiornaCassa();
    }
  }
}

// Chiamato quando clicchi sulla cella "Prezzo" nella tabella dello scontrino
function modificaPrezzoCarrello(i) {
  indiceRigaSelezionata = i;
  chiudiTastieraPrezzo();
  showView('view-causale-prezzo');
}

// Causale sconto automatico (es. "20% Discount single")
function applicaScontoAutomatico(nomeSconto, percentuale) {
  if (modalitaScontoTotale) {
    // Applica lo sconto totale calcolando la percentuale pulita su ogni riga
    carrello.forEach(function(r) {
      r.sconto = percentuale;
      r.nomeSconto = nomeSconto;
    });
    
    // Aggiorna il badge dello sconto totale in basso a sinistra (es. Sc 20,00 %)
    var badgeSc = document.querySelector('.ipos-sc-badge');
    if (badgeSc) {
      badgeSc.innerHTML = '<span>Sc ' + num(percentuale) + '</span><span>%</span>';
    }

    modalitaScontoTotale = false; 
  } else {
    // Comportamento standard per singola riga
    var idx = (indiceRigaSelezionata !== null && carrello[indiceRigaSelezionata])
      ? indiceRigaSelezionata
      : (carrello.length > 0 ? carrello.length - 1 : null);

    if (idx !== null) {
      carrello[idx].sconto = percentuale;
      carrello[idx].nomeSconto = nomeSconto;
    }
  }

  aggiornaCassa();
  chiudiTastieraPrezzo();
  showView('view-cassa');
}

// Chiamato quando clicchi su una causale che richiede l'inserimento del nuovo prezzo
function apriTastieraPrezzoDiretto(nomeCausale) {
  if (indiceRigaSelezionata === null && carrello.length > 0) {
    indiceRigaSelezionata = carrello.length - 1;
  }
  if (indiceRigaSelezionata === null || !carrello[indiceRigaSelezionata]) {
    return;
  }

  causaleSelezionataCorrente = nomeCausale || "Modifica Prezzo";
  prezzoInputVal = "0,00";

  var titoloPopup = $("prezzo-popup-title");
  if (titoloPopup) {
    titoloPopup.textContent = "Modifica: " + causaleSelezionataCorrente;
  }

  aggiornaDisplayPrezzo();

  var pop = $("popup-prezzo");
  if (pop) {
    pop.style.display = "block";
  }
}

function aggiornaDisplayPrezzo() {
  var display = $("prezzo-display");
  if (display) {
    display.textContent = prezzoInputVal + " €";
  }
}

function prezzoKey(val) {
  if (val === 'Clear') {
    prezzoInputVal = "0,00";
  } else if (val === 'BkSp') {
    prezzoInputVal = prezzoInputVal.length > 1 ? prezzoInputVal.slice(0, -1) : "0,00";
  } else if (val === '+/-') {
    return;
  } else {
    if (prezzoInputVal === "0,00" && val !== ',') {
      prezzoInputVal = val;
    } else if (val === ',' && prezzoInputVal.indexOf(',') !== -1) {
      return; // Evita doppia virgola
    } else {
      prezzoInputVal += val;
    }
  }
  aggiornaDisplayPrezzo();
}

function confermaModificaPrezzo() {
  var idx = (indiceRigaSelezionata !== null && carrello[indiceRigaSelezionata])
    ? indiceRigaSelezionata
    : (carrello.length > 0 ? carrello.length - 1 : null);

  if (idx !== null) {
    var p = parseFloat(prezzoInputVal.replace(',', '.'));
    if (!isNaN(p) && p >= 0) {
      carrello[idx].prezzo = p;
      carrello[idx].causalePrezzo = causaleSelezionataCorrente;
    }
  }

  chiudiTastieraPrezzo();
  showView('view-cassa');
}

function chiudiTastieraPrezzo() {
  var pop = $("popup-prezzo");
  if (pop) pop.style.display = "none";
}

var modalitaScontoTotale = false;

function apriScontoTotale() {
  if (!carrello.length) {
    alert("Il carrello è vuoto.");
    return;
  }
  modalitaScontoTotale = true;
  // Riutilizziamo la stessa vista delle causali che usi per i singoli prodotti
  showView('view-causale-prezzo');
}


// =========================================================
// MATRICE TAGLIE/COLORI, IVA E GESTIONE SCONTRINO
// =========================================================

function disegnaMatriceDettaglio() {
  if (!prodottoCorrente) return;
  var taglieProd = prodottoCorrente.taglie || ["42", "44", "46", "48", "50", "52", "54", "56", "58", "60", "62", "64", "66", "68", "70", "72", "74"];
  var coloriProd = prodottoCorrente.colori || ["BLU BLU [036]", "SABBIA SABBIA [162]"];

  // Inizializza la matrice se non esiste
  if (!prodottoCorrente.stockMatrice) {
    prodottoCorrente.stockMatrice = {};
    coloriProd.forEach(function(col, r) {
      taglieProd.forEach(function(taglia, c) {
        // Assegniamo un valore di stock di default pulito (es. 8 per la prima cella o basato sugli indici)
        var val = ((r + 1) * (c + 1)) % 15; 
        prodottoCorrente.stockMatrice[r + "_" + c] = val;
      });
    });
  }

  var head = '<tr><td style="background:#8a8a8a; width:140px; border:1px solid #c5cad2;"></td>' +
    taglieProd.map(function(t, cIdx) {
      var isColSel = (cIdx === colSelezionata);
      var bgTh = isColSel ? '#add8e6' : '#e8ebf0';
      var colorTh = isColSel ? '#991b1b' : '#222';
      return '<th onclick="selezionaCellaMatrice(' + rowSelezionata + ', ' + cIdx + ')" style="background:' + bgTh + '; color:' + colorTh + '; border:1px solid #c5cad2; font-size:11px; font-weight:bold; width:44px; height:22px; text-align:center; cursor:pointer;">' + t + '</th>';
    }).join("") + '</tr>';

  var body = coloriProd.map(function(colLabel, rIdx) {
    var isRowSel = (rIdx === rowSelezionata);
    var bgCol = isRowSel ? '#add8e6' : '#fff';
    
    var cells = taglieProd.map(function(t, cIdx) {
      var isSel = (rIdx === rowSelezionata && cIdx === colSelezionata);
      var stockVal = prodottoCorrente.stockMatrice[rIdx + "_" + cIdx];
      if (stockVal === undefined) stockVal = 0;
      
      var isNegativo = (Number(stockVal) < 0);
      var bgCell = isSel ? '#d0f0f8' : (isNegativo ? '#dc2626' : '#fff');
      var colorCell = isNegativo ? '#fff' : '#111';
      var borderCell = isSel ? '1px dotted #111' : '1px solid #c5cad2';

      return '<td onclick="selezionaCellaMatrice(' + rIdx + ', ' + cIdx + ')" style="background:' + bgCell + '; color:' + colorCell + '; border:' + borderCell + '; height:20px; width:44px; text-align:center; font-size:11px; font-weight:bold; cursor:pointer;">' + stockVal + '</td>';
    }).join("");

    return '<tr>' +
      '<td onclick="selezionaCellaMatrice(' + rIdx + ', ' + colSelezionata + ')" style="background:' + bgCol + '; color:#000; font-size:10px; font-weight:bold; padding:2px 4px; border:1px solid #c5cad2; cursor:pointer; white-space:nowrap;">' + colLabel + '</td>' +
      cells +
    '</tr>';
  }).join("");

  if ($("size-matrix")) $("size-matrix").innerHTML = head + body;
}

function apriAutorizzazioneIva(i) {
  indiceRigaIvaSelezionata = i;
  authInputVal = "0";
  if ($("auth-display")) $("auth-display").textContent = authInputVal;
  var pop = $("popup-auth-iva");
  if (pop) pop.style.display = "flex";
}

function authKey(val) {
  if (val === 'CLEAR' || val === 'Clear') authInputVal = "0";
  else if (val === 'BkSp') authInputVal = authInputVal.length > 1 ? authInputVal.slice(0, -1) : "0";
  else if (val === '+/-') {
    if (authInputVal.startsWith("-")) authInputVal = authInputVal.substring(1);
    else if (authInputVal !== "0") authInputVal = "-" + authInputVal;
  } else {
    authInputVal = (authInputVal === "0") ? val : authInputVal + val;
  }
  if ($("auth-display")) $("auth-display").textContent = authInputVal;
}

function confermaAutorizzazioneIva() {
  var valoreIva = authInputVal.replace(',', '.');
  var perc = Number(valoreIva);
  if (!/^\d+(?:\.\d{1,2})?$/.test(valoreIva) || !isFinite(perc) || perc < 0 || perc > 100) {
    mostraModalIpos("Inserisci un'aliquota IVA valida tra 0 e 100.", "error", false, null);
    return;
  }

  closePopup('popup-auth-iva');
  if (indiceRigaIvaSelezionata !== null && carrello[indiceRigaIvaSelezionata]) {
    carrello[indiceRigaIvaSelezionata].iva = perc;
    aggiornaCassa();
  }
}

function selezionaCellaMatrice(rIdx, cIdx) {
  var taglieProd = prodottoCorrente.taglie || ["42", "44", "46", "48", "50", "52", "54", "56", "58", "60", "62", "64", "66", "68", "70", "72", "74"];
  var coloriProd = prodottoCorrente.colori || ["BLU BLU [036]", "SABBIA SABBIA [162]"];

  rowSelezionata = rIdx;
  colSelezionata = cIdx;
  tagliaSelezionata = taglieProd[cIdx];
  coloreLabelSelezionato = coloriProd[rIdx];
  coloreSelezionato = coloreLabelSelezionato.split(" ")[0];

  disegnaMatriceDettaglio();
  aggiornaTitoloDettaglio();

  // Recupera lo stock numerico della cella selezionata
  var stockVal = 0;
  if (prodottoCorrente && prodottoCorrente.stockMatrice) {
    stockVal = parseFloat(prodottoCorrente.stockMatrice[rIdx + "_" + cIdx]) || 0;
  }
  prodottoCorrente.stockSelezionatoCorrente = stockVal;

  // Aggiorna la visualizzazione dello stock nella schermata dei dettagli
  var stockCampi = document.querySelectorAll("#stock-count, #stock-count2, span[id*='stock']");
  stockCampi.forEach(function(el) {
    if (el) el.textContent = stockVal.toFixed(3).replace('.', ',');
  });

  if ($("btn-agg")) $("btn-agg").disabled = false;
}

function aggAScontrino() {
  if (!prodottoCorrente) return;
  var t = tagliaSelezionata || "T.U";
  var c = coloreSelezionato || "BLU";
  var prod = prodottoCorrente.codice + "/" + c + "/" + t;
  
  var stockCorrente = 0;
  if (prodottoCorrente.stockMatrice && rowSelezionata !== undefined && colSelezionata !== undefined) {
    var chiaveCellac = rowSelezionata + "_" + colSelezionata;
    stockCorrente = parseFloat(prodottoCorrente.stockMatrice[chiaveCellac]) || 0;
  }
  
  carrello.push({ 
    prodotto: prod, 
    descrizione: prodottoCorrente.descBreve || prodottoCorrente.nome, 
    prezzo: prodottoCorrente.prezzo, 
    iva: 22,
    qta: 1, 
    sconto: 0, 
    commessa: "",
    stock: stockCorrente
  });
  
  if ($("search-input")) {
    $("search-input").value = "";
  }

  indiceRigaSelezionata = carrello.length - 1;
  showView("view-cassa");
}

var badgeSc = document.querySelector('.ipos-sc-badge');
  if (badgeSc && carrello.length > 0) {
    var primoSconto = carrello[0].sconto || 0;
    badgeSc.innerHTML = '<span>Sc ' + num(primoSconto) + '</span><span>%</span>';
  }

function aggiornaCassa() {
  var tb = $("receipt-body");
  if (!tb) return;
  var righe = "", tot = 0, qta = 0;
  
  carrello.forEach(function(r, i) {
    var scontoVal = r.sconto || 0;
    var lordo = r.prezzo * r.qta;
    var netto = Math.round((lordo * (1 - scontoVal / 100)) * 100) / 100;
    tot += netto; 
    qta += r.qta;

    var commessaHtml = r.commessa ? '👥 <span style="font-size: 10px; background: rgba(0,0,0,0.2); padding: 1px 3px; border-radius: 2px;">' + r.commessa + '</span>' : '';
    var neutralStyle = 'background: #eef1f5; color: #111; border: 1px solid #d0d5dd;';
    var blueStyle = 'background: linear-gradient(90deg,#4a7fbf,#2e5f9e); color: #fff; font-weight: bold;';

    righe += '<tr class="data">' +
      '<td style="text-align:center; font-weight:bold; ' + neutralStyle + '">' + r.prodotto + '</td>' +
      '<td style="text-align:center; ' + neutralStyle + '">' + r.descrizione + '</td>' +
      '<td style="text-align:center; cursor:pointer; ' + blueStyle + '" onclick="gestisciCommessaCarrello(' + i + ')">' + commessaHtml + '</td>' +
      '<td style="text-align:right; padding-right:6px; cursor:pointer; ' + blueStyle + '" onclick="apriAutorizzazioneIva(' + i + ')">' + num(aliquotaIva(r)) + '%</td>' +
      '<td style="text-align:right; padding-right:6px; cursor:pointer; ' + blueStyle + '" onclick="modificaQuantitaCarrello(' + i + ')">' + r.qta + '</td>' +
      '<td style="text-align:right; padding-right:6px; cursor:pointer; ' + blueStyle + '" onclick="modificaPrezzoCarrello(' + i + ')">' + eur(r.prezzo) + '</td>' +
      '<td style="text-align:right; padding-right:6px; cursor:pointer; ' + blueStyle + '" onclick="modificaScontoCarrello(' + i + ')">' + num(scontoVal) + '%</td>' +
      '<td style="text-align:right; padding-right:6px; ' + neutralStyle + '; font-weight:bold;">' + eur(netto) + '</td>' +
      '<td style="padding:0; width:36px; background:#8c4a46; text-align:center;"><button class="ipos-del-x" onclick="eliminaRiga(' + i + ')">X</button></td>' +
      '</tr>';
  });

  tb.innerHTML = righe;
  if ($("total-banner")) $("total-banner").textContent = eur(tot);
  if ($("qta-tot")) $("qta-tot").textContent = num(qta);
  
  // Prende lo stock della riga attiva (o dell'ultima aggiunta), altrimenti 0
  var stockDaMostrare = 0;
  if (carrello.length > 0) {
    var rigaAttiva = (indiceRigaSelezionata !== null && carrello[indiceRigaSelezionata]) ? carrello[indiceRigaSelezionata] : carrello[carrello.length - 1];
    stockDaMostrare = rigaAttiva.stock !== undefined ? rigaAttiva.stock : 0;
  }
  var stockFormatted = num(stockDaMostrare);

  if ($("stock-count")) $("stock-count").textContent = stockFormatted;
  if ($("stock-count2")) $("stock-count2").textContent = stockFormatted;
  
  var bp = $("btn-pagamento");
  if (bp) {
    if (tot > 0) bp.classList.remove("disabled");
    else bp.classList.add("disabled");
  }
  salvaStato();
}

function eliminaRiga(i) {
  carrello.splice(i, 1);
  if (indiceRigaSelezionata === i) {
    indiceRigaSelezionata = carrello.length ? carrello.length - 1 : null;
  }
  aggiornaCassa();
}

function openCatalogo() { apriFiltroProdotti(); }


var isNuovaDigitazione = true;

function goPagamento() {
  if (!carrello.length) return;
  pagamenti = [];
  var tot = totaleCarrello();
  importoInseritoTastierino = num(tot);
  isNuovaDigitazione = true; // Attiva la modalità di sovrascrittura iniziale
  
  if ($("keypad-display")) {
    $("keypad-displayhead") // fallback sicuro
    $("keypad-display").textContent = importoInseritoTastierino + " EUR";
    // Facciamo in modo che il testo sia "selezionato" o pronto a essere sovrascritto
    $("keypad-display").style.background = "#d0f0f8"; // Evidenziato stile selezione
  }
  
  renderPagamento();
  showView("view-pagamento");
}


function totaleCarrello() { 
  return carrello.reduce(function(s, r) { 
    return s + (r.prezzo * r.qta) * (1 - (r.sconto || 0) / 100); 
  }, 0); 
}

function renderPagamento() {
  var tot = totaleCarrello();
  var pagatoTotale = pagamenti.reduce(function(s, p) { return s + p.importo; }, 0);
  var payBody = $("pay-body");
  
  if (payBody) {
    var html = "";
    pagamenti.forEach(function(p, idx) {
      html += '<div style="display:flex; border-bottom:1px solid #e2e8f0; font-size:11px; align-items:center; background:#fff; padding:2px 0;">' +
              '<div style="flex:2; padding:4px 6px; color:#111; font-weight:bold;">' + p.metodo + '</div>' +
              '<div style="flex:1; padding:4px 6px; text-align:right; font-weight:bold; color:#111;">' + num(p.importo) + '</div>' +
              '<div style="flex:1; padding:4px 6px; text-align:center;"><button onclick="rimuoviPagamento(' + idx + ')" style="background:#c96a5f; color:#fff; border:none; padding:1px 6px; cursor:pointer; border-radius:2px; font-size:10px;">X</button></div>' +
              '</div>';
    });
    payBody.innerHTML = html;
  }

  var bannerAmount = $("pay-banner-amount");
  var bannerSub = $("pay-banner-sub");
  var restoDiv = bannerAmount ? bannerAmount.parentNode : null;

  // Riferimento al pulsante di stampa scontrino nella schermata di pagamento
  var btnStampa = document.querySelector("#view-pagamento button[onclick*='stampaScontrino']");

  if (pagatoTotale >= tot) {
    var resto = pagatoTotale - tot;
    if (restoDiv) {
      restoDiv.style.background = "#15803d"; // Verde quando saldato / con resto
    }
    if (bannerAmount) bannerAmount.textContent = num(resto) + " EUR Resto";
    if (bannerSub) bannerSub.textContent = "(Pagamento completato)";

    // Abilita il pulsante di stampa scontrino
    if (btnStampa) {
      btnStampa.style.opacity = "1";
      btnStampa.style.pointerEvents = "auto";
      btnStampa.style.filter = "none";
    }
  } else {
    var daPagare = tot - pagatoTotale;
    if (restoDiv) {
      restoDiv.style.background = "#990000"; // Rosso finché manca importo
    }
    if (bannerAmount) bannerAmount.textContent = num(daPagare) + " EUR Da pagare:";
    if (bannerSub) bannerSub.textContent = "(Totale scontrino: " + num(tot) + " EUR)";

    // Disabilita il pulsante di stampa scontrino finché non è coperto
    if (btnStampa) {
      btnStampa.style.opacity = "0.4";
      btnStampa.style.pointerEvents = "none";
    }
  }
}

function selezionaMetodoPagamento(metodo) {
  if (metodo.toUpperCase() === 'SATISPAY') {
    mostraErroreSatispayNonAttivo();
    return;
  }

  var tot = totaleCarrello();
  var pagatoTotale = pagamenti.reduce(function(s, p) { return s + p.importo; }, 0);
  var residuo = Math.max(0, tot - pagatoTotale);
  var importoDigitato = parseFloat(importoInseritoTastierino.replace(',', '.')) || 0;

  if (importoDigitato <= 0 && tot > 0 && pagamenti.length > 0) {
    pagamenti = [{ metodo: metodo.toUpperCase(), importo: tot }];
    finalizzaInserimentoPagamento();
    return;
  }

  if (importoDigitato <= 0) {
    mostraModalIpos("Inserisci un importo valido sul tastierino.", "error", false, null);
    return;
  }

  var metodoNorm = metodo.toUpperCase();
  if (metodoNorm !== 'CONTANTE' && residuo > 0 && importoDigitato > residuo) {
    importoDigitato = residuo;
  }

  var indexEsistente = pagamenti.findIndex(function(p) { return p.metodo.toUpperCase() === metodoNorm; });

  if (indexEsistente !== -1) {
    // Usiamo il modale personalizzato stile iPOS invece di confirm()
    mostraModalIpos(
      "Il tipo di pagamento " + metodo.toUpperCase() + " è già presente. Vuoi sostituire il valore con " + num(importoDigitato) + " EUR?",
      "question",
      true,
      function(conferma) {
        if (conferma) {
          pagamenti[indexEsistente].importo = importoDigitato;
          finalizzaInserimentoPagamento();
        }
      }
    );
  } else {
    pagamenti.push({ metodo: metodoNorm, importo: importoDigitato });
    finalizzaInserimentoPagamento();
  }
}

function mostraErroreSatispayNonAttivo() {
  mostraModalIpos(
    "Errore inatteso! Satispay non attivato. Contattare l'amministratore del sistema per attivare Satispay nelle impostazioni di IPos.",
    "error",
    true,
    function(riprova) {
      if (riprova) mostraErroreSatispayNonAttivo();
    }
  );

  var retryButton = $("ipos-modal-buttons").querySelector("button");
  if (retryButton) retryButton.textContent = "Riprova";
}

function finalizzaInserimentoPagamento() {
  var tot = totaleCarrello();
  var pagatoTotale = pagamenti.reduce(function(s, p) { return s + p.importo; }, 0);
  var residuo = Math.max(0, tot - pagatoTotale);
  
  importoInseritoTastierino = num(residuo);
  if ($("keypad-display")) {
    $("keypad-display").textContent = importoInseritoTastierino + " EUR";
  }

  renderPagamento();
  salvaStato();
}

function rimuoviPagamento(index) {
  pagamenti.splice(index, 1);
  var tot = totaleCarrello();
  var pagatoTotale = pagamenti.reduce(function(s, p) { return s + p.importo; }, 0);
  var residuo = Math.max(0, tot - pagatoTotale);
  
  importoInseritoTastierino = num(residuo);
  if ($("keypad-display")) {
    $("keypad-display").textContent = importoInseritoTastierino + " EUR";
  }

  renderPagamento();
  salvaStato();
}

function keypadPress(val) {
  var display = $("keypad-display");
  if (!display) return;

  if (val === 'CLEAR' || val === 'Clear') {
    importoInseritoTastierino = "0,00";
    isNuovaDigitazione = false;
  } else if (val === 'BKSP' || val === 'BkSp') {
    importoInseritoTastierino = importoInseritoTastierino.length > 3 ? importoInseritoTastierino.slice(0, -1) : "0,00";
    isNuovaDigitazione = false;
  } else if (val !== '+/-') {
    // Se l'utente preme un numero e siamo all'inizio, sostituisce completamente il totale residuo
    if (isNuovaDigitazione) {
      importoInseritoTastierino = val;
      isNuovaDigitazione = false;
    } else {
      if (importoInseritoTastierino === "0,00") {
        importoInseritoTastierino = val;
      } else {
        importoInseritoTastierino += val;
      }
    }
  }

  display.textContent = importoInseritoTastierino + " EUR";
  display.style.background = "#f4f6f8"; // Torna al colore normale dopo la prima digitazione
  salvaStato();
}

function pagaContante() { renderPagamento(); }

// Aggiungiamo un controllo di sicurezza anche dentro stampaScontrino
function stampaScontrino() {
  var tot = totaleCarrello();
  var pagatoTotale = pagamenti.reduce(function(s, p) { return s + p.importo; }, 0);
  
  if (pagatoTotale < tot) {
    mostraModalIpos("Attenzione: l'importo inserito non copre il totale da pagare!", "error", false, null);
    return;
  }

  var now = new Date();
  var dataOra = now.toLocaleDateString('it-IT') + " " + now.toLocaleTimeString('it-IT', {hour: '2-digit', minute:'2-digit'});
  var ivaTotale = 0;

  var righeScontrinoHtml = "";
  carrello.forEach(function(r) {
    var prezzoUnitario = r.prezzo * (1 - (r.sconto || 0) / 100);
    var aliquota = aliquotaIva(r);
    ivaTotale += prezzoUnitario * r.qta * aliquota / (100 + aliquota);
    righeScontrinoHtml += '<div style="margin-bottom: 4px;">' +
      '<div>' + (r.descrizione || r.prodotto).toUpperCase() + '</div>' +
      '<div style="display:flex; justify-content:space-between;">' +
        '<span>' + num(aliquota) + '%</span>' +
        '<span>' + num(prezzoUnitario) + '</span>' +
      '</div>' +
      '<div style="font-size:10px; color:#555;">T' + Math.floor(Math.random() * 90000000 + 10000000) + 'H90</div>' +
    '</div>';
  });

  // Costruisce le righe dei pagamenti effettuati e calcola l'eventuale resto se c'è contante in eccesso
  var dettagliPagamentiHtml = "";
  var totaleContante = 0;
  
  pagamenti.forEach(function(p) {
    if (p.metodo.toUpperCase() === 'CONTANTE') {
      totaleContante += p.importo;
    }
    dettagliPagamentiHtml += '<div style="display:flex; justify-content:space-between;"><span>Pagamento ' + p.metodo.toLowerCase() + '</span><span>' + num(p.importo) + '</span></div>';
  });

  // Se è stato inserito del contante superiore al dovuto, calcoliamo il resto
  var resto = Math.max(0, pagatoTotale - tot);
  if (totaleContante > 0 && resto > 0) {
    dettagliPagamentiHtml += '<div style="display:flex; justify-content:space-between;"><span>Importo pagato contante</span><span>' + num(totaleContante) + '</span></div>';
    dettagliPagamentiHtml += '<div style="display:flex; justify-content:space-between; font-weight:bold;"><span>Resto</span><span>' + num(resto) + '</span></div>';
  } else {
    dettagliPagamentiHtml += '<div style="display:flex; justify-content:space-between;"><span>Importo pagato</span><span>' + num(pagatoTotale) + '</span></div>';
  }

  var h = '<div style="font-family: \'Courier Prime\', monospace; font-size: 11px; width: 300px; margin: 0 auto; background: #fff; padding: 15px; color: #000; text-align: left;">' +
            '<div style="text-align:center; font-weight:bold; margin-bottom: 8px;">DOCUMENTO COMMERCIALE<br>di vendita o prestazione</div>' +
            '<hr style="border: dashed 1px #333; margin: 6px 0;">' +
            '<div style="display:flex; justify-content:space-between; font-weight:bold;"><span>DESCRIZIONE</span><span>IVA &nbsp; Prezzo(€)</span></div>' +
            '<hr style="border: dashed 1px #333; margin: 6px 0;">' +
            righeScontrinoHtml +
            '<hr style="border: dashed 1px #333; margin: 6px 0;">' +
            '<div style="display:flex; justify-content:space-between; font-weight:bold;"><span>TOTALE COMPLESSIVO</span><span>' + num(tot) + '</span></div>' +
            '<div style="display:flex; justify-content:space-between; font-size:10px;"><span>di cui IVA</span><span>' + num(ivaTotale) + '</span></div>' +
            dettagliPagamentiHtml +
            '<hr style="border: dashed 1px #333; margin: 6px 0;">' +
            '<div style="font-size: 10px; text-align:center; margin-top: 8px;">*NS = Non soggetta</div>' +
            '<div style="text-align:center; margin-top: 10px;">' + dataOra + '</div>' +
            '<div style="text-align:center; font-weight:bold; margin-top: 4px;">DOCUMENTO N. 0655-0001</div>' +
            '<div style="text-align:center; margin-top:12px;">' +
              '<button onclick="chiudiScontrino()" style="padding:6px 18px; cursor:pointer; background:#1e293b; color:#fff; border:none; font-weight:bold; border-radius:4px;">Chiudi</button>' +
            '</div>' +
          '</div>';

  var modalScontrino = $("popup-scontrino");
  if (!modalScontrino) {
    var modalHtml = '<div id="popup-scontrino" style="display:none; position:fixed; inset:0; background:rgba(0,0,0,0.6); z-index:9999; align-items:center; justify-content:center;">' +
                      '<div id="receipt-paper" style="background:#fff; padding:10px; border-radius:6px; box-shadow:0 10px 25px rgba(0,0,0,0.3); max-width:340px; width:100%;"></div>' +
                    '</div>';
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    modalScontrino = $("popup-scontrino");
  }

  if ($("receipt-paper")) $("receipt-paper".trim() ? $("receipt-paper").innerHTML = h : "");
  modalScontrino.style.display = "flex";
}

function chiudiScontrino() {
  closePopup("popup-scontrino");
  carrello = [];
  pagamenti = [];
  indiceRigaSelezionata = null;
  showView("view-cassa");
}

function modificaScontoCarrello(i) {
  var nuovoSconto = prompt("Inserisci la percentuale di sconto:", carrello[i].sconto || 0);
  if (nuovoSconto !== null) {
    var perc = parseFloat(nuovoSconto.replace(',', '.'));
    if (!isNaN(perc) && perc >= 0 && perc <= 100) {
      carrello[i].sconto = perc;
      aggiornaCassa();
    }
  }
}

function gestisciCommessaCarrello(i) {
  var codiceCommessa = prompt("Inserisci il codice della commessa:", carrello[i].commessa || "01");
  if (codiceCommessa !== null) {
    carrello[i].commessa = codiceCommessa.trim();
    aggiornaCassa();
  }
}

var iposModalCallback = null;

var iposModalCallback = null;

function mostraModalIpos(testo, tipo, isConferma, callback) {
  var modal = $("ipos-custom-modal");
  var textEl = $("ipos-modal-text");
  var titleEl = $("ipos-modal-title");
  var iconEl = $("ipos-modal-icon");
  var buttonsEl = $("ipos-modal-buttons");

  if (!modal) return;

  textEl.textContent = testo;
  titleEl.textContent = "IPOS";
  iconEl.textContent = tipo === 'error' ? "⚠️" : "❓";

  // Memorizziamo la callback globale
  iposModalCallback = callback;

  var btnHtml = "";
  if (isConferma) {
    btnHtml = '<button onclick="eseguiAzioneModal(true)" style="padding:4px 16px; background:linear-gradient(#f0f2f5, #d8dbe2); border:1px solid #7a828d; border-radius:3px; font-size:11px; font-weight:bold; cursor:pointer;">OK</button>' +
              '<button onclick="eseguiAzioneModal(false)" style="padding:4px 16px; background:linear-gradient(#f0f2f5, #d8dbe2); border:1px solid #7a828d; border-radius:3px; font-size:11px; cursor:pointer;">Annulla</button>';
  } else {
    btnHtml = '<button onclick="eseguiAzioneModal(true)" style="padding:4px 16px; background:linear-gradient(#f0f2f5, #d8dbe2); border:1px solid #7a828d; border-radius:3px; font-size:11px; font-weight:bold; cursor:pointer;">OK</button>';
  }

  buttonsEl.innerHTML = btnHtml;
  modal.style.display = "flex";
}

function eseguiAzioneModal(risultato) {
  var modal = $("ipos-custom-modal");
  if (modal) modal.style.display = "none";
  
  var cb = iposModalCallback;
  iposModalCallback = null; // Resetta per sicurezza
  
  if (cb) {
    cb(risultato);
  }
}

function chiudiModalIpos(risultato) {
  eseguiAzioneModal(risultato);
}

// =========================================================
// INTEGRAZIONE DATOCMS PER LOGHI CLIENTI (HOME PAGE)
// =========================================================
document.addEventListener("DOMContentLoaded", async () => {
  const DATOCMS_API_TOKEN = "c3b58b38f2d0cb27c05c8e765ad3e9";
  const container = document.getElementById("clients-marquee-container");

  if (!container) return;

  const query = `
    {
      allPartnerIposSuites {
        id
        nomeBrand
        logo {
          url
          alt
        }
      }
    }
  `;

  try {
    const res = await fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${DATOCMS_API_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    });

    const json = await res.json();
    const clients = json.data?.allPartnerIposSuites;

    if (clients && clients.length > 0) {
      container.innerHTML = "";
      const renderClients = () => {
        return clients.map(client => {
          const logoUrl = client.logo && client.logo.url ? client.logo.url : '';
          if (!logoUrl) return '';

          const nome = (client.nomeBrand || '').toLowerCase();
          let sizeClass = "max-h-10 sm:max-h-12 max-w-[160px]"; 
          let containerClass = "h-20";
          let extraStyle = "";
          
          if (nome.includes('terenzi') || nome.includes('scorpion') || nome.includes('ferrino')) {
            sizeClass = "max-h-16 sm:max-h-20 max-w-[210px]"; 
            containerClass = "h-24";              
          } else if (nome.includes('nau')) {
            sizeClass = "max-h-16 sm:max-h-20 max-w-[200px]"; 
            containerClass = "h-24";
            extraStyle = "transform: scale(1.4);";
          }

          return `
            <span class="inline-flex items-center justify-center ${containerClass} px-8 align-middle">
              <img src="${logoUrl}" alt="${client.nomeBrand || 'Logo Partner'}" loading="lazy" decoding="async" class="${sizeClass} w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-all duration-300" style="${extraStyle}">
            </span>
          `;
        }).join("");
      };

      container.innerHTML = renderClients() + renderClients();
    } else {
      container.innerHTML = `<span class="text-red-400 text-xs">Nessun record trovato nella risposta.</span>`;
    }
  } catch (error) {
    console.error("Errore fetch DatoCMS:", error);
    container.innerHTML = `
      <img src="https://www.datocms-assets.com/216722/1792679350-myfamily.png" class="h-8 w-auto inline-block object-contain mx-6 grayscale opacity-80" alt="Partner">
      <img src="https://www.datocms-assets.com/216722/migross.png" class="h-8 w-auto inline-block object-contain mx-6 grayscale opacity-80" alt="Partner">
    `;
  }
});

// =========================================================
// AUTENTICAZIONE UNIFICATA BBC TECH (NORMATIVE + SIMULATORE)
// =========================================================
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxYpN_9IAPe8jQo8ToR3CYdthXJIssnbONmdSssFh-tQp8mrKxotWLiUBBMcCqwdMG0/exec';
const RECAPTCHA_SITE_KEY = '6LceRkEtAAAAACzy0dk7yVopSLHpE73Yya0hn4nW';
const SESSION_DURATION = 12 * 60 * 60 * 1000; // 12 ore

function showCustomAlert(message, callback) {
  const existing = document.getElementById('custom-alert-modal');
  if (existing) existing.remove();

  const modalHtml = `
    <div id="custom-alert-modal" style="position: fixed; inset: 0; z-index: 99999; display: flex; align-items: center; justify-content: center; background: rgba(15, 23, 42, 0.7); backdrop-filter: blur(4px);">
      <div style="background: white; border-radius: 1rem; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); padding: 2rem; max-width: 24rem; width: 100%; margin: 0 1rem; text-align: center; border: 1px solid #f1f5f9; font-family: inherit;">
        <p style="color: #1e293b; font-size: 0.95rem; line-height: 1.5; margin-bottom: 1.5rem; font-weight: 500;">${message}</p>
        <button id="custom-alert-btn" style="width: 100%; background: #0f172a; color: white; font-weight: 700; padding: 0.75rem 1rem; border-radius: 0.75rem; border: none; cursor: pointer; text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.1em;">
          OK
        </button>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);

  document.getElementById('custom-alert-btn').onclick = function () {
    document.getElementById('custom-alert-modal').remove();
    if (typeof callback === 'function') callback();
  };
}

function switchAuthMode(mode) {
  const fLogin = document.getElementById('form-login');
  const fReg = document.getElementById('form-reg');
  const bLogin = document.getElementById('btn-tab-login');
  const bReg = document.getElementById('btn-tab-reg');

  if (!fLogin || !fReg) return;

  if (mode === 'login') {
    fLogin.classList.remove('hidden');
    fReg.classList.add('hidden');
    bLogin.className = "flex-1 py-2 rounded-lg bg-white text-slate-900 shadow-sm transition-all cursor-pointer";
    bReg.className = "flex-1 py-2 rounded-lg text-slate-500 transition-all cursor-pointer";
  } else {
    fLogin.classList.add('hidden');
    fReg.classList.remove('hidden');
    bReg.className = "flex-1 py-2 rounded-lg bg-white text-slate-900 shadow-sm transition-all cursor-pointer";
    bLogin.className = "flex-1 py-2 rounded-lg text-slate-500 transition-all cursor-pointer";
  }
}

async function getRecaptchaToken(actionName) {
  return new Promise((resolve) => {
    let resolved = false;
    const timer = setTimeout(() => {
      if (!resolved) {
        resolved = true;
        resolve(null);
      }
    }, 3000);

    try {
      if (typeof grecaptcha === 'undefined' || !grecaptcha.ready) {
        if (!resolved) {
          resolved = true;
          clearTimeout(timer);
          resolve(null);
        }
        return;
      }
      grecaptcha.ready(async function () {
        try {
          const token = await grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: actionName });
          if (!resolved) {
            resolved = true;
            clearTimeout(timer);
            resolve(token);
          }
        } catch (e) {
          if (!resolved) {
            resolved = true;
            clearTimeout(timer);
            resolve(null);
          }
        }
      });
    } catch (err) {
      if (!resolved) {
        resolved = true;
        clearTimeout(timer);
        resolve(null);
      }
    }
  });
}

function togglePassword(fieldId, iconId) {
  const input = document.getElementById(fieldId);
  const icon = document.getElementById(iconId);
  if (!input || !icon) return;
  if (input.type === 'password') {
    input.type = 'text';
    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.07 10.07 0 014.213-5.22m5.615-1.552a9.957 9.957 0 012.714.373m3.111 1.341A9.956 9.956 0 0121.542 12c-1.274 4.057-5.064 7-9.542 7-.978 0-1.933-.13-2.835-.375M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3l18 18"/>';
  } else {
    input.type = 'password';
    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>';
  }
}

async function handleForgotPassword() {
  let email = document.getElementById('login-email')?.value.trim();
  if (!email) {
    email = prompt("Inserisci la tua email aziendale per ricevere le istruzioni di recupero:");
    if (!email) return;
    email = email.trim();
  }

  showCustomAlert("Invio delle istruzioni di recupero in corso...");

  try {
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action: 'forgotPassword', email: email })
    });
    const result = await response.json();
    showCustomAlert(result.message);
  } catch (err) {
    showCustomAlert("Errore di connessione durante la richiesta di recupero.");
  }
}

async function requestResendEmail() {
  let email = document.getElementById('login-email')?.value.trim();
  if (!email) {
    email = prompt("Inserisci la tua email aziendale per ricevere nuovamente il link di attivazione:");
    if (!email) return;
    email = email.trim();
  }

  showCustomAlert("Invio email di attivazione in corso...");

  try {
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action: 'resendEmail', email: email })
    });
    const result = await response.json();
    showCustomAlert(result.message || "Email di attivazione inviata.");
  } catch (err) {
    showCustomAlert("Errore di connessione durante l'invio dell'email.");
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('lead-gate-modal');
  const formLogin = document.getElementById('form-login');
  const formReg = document.getElementById('form-reg');

  if (!modal) return;

  fetch(SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ action: 'ping' })
  }).catch(() => {});

  let isValidSession = false;
  try {
    const sessionData = JSON.parse(localStorage.getItem('bbc_normative_session'));
    if (sessionData && sessionData.active && (Date.now() - sessionData.timestamp < SESSION_DURATION)) {
      isValidSession = true;
    } else {
      localStorage.removeItem('bbc_normative_session');
    }
  } catch (e) {
    localStorage.removeItem('bbc_normative_session');
  }

  function unlockSimulatorUI() {
    localStorage.setItem('bbc_normative_session', JSON.stringify({
      active: true,
      timestamp: Date.now()
    }));

    if (modal) {
      modal.style.display = 'none';
      modal.classList.remove('flex');
      modal.classList.add('hidden');
    }
  }

  if (isValidSession) {
    unlockSimulatorUI();
  } else {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    modal.style.display = 'flex';
  }

  if (formLogin) {
    formLogin.addEventListener('submit', async function (e) {
      e.preventDefault();
      const btn = document.getElementById('btn-submit-login');
      const originalText = btn.innerText;
      btn.innerText = 'VERIFICA IN CORSO...';
      btn.disabled = true;

      const emailInput = document.getElementById('login-email').value.trim();
      const passwordInput = document.getElementById('login-password').value;

      if (!emailInput || !passwordInput) {
        showCustomAlert('Inserisci email e password.');
        btn.innerText = originalText;
        btn.disabled = false;
        return;
      }

      const recaptchaToken = await getRecaptchaToken('login');

      try {
        const response = await fetch(SCRIPT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({
            action: 'login',
            email: emailInput,
            password: passwordInput,
            recaptchaToken: recaptchaToken
          })
        });

        const textRes = await response.text();
        let result;
        try {
          result = JSON.parse(textRes);
        } catch (err) {
          result = { success: false, message: "Errore di parsing dalla risposta server. Riprova." };
        }

        if (result.success) {
          unlockSimulatorUI();
        } else {
          showCustomAlert(result.message);
          document.getElementById('login-password').value = '';
          btn.innerText = originalText;
          btn.disabled = false;
        }
      } catch (err) {
        console.error(err);
        showCustomAlert('Errore di connessione al server di autenticazione.');
        document.getElementById('login-password').value = '';
        btn.innerText = originalText;
        btn.disabled = false;
      }
    });
  }

  if (formReg) {
    formReg.addEventListener('submit', async function (e) {
      e.preventDefault();
      const btn = document.getElementById('btn-submit-reg');
      const originalText = btn.innerText;
      btn.innerText = 'REGISTRAZIONE IN CORSO...';
      btn.disabled = true;

      const nome = document.getElementById('lead-nome').value.trim();
      const cognome = document.getElementById('lead-cognome').value.trim();
      const azienda = document.getElementById('lead-azienda').value.trim();
      const telefono = document.getElementById('lead-telefono').value.trim();
      const email = document.getElementById('lead-email').value.trim();
      const password = document.getElementById('lead-password').value;
      const privacyChecked = document.getElementById('lead-privacy').checked;

      if (!nome || !cognome || !azienda || !telefono || !email || !password || !privacyChecked) {
        showCustomAlert('Tutti i campi (incluso il numero di telefono) e l\'accettazione della privacy sono obbligatori.');
        btn.innerText = originalText;
        btn.disabled = false;
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (!emailRegex.test(email)) {
        showCustomAlert('Inserisci un indirizzo email valido (es. nome@dominio.it)');
        btn.innerText = originalText;
        btn.disabled = false;
        return;
      }

      const recaptchaToken = await getRecaptchaToken('register');

      try {
        const response = await fetch(SCRIPT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({
            action: 'register',
            nome,
            cognome,
            azienda,
            telefono,
            email,
            password,
            recaptchaToken,
            origine: 'simulatore'
          })
        });

        const textRes = await response.text();
        let result;

        try {
          result = JSON.parse(textRes);
        } catch (err) {
          console.error("Il server ha restituito HTML anziché JSON:", textRes);
          showCustomAlert("Il server di Google si è avviato ora. Riprova a registrarti: il secondo tentativo andrà a buon fine.");
          btn.innerText = originalText;
          btn.disabled = false;
          return;
        }

        if (result.success) {
          showCustomAlert(result.message || 'Registrazione completata! Controlla la tua email per attivare l\'account.');
          switchAuthMode('login');
          formReg.reset();
        } else {
          showCustomAlert(result.message || 'Errore durante la registrazione.');
          if (result.message && result.message.toLowerCase().includes('già registrata')) {
            switchAuthMode('login');
          }
        }
        btn.innerText = originalText;
        btn.disabled = false;
      } catch (err) {
        console.error(err);
        showCustomAlert('Errore di connessione durante la registrazione.');
        btn.innerText = originalText;
        btn.disabled = false;
      }
    });
  }
});

function salvaStato() {
  var stato = {
    carrello: carrello,
    pagamenti: pagamenti,
    vistaCorrente: vistaCorrente,
    prodottoCorrente: prodottoCorrente,
    indiceRigaSelezionata: indiceRigaSelezionata,
    tagliaSelezionata: tagliaSelezionata,
    coloreSelezionato: coloreSelezionato,
    coloreLabelSelezionato: coloreLabelSelezionato,
    rowSelezionata: rowSelezionata,
    colSelezionata: colSelezionata,
    ultimaQueryRicerca: ultimaQueryRicerca,
    provenienzaRicerca: provenienzaRicerca,
    vistaPrecedenteDettaglio: vistaPrecedenteDettaglio,
    importoInseritoTastierino: importoInseritoTastierino,
    isNuovaDigitazione: isNuovaDigitazione
  };
  localStorage.setItem('ipos_simulator_state', JSON.stringify(stato));
}

function caricaStato() {
  var salvato = localStorage.getItem('ipos_simulator_state');
  if (salvato) {
    try {
      var s = JSON.parse(salvato);
      carrello = s.carrello || [];
      pagamenti = s.pagamenti || [];
      prodottoCorrente = s.prodottoCorrente || null;
      indiceRigaSelezionata = s.indiceRigaSelezionata !== undefined ? s.indiceRigaSelezionata : null;
      tagliaSelezionata = s.tagliaSelezionata || null;
      coloreSelezionato = s.coloreSelezionato || "BLU";
      coloreLabelSelezionato = s.coloreLabelSelezionato || "BLU BLU [036]";
      rowSelezionata = s.rowSelezionata !== undefined ? s.rowSelezionata : 0;
      colSelezionata = s.colSelezionata !== undefined ? s.colSelezionata : 0;
      ultimaQueryRicerca = s.ultimaQueryRicerca || "";
      provenienzaRicerca = s.provenienzaRicerca || "cassa";
      vistaPrecedenteDettaglio = s.vistaPrecedenteDettaglio || "view-ricerca-prodotti";
      importoInseritoTastierino = s.importoInseritoTastierino || "0,00";
      isNuovaDigitazione = s.isNuovaDigitazione !== undefined ? s.isNuovaDigitazione : true;
      var vistaDaMostrare = s.vistaCorrente || 'view-cassa';
      vistaCorrente = vistaDaMostrare;

      aggiornaCassa();

      if ($("input-filtro-desc") && ultimaQueryRicerca) {
        $("input-filtro-desc").value = ultimaQueryRicerca;
      }
      renderTabellaRisultati(ultimaQueryRicerca);

      if ($("keypad-display")) {
        $("keypad-display").textContent = importoInseritoTastierino + " EUR";
      }

      showView(vistaDaMostrare, true);
    } catch (e) {
      console.error("Errore nel caricamento dello stato:", e);
      showView('view-cassa', true);
    }
  } else {
    showView('view-cassa', true);
  }
}

caricaStato();


function apriFiltroProdotti() {
  provenienzaRicerca = "f12";
  showView('view-filtro-prodotti');
}

function tornaIndietroRisultati() {
  if (provenienzaRicerca === "f12") {
    showView('view-filtro-prodotti', false, true);
  } else {
    // Se siamo arrivati dalla barra di ricerca della cassa, torniamo direttamente in cassa
    showView('view-cassa');
  }
}
