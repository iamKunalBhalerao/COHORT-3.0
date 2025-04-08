import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between h-20 px-16 border-b border-zinc-800">
        <div className="logo">
          <h1 className="text-2xl font-bold text-[#4785ED]">100xDevs</h1>
        </div>
        <div className="nav-content flex gap-4 items-center justify-center">
          <div className="search flex p-1 rounded-md border border-zinc-800 gap-4">
            <i class="ri-search-2-line text-lg text-zinc-600"></i>
            <input
              type="text"
              placeholder="Search Anything"
              className="outline-0 bg-[#0A0B10] text-white placeholder:text-zinc-400"
            />
          </div>
          <h2 className="text-xl font-semibold">Kunal</h2>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
