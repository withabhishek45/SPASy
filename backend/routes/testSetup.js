const express = require('express');
const router = express.Router();
const Student = require('../MODELS/Student');

// Temporary route to create a test student user
router.post('/create-test-student', async (req, res) => {
  try {
    const existing = await Student.findOne({ email: 'test@student.com' });
    if (existing) {
      return res.status(200).json({ success: true, message: 'Test student already exists' });
    }
    const testStudent = new Student({
      fname: 'Test',
      lname: 'Student',
      email: 'test@student.com',
      password: 'password123', // Ideally hashed in real app
      phone: '1234567890',
      gender: 'male',
      course: 'CS',
      year: '3'
    });
    await testStudent.save();
    res.status(201).json({ success: true, message: 'Test student created' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error creating test student', error: error.message });
  }
});

module.exports = router;
