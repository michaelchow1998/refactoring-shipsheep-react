import { createContext, useContext } from "react";
import { en } from "../languages/en";

export const LanguageContext = createContext(en);

export const useLanguage = () => {
  return useContext(LanguageContext);
};
