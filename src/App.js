//App.js
import React, {Fragments} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import GradeSubmissions from "../src/pages/GradeSubmissions.js";
import ViewProject from "../src/pages/ViewProject.js";
import MySubmissions from "../src/pages/MySubmissions.js";
import Home from "../src/Views/Home/Home.js";
import AppBar from "./components/AppBar/AppBar.js";
import FindMembers from "./components/FindMembers.js";
import Login from "./Views/Login/Login.js";
import { AuthProvider, useAuth } from "./AuthContext.js";
import PrivateRoute from "./PrivateRoute.js"

const App = () => {
  return (
    <Router>
      <Fragments>
      <AuthProvider>
        <Routes>
        <Route exact path='/' element={<PrivateRoute children={<Home />}/>}/>
        <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
      </Fragments>
    </Router>
  );
};
  // return (
  //   <>
  //     {window.location.pathname === "/" ? (
  //       <Box component="main">
  //         <Router>
  //           <AuthProvider>
  //             <Routes>
  //               <PrivateRoute exact path="/" component={Home} />
  //               <Route path="/login" component={Login} />
  //             </Routes>
  //           </AuthProvider>
  //         </Router>
  //       </Box>
  //     ) : (
  //       <>
  //         <Box bg={"white"}>
  //           <AppBar width="100%" name={"Project Management Console"} />
  //         </Box>
  //         <Box
  //           component="main"
  //           sx={{
  //             flexGrow: 1,
  //             // marginLeft: isCollapsed ? "100px" : `${drawerWidth}px`,
  //             transition: "margin-left 0.3s ease",
  //           }}
  //         >
  //           <Router>
  //             <Routes>
  //               <Route
  //                 path="/register-project"
  //                 exact
  //                 element={<RegisterProject />}
  //               />{" "}
  //               <Route
  //                 path="/manage-resources/:projectId"
  //                 exact
  //                 element={<ManageResources />}
  //               />{" "}
  //               <Route
  //                 path="/view-submissions/:projectId"
  //                 exact
  //                 element={<ViewSubmissions />}
  //               />{" "}
  //               <Route
  //                 path="/grade-submissions/:projectId"
  //                 exact
  //                 element={<GradeSubmissions />}
  //               />{" "}
  //               <Route path="/home" exact element={<Home />} />
  //               <Route path="/join-project" exact element={<JoinProject />} />
  //               <Route path="/view-project" exact element={<ViewProject />} />
  //               <Route path="/find-members" exact element={<FindMembers />} />
  //               <Route
  //                 path="/my-submissions/:projectId"
  //                 exact
  //                 element={<MySubmissions />}
  //               />
  //             </Routes>
  //           </Router>
  //         </Box> 
  //       </>
  //     )}
  //   </>
  //   //</AuthContext.Provider>
  // );
//};

export default App;
