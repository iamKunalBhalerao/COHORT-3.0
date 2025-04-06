import React, { useRef } from "react";

const Input = ({ type, placeholder, onDone }) => {
  const inpRef = useRef();
  return (
    <>
      <input
        onChange={onDone}
        ref={inpRef}
        type={type}
        placeholder={placeholder}
        className="pr-48 pl-4 py-4 bg-[#3b5874c6] rounded-xl outline-0"
      />
    </>
  );
};

export default Input;
