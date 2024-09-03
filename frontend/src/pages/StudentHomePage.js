
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/studentHomePage.css';

const StudentHomePage = () => {
  return (
    <div className="student-home-container">
      <header className="student-header">
        <nav className="navbar">
          <div className="navbar-logo">
            <h1>Student Portal</h1>
          </div>
          <ul className="navbar-links">
            <li><Link to="/StudentPhases" className="student-link">Phases</Link></li>
            <li><Link to="/queans" className="student-link">Answer Questions</Link></li>
            <li><Link to="/trackprogress" className="student-link">Track Progress</Link></li>
            <li><Link to="/feedback" className="student-link">View Feedback</Link></li>
          </ul>
        </nav>
      </header>

      {/* Background slideshow */}
      <div className="slideshow">
        <div className="slide-image" style={{ backgroundImage: `url(${require('../assets/bg1.jpg')})` }}></div>
        <div className="slide-image" style={{ backgroundImage: `url(${require('../assets/bg2.jpg')})` }}></div>
        <div className="slide-image" style={{ backgroundImage: `url(${require('../assets/bg3.jpg')})` }}></div>
        <div className="slide-image" style={{ backgroundImage: `url(${require('../assets/bg4.jpg')})` }}></div>
        <div className="slide-image" style={{ backgroundImage: `url(${require('../assets/bg5.jpg')})` }}></div>
        <div className="slide-image" style={{ backgroundImage: `url(${require('../assets/bg6.jpg')})` }}></div>
        <div className="slide-image" style={{ backgroundImage: `url(${require('../assets/bg7.jpg')})` }}></div>
        <div className="slide-image" style={{ backgroundImage: `url(${require('../assets/bg8.jpg')})` }}></div>
        <div className="slide-image" style={{ backgroundImage: `url(${require('../assets/bg9.jpg')})` }}></div>
        <div className="slide-image" style={{ backgroundImage: `url(${require('../assets/bg10.jpg')})` }}></div>
        <div className="slide-image" style={{ backgroundImage: `url(${require('../assets/bg11.jpg')})` }}></div>
        <div className="slide-image" style={{ backgroundImage: `url(${require('../assets/bg12.jpg')})` }}></div>
      </div>

      {/* <main className="student-main">
        
      </main> */}
    </div>
  );
};

export default StudentHomePage;
