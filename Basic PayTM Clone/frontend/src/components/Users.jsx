import React, { useState } from "react";
import UserCard from "./UserCard";
import { RiSearch2Line } from "react-icons/ri";

const Users = () => {
  const [users, setUsers] = useState([
    {
      firstName: "Kunal",
      lastName: "Bhalerao",
      id: 1,
    },
    {
      firstName: "Prem",
      lastName: "Borawake",
      id: 2,
    },
    {
      firstName: "Anand",
      lastName: "Salunke",
      id: 3,
    },
    {
      firstName: "Kunal",
      lastName: "Bhalerao",
      id: 4,
    },
    {
      firstName: "Prem",
      lastName: "Borawake",
      id: 5,
    },
    {
      firstName: "Anand",
      lastName: "Salunke",
      id: 6,
    },
  ]);

  return (
    <>
      <div className="flex p-4">
        <p className="px-4 py-2 text-xl rounded-xl bg-blue-600 text-white font-semibold">
          Users
        </p>
      </div>
      <div className="p-4 flex items-center gap-2">
        <RiSearch2Line className="text-xl font-normal" />
        <input
          type="text"
          name="search"
          placeholder={"SearchYour Friend Hear..."}
          className="w-96 px-2 py-1 border border-slate-300 rounded focus:outline focus:outline-blue-200"
        />
      </div>
      <div>
        {users.map((user) => (
          <UserCard user={user} />
        ))}
      </div>
    </>
  );
};

export default Users;
