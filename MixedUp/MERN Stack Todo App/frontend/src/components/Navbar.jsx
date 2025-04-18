import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="w-full flex items-center justify-between px-10 shadow-sm">
        <NavLink className="text-3xl font-bold text-blue-500" to="/">
          .Tasker
        </NavLink>
        <div className="flex items-center py-6 justify-center gap-8">
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
          <NavLink
            className="text-xl font-normal  transition-all delay-100 duration-200 ease-linear text-blue-900 hover:text-blue-500"
            to="/create"
          >
            Create Todo
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
