import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RegisterProject } from './pages/RegisterProject.js'
import { ManageResources } from './pages/ManageResources.js'
import { ViewSubmissions } from './pages/ViewSubmissions.js'
import { GradeSubmissions } from './pages/GradeSubmissions.js'
import { JoinProject } from './pages/JoinProject.js'
import { ViewProject } from './pages/ViewProject.js'
import { MySubmissions } from './pages/MySubmissions.js'
/*
// Placeholder Authentication Context (replace with your implementation)
export const AuthContext = createContext(null);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Replace with actual authentication logic

  const handleLogin = (loginlogic hee) => {
    setIsAuthenticated(true);
  };

  const handleLogout = (logoutlogic hee) => {
    setIsAuthenticated(false);
  };
  */
 const App = () => {
  return (
    //<AuthContext.Provider value={{ isAuthenticated, handleLogin, handleLogout }}>
      <Router>
        {/* Protected routes (replace with your authentication logic) */}
        <Routes>
          <Route path="/register-project" element={<RegisterProject />} /> {/* Protected */}
          <Route path="/manage-resources/:projectId" element={<ManageResources />} /> {/* Protected */}
          <Route path="/view-submissions/:projectId" element={<ViewSubmissions />} /> {/* Protected */}
          <Route path="/grade-submissions/:projectId" element={<GradeSubmissions />} /> {/* Protected */}
          {/* Public routes */}
          <Route path="/" element={<JoinProject />} />
          <Route path="/join-project" element={<JoinProject />} />
          <Route path="/view-project/:projectId" element={<ViewProject />} />
          <Route path="/my-submissions/:projectId" element={<MySubmissions />} />
        </Routes>
      </Router>
    //</AuthContext.Provider>
  );
};

export default App;
