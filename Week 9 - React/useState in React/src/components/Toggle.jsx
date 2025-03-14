import React, { useState } from "react";

const Toggle = () => {
  const [isValue, setIsValue] = useState(false);
  return (
    <>
      <div style={{ paddingBottom: 10 }}>
        <button
          style={{
            cursor: "pointer",
            backgroundColor: "blue",
            border: "1px solid blue",
            borderRadius: 2,
          }}
          onClick={() => {
            setIsValue(!isValue);
          }}
        >
          Toggle Message
        </button>
        {isValue ? <p>This is conditional Re-rendering</p> : null}
      </div>
    </>
  );
};

export default Toggle;
