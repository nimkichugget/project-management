import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import FormTeam from "./components/FormTeam";
import RegisterProject from "../src/pages/RegisterProject";
import ManageResources from "../src/pages/ManageResources";
import ViewSubmissions from "../src/pages/ViewSubmissions";
import GradeSubmissions from "../src/pages/GradeSubmissions";
import JoinProject from "../src/pages/JoinProject";
import ViewProject from "../src/pages/ViewProject";
import MySubmissions from "../src/pages/MySubmissions";
import Home from "../src/Views/Home/Home";
import AppBar from "./components/AppBar/AppBar";
import FindMembers from "./components/FindMembers";
import Login from "./Views/Login/Login";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  const location = useLocation();
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (

    <Router>
      <Box>
        {isAuthenticated && <AppBar width="100%" name={"Project Management Console"} />}
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
              path="/form-team"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <FormTeam />
                </ProtectedRoute>
              }
            />
            <Route
              path="/register-project"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <RegisterProject />
                </ProtectedRoute>
              }
            />
            <Route
              path="/manage-resources/:projectId"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ManageResources />
                </ProtectedRoute>
              }
            />
            <Route
              path="/view-submissions/:projectId"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ViewSubmissions />
                </ProtectedRoute>
              }
            />
            <Route
              path="/grade-submissions/:projectId"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <GradeSubmissions />
                </ProtectedRoute>
              }
            />
            <Route
              path="/join-project"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <JoinProject />
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
              path="/find-members"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <FindMembers />
                </ProtectedRoute>
              }
            />
            <Route
              path="/my-submissions/:projectId"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <MySubmissions />
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
