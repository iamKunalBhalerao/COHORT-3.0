import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="w-full fixed flex items-center justify-between p-6">
        <div className="Logo flex items-center space-x-2">
          <img src="src\imgs\logo.png" className="w-12" />
          <h4 className="text-2xl font-normal">Stacker</h4>
        </div>
        <div className="links flex items-center space-x-8 font-normal">
          <a href="#">Home</a>
          <a href="#">Solution</a>
          <a href="#">Product</a>
          <a href="#">Resources</a>
          <a href="#">Pricing</a>
        </div>
        <button className="px-4 py-2 bg-[#3539FB] text-white rounded-full">
          Get Started
        </button>
      </nav>
    </>
  );
};

export default Navbar;
