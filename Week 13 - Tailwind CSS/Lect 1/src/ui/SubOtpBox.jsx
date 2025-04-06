import React from "react";

const SubOtpBox = ({ type, ref, onDone }) => {
  return (
    <>
      <input
        ref={ref}
        onChange={() => {
          onDone();
        }}
        type={type}
        className="w-8 p-2 rounded-lg text-lg text-center bg-[#3b5874c6] outline-0"
      />
    </>
  );
};

export default SubOtpBox;
