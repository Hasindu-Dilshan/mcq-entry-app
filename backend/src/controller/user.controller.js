const { StatusCodes } = require('http-status-codes');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const User = require('../modal/user');
const ErrorHandler = require('../utils/ErrorHandler');

// Register user => /api/v1/auth/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: 'sameple_id_str',
      url: 'sample.url',
    },
  });

  const token = user.getJwt();

  // send json web token as the response
  res.status(StatusCodes.CREATED).json({
    success: true,
    token,
  });
});

// Login user => /api/v1/auth/login
exports.login = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  // retrieve user with password
  const user = await User.findOne({ email: email }).select('+password');

  if (!user) {
    return next(
      new ErrorHandler('Invalid email or password', StatusCodes.UNAUTHORIZED)
    );
  }

  // check password
  const isPasswordsMatched = await user.comparePasswords(password);

  if (!isPasswordsMatched) {
    return next(new ErrorHandler('Invalid password', StatusCodes.UNAUTHORIZED));
  }

  const token = user.getJwt();

  // send json web token as the response
  res.status(200).json({
    success: true,
    email,
    token,
  });
});
