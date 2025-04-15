import React from "react";
import { useNavigate } from "react-router-dom";
import { RiAddLargeLine } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";

const UpdateTodo = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/todos");
  };
  return (
    <>
      <div className="w-full h-full flex items-center justify-center pt-30">
        <div className="w-1/3 flex flex-col p-6 rounded-2xl shadow-lg border-1 border-zinc-200 gap-4 items-center justify-center">
          <h2 className="flex items-center gap-3 text-2xl font-med">
            Update Todo Hear <GrUpdate className="text-blue-500" />
          </h2>
          <form
            onSubmit={submitHandler}
            className="w-full flex flex-col items-center justify-center gap-4 pt-3"
          >
            <input
              type="text"
              name="title"
              placeholder="Enter Updated Title Hear...."
              className="w-full px-4 py-2 outline-0 focus:outline-1 focus:outline-blue-300 boreder-1 border-zinc-200 rounded-lg bg-zinc-100"
            />
            <textarea
              rows={6}
              type="text"
              name="title"
              placeholder="Enter Updated Description Hear...."
              className="w-full px-4 py-2 outline-0 focus:outline-1 focus:outline-blue-300 boreder-1 border-zinc-200 rounded-lg bg-zinc-100"
            />
            <button
              type="submit"
              className="w-2xs transition-all duration-200 gap-2 ease-linear hover:w-full flex items-center justify-center cursor-pointer text-white p-2 bg-blue-500 rounded-lg"
            >
              Update Task <RiAddLargeLine />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateTodo;
