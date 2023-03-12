const checkbox = document.querySelector(".checkbox");
const lab = document.querySelector('#lab')
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
  lab.classList.toggle("green")
  
})
prompt("SAY SOMETHING")