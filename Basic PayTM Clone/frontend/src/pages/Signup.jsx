import React, { useState } from "react";
import AuthHeading from "../components/AuthHeading";
import AuthSubHeading from "../components/AuthSubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import ButtonWarning from "../components/ButtonWarning";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <>
      <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="bg-white rounded-lg w-80 text-center p-2 h-max px-4">
            <AuthHeading lable={"Sign Up"} />
            <AuthSubHeading
              lable={"Enter Your Information to Create an Account"}
            />
            <InputBox
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              lable={"First Name"}
              placeholder={"Jhon"}
              type={"text"}
            />
            <InputBox
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              lable={"Last Name"}
              placeholder={"Doe"}
              type={"text"}
            />
            <InputBox
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              lable={"Email"}
              placeholder={"example@example.com"}
              type={"email"}
            />
            <InputBox
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              lable={"Password"}
              placeholder={"123456"}
              type={"password"}
            />
            <Button
              onClick={async () => {
                const response = await axios.post(
                  "http://localhost:3000/api/v1/user/signup",
                  {
                    firstName,
                    lastName,
                    email,
                    password,
                  }
                );
                localStorage.setItem("AccessToken", response.data.AccessToken);
                navigate("/dashboard");
              }}
              lable={"Sign Up"}
            />
            <ButtonWarning
              lable={"Alredy have an account?"}
              buttonText={"Sign-In"}
              to={"/signin"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
