import React, { createContext, useState } from "react";
export const CountContext = createContext();

const CountContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

export default CountContextProvider;
