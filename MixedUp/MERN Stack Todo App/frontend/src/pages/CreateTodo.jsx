import React, { useState } from "react";
import { FcTodoList } from "react-icons/fc";
import { RiAddLargeLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    try {
      e.preventDefault();

      fetch("http://localhost:3000/api/v1/todo", {
        method: "POST",
        body: JSON.stringify({
          title,
          description,
        }),
        headers: { "content-type": "application/json" },
      }).then(async (res) => {
        await res.json();
      });
      navigate("/todos");
    } catch (error) {
      navigate("/nopage");
      console.log("Some error is Occured !!!", error);
    }
  };

  return (
    <>
      <div className="w-full h-full flex items-center justify-center pt-30">
        <div className="w-1/3 flex flex-col p-6 rounded-2xl shadow-lg border-1 border-zinc-200 gap-4 items-center justify-center">
          <h2 className="flex items-center gap-2 text-2xl font-med">
            Create Todo Hear <FcTodoList />
          </h2>
          <form
            onSubmit={submitHandler}
            className="w-full flex flex-col items-center justify-center gap-4 pt-3"
          >
            <input
              type="text"
              name="title"
              placeholder="Enter Title Hear...."
              required
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="w-full px-4 py-2 outline-0 focus:outline-1 focus:outline-blue-300 boreder-1 border-zinc-200 rounded-lg bg-zinc-100"
            />
            <textarea
              rows={6}
              type="text"
              name="title"
              placeholder="Enter Description Hear...."
              required
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="w-full px-4 py-2 outline-0 focus:outline-1 focus:outline-blue-300 boreder-1 border-zinc-200 rounded-lg bg-zinc-100"
            />
            <button
              type="submit"
              className="w-2xs gap-3 transition-all duration-200 ease-linear hover:w-full flex items-center justify-center cursor-pointer text-white p-2 bg-blue-500 rounded-lg"
            >
              Add Task <RiAddLargeLine />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateTodo;
