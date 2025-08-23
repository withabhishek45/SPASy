const express = require('express');
const router = express.Router();
const recruiterMiddleware = require('../middlewares/recruiterMiddleware');

router.post('/register', recruiterMiddleware.registerRecruiter);
router.post('/login', recruiterMiddleware.loginRecruiter);
router.put('/update', recruiterMiddleware.updateRecruiter);

module.exports = router;
