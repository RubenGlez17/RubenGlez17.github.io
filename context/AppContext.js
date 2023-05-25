import React, { createContext, useState } from 'react';

// Crea el contexto
export const AppContext = createContext();

// Proveedor del contexto
export const AppProvider = ({ children }) => {
  // Estado compartido
  const [userData, setUserData] = useState({});

  return (
    <AppContext.Provider value={{ userData, setUserData }}>
      {children}
    </AppContext.Provider>
  );
};
