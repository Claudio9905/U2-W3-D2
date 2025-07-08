// recupero dei dati input del form

const inputName = document.getElementById("input1");

// recupre id dei bottoni

const save = document.getElementById("saveButton");
const remove = document.getElementById("removeButton");
const memoryKey = "inputName-memory";

save.addEventListener(`click`, function () {
  console.log("Salvo");
  const name = inputName.value;

  // salvataggio di questa stringa nel localStorage sulla chiave prefissata
  localStorage.setItem(memoryKey, name);
  alert(`Contenuto Salvato`);
});

remove.addEventListener(`click`, function () {
  inputName.value = ``;

  // svuotare la chiave prefissata nel localStorage
  localStorage.removeItem(memoryKey);
  alert(`Nome rimosso`);
});
