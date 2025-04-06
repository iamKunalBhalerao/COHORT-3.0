import React, { useState } from "react";
import Light from "./components/Light";

const App = () => {
  return (
    <>
      {/* <Light /> */}
      <Parent />
    </>
  );
};

const Parent = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ padding: "1rem" }}>
      <Value count={count} />
      <Increase setCount={setCount} />
      <Decrease setCount={setCount} />
      <Reset setCount={setCount} />
    </div>
  );
};

const Value = ({ count }) => {
  return (
    <>
      <h1>Count : {count}</h1>
    </>
  );
};

const Increase = ({ setCount }) => {
  function increase() {
    setCount((prev) => prev + 1);
  }
  return (
    <>
      <button
        style={{
          padding: "10px",
          backgroundColor: "blue",
          borderRadius: "10px",
          color: "white",
          fontWeight: "bold",
          border: "none",
          marginRight: "10px",
          cursor: "pointer",
        }}
        onClick={increase}
      >
        Increase
      </button>
    </>
  );
};

const Decrease = ({ setCount }) => {
  function decrease() {
    setCount((prev) => prev - 1);
  }
  return (
    <>
      <button
        style={{
          padding: "10px",
          backgroundColor: "blue",
          borderRadius: "10px",
          color: "white",
          fontWeight: "bold",
          border: "none",
          cursor: "pointer",
        }}
        onClick={decrease}
      >
        Decrease
      </button>
    </>
  );
};

const Reset = ({ setCount }) => {
  function reset() {
    setCount(0);
  }
  return (
    <>
      <button
        style={{
          padding: "10px",
          backgroundColor: "blue",
          borderRadius: "10px",
          color: "white",
          fontWeight: "bold",
          border: "none",
          cursor: "pointer",
          marginLeft: "10px",
        }}
        onClick={reset}
      >
        Reset
      </button>
    </>
  );
};

export default App;
