const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { StatusCodes } = require('http-status-codes');
const errorMiddleware = require('./middleware/errors');
const routes = require('./routes/v1');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan(process.env.NODE_ENV === 'PRODUCTION' ? 'combined' : 'dev'));

// All routes
app.use('/api/v1', routes);
app.get('/', (req, res) =>
  res.status(StatusCodes.OK).json({ message: 'Welcome to the MCQ entry API' })
);

app.use(errorMiddleware);

module.exports = app;
