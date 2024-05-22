import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import ViewProject from "../src/pages/ViewProject";
import Home from "../src/Views/Home/Home";
import AppBar from "./components/AppBar/AppBar";
import Login from "./Views/Login/Login";
import AboutUs from "./Views/AboutUs/AboutUs";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  const location = useLocation();
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('userToken') !== null // Check for token on initial render
  );

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('userToken', 'your_token_here'); // Replace with actual token handling
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('userToken'); // Remove token on logout
  };
  

  return (
    <Router>
      <Box>
        {isAuthenticated && <AppBar onLogout={handleLogout} width="100%" name={"Project Management Console"} />}
        <Box component="main" sx={{ flexGrow: 1, transition: "margin-left 0.3s ease" }}>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Login onLogin={handleLogin} />} />

            {/* Protected routes */}
            <Route
              path="/home"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/view-project"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ViewProject />
                </ProtectedRoute>
              }
            />
          <Route
              path="/about-us"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <AboutUs />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
