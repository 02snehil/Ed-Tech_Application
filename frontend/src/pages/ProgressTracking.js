import React, { useState, useEffect } from 'react';
import '../styles/progressTracking.css';

const ProgressTracking = ({ studentId }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fetch student's progress data from the API
    fetch(`/api/students/${studentId}/progress`)
      .then(response => response.json())
      .then(data => setProgress(data.progress))
      .catch(error => console.error('Error fetching progress data:', error));
  }, [studentId]);

  return (
    <div className="progress-tracking">
      <h3>Your Progress</h3>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p>{progress}% completed</p>
    </div>
  );
};

export default ProgressTracking;
