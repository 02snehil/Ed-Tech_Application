// const express = require('express');
// const router = express.Router();
// const getStudents = require('../controllers/studentControllers')

// router.get('/student' , getStudents);

// module.exports =router;
// routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const { getAllStudents } = require('../controllers/studentControllers');

// GET all students
router.get('/students', getAllStudents);

module.exports = router;
