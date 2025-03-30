import React, { createContext, useContext, useState } from "react";

const BulbContext = createContext();

const BulbContextProvider = ({ children }) => {
  const [bulbState, setBulbState] = useState(true);
  return (
    <>
      <BulbContext.Provider value={{ bulbState, setBulbState }}>
        {children}
      </BulbContext.Provider>
    </>
  );
};

const App = () => {
  return (
    <>
      <BulbContextProvider>
        <Light />
      </BulbContextProvider>
    </>
  );
};

const Light = () => {
  return (
    <>
      <div style={{ padding: "2rem" }}>
        <Bulb />
        <ToggleBulb />
      </div>
    </>
  );
};

const Bulb = () => {
  const { bulbState } = useContext(BulbContext);

  return (
    <>
      <h1>Bulb is {bulbState ? "On" : "Off"}</h1>
    </>
  );
};

const ToggleBulb = () => {
  const { setBulbState } = useContext(BulbContext);

  function ToggleBulb() {
    setBulbState((prev) => !prev);
  }

  return (
    <>
      <button onClick={ToggleBulb}>Toggle</button>
    </>
  );
};

export default App;
