const gear = document.getElementById("gear");
const press = document.getElementById("press");
const alert = document.getElementById("alert");

press.addEventListener('click', () => {
  gear.classList.add("spin");
  alert.classList.remove("hidden");

})

gear.addEventListener("animationend",() => {
  gear.classList.remove("spin");
  alert.classList.add("hidden");
})



// чтобы создать реакт приложение
// npx create-react-app <название папки>
// Пример:
// npx create-react-app gear-integration-react

// E:\Users\Andrew\WebstormProjects\houmwork>npx create-react-app gear-interaction-react

// добавить в git - выделить папку gear-interaction-react и нажать Ctrl + Alt + A

// cd gear-interaction-react

// запустить проект
// npm start
