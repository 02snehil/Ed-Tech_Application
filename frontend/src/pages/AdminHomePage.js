import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/adminHomePage.css';

const AdminHomePage = () => {
  return (
    <div className="admin-home-container">
      <header className="admin-header">
        <nav className="navbar">
          <div className="navbar-logo">
            <h1>Admin Portal</h1>
          </div>
          <ul className="navbar-links">
            <li><Link to="/ManagePhases" className="admin-link">Manage Phases</Link></li>
            <li><Link to="/ManageQuestions" className="admin-link">Manage Questions</Link></li>
            <li><Link to="/ViewStudents" className="admin-link">View Students</Link></li>
            <li><Link to="/Adprgtrc" className="admin-link">Monitor Progress</Link></li>
            <li><Link to="/Adfeedback" className="admin-link">Provide Feedback</Link></li>
            <li><Link to="/Adcntmt" className="admin-link">Manage Content</Link></li>
          </ul>
        </nav>
      </header>
      <div className="background-slideshow-admin">
        <div className="slide-image-admin" style={{ backgroundImage: `url(${require('../assets/bg1.jpg')})` }}></div>
        <div className="slide-image-admin" style={{ backgroundImage: `url(${require('../assets/bg2.jpg')})` }}></div>
        <div className="slide-image-admin" style={{ backgroundImage: `url(${require('../assets/bg3.jpg')})` }}></div>
        <div className="slide-image-admin" style={{ backgroundImage: `url(${require('../assets/bg4.jpg')})` }}></div>
        <div className="slide-image-admin" style={{ backgroundImage: `url(${require('../assets/bg5.jpg')})` }}></div>
        <div className="slide-image-admin" style={{ backgroundImage: `url(${require('../assets/bg6.jpg')})` }}></div>
      </div>
      <main className="admin-main">
        <h2>Admin Dashboard</h2>
        <p>Welcome to the Admin Portal. Use the links above to manage phases, questions, and student data.</p>
      </main>
    </div>
  );
};

export default AdminHomePage;
