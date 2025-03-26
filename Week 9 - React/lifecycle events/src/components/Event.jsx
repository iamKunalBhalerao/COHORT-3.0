import React, { useEffect, useState } from "react";

const Event = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted or count updated");
  }, [count]); // Runs on mount and when count changes

  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Component will unmount");
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Event;
