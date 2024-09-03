
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import StudentHomePage from './pages/StudentHomePage'; // Import the new component
// import AdminHomePage from './pages/AdminHomePage';
// import Stulogin from './pages/StudentLogin';
// import Stureg from './pages/StudentRegister';
// import AdmAnalytics from './pages/Analytics';
// import Adcntmt from './pages/ContentManagement';
// import Adfeedback from './pages/Feedback';
// import Adprgtrc from './pages/ProgressTracking';
// import AdminLoginPage from './pages/AdminLoginPage';
// import ManagePhases from './pages/ManagePhases';
// import ManageQuestions from './pages/ManageQuestions';
// import ViewStudents from './pages/ViewStudents';
// import StudentPhases from './pages/StudentPhases';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route exact path="/" element={<HomePage />} />
//         <Route path="/student-home" element={<StudentHomePage />} /> {/* Update this path */}
//         <Route path="/admin-dashboard" element={<AdminHomePage />} />
//         <Route path="/student-login" element={<Stulogin />} />
//         <Route path="/student-register" element={<Stureg />} />
//         <Route path="/ManagePhases" element={<ManagePhases />} />
//         <Route path="/Adcntmt" element={<Adcntmt />} />
//         <Route path="/Adfeedback" element={<Adfeedback />} />
//         <Route path="/Adprgtrc" element={<Adprgtrc />} />
//         <Route path="/ManageQuestions" element={<ManageQuestions />} />
//         <Route path="/ViewStudents" element={<ViewStudents />} />
        
//         <Route path="/AdminLoginPage" element={<AdminLoginPage />} />
//         <Route path="StudentPhases" element={StudentPhases} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StudentHomePage from './pages/StudentHomePage';
import AdminHomePage from './pages/AdminHomePage';
import Stulogin from './pages/StudentLogin';
import Stureg from './pages/StudentRegister';
import AdmAnalytics from './pages/Analytics';
import Adcntmt from './pages/ContentManagement';
import Adfeedback from './pages/Feedback';
import Adprgtrc from './pages/ProgressTracking';
import AdminLoginPage from './pages/AdminLoginPage';
import ManagePhases from './pages/ManagePhases';
import ManageQuestions from './pages/ManageQuestions';
import ViewStudents from './pages/ViewStudents';
import StudentPhases from './pages/StudentPhases'; 
import QuestionGenerator from './pages/QuestionGenerator';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/student-home" element={<StudentHomePage />} />
        <Route path="/admin-dashboard" element={<AdminHomePage />} />
        <Route path="/student-login" element={<Stulogin />} />
        <Route path="/student-register" element={<Stureg />} />
        <Route path="/ManagePhases" element={<ManagePhases />} />
        <Route path="/Adcntmt" element={<Adcntmt />} />
        <Route path="/Adfeedback" element={<Adfeedback />} />
        <Route path="/Adprgtrc" element={<Adprgtrc />} />
        <Route path="/ManageQuestions" element={<ManageQuestions />} />
        <Route path="/ViewStudents" element={<ViewStudents />} />
        <Route path="/AdminLoginPage" element={<AdminLoginPage />} />
        <Route path="/QuestionGenerator" element={<QuestionGenerator />} />
        <Route path="/StudentPhases" element={<StudentPhases />} /> {/* Use element instead of component */}
      </Routes>
    </Router>
  );
}

export default App;
