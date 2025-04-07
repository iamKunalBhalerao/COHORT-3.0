import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="fixed p-6 flex flex-col gap-6 top-0 left-0 h-screen w-64 bg-white shadow-md text-[#022B5B] ">
        <div>
          <h2 className="text-2xl font-bold">Webinar.gg</h2>
          <p className="text-sm text-gray-500">Welcome, User!</p>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            className="w-full flex items-center gap-4 justify-between px-3 text-[#022B5B] py-2 text-lg font-semibold bg-[#E5E9EE] rounded-md cursor-pointer"
            to="/home"
          >
            Home <i className="ri-home-5-fill"></i>
          </Link>
          <Link
            className="w-full flex items-center justify-between px-3 text-zinc-500 py-2 text-lg font-semibold bg-white rounded-md cursor-pointer"
            to="/webinar"
          >
            Webinar <i className="ri-team-line"></i>
          </Link>
          <Link
            className="w-full flex items-center justify-between px-3 text-zinc-500 py-2 text-lg font-semibold bg-white rounded-md cursor-pointer"
            to="/billing"
          >
            Billing <i className="ri-bank-card-line"></i>
          </Link>
          <Link
            className="w-full flex items-center justify-between px-3 text-zinc-500 py-2 text-lg font-semibold bg-white rounded-md cursor-pointer"
            to="/usermanagement"
          >
            <p>User Management</p> <i className="ri-account-box-line"></i>
          </Link>
          <Link
            className="w-full flex items-center justify-between px-3 text-zinc-500 py-2 text-lg font-semibold bg-white rounded-md cursor-pointer"
            to="/settings"
          >
            Settings <i className="ri-settings-4-line"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
