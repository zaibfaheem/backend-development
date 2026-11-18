const express = require("express");

const taskRoutes = require("./routes/taskRoutes");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Parse incoming JSON data
app.use(express.json());

// Main task routes
app.use("/api/tasks", taskRoutes);

// Unknown routes
app.use(notFound);

// Centralized error handling
app.use(errorHandler);

module.exports = app;