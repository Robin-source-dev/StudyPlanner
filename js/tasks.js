//Display current year
document.getElementById("year").textContent = new Date().getFullYear()

//DOM elements
const taskContainer = document.getElementById("taskContainer")
const searchInput = document.getElementById("searchTask")
const priorityFilter = document.getElementById("filterPriority")

//Load tasks when page loads
displayTasks()

//Search tasks
searchInput.addEventListener("input", displayTasks)

//Filter tasks
priorityFilter.addEventListener("change", displayTasks)
