import React, { useState } from "react";
import usePrev from "./Hooks/usePrev";

const App = () => {
  const [value, setValue] = useState(0);
  const prev = usePrev(value);
  return (
    <>
      <div>
        <h1>Count : {value}</h1>
        <button onClick={() => setValue((prev) => prev + 1)}>Increase</button>
        <h1>Previus Value of Count : {prev}</h1>
      </div>
    </>
  );
};

export default App;
