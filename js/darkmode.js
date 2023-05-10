// funkcia na nastavenie režimu a jeho uloženie do localStorage
function setMode(mode) {
  // nastaviť triedu tela na vybraný režim
  var body = document.body;
  body.classList.toggle("dark-mode", mode === "dark");
  // uložiť vybraný režim do localStorage
  localStorage.setItem("preferredMode", mode);
}

// funkcia na načítanie režimu z localStorage a jeho nastavenie
function retrieveMode() {
  // načítať preferovaný režim z localStorage
  var preferredMode = localStorage.getItem("preferredMode");
  // nastaviť triedu tela na preferovaný režim
  setMode(preferredMode || "light");
}

// zavolať funkciu retrieveMode pri načítaní stránky na nastavenie režimu
window.addEventListener('load', retrieveMode);

// prepínanie medzi svetlým a tmavým režimom po kliknutí na prepínacie tlačidlo
document.querySelector('#modeToggle').addEventListener('click', function () {
  var currentMode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  var newMode = currentMode === 'dark' ? 'light' : 'dark';
  setMode(newMode);
});
