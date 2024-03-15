const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const errorMiddleware = require('./middleware/errors');

const mcq = require('./routes/mcq');
const auth = require('./routes/auth');

// All routes
app.use('/api/v1/mcq', mcq);
app.use('/api/v1/auth', auth);

app.use(errorMiddleware);

module.exports = app;
