import React from "react";
import { LuSend } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const UserCard = ({ user, index }) => {
  const navigate = useNavigate();
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
            onClick={() => {
              navigate(`/send?id=${user._id}&name=${user.firstName}`);
            }}
            type="button"
            className="w-full flex gap-2 items-center cursor-pointer text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-4"
          >
            <LuSend /> send Money
          </button>
        </div>
      </div>
    </>
  );
};

export default UserCard;
