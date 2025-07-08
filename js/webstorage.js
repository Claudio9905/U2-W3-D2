// recupero dei dati input del form

const inputName = document.getElementById("input1");

// recupre id dei bottoni

const save = document.getElementById("saveButton");
const load = document.getElementById("loadButton");
const remove = document.getElementById("removeButton");
const memoryKey = "inputName-memory";

save.addEventListener(`click`, function () {
  console.log("Salvo");
  const name = inputName.value;

  // salvataggio di questa stringa nel localStorage sulla chiave prefissata
  localStorage.setItem(memoryKey, name);
  alert(`Contenuto Salvato`);
});

load.addEventListener(`click`, function () {
  const savedInput = localStorage.getItem(memoryKey);
  if (savedInput !== null) {
    inputName.value = savedInput;
    alert("Contenuto caricato");
  } else {
    alert("Nessun contenuto salvato");
  }
});

remove.addEventListener(`click`, function () {
  inputName.value = ``;

  // svuotare la chiave prefissata nel localStorage
  localStorage.removeItem(memoryKey);
  alert(`Nome rimosso`);
});
