import React from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import Input from "./ui/Input";
import Button from "./ui/Button";

interface CreateContentProps {
  onClick: () => void;
}

const CreateContentModel = ({ onClick }: CreateContentProps) => {
  return (
    <>
      <div className="fixed p-4 md:p-0 w-full h-screen flex justify-center items-center inset-0 z-55 bg-slate-400/50 backdrop-blur-xs">
        <div className="w-full md:w-3xl text-center flex flex-col items-center p-4 bg-white opacity-100 rounded-xl">
          <button onClick={onClick} className="w-full  justify-end px-4">
            <IoArrowBackSharp className="text-4xl bg-slate-200 p-2 cursor-pointer rounded-lg transition-all duration-300 ease-in-out hover:bg-slate-300" />
          </button>
          <h1 className="text-3xl mb-6 font-bold text-slate-950">
            Add Content
          </h1>
          <Input
            onChange={() => {
              return null;
            }}
            placeholder={"Enter Title"}
          />
          <Input
            onChange={() => {
              return null;
            }}
            placeholder={"Enter Link"}
          />
          <Button variant="primary" size="md">Submit</Button>
        </div>
      </div>
    </>
  );
};

export default CreateContentModel;
