import React from "react";

const Button = ({ onCLickHandler, btnMessage }) => {
  const btnStyle = {
    backgroundColor: "blue",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  };

  return (
    <>
      <button style={btnStyle} onClick={onCLickHandler}>
        {btnMessage}
      </button>
    </>
  );
};

export default Button;
