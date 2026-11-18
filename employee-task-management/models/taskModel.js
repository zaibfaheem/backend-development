const tasks = require("../data/tasks");

let nextId = Math.max(0, ...tasks.map(task => task.id)) + 1;

// Get all tasks
function getAllTasks() {
    return tasks;
}

// Get task by ID
function getTaskById(id) {
    return tasks.find(task => task.id === Number(id)) || null;
}

// Create new task
function createTask(data) {
    const newTask = {
        id: nextId++,
        ...data
    };

    tasks.push(newTask);

    return newTask;
}

// Update complete task
function updateTask(id, data) {
    const task = getTaskById(id);

    if (!task) {
        return null;
    }

    Object.assign(task, data);

    return task;
}

// Delete task
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === Number(id));

    if (index === -1) {
        return null;
    }

    const deletedTask = tasks.splice(index, 1)[0];

    return deletedTask;
}

// Filter tasks by status
function getTasksByStatus(status) {
    return tasks.filter(task =>
        task.status.toLowerCase() === status.toLowerCase()
    );
}

// Filter tasks by priority
function getTasksByPriority(priority) {
    return tasks.filter(task =>
        task.priority.toLowerCase() === priority.toLowerCase()
    );
}

// Get task summary
function getTaskSummary() {
    return {
        totalTasks: tasks.length,
        pending: tasks.filter(task => task.status === "Pending").length,
        inProgress: tasks.filter(task => task.status === "In Progress").length,
        completed: tasks.filter(task => task.status === "Completed").length
    };
}

// Get tasks assigned to employee
function getTasksByEmployee(name) {
    return tasks.filter(task =>
        task.assignedTo.toLowerCase() === name.toLowerCase()
    );
}

// Get overdue tasks
function getOverdueTasks() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return tasks.filter(task => {
        const dueDate = new Date(`${task.dueDate}T00:00:00`);

        return dueDate < today && task.status !== "Completed";
    });
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    getTasksByStatus,
    getTasksByPriority,
    getTaskSummary,
    getTasksByEmployee,
    getOverdueTasks
};















// module.exports = {getAllTasks, getTaskById, createTask, replaceTask, updateTask, filterByStatus, filterByPriority,  deleteTask



// };