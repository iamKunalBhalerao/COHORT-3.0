import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col h-screen w-full text-white">
        <Sidebar />
        <div className="h-full flex-1 flex-col bg-[#0A0B10]">
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Home;
