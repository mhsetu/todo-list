import React, { createContext, useState } from 'react';

export const ContextProvider = createContext();

const Context = ({ children }) => {
  const [save, setSave] = useState([]);
  const [transfer, setTransfer] = useState([]);
  const info = { save, setSave, transfer, setTransfer };
  return (
    <ContextProvider.Provider value={info}>{children}</ContextProvider.Provider>
  );
};

export default Context;
