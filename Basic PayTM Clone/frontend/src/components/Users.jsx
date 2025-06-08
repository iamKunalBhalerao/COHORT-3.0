import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { RiSearch2Line } from "react-icons/ri";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
      .then((response) => {
        // console.log(response.data.user);
        setUsers(response.data.user);
      });
  }, [filter]);

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
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          type="text"
          name="search"
          placeholder={"SearchYour Friend Hear..."}
          className="w-96 px-2 py-1 border border-slate-300 rounded focus:outline focus:outline-blue-200"
        />
      </div>
      <div>
        {users.map((user, index) => (
          <UserCard user={user} key={index} />
        ))}
      </div>
    </>
  );
};

export default Users;
