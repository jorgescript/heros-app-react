import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

const initialstate = { logged: false };

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialstate);
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
