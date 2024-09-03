const Student = require('../models/Student');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// @route   POST /api/auth/register
// @desc    Register student
// @access  Public
exports.registerStudent = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let student = await Student.findOne({ email });

    if (student) {
      return res.status(400).json({ msg: 'Student already exists' });
    }

    student = new Student({
      name,
      email,
      password,
    });

    await student.save();

    const payload = {
      student: {
        id: student.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @route   POST /api/auth/login
// @desc    Authenticate student & get token
// @access  Public
exports.loginStudent = async (req, res) => {
  const { email, password } = req.body;

  try {
    let student = await Student.findOne({ email });

    if (!student) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const isMatch = await bcrypt.compare(password, student.password);

    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const payload = {
      student: {
        id: student.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
