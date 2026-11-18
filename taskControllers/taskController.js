const taskModel = require("../models/taskModel");

const allowedPriorities = ["Low", "Medium", "High"];
const allowedStatuses = ["Pending", "In Progress", "Completed"];

const requiredFields = [
    "title",
    "description",
    "assignedTo",
    "priority",
    "status",
    "dueDate"
];

// Validate task data
function validateTask(data, isPartial = false) {
    const errors = [];

    if (!isPartial) {
        for (const field of requiredFields) {
            if (
                data[field] === undefined ||
                data[field] === null ||
                (typeof data[field] === "string" && data[field].trim() === "")
            ) {
                errors.push(`${field} is required`);
            }
        }
    } else {
        for (const field of Object.keys(data)) {
            if (
                data[field] === undefined ||
                data[field] === null ||
                (typeof data[field] === "string" && data[field].trim() === "")
            ) {
                errors.push(`${field} cannot be empty`);
            }
        }
    }

    if (
        data.priority !== undefined &&
        !allowedPriorities.includes(data.priority)
    ) {
        errors.push("Priority must be Low, Medium, or High");
    }

    if (
        data.status !== undefined &&
        !allowedStatuses.includes(data.status)
    ) {
        errors.push("Status must be Pending, In Progress, or Completed");
    }

    if (data.dueDate !== undefined) {
        if (
            typeof data.dueDate !== "string" ||
            !/^\d{4}-\d{2}-\d{2}$/.test(data.dueDate)
        ) {
            errors.push("dueDate must be in YYYY-MM-DD format");
        } else {
            const date = new Date(`${data.dueDate}T00:00:00`);

            if (Number.isNaN(date.getTime()) ||
                date.toISOString().slice(0, 10) !== data.dueDate) {
                errors.push("dueDate must be a valid calendar date");
            }
        }
    }

    const stringFields = ["title", "description", "assignedTo"];

    for (const field of stringFields) {
        if (
            data[field] !== undefined &&
            typeof data[field] !== "string"
        ) {
            errors.push(`${field} must be a string`);
        }
    }

    return errors;
}

// Validate task ID
function validateId(id) {
    const parsedId = Number(id);

    if (!Number.isInteger(parsedId) || parsedId <= 0) {
        return null;
    }

    return parsedId;
}

// GET all tasks
function getAllTasks(req, res) {
    const tasks = taskModel.getAllTasks();

    res.status(200).json({
        success: true,
        count: tasks.length,
        data: tasks
    });
}

// GET task by ID
function getTaskById(req, res) {
    const id = validateId(req.params.id);

    if (id === null) {
        return res.status(400).json({
            success: false,
            message: "Invalid task ID"
        });
    }

    const task = taskModel.getTaskById(id);

    if (!task) {
        return res.status(404).json({
            success: false,
            message: "Task not found"
        });
    }

    res.status(200).json({
        success: true,
        data: task
    });
}

// POST create task
function createTask(req, res) {
    const errors = validateTask(req.body);

    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors
        });
    }

    const task = taskModel.createTask(req.body);

    res.status(201).json({
        success: true,
        message: "Task created successfully",
        data: task
    });
}

// PUT complete task update
function replaceTask(req, res) {
    const id = validateId(req.params.id);

    if (id === null) {
        return res.status(400).json({
            success: false,
            message: "Invalid task ID"
        });
    }

    const existingTask = taskModel.getTaskById(id);

    if (!existingTask) {
        return res.status(404).json({
            success: false,
            message: "Task not found"
        });
    }

    const errors = validateTask(req.body);

    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors
        });
    }

    const updatedTask = taskModel.updateTask(id, req.body);

    res.status(200).json({
        success: true,
        message: "Task completely updated",
        data: updatedTask
    });
}

// PATCH partial update
function patchTask(req, res) {
    const id = validateId(req.params.id);

    if (id === null) {
        return res.status(400).json({
            success: false,
            message: "Invalid task ID"
        });
    }

    const existingTask = taskModel.getTaskById(id);

    if (!existingTask) {
        return res.status(404).json({
            success: false,
            message: "Task not found"
        });
    }

    const allowedFields = requiredFields;
    const updates = req.body;

    if (
        !updates ||
        typeof updates !== "object" ||
        Array.isArray(updates) ||
        Object.keys(updates).length === 0
    ) {
        return res.status(400).json({
            success: false,
            message: "Provide at least one field to update"
        });
    }

    const invalidFields = Object.keys(updates).filter(
        field => !allowedFields.includes(field)
    );

    if (invalidFields.length > 0) {
        return res.status(400).json({
            success: false,
            message: "Invalid fields provided",
            invalidFields
        });
    }

    const errors = validateTask(updates, true);

    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors
        });
    }

    const updatedTask = taskModel.updateTask(id, updates);

    res.status(200).json({
        success: true,
        message: "Task partially updated",
        data: updatedTask
    });
}

// DELETE task
function deleteTask(req, res) {
    const id = validateId(req.params.id);

    if (id === null) {
        return res.status(400).json({
            success: false,
            message: "Invalid task ID"
        });
    }

    const deletedTask = taskModel.deleteTask(id);

    if (!deletedTask) {
        return res.status(404).json({
            success: false,
            message: "Task not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Task deleted successfully",
        data: deletedTask
    });
}

// GET tasks by status
function getTasksByStatus(req, res) {
    const status = req.params.status;

    if (!allowedStatuses.some(s => s.toLowerCase() === status.toLowerCase())) {
        return res.status(400).json({
            success: false,
            message: "Invalid status. Use Pending, In Progress, or Completed"
        });
    }

    const tasks = taskModel.getTasksByStatus(status);

    res.status(200).json({
        success: true,
        count: tasks.length,
        data: tasks
    });
}

// GET tasks by priority
function getTasksByPriority(req, res) {
    const priority = req.params.priority;

    if (!allowedPriorities.some(p => p.toLowerCase() === priority.toLowerCase())) {
        return res.status(400).json({
            success: false,
            message: "Invalid priority. Use Low, Medium, or High"
        });
    }

    const tasks = taskModel.getTasksByPriority(priority);

    res.status(200).json({
        success: true,
        count: tasks.length,
        data: tasks
    });
}

// GET summary
function getTaskSummary(req, res) {
    const summary = taskModel.getTaskSummary();

    res.status(200).json({
        success: true,
        data: summary
    });
}

// GET employee tasks
function getTasksByEmployee(req, res) {
    const name = req.params.name.trim();

    if (!name) {
        return res.status(400).json({
            success: false,
            message: "Employee name is required"
        });
    }

    const tasks = taskModel.getTasksByEmployee(name);

    res.status(200).json({
        success: true,
        employee: name,
        count: tasks.length,
        data: tasks
    });
}

// GET overdue tasks
function getOverdueTasks(req, res) {
    const tasks = taskModel.getOverdueTasks();

    res.status(200).json({
        success: true,
        count: tasks.length,
        data: tasks
    });
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    replaceTask,
    patchTask,
    deleteTask,
    getTasksByStatus,
    getTasksByPriority,
    getTaskSummary,
    getTasksByEmployee,
    getOverdueTasks
};