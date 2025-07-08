// recupero dei dati input del form

const inputName = document.getElementById("input1");

// recupre id dei bottoni

const save = document.getElementById("saveButton");
const remove = document.getElementById("removeButton");

// prendo il form
const myForm = document.getElementById("login");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = inputName.value;
  save.addEventListener(`click`, (e) => {
    localStorage.setItem("Name", name);
  });

  remove.addEventListener(`click`, (e) => {
    if (localStorage.getItem("Name")) {
      localStorage.removeItem("Name");
    }
  });

  myForm.reset();
});
