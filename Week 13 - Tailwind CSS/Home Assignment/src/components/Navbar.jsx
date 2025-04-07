import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex fixed w-full bg-[#022B5B] shadow-xl px-20 h-16 text-white items-center justify-between z-50">
        <Link to="/">
          <h2>
            Webinar.<span className="text-[#34BFBB]">gg</span>
          </h2>
        </Link>
        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-white text-black rounded-lg cursor-pointer hover:bg-zinc-200">
            <Link to="/signup">Sign Up</Link>
          </button>
          <button className="px-4 py-2 bg-white text-black rounded-lg cursor-pointer hover:bg-zinc-200">
            <Link to="/signin">Sign In</Link>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
