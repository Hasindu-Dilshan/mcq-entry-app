const dotenv = require("dotenv");
const app = require("./app");
const connectDatabase = require("../config/database");

// Setup config file
dotenv.config({ path: "config/config.env" });

// Connect to database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(
    `Server running on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});
