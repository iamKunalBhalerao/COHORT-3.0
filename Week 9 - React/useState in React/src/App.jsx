import React from "react";
import Message from "./components/Message";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Message />
    </div>
  );
};

export default App;
