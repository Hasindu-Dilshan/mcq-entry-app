const express = require("express");
const app = express();

app.use(express.json());

const errorMiddleware = require("./middleware/errors");

const mcq = require("./routes/mcq");
const auth = require("./routes/auth");

// All routes
app.use("/api/v1/mcq", mcq);
app.use("/api/v1/users", auth);

app.use(errorMiddleware);

module.exports = app;
