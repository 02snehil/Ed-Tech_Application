// const express = require('express');
// const router = express.Router();
// const { addPhase, getPhases } = require('../controllers/phaseController');
// const { addQuestion, getQuestionsByPhase } = require('../controllers/questionController');

// // Phase routes
// router.post('/phases', addPhase);
// router.get('/phases', getPhases);

// // Question routes
// router.post('/questions', addQuestion);
// router.get('/phases/:phaseId/questions', getQuestionsByPhase); // Fetch questions by phase

// module.exports = router;
const express = require('express');
const router = express.Router();
const phaseController = require('../controllers/phaseController');
const questionController = require('../controllers/questionController');

// Phase routes
router.post('/phases', phaseController.addPhase); // Add a new phase
router.get('/phases', phaseController.getPhases); // Get all phases
router.put('/phases/:id', phaseController.updatePhase); // Update a phase by ID
router.delete('/phases/:id', phaseController.deletePhase); // Delete a phase by ID

// Question routes linked to phases
router.post('/phases/:phaseId/questions', questionController.addQuestion); // Add a question to a specific phase
router.get('/phases/:phaseId/questions', questionController.getQuestionsByPhase); // Get questions by phase ID
router.delete('/questions/:id', questionController.deleteQuestion); // Delete a question by ID

module.exports = router;
