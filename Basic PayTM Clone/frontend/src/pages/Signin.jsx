import React, { useState } from "react";
import AuthSubHeading from "../components/AuthSubHeading";
import AuthHeading from "../components/AuthHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import ButtonWarning from "../components/ButtonWarning";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function signinHandler() {
    const response = await axios.post(
      "http://localhost:3000/api/v1/user/signin",
      {
        email,
        password,
      }
    );

    localStorage.setItem("AccessToken", response.data.AccessToken);
    navigate("/dashboard");
  }

  return (
    <>
      <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="bg-white rounded-lg w-80 text-center p-2 h-max px-4">
            <AuthHeading lable={"Sign Up"} />
            <AuthSubHeading
              lable={"Enter Your Credentials to access the Account"}
            />
            <InputBox
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              lable={"Email"}
              placeholder={"example@example.com"}
              type={"email"}
              required
            />
            <InputBox
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              lable={"Password"}
              placeholder={"123456"}
              type={"password"}
              required
            />
            <Button onClick={signinHandler} lable={"Sign Up"} />
            <ButtonWarning
              lable={"Don't have an Account?"}
              buttonText={"Sign-Up"}
              to={"/signup"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
