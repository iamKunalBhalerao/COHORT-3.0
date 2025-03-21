import React, { useState } from "react";

const Toggle = () => {
  const [isValue, setIsValue] = useState(false);

  function handleClick() {
    setIsValue(!isValue);
  }

  const btnstyle = {
    backgroundColor: "#FE4F2D",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <>
      <button style={btnstyle} onClick={handleClick}>
        Toggle Message
      </button>
      {isValue ? (
        <p>After Clicking Button Conditional Re-rendering happend</p>
      ) : null}
    </>
  );
};

export default Toggle;
