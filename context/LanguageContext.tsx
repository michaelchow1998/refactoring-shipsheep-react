import { createContext, useContext } from "react";

export type LanContextType = {
  lan: any | null;
  setLan: React.Dispatch<React.SetStateAction<any | null>>;
};

export const LanguageContext = createContext<LanContextType | null>(null);

export const useLanguage = () => {
  return useContext(LanguageContext);
};
