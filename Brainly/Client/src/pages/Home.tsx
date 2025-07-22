import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-screen">
        <div className="w-full h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-7xl text-blue-900 font-black">
            Place your{" "}
            <span className="text-rose-600 text-shadow-sm text-shadow-rose-200">
              Thought's
            </span>{" "}
            Hear
          </h1>
          <h2 className="text-6xl text-blue-950 font-black">
            A get rid of remember any.
          </h2>
          <p className="w-xl mt-4 text-md leading-5 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            consequatur, optio dolor sit amet ad sequi est odit.
          </p>
          <button
            onClick={() => navigate("/auth")}
            className="group flex items-center px-4 mt-5 py-2 transition-all duration-300 ease-in-out bg-gradient-to-tl from-blue-500 to-rose-500 text-white text-xl font-medium rounded-xl cursor-pointer hover:scale-110 gap-2 hover:gap-4"
          >
            <p>Get Started</p>
            <FaLocationArrow />
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
