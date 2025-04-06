import React, { useEffect, useState } from "react";
import useDebounce from "./Hooks/useDebounce";

const App = () => {
  const [inputVal, setInputVal] = useState("");

  const debouncedValue = useDebounce(inputVal, 700);

  function change(e) {
    setInputVal(e.target.value);
  }

  useEffect(() => {
    // Expensive Opration
    // fetch Data
    console.log("Extensive Operation in useEffect Hook");
  }, [debouncedValue]);

  return (
    <>
      <div>
        <input type="text" onChange={change} />
        <h1 style={{ display: "flex", alignItems: "center" }}>
          <p>Your Inut is :</p> {inputVal}
        </h1>
      </div>
    </>
  );
};

export default App;
