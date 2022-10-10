import React, { useState, useEffect } from "react";

import { AuthContext, AuthUser } from "./AuthContext";

import { LanguageContext } from "./LanguageContext";
import { en } from "../languages/en";
import { ch } from "../languages/ch";

import { ThemeContext, Theme } from "./ThemeContext";

export const ContextLayer = ({ children }: any) => {
  const [user, setUser] = useState<AuthUser | null>({
    isLogin: false,
    currentUser: "",
    userType: 0,
  });
  const [lan, setLan] = useState<any | null>(en);
  const [theme, setTheme] = useState<Theme | null>({ isDark: false });

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <LanguageContext.Provider value={{ lan, setLan }}>
          <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
          </ThemeContext.Provider>
        </LanguageContext.Provider>
      </AuthContext.Provider>
    </>
  );
};

export default ContextLayer;
