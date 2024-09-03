// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/studentRegister.css';

// const StudentRegister = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle registration logic here
//     console.log(formData);
//   };

//   return (
//     <div className="register-container">
//       <h2>Student Registration</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Name:</label>
//         <input type="text" name="name" value={formData.name} onChange={handleChange} required />

//         <label>Email:</label>
//         <input type="email" name="email" value={formData.email} onChange={handleChange} required />

//         <label>Password:</label>
//         <input type="password" name="password" value={formData.password} onChange={handleChange} required />

//         <button type="submit" className="btn">Register</button>
//       </form>
//       <p className="login-link">
//         Already registered? <Link to="/student-login">Login here</Link>
//       </p>
//     </div>
//   );
// };

// export default StudentRegister;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/studentRegister.css';

const StudentRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/student-login');
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
    <div className="register-container">
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />

        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />

        <label>Password:</label>
        <input 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          required 
        />

        <button type="submit" className="btn" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      <p className="login-link">
        Already registered? <Link to="/student-login">Login here</Link>
      </p>
    </div>
  );
};

export default StudentRegister;
