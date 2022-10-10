import React, { createContext, useContext } from "react";

export type Theme = {
  isDark: boolean;
};

export type ThemeContextType = {
  theme: Theme | null;
  setTheme: React.Dispatch<React.SetStateAction<Theme | null>>;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const useTheme = () => {
  return useContext(ThemeContext);
};
