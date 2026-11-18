 Employee Task Management REST API
 Overview

A REST API built with Node.js and Express.js to manage employee tasks using MVC architecture.

 Features

 Create, read, update, and delete tasks
 Automatically generated task IDs
 Assign tasks to employees
 Filter tasks by status and priority
 Get employee-specific tasks
 Task summary statistics
 Find overdue tasks
 Input validation
 Centralized error handling
 Unknown route handling

 Technologies

 Node.js
 Express.js
 JavaScript
 MVC Architecture
 In-memory array storage
 Installation

Navigate to the project folder:

cd employee-task-management


Install dependencies:

npm install
`

Create a `.env` file:

env
PORT=3000


 Run the application

Development mode:


npm run dev


Production mode:
npm start


Server URL:

http://localhost:3000


 API Endpoints

| Method | Endpoint | Description |

| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/:id` | Get task by ID |
| POST | `/api/tasks` | Create a task |
| PUT | `/api/tasks/:id` | Update complete task |
| PATCH | `/api/tasks/:id` | Update selected fields |
| DELETE | `/api/tasks/:id` | Delete task |
| GET | `/api/tasks/status/:status` | Filter by status |
| GET | `/api/tasks/priority/:priority` | Filter by priority |
| GET | `/api/tasks/summary` | Get task summary |
| GET | `/api/tasks/employee/:name` | Get employee tasks |
| GET | `/api/tasks/overdue` | Get overdue tasks |

 Task Fields

 `title`: String
 `description`: String
 `assignedTo`: String
 `priority`: Low, Medium, or High
 `status`: Pending, In Progress, or Completed
 `dueDate`: YYYY-MM-DD
 Storage

Tasks are stored in a JavaScript array. Data is temporary and resets when the server restarts.
 API Testing

Test all endpoints using Postman or Thunder Client.

