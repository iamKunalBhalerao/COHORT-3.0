"use client";
import axios from "axios";
import { useState } from "react";

export default function Signup() {
  const [userId, setUserId] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signupHandler = async () => {
    setUserId((id) => id + 1);
    const { data } = await axios.post("http://localhost:3000/api/v1/signup", {
      userId,
      username,
      password,
    });
    localStorage.setItem("token", data.data.token);
    console.log(data.data);
  };

  return (
    <>
      <div className="w-full h-screen bg-gray-950 flex items-center justify-center">
        <div className="p-4 flex flex-col gap-4 items-center justify-center rounded-lg border-1 border-gray-500">
          <h1 className="text-4xl px-4 text-center font-bold">Sign Up</h1>
          <input
            type="text"
            className="w-xl border-1 border-gray-500 rounded-lg px-4 py-2 text-white outline-0 active:outline-1 active:outline-gray-300"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="w-xl border-1 border-gray-500 rounded-lg px-4 py-2 text-white outline-0 active:outline-1 active:outline-gray-300"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={signupHandler}
            className="px-4 py-2 w-full text-black font-bold rounded-lg bg-gray-100 hover:bg-gray-300 transition-all duration-300 ease-in-out cursor-pointer"
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}
