import { createContext } from "react";

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const data = {};

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
