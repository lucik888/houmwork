const gear = document.getElementById("gear");
const press = document.getElementById("press");
const alert = document.getElementById("alert");

press.addEventListener('click', () => {
  gear.classList.add("spin");
  alert.classList.remove("hidden");
})
