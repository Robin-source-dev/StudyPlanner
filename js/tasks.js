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

//Display all tasks
function displayTasks(){

    //Retrieve tasks
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []

    //Search value
    const searchValue = searchInput.value.toLowerCase()

    //Filter value
    const priorityValue = priorityFilter.value

    //Filter tasks
    tasks = tasks.filter(task => {
        const matchesSearch =
            task.title.toLowerCase().includes(searchValue) ||
            task.course.toLowerCase().includes(searchValue)

        const matchesPriority = 
            priorityValue === "All"
            task.priority === priorityValue

        return matchesSearch && matchesPriority
    })

    //Clear previous tasks
    taskContainer.innerHTML = ""

    //No tasks available 
    if(tasks.length === 0){
        taskContainer.innerHTML = `
            <div class = "card"
                <h3>No Tasks Found</h3>
                <p>Add a task from the Add Task page.</p>
            </div>`
        
        return
    }

    //Display each task
    tasks.forEach(task =>{

        const taskCard = document.createElement("div")
        taskCard.className = "task-card"
        taskCard.innerHTML = `

            <h3>${task.title}</h3>

            <p><strong>Course:</strong>${task.course}</p>

            <p><strong>Due Date:</strong>${formatDate(task.dueDate)}</p>

            <p><strong>Priority:</strong>${task.priority}</p>

            <p><strong>Description:</strong>${task.description}</p>

            <p>
                <strong>Status:</strong>
                ${task.completed ? "Completed ✅" : "Pending ⌛"}
            </p>

            <div class="task-buttons">

                <button
                    class="complete"
                    onclick="toggleComplete(${task.id})">

                    ${task.completed ? "Undo" : "Complete"}

                </button>

                <button
                    class="edit"
                    onclick="editTask(${task.id})">

                    Edit

                </button>

                <button
                    class="delete"
                    onclick="deleteTask(${task.id})">

                    Delete

                </button>

            </div>
        `

        taskContainer.appendChild(taskCard)
        
    })
}

//Delete task
function deleteTask(id){

    const confirmDelete = confirm("Are you sure you want to delete this task?")
    if(!confirmDelete)return
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []
    tasks = tasks.filter(task => task.id !== id)
    localStorage.setItem("tasks", JSON.stringify(tasks))
    displayTasks()
}

//Mark task as completed

function toggleComplete(id){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || []
    const task = tasks.find(task => task.id === id)

    if(task){
        task.completed = !task.completed
    }

    localStorage.setItem("tasks", JSON.stringify(tasks))
    displayTasks()
}

//Edit task

function editTask(id){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || []
    const task = tasks.find(task => task.id === id)

    if(!task) return

    const newTitle = prompt(
        "Edit task title:",
        task.title
    )

    if(newTitle === null) return

    const newCourse = prompt(
        "Edit course:",
        task.course
    )

    if(newCourse === null) return

    const newDescription = prompt(
        "Edit description:",
        task.description
    )

    if(newDescription === null) return

    task.title = newTitle.trim()
    task.course = newCourse.trim()
    task.description = newDescription.trim()

    localStorage.setItem("tasks", JSON.stringify(tasks))

    displayTasks()
}

//Format date

function formatDate(date){
    return new Date(date).toLocaleDateString("en-GB",{
        day: "numeric",
        month: "long",
        year: "numeric"
    })
}