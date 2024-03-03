const express = require("express");
const app = express();

app.use(express.json());

// Import all routes
const mcqRoutes = require("./routes/mcqRoutes");

app.use("/api/v1/", mcqRoutes);

module.exports = app;
