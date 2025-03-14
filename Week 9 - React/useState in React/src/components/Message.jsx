import React, { useState } from "react";

const Message = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          margin: "auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => {
            setIsVisible(!isVisible);
          }}
          style={{
            padding: "10px 20px",
            fontSize: "1.2rem",
            cursor: "pointer",
            backgroundColor: "#FE4F2D",
            border: "1px solid #FE4F2D",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Toggle Message
        </button>
        {isVisible && <h1>This message is Conditionally Re-rendered</h1>}
      </div>
    </>
  );
};

export default Message;
