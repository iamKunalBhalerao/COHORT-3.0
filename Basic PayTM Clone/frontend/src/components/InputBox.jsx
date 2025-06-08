import React from "react";

const InputBox = ({ lable, placeholder, type, onChange }) => {
  return (
    <>
      <div>
        <div className="text-sm font-medium text-left py-2">{lable}</div>
        <input
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          className="w-full px-2 py-1 border border-slate-200 rounded"
        />
      </div>
    </>
  );
};

export default InputBox;
