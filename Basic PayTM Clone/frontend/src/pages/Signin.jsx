import React from "react";
import AuthSubHeading from "../components/AuthSubHeading";
import AuthHeading from "../components/AuthHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import ButtonWarning from "../components/ButtonWarning";

const Signin = () => {
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
