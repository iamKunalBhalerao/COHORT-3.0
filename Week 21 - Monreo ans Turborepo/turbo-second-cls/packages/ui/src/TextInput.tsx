import React from "react";

interface TextInputProps {
  type: string;
  placeholder: string;
  className?: string;
  value?: string;
  onChange?: () => void;
}

export default function TextInput({
  placeholder,
  type,
  value,
  className,
  onChange,
}: TextInputProps) {
  return (
    <>
      <input
        type={type ? type : "text"}
        className={className}
        value={value}
        style={{
          padding: "10px",
          backgroundColor: "white",
          border: "1px solid gray",
          borderRadius: "5px",
          outline: "none",
        }}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
}
