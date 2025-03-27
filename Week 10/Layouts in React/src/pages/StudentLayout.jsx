import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const StudentLayout = () => {
  return (
    <div>
      <Navbar />
      <p>This is Student Page Layout</p>
      <Outlet />
    </div>
  );
};

export default StudentLayout;
