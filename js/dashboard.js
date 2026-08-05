//Display current year in footer
document.getElementById("year").textContent = new Date().getFullYear()

//Dashboard elements
const totalTasks = document.getElementById("totalTasks")
const pendingTasks = document.getElementById("pendingTasks")
const completedTasks = document.getElementById("completedTasks")
const upcomingTasks = document.getElementById("upcomingTasks")

//Load dashboard when page opens
loadDashboard()

//Load Dashboard statistics

function loadDashboard(){
    //Retrieve tasks
    const tasks = JSON.parse(localStorage.getItem("tasks")) || []

    //Statistics
    const total = tasks.length
    const completed = tasks.filter(task => task.completed).length
    const pending = total - completed

    //Display statistics
    totalTasks.textContent = total
    pendingTasks.textContent = pending
    completedTasks.textContent = completed

    //Display upcoming tasks
    displayUpcomingTasks(tasks)
}