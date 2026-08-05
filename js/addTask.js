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
    tasks.push(task)

    //Save back to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks))

    //Success message
    alert("Task added successfully!")

    //Clear the form
    taskForm.reset()

    //Redirect to task list
    window.location.href = "tasks.html"
}

//Validate user input
function validateInput(course,title,dueDate,priority,description){
    if(course === ""){
        alert("Please enter the course name.")
        return false
    }

    if(title === ""){
        alert("Please enter the task title.")
        return false
    }

    if(dueDate === ""){
        alert("Please select a due date.")
        return false
    }

    if(priority === ""){
        alert("Please select a priority.")
        return false
    }

    if(description === ""){
        alert("Please enter a task description.")
        return false
    }

    //Prevent selecting a past date
    const today = new Date()
    today.setHours(0, 0 ,0, 0)

    const selectedDate = new Date(dueDate)

    if(selectedDate < today){
        alert("The due date cannot be in the past.")
        return false
    }

    return true

}