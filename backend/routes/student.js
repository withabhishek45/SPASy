const express = require('express');
const bcrypt = require('bcrypt');
const StudentModel = require('../MODELS/Student');
const { validateSignupData } = require('../utilies/validation');
const studentMiddleware = require('../middlewares/studentMiddleware');
const router = express.Router();

// POST /api/students/register
router.post('/register', async (req, res) => {
  try {
    validateSignupData(req);
    const { fullName, email, password } = req.body;

    // Check if email already exists
    const existingStudent = await StudentModel.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ success: false, message: 'Email already registered.' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new student
    const newStudent = new StudentModel({
      fullName,
      email,
      password: hashedPassword,
    });

    await newStudent.save();

    res.status(201).json({ success: true, student: { id: newStudent._id, fullName, email } });
  } catch (error) {
    console.error('Error registering student:', error);
    if (error.message && error.message.includes('validation')) {
      return res.status(400).json({ success: false, message: error.message });
    }
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
});

// POST /api/students/login
router.post('/login', studentMiddleware.loginStudent);

module.exports = router;
