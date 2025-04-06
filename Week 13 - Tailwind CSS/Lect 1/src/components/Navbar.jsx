import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex fixed items-center justify-center gap-10 py-6 bg-[#0a223b] shadow-2xl w-full text-white">
        <Link to="/" className="text-white">
          Home
        </Link>
        <Link to="/otp" className="text-white">
          Otp
        </Link>
        <button className=" bg-blue-500 rounded-xl text-white px-4 py-2">
          <Link to="/signup" className="decoration-0 text-white">
            Signup
          </Link>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
