import React, { useState, useEffect } from 'react';
import '../styles/feedback.css';

const Feedback = ({ studentId }) => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    // Fetch feedback for the student from the API
    fetch(`/api/students/${studentId}/feedback`)
      .then(response => response.json())
      .then(data => setFeedback(data.feedback))
      .catch(error => console.error('Error fetching feedback:', error));
  }, [studentId]);

  return (
    <div className="feedback-section">
      <h3>Your Feedback</h3>
      {feedback.map((item, index) => (
        <div key={index} className="feedback-item">
          <p>{item.message}</p>
          <span>{item.date}</span>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
