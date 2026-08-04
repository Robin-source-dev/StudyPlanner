//Display current year in the footer
document.getElementById("year").textContent = new Date().getFullYear()

//Get the form
const taskForm = document.getElementById("taskForm")

//Listen for form submission
taskForm.addEventListener("submit", saveTask)

//save a new task
function saveTask(event){
    //prevent page from refreshing
    event.preventDefault()

    //Get form values
    const course = document.getElementById("course").value.trim()
    const title = document.getElementById("title").value.trim()
    const dueDate = document.getElementById("dueDate").value
    const priority = document.getElementById("priority").value
    const description = document.getElementById("description").value.trim()

    //Validate form
    if(!validateInput(course, title, dueDate, priority, description)){
        return
    }

    //Create task object
    const task = {
        id: Date.now(),
        course: course,
        title: title,
        dueDate: dueDate,
        priority: priority,
        description: description,
        completed: false
    }

    //Get existing tasks
    const tasks = JSON.parse(localStorage.getItem("tasks")) || []

    //Add new task
    task.push(task)

    //Save back to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks))

    //Success message
    alert("Task added successfully!")

    //Clear the form
    taskForm.reset()

    //Redirect to task list
    window.location.href = "tasks.html"
}