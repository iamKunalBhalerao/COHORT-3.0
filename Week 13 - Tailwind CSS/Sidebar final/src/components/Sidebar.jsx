import React from "react";
import MenuIcon from "./icons/MenuIcon";

const Sidebar = ({ sidebarToggle, setsidebarToggle }) => {
  if (!sidebarToggle) {
    return (
      <>
        <div className="fixed top-0 left-0">
          <div
            className="cursor-pointer hover:text-blue-800"
            onClick={() => {
              setsidebarToggle(!sidebarToggle);
            }}
          >
            <MenuIcon />
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="w-96 p-2 h-screen bg-zinc-400">
      <div
        className="cursor-pointer hover:text-blue-800"
        onClick={() => {
          setsidebarToggle(!sidebarToggle);
        }}
      >
        <MenuIcon />
      </div>
    </div>
  );
};

export default Sidebar;
