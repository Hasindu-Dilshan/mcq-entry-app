const dotenv = require("dotenv");
const app = require("./app");
const connectDatabase = require("../config/database");

// handle uncaught exception errors
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.stack}`);
  console.log("Shutting down the server due to uncaught exception");
  process.exit(1);
});

// setup config file
dotenv.config({ path: "config/config.env" });

// connect to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server running on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});

// handle unhandled promise rejection errors
process.on("unhandledRejection", (err) => {
  console.log(`Error ${err.message}`);
  console.log("Shutting down the server due to unhandled promise rejection");

  server.close(() => {
    process.exit(1);
  });
});
