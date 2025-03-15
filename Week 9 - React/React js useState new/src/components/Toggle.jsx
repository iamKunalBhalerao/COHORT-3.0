import React, { useState } from "react";

const Toggle = () => {
  const [isValue, SetisValue] = useState(false);
  return (
    <>
      <button
        style={{
          padding: 4,
          backgroundColor: "#FE4F2D",
          border: "1px solid #FE4F2D",
          borderRadius: 4,
          cursor: "pointer",
        }}
        onClick={() => {
          SetisValue(!isValue);
        }}
      >
        Toggle Message
      </button>
      {isValue && <p>This is conditional Re-rendering</p>}
    </>
  );
};

export default Toggle;
