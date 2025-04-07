import React from "react";

const Content = ({ pageNm }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">This is {pageNm} Page</h1>
      <p className="text-lg text-zinc-500 mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At nostrum
        fugit labore?
      </p>
    </div>
  );
};

export default Content;
