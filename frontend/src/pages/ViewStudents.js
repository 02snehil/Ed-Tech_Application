import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/viewStudents.css';

const ViewStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/student/students'); // Adjust the URL if necessary
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
        alert('Error fetching students');
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="view-students-container">
      <h2>All Students</h2>
      {students.length > 0 ? (
        <table className="students-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Progress</th>
              <th>Registration Date</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>
                  {student.progress ? (
                    Object.entries(student.progress).map(([phase, completed]) => (
                      <div key={phase}>
                        {phase}: {completed ? 'Completed' : 'Incomplete'}
                      </div>
                    ))
                  ) : (
                    <div>No progress data</div>
                  )}
                </td>
                <td>{new Date(student.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No students found.</p>
      )}
    </div>
  );
};

export default ViewStudents;
