import React from "react";

const DashboardHome = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-end overflow-hidden">
        <img src="src\svgs\undraw_welcoming_42an.svg" alt="Welcome" className="md:w-md lg:w-xl" />
        <h1 className="text-5xl sm:text-7xl md:text-9xl absolute font-black text-blue-500 opacity-70">WELCOME</h1>
      </div>
    </>
  );
};

export default DashboardHome;
