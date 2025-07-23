import React, { useRef, useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import axios, { AxiosError } from "axios";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Signin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const showError = () => {
    setShowErrorToast(true);
    setTimeout(() => {
      setShowErrorToast(false);
    }, 5000);
  };

  const signinHandler = async () => {
    setLoading(true);

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/auth/signin",
        {
          email,
          password,
        }
      );
      setLoading(false);
      if (data.success) {
        setLoading(false);
        localStorage.setItem("accessToken", data.data.accessToken);
        localStorage.setItem("refreshToken", data.data.refreshToken);
        navigate("/dashboard");
      }
    } catch (err) {
      setLoading(false);
      showError();

      if (err instanceof AxiosError) {
        if (err.response?.data?.message === "Validation Error") {
          setError(
            err.response.data.errors?.[0]?.message || "Validation failed"
          );
        } else {
          setError(
            err.response?.data?.message || "An error occurred during signin"
          );
        }
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const showPaswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {showErrorToast && (
        <div className="fixed bg-white top-0 right-0 p-4 m-4 text-red-500 text-xl font-medium rounded-xl shadow transition-all duration-300 ease-in-out">
          {error}
        </div>
      )}
      <div className="w-full h-screen p-4 flex justify-center items-center bg-slate-100">
        <div className="fixed top-0 left-0 p-4">
          <IoArrowBackSharp
            onClick={() => navigate("/")}
            className="text-4xl bg-slate-200 p-2 cursor-pointer rounded-lg transition-all duration-300 ease-in-out hover:bg-slate-300"
          />
        </div>
        <div className="w-full md:w-1/4 bg-white p-4 flex flex-col items-center rounded-xl shadow">
          <h1 className="text-4xl font-bold mb-4 text-blue-950">Sign In</h1>
          <Input
            type={"email"}
            placeholder={"Enter Email"}
            inputRef={emailRef}
          />
          <Input
            type={showPassword ? "text" : "password"}
            placeholder={"Enter Password"}
            inputRef={passwordRef}
            endIcon={
              showPassword ? (
                <FaEye className="text-xl cursor-pointer" onClick={showPaswordToggle} />
              ) : (
                <FaEyeSlash className="text-xl cursor-pointer" onClick={showPaswordToggle} />
              )
            }
          />
          <p className="text-md text-blue-600 cursor-pointer self-start p-2">
            Forgot Password ?
          </p>
          <Button
            loading={loading}
            onClick={signinHandler}
            variant="primary"
            size="md"
            fullWidth
          >
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
