// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import '../styles/studentPhases.css';

// const StudentPhases = () => {
//   const [phases, setPhases] = useState([]);
//   const [selectedPhase, setSelectedPhase] = useState(null);
//   const [questions, setQuestions] = useState([]);

//   // Fetch all phases when the component is mounted
//   useEffect(() => {
//     const fetchPhases = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/admin/phases');
//         setPhases(response.data);
//       } catch (error) {
//         console.error('Error fetching phases:', error);
//       }
//     };

//     fetchPhases();
//   }, []);

//   const handlePhaseClick = async (phaseId) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/admin/phases/${phaseId}/questions`);
//       setQuestions(response.data); 
//       setSelectedPhase(phaseId); 
//     } catch (error) {
//       console.error('Error fetching questions:', error);
//     }
//   };

//   return (
//     <div className="student-phases-container">
//       <h2>Select a Phase</h2>
//       {/* List all the phases */}
//       <div className="phases-list">
//         {phases.length > 0 ? (
//           phases.map(phase => (
//             <div 
//               key={phase._id} 
//               className={`phase-item ${selectedPhase === phase._id ? 'active' : ''}`}
//               onClick={() => handlePhaseClick(phase._id)}
//             >
//               {phase.name}
//             </div>
//           ))
//         ) : (
//           <p>No phases available.</p> // Message if no phases are available
//         )}
//       </div>

//       {/* Show questions related to the selected phase */}
//       {selectedPhase && (
//         <div className="questions-container">
//           <h3>Questions for {phases.find(p => p._id === selectedPhase)?.name}</h3>
//           <ul>
//             {questions.map((question, index) => (
//               <li key={question._id}>
//                 <strong>Q{index + 1}: {question.question}</strong>
//                 <ul className="options-list">
//                   {question.options.map((option, i) => (
//                     <li key={i} className={i === question.correctOption ? 'correct-option' : ''}>
//                       {option}
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StudentPhases;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/studentPhases.css';

const StudentPhases = () => {
  const [phases, setPhases] = useState([]);
  const [selectedPhase, setSelectedPhase] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  // Fetch all phases when the component is mounted
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

  const handlePhaseClick = async (phaseId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/admin/phases/${phaseId}/questions`);
      setQuestions(response.data);
      setSelectedPhase(phaseId);
      setAnswers({}); // Reset answers when a new phase is selected
      setResult(null); // Reset result when a new phase is selected
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleOptionChange = (questionId, selectedOption) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: selectedOption
    }));
  };

  const handleSubmit = () => {
    let score = 0;
    questions.forEach(question => {
      if (answers[question._id] === question.correctOption) {
        score += 1;
      }
    });
    setResult(`You scored ${score} out of ${questions.length}`);
  };

  return (
    <div className="student-phases-container">
      <h2>Select a Phase</h2>
      <div className="phases-list">
        {phases.length > 0 ? (
          phases.map(phase => (
            <div 
              key={phase._id} 
              className={`phase-item ${selectedPhase === phase._id ? 'active' : ''}`}
              onClick={() => handlePhaseClick(phase._id)}
            >
              {phase.name}
            </div>
          ))
        ) : (
          <p>No phases available.</p>
        )}
      </div>

      {selectedPhase && (
        <div className="questions-container">
          <h3>Questions for {phases.find(p => p._id === selectedPhase)?.name}</h3>
          <ul>
            {questions.map((question, index) => (
              <li key={question._id}>
                <strong>Q{index + 1}: {question.question}</strong>
                <ul className="options-list">
                  {question.options.map((option, i) => (
                    <li key={i}>
                      <label>
                        <input
                          type="radio"
                          name={`question-${question._id}`}
                          value={i}
                          checked={answers[question._id] === i}
                          onChange={() => handleOptionChange(question._id, i)}
                        />
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
          {result && <div className="result">{result}</div>}
        </div>
      )}
    </div>
  );
};

export default StudentPhases;
