import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>Counter {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Counter;
