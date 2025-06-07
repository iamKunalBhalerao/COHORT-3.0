import React from "react";
import Button from "./Button";

const UserCard = ({ user }) => {
  return (
    <>
      <div className="flex justify-between my-2 mx-4 p-2 bg-white rounded-xl shadow-xl">
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
          <Button lable={"send Money"} />
        </div>
      </div>
    </>
  );
};

export default UserCard;
