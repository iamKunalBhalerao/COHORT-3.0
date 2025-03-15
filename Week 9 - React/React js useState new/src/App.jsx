import React from "react";
import Toggle from "./components/Toggle";

const App = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Toggle />
      </div>
    </>
  );
};

export default App;
