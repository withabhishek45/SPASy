const mongoose = require('mongoose');
const { recruiterDB } = require('../config/db');

const recruiterSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
    trim: true,
  },
  contactPerson: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true,
  },
  phone: {
    type: Number,
    min: 10,
    default: 1234567890,
  },
  // Add additional fields here if needed to match frontend registration form
}, {
  timestamps: true,
});

const RecruiterModel = recruiterDB.model('Recruiter', recruiterSchema);

module.exports = RecruiterModel;
