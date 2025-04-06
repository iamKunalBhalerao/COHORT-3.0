import React from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

const Signup = () => {
  //   const [disabledBtn, setdisabledBtn] = useState(false);

  const btnOnClick = () => {
    alert("You Clicked a Button");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-start pt-28 text-white gap-15 h-[100vh] bg-[#00274E]">
        <h2 className="text-3xl text-center text-cyan-400">
          Webinar<span className="text-white">.gg</span>
        </h2>
        <h1 className="text-3xl font-semibold pt-6">Verify Your Age</h1>
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-zinc-400 text-lg">
            Please confirm your Bith Year. This date will not be stored.
          </p>
          <div className="flex flex-col items-center justify-center gap-8">
            <Input type={"text"} placeholder={"Enter Your Age"} />
            <Button disabled={false} onClick={btnOnClick}>
              Continue
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
