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

//Displays upcoming tasks

function displayUpcomingTasks(tasks){
    upcomingTasks.innerHTML = ""
    if(tasks.length === 0){
        upcomingTasks.innerHTML = `
            <p class="empty-message">
                No study tasks available.
                Click <strong>Add Task</strong> to get started.
            </p>
        `
        return
    }

    //Sort by nearest due date
    tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))

    //Show only pending tasks
    const pendingTasksOnly = tasks.filter(task => !task.completed)

    //Display first five
    const upcoming = pendingTasksOnly.slice(0, 5)

    if (upcoming.length === 0) {

        upcomingTasks.innerHTML = `
            <p class="empty-message">
                🎉 Congratulations!
                You have completed all your study tasks.
            </p>
        `

        return

    }

    upcoming.forEach(task => {

        const card = document.createElement("div")

        card.className = "task-card"

        card.innerHTML = `

            <h3>${task.title}</h3>

            <p><strong>Course:</strong> ${task.course}</p>

            <p><strong>Due:</strong> ${formatDate(task.dueDate)}</p>

            <p><strong>Priority:</strong> ${task.priority}</p>

            <p>${task.description}</p>

        `

        upcomingTasks.appendChild(card)

    })
}

//Format date

function formatDate(date){
    
    return new Date(date).toLocaleDateString("en-GB",{
        day: "numeric",
        month: "long",
        year: "numeric"
    })
}