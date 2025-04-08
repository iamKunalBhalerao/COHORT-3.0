import React from "react";

const MainContent = () => {
  return (
    <>
      <div className="w-full">
        <div className="h-48 bg-blue-300"></div>
        <div className="grid grid-cols-12 gap-8 p-8">
          <div className="h-82 bg-red-300 rounded-xl col-span-3 -translate-y-20 shadow-lg"></div>
          <div className="h-96 bg-green-300 rounded-xl col-span-5 shadow-lg"></div>
          <div className="h-96 bg-yellow-300 rounded-xl col-span-4 shadow-lg"></div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
