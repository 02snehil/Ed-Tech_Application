// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../styles/managePhases.css';

// const ManagePhases = () => {
//   const [phaseName, setPhaseName] = useState('');
//   const [phases, setPhases] = useState([]);
//   const [error, setError] = useState('');

//   // Fetch existing phases
//   useEffect(() => {
//     const fetchPhases = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/admin/phases');
//         setPhases(response.data);
//       } catch (error) {
//         console.error('Error fetching phases:', error);
//         setError('Error fetching phases');
//       }
//     };

//     fetchPhases();
//   }, []);

//   const handleChange = (e) => {
//     setPhaseName(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/admin/phases', { name: phaseName });
//       setPhaseName('');
//       setError('');
//       // Fetch the updated list of phases
//       const response = await axios.get('http://localhost:5000/api/admin/phases');
//       setPhases(response.data);
//       alert('Phase added successfully');
//     } catch (error) {
//       console.error('Error adding phase:', error);
//       setError('Error adding phase');
//     }
//   };

//   return (
//     <div className="manage-phases-container">
//       <h2>Manage Phases</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Phase Name:</label>
//         <input
//           type="text"
//           value={phaseName}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit" className="btn">Add Phase</button>
//       </form>
//       {error && <p className="error-message">{error}</p>}
//       <h3>Existing Phases</h3>
//       {phases.length > 0 ? (
//         <ul>
//           {phases.map((phase) => (
//             <li key={phase._id}>{phase.name}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No phases available</p>
//       )}
//     </div>
//   );
// };

// export default ManagePhases;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/managePhases.css';

const ManagePhases = () => {
  const [phaseName, setPhaseName] = useState('');
  const [phases, setPhases] = useState([]);
  const [selectedPhase, setSelectedPhase] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [editingPhase, setEditingPhase] = useState(null);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [error, setError] = useState('');

  // Fetch existing phases
  useEffect(() => {
    fetchPhases();
  }, []);

  const fetchPhases = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/admin/phases');
      setPhases(response.data);
    } catch (error) {
      console.error('Error fetching phases:', error);
      setError('Error fetching phases');
    }
  };

  const handleChange = (e) => {
    setPhaseName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingPhase) {
        // Update phase
        await axios.put(`http://localhost:5000/api/admin/phases/${editingPhase._id}`, { name: phaseName });
        alert('Phase updated successfully');
      } else {
        // Create phase
        await axios.post('http://localhost:5000/api/admin/phases', { name: phaseName });
        alert('Phase added successfully');
      }
      setPhaseName('');
      setEditingPhase(null);
      setError('');
      fetchPhases();
    } catch (error) {
      console.error('Error adding/updating phase:', error);
      setError('Error adding/updating phase');
    }
  };

  const handleEditPhase = (phase) => {
    setPhaseName(phase.name);
    setEditingPhase(phase);
  };

  const handleDeletePhase = async (phaseId) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/phases/${phaseId}`);
      alert('Phase deleted successfully');
      fetchPhases();
    } catch (error) {
      console.error('Error deleting phase:', error);
      setError('Error deleting phase');
    }
  };

  const handleSelectPhase = async (phase) => {
    setSelectedPhase(phase);
    try {
      const response = await axios.get(`http://localhost:5000/api/admin/phases/${phase._id}/questions`);
      setQuestions(response.data);
    } catch (error) {
      console.error('Error fetching questions:', error);
      setError('Error fetching questions');
    }
  };

  const handleEditQuestion = (question) => {
    setEditingQuestion(question);
  };

  const handleDeleteQuestion = async (questionId) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/questions/${questionId}`);
      alert('Question deleted successfully');
      handleSelectPhase(selectedPhase); // Refresh questions
    } catch (error) {
      console.error('Error deleting question:', error);
      setError('Error deleting question');
    }
  };

  const handleUpdateQuestion = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/admin/questions/${editingQuestion._id}`, editingQuestion);
      alert('Question updated successfully');
      setEditingQuestion(null);
      handleSelectPhase(selectedPhase); // Refresh questions
    } catch (error) {
      console.error('Error updating question:', error);
      setError('Error updating question');
    }
  };

  const handleQuestionChange = (e) => {
    const { name, value } = e.target;
    setEditingQuestion(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="manage-phases-container">
      <h2>Manage Phases</h2>
      <form onSubmit={handleSubmit}>
        <label>Phase Name:</label>
        <input
          type="text"
          value={phaseName}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn">{editingPhase ? 'Update Phase' : 'Add Phase'}</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      
      <h3>Existing Phases</h3>
      {phases.length > 0 ? (
        <ul>
          {phases.map((phase) => (
            <li key={phase._id}>
              {phase.name}
              <button onClick={() => handleEditPhase(phase)} className="btn-edit">Edit</button>
              <button onClick={() => handleDeletePhase(phase._id)} className="btn-delete">Delete</button>
              <button onClick={() => handleSelectPhase(phase)} className="btn-view">View Questions</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No phases available</p>
      )}

      {selectedPhase && (
        <div className="questions-section">
          <h3>Questions for {selectedPhase.name}</h3>
          {questions.length > 0 ? (
            <ul>
              {questions.map((question) => (
                <li key={question._id}>
                  {question.question}
                  <button onClick={() => handleEditQuestion(question)} className="btn-edit">Edit</button>
                  <button onClick={() => handleDeleteQuestion(question._id)} className="btn-delete">Delete</button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No questions available for this phase</p>
          )}
        </div>
      )}

      {editingQuestion && (
        <div className="edit-question-section">
          <h3>Edit Question</h3>
          <form onSubmit={handleUpdateQuestion}>
            <label>Question:</label>
            <input
              type="text"
              name="question"
              value={editingQuestion.question}
              onChange={handleQuestionChange}
              required
            />
            {editingQuestion.options.map((option, index) => (
              <div key={index}>
                <label>Option {index + 1}:</label>
                <input
                  type="text"
                  name={`option-${index}`}
                  value={editingQuestion.options[index]}
                  onChange={(e) => {
                    const newOptions = [...editingQuestion.options];
                    newOptions[index] = e.target.value;
                    setEditingQuestion(prev => ({
                      ...prev,
                      options: newOptions
                    }));
                  }}
                  required
                />
              </div>
            ))}
            <label>Correct Option:</label>
            <select
              name="correctOption"
              value={editingQuestion.correctOption}
              onChange={handleQuestionChange}
              required
            >
              <option value="">Select the correct option</option>
              {editingQuestion.options.map((option, index) => (
                <option key={index} value={index}>{option}</option>
              ))}
            </select>
            <button type="submit" className="btn">Update Question</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ManagePhases;
