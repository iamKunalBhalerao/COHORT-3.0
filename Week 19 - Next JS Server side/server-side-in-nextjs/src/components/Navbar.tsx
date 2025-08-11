import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-full fixed bg-slate-950 shadow shadow-slate-800 flex justify-center">
        <div className="w-full md:max-w-7xl p-4 flex justify-between items-center ">
          <Link href={"/"} className="text-2xl cursor-pointer font-black text-blue-500">TodoBaser</Link>
          <div className="flex itsms-center gap-4">
            <Link href={"/signup"}>
              <button className="px-4 py-2 text-xl bg-blue-600 hover:bg-blue-700 text-white rounded-lg border-1 border-slate-500 transition-all duration-200 hover:scale-105 cursor-pointer">
                Sign Up
              </button>
            </Link>
            <Link href={"/signin"}>
              <button className="px-4 py-2 text-xl bg-slate-700 hover:bg-slate-800 text-white rounded-lg border-1 border-slate-500 transition-all duration-200 hover:scale-105 cursor-pointer">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
