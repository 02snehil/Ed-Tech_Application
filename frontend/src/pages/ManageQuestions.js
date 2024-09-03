import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/manageQuestions.css';

const ManageQuestions = () => {
  const [phases, setPhases] = useState([]);
  const [selectedPhase, setSelectedPhase] = useState('');
  const [questionData, setQuestionData] = useState({
    question: '',
    options: ['', '', '', ''],
    correctOption: ''
  });

  useEffect(() => {
    const fetchPhases = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/phases');
        setPhases(response.data);
      } catch (error) {
        console.error('Error fetching phases:', error);
      }
    };

    fetchPhases();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestionData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleOptionChange = (index, value) => {
    setQuestionData(prevData => {
      const newOptions = [...prevData.options];
      newOptions[index] = value;
      return { ...prevData, options: newOptions };
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post('http://localhost:5000/api/admin/questions', { phase: selectedPhase, ...questionData });
  //     setQuestionData({
  //       question: '',
  //       options: ['', '', '', ''],
  //       correctOption: ''
  //     });
  //     alert('Question added successfully');
  //   } catch (error) {
  //     console.error('Error adding question:', error);
  //     alert('Error adding question');
  //   }
  // };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/admin/phases/${selectedPhase}/questions', {
        question: questionData.question,
        options: questionData.options,
        correctOption: questionData.correctOption,
      });
      setQuestionData({
        question: '',
        options: ['', '', '', ''],
        correctOption: ''
      });
      alert('Question added successfully');
    } catch (error) {
      console.error('Error adding question:', error);
      alert('Error adding question');
    }
  };


  return (
    <div className="manage-questions-container">
      <h2>Manage Questions</h2>
      <form onSubmit={handleSubmit}>
        <label>Select Phase:</label>
        <select
          value={selectedPhase}
          onChange={(e) => setSelectedPhase(e.target.value)}
          required
        >
          <option value="">Select a phase</option>
          {phases.map(phase => (
            <option key={phase._id} value={phase._id}>{phase.name}</option>
          ))}
        </select>

        <label>Question:</label>
        <input
          type="text"
          name="question"
          value={questionData.question}
          onChange={handleChange}
          required
        />

        {questionData.options.map((option, index) => (
          <div key={index} className="option-container">
            <label>Option {index + 1}:</label>
            <input
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              required
            />
          </div>
        ))}

        <label>Correct Option:</label>
        <select
          name="correctOption"
          value={questionData.correctOption}
          onChange={handleChange}
          required
        >
          <option value="">Select the correct option</option>
          {questionData.options.map((option, index) => (
            <option key={index} value={index}>{option}</option>
          ))}
        </select>

        <button type="submit" className="btn">Add Question</button>
      </form>
    </div>
  );
};

export default ManageQuestions;
