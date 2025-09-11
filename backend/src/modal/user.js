const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'User name is required'],
    maxLength: [30, 'User name can not exceed 30 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minLength: [8, 'Password should not contain less than 8 characters'],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      // required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: 'user',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpire: String,
});

// save prehook to hash the password before saving user
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) next();
  this.password = await bcrypt.hash(this.password, 10); // salt rounds: 10
});

// retrieve jwt
userSchema.methods.getJwt = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: process.env.JWT_EXPIRE_TIME,
  });
};

userSchema.methods.comparePasswords = async function (plainTextPassword) {
  return await bcrypt.compare(plainTextPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
