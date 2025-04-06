import React, { useState } from "react";

const SubOtpBox = ({ type, ref, onDone, onBack }) => {
  const [inpValue, setInpValue] = useState("");

  return (
    <>
      <input
        ref={ref}
        value={inpValue}
        onChange={(e) => {
          let val = e.target.value;
          if (
            val == "1" ||
            val == "1" ||
            val == "2" ||
            val == "3" ||
            val == "4" ||
            val == "5" ||
            val == "6" ||
            val == "7" ||
            val == "8" ||
            val == "9" ||
            val == "0"
          ) {
            setInpValue(val);
            onDone();
          } else {
            setInpValue("");
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Backspace") {
            onBack(e);
          }
        }}
        type={type}
        className="w-8 p-2 rounded-lg text-lg text-center bg-[#3b5874c6] outline-0"
      />
    </>
  );
};

export default SubOtpBox;
