import React from "react";
import AuthHeading from "../components/AuthHeading";
import AuthSubHeading from "../components/AuthSubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import ButtonWarning from "../components/ButtonWarning";

const Signup = () => {
  return (
    <>
      <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="bg-white rounded-lg w-80 text-center p-2 h-max px-4">
            <AuthHeading lable={"Sign Up"} />
            <AuthSubHeading
              lable={"Enter Your Information to Create an Account"}
            />
            <InputBox lable={"First Name"} placeholder={"Jhon"} type={"text"} />
            <InputBox lable={"Last Name"} placeholder={"Doe"} type={"text"} />
            <InputBox
              lable={"Email"}
              placeholder={"example@example.com"}
              type={"email"}
            />
            <InputBox
              lable={"Password"}
              placeholder={"123456"}
              type={"password"}
            />
            <Button lable={"Sign Up"} />
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
