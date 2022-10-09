import { AuthContext, AuthContextDefault } from "./AuthContext";

import React, { useState } from "react";

function ContextLayer({ children }: any) {
  const [authContext, setAuthContext] = useState(AuthContextDefault);

  return (
    <>
      <AuthContext.Provider value={authContext}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

export default ContextLayer;
