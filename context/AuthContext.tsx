import { createContext, useContext, useEffect, useState } from "react";

export type AuthContextType = {
  isLogin: boolean;
  currentUser: string;
  userType: number;
};

export const AuthContextDefault: AuthContextType = {
  isLogin: false,
  currentUser: "",
  userType: 0,
};

export const AuthContext = createContext(AuthContextDefault);

export const useAuth = () => {
  return useContext(AuthContext);
};
