import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 p-4 bg-blue-50 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
