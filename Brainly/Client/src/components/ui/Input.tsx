import React from "react";

interface InputProps {
  placeholder: string;
  onChange: () => void;
}

const Input = ({ placeholder, onChange }: InputProps) => {
  return (
    <>
      <input
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        className="px-4 my-2 py-2 w-2/2 bg-white placeholder:font-medium font-medium rounded-lg border-1 border-slate-200 outline-0 focus:outline-1 focus:outline-blue-200"
      />
    </>
  );
};

export default Input;
