import React, { useState, useEffect, useCallback, useMemo } from "react";

const AuthContext = React.createContext();

export const AuthContextProvider = (props) => {
  //   const contextValue = useMemo(() => ({}), []);

  const [WhatsAppNumber, setWhatsAppNumber] = useState(0);

  return (
    <AuthContext.Provider value={{ WhatsAppNumber, setWhatsAppNumber }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
