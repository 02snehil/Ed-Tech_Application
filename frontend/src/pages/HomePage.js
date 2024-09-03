
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="header">
        <nav className="nav">
          <ul>
            <li><Link to="/student-login" className="nav-link">Student Portal</Link></li> {/* Update this to go to the login page */}
            <li><Link to="/AdminLoginPage" className="nav-link">Admin Portal</Link></li>
            <li><Link to="/QuestionGenerator" className="nav-link"> Search Questions</Link></li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <section className="hero">
          <h1>Empowering Education</h1>
          <p>Transforming the way you learn</p>
          <button className="btn-home">Get Started</button>
        </section>
        <section className="features">
          <h2>Our Features</h2>
          <ul>
            <li>
              <i className="fas fa-lock"></i>
              <h3>Secure Learning</h3>
              <p>Our platform ensures a safe and secure learning environment</p>
            </li>
            <li>
              <i className="fas fa-book"></i>
              <h3>Personalized Learning</h3>
              <p>Our AI-powered platform provides personalized learning experiences</p>
            </li>
            <li>
              <i className="fas fa-chart-line"></i>
              <h3>Data-Driven Insights</h3>
              <p>Get actionable insights to improve learning outcomes</p>
            </li>
          </ul>
        </section>
        <section className="testimonials">
          <h2>What Our Users Say</h2>
          <ul>
            <li>
              <img src="path/to/testimonial-1.jpg" alt="Testimonial 1" />
              <p>"Edutech has revolutionized the way I learn. It's amazing!"</p>
              <span>- John Doe</span>
            </li>
            <li>
              <img src="path/to/testimonial-2.jpg" alt="Testimonial 2" />
              <p>"I've seen a significant improvement in my grades since using Edutech."</p>
              <span>- Jane Doe</span>
            </li>
          </ul>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2023 Edutech. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
