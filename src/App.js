import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { RegisterProject } from '../src/pages/RegisterProject.js';
import RegisterProject from '../src/pages/RegisterProject.js';
import ManageResources from '../src/pages/ManageResources.js';
import ViewSubmissions from '../src/pages/ViewSubmissions.js';
import GradeSubmissions from '../src/pages/GradeSubmissions.js';
import JoinProject from '../src/pages/JoinProject.js';
import ViewProject from '../src/pages/ViewProject.js';
import MySubmissions from '../src/pages/MySubmissions.js';

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
          <Route path="/register-project" exact element={<RegisterProject />} /> {/* Protected */}
          <Route path="/manage-resources/:projectId" exact element={<ManageResources />} /> {/* Protected */}
          <Route path="/view-submissions/:projectId" exact element={<ViewSubmissions />} /> {/* Protected */}
          <Route path="/grade-submissions/:projectId" exact element={<GradeSubmissions />} /> {/* Protected */}
          {/* Public routes */}
          <Route path="/" exact element={<JoinProject />} />
          <Route path="/join-project" exact element={<JoinProject />} />
          <Route path="/view-project/:projectId" exact element={<ViewProject />} />
          <Route path="/my-submissions/:projectId" exact element={<MySubmissions />} />
        </Routes>
      </Router>
    //</AuthContext.Provider>
  );
};

export default App;
