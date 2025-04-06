import React from "react";

const Button = ({ disabled, children, onClick }) => {
  return (
    <>
      <button
        className={`px-42 py-4 ${
          disabled ? "bg-zinc-500" : "bg-green-400"
        } rounded-xl cursor-pointer`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
