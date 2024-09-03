
// const express = require('express');
// const connectDB = require('./config/db');
// const dotenv = require('dotenv');
// const cors = require('cors');

// dotenv.config();

// const app = express();

// // Connect to MongoDB
// connectDB();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/auth', require('./routes/authRoutes')); // Student routes

// // Add admin routes here
// app.use('/api/admin', require('./routes/adminRoutes'));


// app.use('/api/admin', require('./routes/phaseRoutes'));
// app.use('/api/student', require('./routes/studentRoutes'));
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes')); // Student routes
app.use('/api/admin', require('./routes/adminRoutes')); // Admin routes (phases, questions)

// Phase and question routes under admin
app.use('/api/admin', require('./routes/phaseRoutes'));
app.use('/api/student', require('./routes/studentRoutes'));

app.use('/api/admin/questions', require('./routes/questionGenerationRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
