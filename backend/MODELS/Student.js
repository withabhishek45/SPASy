const mongoose = require('mongoose');
const { studentDB } = require('../config/db');

const studentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Enter your full name'],
    trim: true,
    minlength: [3, 'Full name must be at least 3 characters long'],
  },
  email: {
    type: String,
    required: [true, 'Enter your email'],
    lowercase: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, 'Enter a valid email address'],
  },
  password: {
    type: String,
    required: [true, 'Enter your password'],
    minlength: [6, 'Password must be at least 6 characters long'],
    trim: true,
  },
}, {
  timestamps: true,
});

const StudentModel = studentDB.model('Student', studentSchema);

module.exports = StudentModel;
