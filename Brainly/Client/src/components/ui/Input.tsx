import React from "react";

interface InputProps {
  placeholder: string;
  type: string;
  onChange?: () => void;
  ref?: any;
}

const Input = ({ placeholder, type, onChange, ref }: InputProps) => {
  return (
    <>
      <input
        ref={ref}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className="px-4 my-2 py-2 w-2/2 bg-white placeholder:font-medium font-medium rounded-lg border-1 border-slate-200 outline-0 focus:outline-1 focus:outline-blue-200"
      />
    </>
  );
};

export default Input;
