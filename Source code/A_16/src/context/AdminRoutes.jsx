import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContextAPI } from "../context/AuthContext";

const AdminRoutes = ({ children }) => {
  const { authUser } = useContext(AuthContextAPI);

  if (authUser?.role === "admin") {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default AdminRoutes;
