// frontend/src/components/QuestionGenerator.js
import React, { useState } from 'react';
import axios from 'axios';

const QuestionGenerator = () => {
  const [content, setContent] = useState('');
  const [questions, setQuestions] = useState('');

  const handleGenerateQuestions = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/admin/questions/generate-questions', { content });
      setQuestions(response.data.questions);
    } catch (error) {
      console.error('Error generating questions:', error);
    }
  };

  return (
    <div>
      <h2>AI-Powered Question Generator</h2>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="4"
        cols="50"
        placeholder="Enter content here"
      />
      <button onClick={handleGenerateQuestions}>Generate Questions</button>
      <div>
        <h3>Generated Questions:</h3>
        <pre>{questions}</pre>
      </div>
    </div>
  );
};

export default QuestionGenerator;
