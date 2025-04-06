import React from "react";

const DivComponent = () => {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="bg-red-400 col-span-12 sm:col-span-5">Style Card</div>
        <div className="bg-blue-400 col-span-12 sm:col-span-5">Style Card</div>
        <div className="bg-green-400  col-span-12 sm:col-span-2">
          Style Card
        </div>
      </div>
    </>
  );
};

export default DivComponent;
