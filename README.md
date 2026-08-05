# Student Study Planner

## Project Description

Student Study Planner is a web-based application designed to help students organize and manage their academic tasks efficiently. The application allows users to add, view, edit, delete, search, and filter study tasks while storing the information in the browser's local storage.

The project helps students improve their time management by providing a centralized platform for tracking assignments, projects, exams, and study sessions, reducing the chances of missing important deadlines.

---

## Problem Statement

Many students struggle to keep track of assignments, project deadlines, examinations, and study schedules. This often results in poor time management, missed deadlines, and reduced academic productivity. The Student Study Planner addresses this challenge by providing a simple, user-friendly application where students can organize and monitor all their study tasks in one place.

---

## Features

* Add new study tasks
* View all saved tasks
* Edit existing tasks
* Delete tasks
* Mark tasks as completed
* Search tasks by title or course
* Filter tasks by priority
* Dashboard showing:

  * Total tasks
  * Pending tasks
  * Completed tasks
  * Upcoming tasks
  
* Responsive design for desktop, tablet, and mobile devices
* Data persistence using Local Storage

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Local Storage API
* Flexbox
* CSS Grid
* Google Fonts (Poppins)

---

## Project Structure

```text
StudyPlanner/

│
├── index.html
├── add-task.html
├── tasks.html
├── about.html
│
├── css/
│   └── styles.css
│
├── js/
│   ├── dashboard.js
│   ├── addTask.js
│   └── tasks.js
│
└── README.md
```

---

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/Robin-source-dev/StudyPlanner
```

2. Navigate to the project folder:

```bash
cd StudyPlanner
```

3. Open the project using Visual Studio Code.

4. Launch the project using Live Server or open `index.html` in your preferred web browser.

---

## How to Use

1. Open the Home page.
2. Navigate to **Add Task**.
3. Fill in the study task details.
4. Click **Save Task**.
5. View all saved tasks on the **My Tasks** page.
6. Edit, delete, search, filter, or mark tasks as completed.
7. View task statistics on the dashboard.

---

## Behavior Driven Development (BDD)

| User Action                                   | Expected Result                                     |
| --------------------------------------------- | --------------------------------------------------- |
| User opens the application                    | Dashboard is displayed                              |
| User clicks **Add Task**                      | Task form opens                                     |
| User fills in all required fields and submits | Task is saved to Local Storage                      |
| User views **My Tasks**                       | All saved tasks are displayed                       |
| User searches for a task                      | Matching tasks are displayed                        |
| User filters by priority                      | Only tasks matching the selected priority are shown |
| User edits a task                             | Updated information is saved                        |
| User deletes a task                           | Task is removed from the list and Local Storage     |
| User marks a task as completed                | Task status changes to Completed                    |
| User refreshes the page                       | Previously saved tasks remain available             |

---

## Future Improvements

* User authentication
* Cloud database integration
* Email or browser notifications for upcoming deadlines
* Calendar view
* Dark mode
* Task categories and tags
* Progress charts and analytics

---

## Known Bugs

* Edit functionality currently uses browser prompt dialogs and may be improved with a dedicated edit form or modal.
* Data is stored only in the browser's Local Storage, so tasks are not synchronized across different devices.

---

## Author

**Robin Mwenda**

---

## Contact Information

Email: robbinmwenda2@gmail.com

GitHub: https://github.com/Robin-source-dev

---

## License

This project is licensed under the MIT License.

Copyright (c) 2026 Robin Mwenda
