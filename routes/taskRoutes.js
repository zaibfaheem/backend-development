const express = require("express");
const router = express.Router();

const taskController = require("../controllers/taskController");

// Additional challenges - specific routes first
router.get("/summary", taskController.getTaskSummary);

router.get("/overdue", taskController.getOverdueTasks);

router.get("/employee/:name", taskController.getTasksByEmployee);

// Search and filtering
router.get("/status/:status", taskController.getTasksByStatus);

router.get("/priority/:priority", taskController.getTasksByPriority);

// CRUD routes
router.get("/", taskController.getAllTasks);

router.post("/", taskController.createTask);

router.get("/:id", taskController.getTaskById);

router.put("/:id", taskController.replaceTask);

router.patch("/:id", taskController.patchTask);

router.delete("/:id", taskController.deleteTask);

module.exports = router;