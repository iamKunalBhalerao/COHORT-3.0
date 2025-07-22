import React from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-screen p-4 flex justify-center items-center bg-slate-200">
        <div className="w-full md:w-1/4 bg-white p-4 flex flex-col items-center rounded-xl shadow">
          <h1 className="text-4xl font-bold mb-4 text-blue-950">Sign In</h1>
          <Input
            placeholder={"Enter Email"}
            onChange={() => {
              return null;
            }}
          />
          <Input
            placeholder={"Enter Password"}
            onChange={() => {
              return null;
            }}
          />
          <p className="text-md text-blue-600 cursor-pointer self-start p-2">
            Forgot Password ?
          </p>
          <Button variant="primary" size="md" fullWidth>
            Sign In
          </Button>
          <p className="text-md text-black self-start pt-2 pl-2">
            Dont have an Account ?{" "}
            <span
              onClick={() => navigate("/auth/signup")}
              className="cursor-pointer text-blue-600"
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signin;
