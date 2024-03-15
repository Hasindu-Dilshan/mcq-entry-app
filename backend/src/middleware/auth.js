const jwt = require('jsonwebtoken');

const ErrorHandler = require('../utils/ErrorHandler');
const catchAsyncErrors = require('./catchAsyncErrors');
const User = require('../modal/user');

// authenticate user by bearer token
exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return next(new ErrorHandler('Please login to access this resource', 401));
  }

  const token = authHeader?.split(' ')[1];

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const user = await User.findOne({ _id: decoded._id });

  if(!user) {
    return next(new ErrorHandler('Invalid user. Please contact the admin', 401));
  }

  req.user = user;

  next();
});

// higher order function to implement authorization based on roles
exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role '${req.user.role}' is not allowed to access this resource`,
          403
        )
      ); // forbid user
    }

    next();
  };
};
