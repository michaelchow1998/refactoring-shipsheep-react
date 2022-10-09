import { AuthContext, AuthContextDefault } from "./AuthContext";
import { LanguageContext } from "./LanguageContext";

export const ContextLayer = ({ children }: any) => {
  return (
    <>
      <AuthContext.Provider value={authContext}>
        <LanguageContext.Provider value={lanType}>
          {children}
        </LanguageContext.Provider>
      </AuthContext.Provider>
    </>
  );
};

export default ContextLayer;
