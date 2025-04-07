import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer className="flex justify-center items-center mt-auto h-16 bg-gray-800 text-white">
        <p>&copy; 2023 Webinar.gg</p>
      </footer>
    </>
  );
};

export default HomeLayout;
