import React from "react";
import { TbCoinRupeeFilled } from "react-icons/tb";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white shadow w-full h-14 flex justify-between items-center">
        <div className="flex items-center gap-2 text-blue-800 h-full ml-4 text-xl font-semibold">
          <TbCoinRupeeFilled className="text-3xl" />
          PayMENT
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center h-full mr-4">
            Hello, Kunal
          </div>
          <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
            <div className="flex flex-col justify-center h-full text-xl">K</div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
