import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin3Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const TodoCard = ({ title, description, isComplete }) => {
  return (
    <>
      <div className="w-[80%] flex items-center justify-between p-4 rounded-lg bg-white shadow-sm border-1 border-zinc-200">
        <div className="flex flex-col gap-2 items-start">
          <h2 className="w-full flex flex-wrap text-xl text-black font-semibold">
            {title}
          </h2>
          <p className="w-full flex flex-wrap text-lg pr-4 text-zinc-800">
            {description}
          </p>
          <button className="cursor-pointer">
            <span className="w-1/9 text-center p-1 bg-green-500 text-white rounded-lg px-2">
              {isComplete}
            </span>
          </button>
        </div>
        <div className="buttons flex flex-col gap-2">
          <button className="flex items-center gap-2 p-2 bg-blue-500 rounded-md text-white">
            <Link
              className="flex items-center gap-2 cursor-pointer"
              to="/update"
            >
              Edit <AiFillEdit />
            </Link>
          </button>
          <button className="flex items-center gap-2 p-2 bg-red-500 rounded-md text-white">
            <Link
              className="flex items-center gap-2 cursor-pointer"
              to="/delete"
            >
              Delete <RiDeleteBin3Line />
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoCard;
