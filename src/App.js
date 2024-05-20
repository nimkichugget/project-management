import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
// import { RegisterProject } from '../src/pages/RegisterProject.js';
import RegisterProject from "../src/pages/RegisterProject.js";
import ManageResources from "../src/pages/ManageResources.js";
import ViewSubmissions from "../src/pages/ViewSubmissions.js";
import GradeSubmissions from "../src/pages/GradeSubmissions.js";
import JoinProject from "../src/pages/JoinProject.js";
import ViewProject from "../src/pages/ViewProject.js";
import MySubmissions from "../src/pages/MySubmissions.js";
import Home from "../src/Views/Home/Home.js";
import AppBar from "./components/AppBar/AppBar.js";
import FindMembers from "./components/FindMembers.js";
import Login from "./Views/Login/Login.js";

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
    <>
      {window.location.pathname === "/" ? (
        <Box component="main">
          <Router>
            <Routes>
              <Route path="/" exact element={<Login />} />
            </Routes>
          </Router>
        </Box>
      ) : (
        <>
          <Box bg={"white"}>
            <AppBar width="100%" name={"Project Management Console"} />
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              // marginLeft: isCollapsed ? "100px" : `${drawerWidth}px`,
              transition: "margin-left 0.3s ease",
            }}
          >
            <Router>
              {/* Protected routes (replace with your authentication logic) */}
              <Routes>
                <Route
                  path="/register-project"
                  exact
                  element={<RegisterProject />}
                />{" "}
                {/* Protected */}
                <Route
                  path="/manage-resources/:projectId"
                  exact
                  element={<ManageResources />}
                />{" "}
                {/* Protected */}
                <Route
                  path="/view-submissions/:projectId"
                  exact
                  element={<ViewSubmissions />}
                />{" "}
                {/* Protected */}
                <Route
                  path="/grade-submissions/:projectId"
                  exact
                  element={<GradeSubmissions />}
                />{" "}
                {/* Protected */}
                {/* Public routes */}
                <Route path="/home" exact element={<Home />} />
                <Route path="/join-project" exact element={<JoinProject />} />
                <Route path="/view-project" exact element={<ViewProject />} />
                <Route path="/find-members" exact element={<FindMembers />} />
                <Route
                  path="/my-submissions/:projectId"
                  exact
                  element={<MySubmissions />}
                />
              </Routes>
            </Router>
          </Box>
        </>
      )}
    </>
    //</AuthContext.Provider>
  );
};

export default App;
