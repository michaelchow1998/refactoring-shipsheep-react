import React, { createContext, useContext } from "react";

export type AuthUser = {
  isLogin: boolean;
  currentUser: string;
  userType: number;
};

export type AuthContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  return useContext(AuthContext);
};
