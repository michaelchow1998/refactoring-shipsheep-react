import { AuthContext, AuthContextDefault } from "./AuthContext";

import React from "react";

function ContextLayer({ children }: any) {
  return (
    <>
      <AuthContext.Provider value={AuthContextDefault}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

export default ContextLayer;
