import React from "react";

const SheduleButton = ({ icon, task }) => {
  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="box px-6 py-4 bg-[#3FDFCF] text-[#002B5B] rounded-lg cursor-pointer">
          {icon}
        </div>
        <p className="text-sm text-black text-center">{task}</p>
      </div>
    </>
  );
};

export default SheduleButton;
