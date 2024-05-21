import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext.js";

// const PrivateRoute = ({ children, ...rest }) => {
//   const { currentUser } = useAuth();

//   return (
//     <Route
//       {...rest}
//       render={props => {
//         return currentUser ? children : <Navigate to="/login" replace />;
//       }}
//     ></Route>
//   );
// };

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
