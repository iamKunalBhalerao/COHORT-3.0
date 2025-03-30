import React, { useState } from "react";

// Custom hook
function useCounter() {
  const [Count, setCount] = useState(0);
  function IncreaseCount() {
    setCount((prev) => prev + 1);
  }
  return [Count, IncreaseCount];
}

const App = () => {
  const [Count, IncreaseCount] = useCounter();

  return (
    <>
      <div style={{ padding: "2rem" }}>
        <button onClick={IncreaseCount}>Increase Count : {Count}</button>
      </div>
    </>
  );
};

export default App;
