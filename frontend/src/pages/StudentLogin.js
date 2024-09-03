
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/studentLogin.css';

const StudentLogin = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        // Save token to local storage or context
        localStorage.setItem('token', data.token);
        navigate('/student-home');
      } else {
        setError(data.msg);
      }
    } catch (err) {
      setError('Server error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Student Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={loginData.email} 
          onChange={handleChange} 
          required 
        />

        <label>Password:</label>
        <input 
          type="password" 
          name="password" 
          value={loginData.password} 
          onChange={handleChange} 
          required 
        />

        <button type="submit" className="btn" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      <p className="register-link">
        Not registered? <Link to="/student-register">Register here</Link>
      </p>
    </div>
  );
};

export default StudentLogin;
