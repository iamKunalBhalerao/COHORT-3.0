import React from "react";

const SheduleTab = ({ time, title, live }) => {
  return (
    <>
      <div className="flex">
        <div className="left flex flex-col px-2 items-start border-r-1 border-blue-400 justify-around">
          <h2 className="text-xl text-black">{time}</h2>
          <p className="text-md text-zinc-400">{time}</p>
        </div>
        <div className="Right flex flex-col px-2 items-start justify-around">
          <p className="text-sm text-zinc-400">{live}</p>
          <h2>{title}</h2>
        </div>
      </div>
    </>
  );
};

export default SheduleTab;
