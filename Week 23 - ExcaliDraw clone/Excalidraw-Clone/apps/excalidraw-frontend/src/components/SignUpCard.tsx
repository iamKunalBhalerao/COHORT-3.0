"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

const SignUpCard = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const signUpHandler = async () => {
    try {
      if (fullName === "" || email === "" || password === "") {
        setIsError(true);
        setError("All Fields are Required!");
      }

      setIsError(false);

      const response = await axios.post(
        "http://localhost:3003/api/v1/user/signup",
        {
          fullName,
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );  

      if (!response.data.success) {
        setError(response.data.message);
      }

      setIsError(false);

      router.push("/");
    } catch (error: unknown) {
      setIsError(true);
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || "An error occurred");
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <>
      <div className="w-full h-full absolute flex items-cente justify-center text-black p-6">
        <div className="px-6 py-6 w-auto absolute self-center flex flex-col items-center justify-center bg-white shadow-xs rounded-xl">
          <div className="pb-3">
            <h1 className="text-xl pb-1 font-bold text-center">Sign Up</h1>
            <p className="text-md text-gray-600 font-medium text-center">
              Enter your credentials here.
            </p>
          </div>
          <label
            htmlFor="email"
            className="self-start pt-2 pl-2 pb-1 text-sm font-medium text-gray-600"
          >
            Full Name
          </label>
          <input
            type="text"
            name="FullName"
            onChange={(e) => {
              setIsError(false);
              setFullName(e.target.value);
            }}
            placeholder="Enter Full Name"
            className="w-full text-sm outline-none px-3 py-2 border border-gray-200 rounded-lg"
          />
          <label
            htmlFor="email"
            className="self-start pt-2 pl-2 pb-1 text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            onChange={(e) => {
              setIsError(false);
              setEmail(e.target.value);
            }}
            placeholder="Enter your Email"
            className="w-full text-sm outline-none px-3 py-2 border border-gray-200 rounded-lg"
          />
          <label
            htmlFor="email"
            className="self-start pt-2 pl-2 pb-1 text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <div className="flex gap-1">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={(e) => {
                setIsError(false);
                setPassword(e.target.value);
              }}
              placeholder="Enter Password"
              className="w-full text-sm outline-none px-3 py-2 border border-gray-200 rounded-lg"
            />
            <button
              onClick={() => setShowPassword((prev) => !prev)}
              className="px-3 py-2 border border-gray-200 cursor-pointer rounded-lg"
            >
              {showPassword ? <IoEye /> : <IoEyeOff />}
            </button>
          </div>
          {isError && (
            <>
              <div className="w-full px-2 py-3 my-2 rounded-lg border border-red-500 bg-gray-50 text-sm text-red-500">
                {error}
              </div>
            </>
          )}
          <button
            onClick={signUpHandler}
            type="submit"
            className="w-full px-4 py-2 my-3 hover:scale-105 rounded-lg bg-blue-500 hover:bg-blue-600 cursor-pointer text-lg text-white font-medium duration-200 ease-in-out"
          >
            Sign Up
          </button>
          <p className="text-sm text-gray-600">
            Alredy have an account?{" "}
            <Link href="signin" className="text-md text-blue-600">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUpCard;
