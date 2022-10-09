import { createContext, useContext } from "react";

export type LanguageContextType = {
  selectedLanguage: string;
};

export const LanguageContextDefault: LanguageContextType = {
  selectedLanguage: "en",
};

export const LanguageContext = createContext(LanguageContextDefault);

export const useLanguage = () => {
  return useContext(LanguageContext);
};
