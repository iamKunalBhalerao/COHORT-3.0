import React, { useRef, useState } from "react";

const App = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return; // Already running, do nothing

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <>
      <div>
        <h1>Time: {time}</h1>
        <button
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "10px 20px",
            margin: "10px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={startTimer}
        >
          Start
        </button>
        <button
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "10px 20px",
            margin: "10px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={stopTimer}
        >
          Stop
        </button>
      </div>
    </>
  );
};

export default App;
