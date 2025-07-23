import React, { type ReactElement, type RefObject } from "react";

interface InputProps {
  placeholder: string;
  type: string;
  onChange?: () => void;
  inputRef?: RefObject<HTMLInputElement | null>;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
}

const Input = ({
  placeholder,
  type,
  onChange,
  inputRef,
  startIcon,
  endIcon,
}: InputProps) => {
  return (
    <>
      <div className="w-2/2 flex items-center gap-2 my-2 px-2 rounded-lg border-1 border-slate-200">
        {startIcon}
        <input
          ref={inputRef}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          className="px-4 py-2 w-full bg-white placeholder:font-medium font-medium outline-0"
        />
        {endIcon}
      </div>
    </>
  );
};

export default Input;
