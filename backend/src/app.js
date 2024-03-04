const express = require("express");
const app = express();

app.use(express.json());

const errorMiddleware = require("./middleware/errors");

const mcqRoutes = require("./routes/mcqRoutes");

// All routes
app.use("/api/v1/mcq", mcqRoutes);

app.use(errorMiddleware);

module.exports = app;
