//Display current year in the footer
document.getElementById("year").textContent = new Date().getFullYear()

//Get the form
const taskForm = document.getElementById("taskForm")

//Listen for form submission
taskForm.addEventListener("submit", saveTask)