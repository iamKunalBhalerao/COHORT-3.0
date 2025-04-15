import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa6";

const NoPage = () => {
  return (
    <>
      <main className="w-full h-full pt-30 flex items-center justify-center">
        <div className="w-1/2 flex flex-col items-center justify-center gap-6">
          <h1 className="text-5xl text-center text-black font-bold">
            <span className="text-red-400">Oops!</span> The page you're looking
            for <span className="text-red-400">couldn't be found.</span>
          </h1>
          <p className="text-lg text-center text-zinc-500">
            Sorry, the page you were trying to reach does not exist. It may have
            been moved, deleted, or the URL might be incorrect.
          </p>
          <button className="flex mt-6 transition delay-150 duration-200 bg-blue-500 items-center px-2 rounded-md ease-linear hover:scale-110">
            <Link className="p-2 text-white" to="/">
              Go to Home
            </Link>
            <FaLocationArrow className="text-white text-lg" />
          </button>
        </div>
      </main>
    </>
  );
};

export default NoPage;
