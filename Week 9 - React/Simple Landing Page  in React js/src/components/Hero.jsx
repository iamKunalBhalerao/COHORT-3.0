import React from "react";

const Hero = () => {
  return (
    <>
      <main className="w-full absolute h-screen space-y-4 flex flex-col items-center justify-center">
        <h1 className="w-xl leading-12 font-semibold text-5xl text-center ">
          Where Your <span className="text-[#3C3EE8]">Data</span> turns into{" "}
          <span className="text-[#3C3EE8]">software</span> with a click
        </h1>
        <p className="w-lg text-xl text-gray-500 text-center">
          Build custom portals, CRM's and Toolseffortlesly. From Concept of
          Launch in munites, not Months
        </p>
        <button className="py-2 px-1 mt-4 bg-zinc-950 flex items-center justify-evenly space-x-6 text-white rounded-full">
          <i className="ri-play-circle-fill text-4xl"></i>
          <p>Watch Demo</p>
          <span className="pr-4 text-gray-400">3min</span>
        </button>
      </main>
    </>
  );
};

export default Hero;
