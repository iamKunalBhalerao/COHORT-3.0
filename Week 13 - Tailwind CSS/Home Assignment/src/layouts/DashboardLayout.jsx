import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default DashboardLayout;
