import React from "react";
import Button from "./Button";
import { LuSend } from "react-icons/lu";
import { Link } from "react-router-dom";

const UserCard = ({ user, index }) => {
  return (
    <>
      <div
        key={index}
        className="flex justify-between my-2 mx-4 p-2 bg-white rounded-xl shadow-xl"
      >
        <div className="flex items-center">
          <div className="rounded-full h-12 w-12 bg-slate-200 flex items-center justify-center mt-1 mr-2">
            <div className="flex flex-col justify-center h-fulltext-xl">
              {user.firstName[0]}
            </div>
          </div>
          <div className="flex flex-col justify-center h-full">
            <div>
              {user.firstName} {user.lastName}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center h-full">
          <button
            // onClick={onClick}
            type="button"
            className="w-full cursor-pointer text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-4"
          >
            <Link to={"/send"} className="flex items-center gap-2">
              <LuSend /> send Money
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default UserCard;
