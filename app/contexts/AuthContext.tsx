import axios from "axios";
import React, { ReactNode, createContext, useContext, useState } from "react";

interface AuthContextType {
  auth: {
    accessToken: string;
    refreshToken: string;
  };
}

type Props = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState({
    accessToken: "",
    refreshToken: "",
  });

  return (
    <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export { AuthProvider, useAuth };
