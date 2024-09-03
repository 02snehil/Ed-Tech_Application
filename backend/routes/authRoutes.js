const express = require('express');
const { registerStudent, loginStudent } = require('../controllers/authController');
const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register a student
router.post('/register', registerStudent);

// @route   POST /api/auth/login
// @desc    Login a student
router.post('/login', loginStudent);

module.exports = router;
