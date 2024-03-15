const ErrorHandler = require('../utils/ErrorHandler');

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'Internal Server Error';

  if (process.env.NODE_ENV === 'DEVELOPMENT') {
    res.status(err.statusCode).json({
      success: false,
      errMessage: err.message,
      error: err,
      stack: err.stack,
    });
  }

  if (process.env.NODE_ENV === 'PRODUCTION') {
    let error = { ...err };
    error.message = err.message;

    if (err.name === 'JsonWebTokenError') {
      const message = 'Invalid token. Please login.';
      error = new ErrorHandler(message, 401);
    }

    res.status(error.statusCode).json({
      success: false,
      message: error.message,
    });
  }
};
