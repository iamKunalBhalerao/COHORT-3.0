import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <nav className="w-full flex items-center justify-between px-10 shadow-sm">
        <NavLink className="text-3xl font-bold text-blue-500" to="/">
          .Tasker
        </NavLink>
        <div className="flex items-center py-2 justify-center gap-8">
          <NavLink
            className="text-xl font-normal transition-all delay-100 duration-200 ease-linear text-blue-900 hover:text-blue-500"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="text-xl font-normal  transition-all delay-100 duration-200 ease-linear text-blue-900 hover:text-blue-500"
            to="/todos"
          >
            See All Todos
          </NavLink>
          <button className="p-0 transition-all delay-100 duration-200 ease-linear">
            <NavLink
              className="text-xl p-2 bg-blue-500 rounded-xl flex items-center font-normal border-1 border-blue-500 hover:border-1 hover:border-blue-500 transition-all delay-100 duration-200 ease-linear text-white hover:bg-white hover:text-blue-600 gap-2"
              to="/create"
            >
              Create Todo <IoMdAdd />
            </NavLink>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
