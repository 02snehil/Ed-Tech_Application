// controllers/studentController.js
const Student = require('../models/Student');

// Get all students
const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find(); // Retrieve all students from the database
    res.json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getAllStudents,
};
