const dotenv = require('dotenv');
const app = require('./app');
const connectDatabase = require('../config/database');

// handle uncaught exception errors
process.on('uncaughtException', (err) => {
  console.log(`ERROR: ${err.stack}`);
  console.log('Shutting down the server due to uncaught exception');
  process.exit(1);
});

// setup config file
dotenv.config({ path: 'config/config.env' });

// connect database
connectDatabase();

// setup server
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(
    `Server running on PORT: ${port} in ${process.env.NODE_ENV} mode.`
  );
});

// handle unhandled promise rejection errors
process.on('unhandledRejection', (err) => {
  console.log(`Error ${err.message}`);
  console.log('Shutting down the server due to unhandled promise rejection');

  server.close(() => {
    process.exit(1);
  });
});
