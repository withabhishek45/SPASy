const express = require('express');
const router = express.Router();
const studentMiddleware = require('../middlewares/studentMiddleware');

router.post('/register', studentMiddleware.registerStudent);
router.post('/login', studentMiddleware.loginStudent);
router.put('/update', studentMiddleware.updateStudent);

module.exports = router;
