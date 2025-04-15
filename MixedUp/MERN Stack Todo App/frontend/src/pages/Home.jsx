import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <main className="w-full h-full pt-30 flex items-center justify-center">
        <div className="w-1/2 flex flex-col items-center justify-center gap-6">
          <h1 className="text-5xl text-center text-black font-bold">
            AI-Powered <span className="text-blue-400">Tasks</span> management{" "}
            <span className="text-blue-400">Workflow</span>
          </h1>
          <p className="text-lg text-center text-zinc-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
            laboriosam excepturi doloribus omnis quidem quae quasi culpa sint
            delectus tempore?
          </p>
          <button className="flex mt-6 transition delay-150 duration-200 bg-blue-500 items-center px-2 rounded-md ease-linear hover:scale-110">
            <Link className="p-2 text-white" to="/create">
              Create Your First Todo
            </Link>
            <FaLocationArrow className="text-white text-lg" />
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
