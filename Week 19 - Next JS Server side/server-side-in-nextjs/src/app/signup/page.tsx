"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const SignupHandler = async () => {
    const response = await axios.post("http://localhost:3000/api/v1/auth/signup", {
      username: username,
      email: email,
      password: password,
    });

    if(response.data.success) {
      router.push("/signin");
    } else {
      alert("Something Went Wrong")
    }

  };

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-slate-950">
        <div className="w-lg px-4 py-3 flex flex-col itesm-center justify-center bg-slate-900 rounded-lg border-1 border-slate-500">
          <h1 className="text-4xl font-bold text-center my-4">Sign Up</h1>
          <div className="flex flex-col gap-4 my-4">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Enter Username"
              className="text-xl p-2 bg-slate-800 rounded-lg outline-0 active:outline-1 active:outline-slate-700 border-1 border-slate-600"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter Email"
              className="text-xl p-2 bg-slate-800 rounded-lg outline-0 active:outline-1 active:outline-slate-700 border-1 border-slate-600"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Password"
              className="text-xl p-2 bg-slate-800 rounded-lg outline-0 active:outline-1 active:outline-slate-700 border-1 border-slate-600"
            />
          </div>
          <button
            onClick={SignupHandler}
            className="text-xl cursor-pointer text-white w-full py-2 bg-blue-800 rounded-xl border-0"
          >
            Sign Up
          </button>
          <p className="py-4">
            Dont have an account?{" "}
            <Link href={"/signin"} className="text-blue-600">
              Signin
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
