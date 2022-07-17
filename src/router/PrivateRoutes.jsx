import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

export const PrivateRoutes = ({ children }) => {
  const { authSate } = useContext(AuthContext);
  return authSate.logged ? children : <Navigate to="/login" />;
};
