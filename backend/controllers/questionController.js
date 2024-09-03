// const Question = require('../models/Question');
// const Phase = require('../models/Phase');

// // @desc    Add a new question
// // @route   POST /api/admin/questions
// exports.addQuestion = async (req, res) => {
//   const { phase, question, options, correctOption } = req.body;

//   try {
//     const phaseExists = await Phase.findById(phase);
//     if (!phaseExists) {
//       return res.status(400).json({ message: 'Phase not found' });
//     }

//     const newQuestion = new Question({ phase, question, options, correctOption });
//     await newQuestion.save();
//     res.status(201).json(newQuestion);
//   } catch (error) {
//     res.status(500).json({ message: 'Error adding question', error });
//   }
// };
// // Get all questions for a specific phase
// exports.getQuestionsByPhase = async (req, res) => {
//     const { phaseId } = req.params;
  
//     try {
//       const questions = await Question.find({ phase: phaseId }).populate('phase', 'name');
//       if (!questions.length) {
//         return res.status(404).json({ message: 'No questions found for this phase' });
//       }
//       res.status(200).json(questions);
//     } catch (error) {
//       res.status(500).json({ message: 'Error fetching questions', error });
//     }
//   };
const Question = require('../models/Question');

// Add a new question to a specific phase
exports.addQuestion = async (req, res) => {
  try {
    const newQuestion = new Question({
      phase: req.params.phaseId,
      question: req.body.question,
      options: req.body.options,
      correctOption: req.body.correctOption,
    });
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(500).json({ message: 'Error creating question' });
  }
};

// Get questions by phase ID
exports.getQuestionsByPhase = async (req, res) => {
  try {
    const questions = await Question.find({ phase: req.params.phaseId });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching questions' });
  }
};

exports.deleteQuestion = async (req, res) => {
  try {
    const question = await Question.findByIdAndDelete(req.params.id);
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }
    res.json({ message: 'Question deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting question' });
  }
};