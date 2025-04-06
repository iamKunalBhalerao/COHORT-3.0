import React, { useRef, useState } from "react";
import SubOtpBox from "../ui/SubOtpBox";
import Button from "../ui/Button";

const Otp = () => {
  const [btnDisabled, setBtnDisabled] = useState(true);

  const btnOnClick = () => {
    confirm("Are you sure you want to continue?");
  };

  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

  return (
    <>
      <div className="flex flex-col items-center justify-start pt-28 text-white gap-15 h-[100vh] bg-[#00274E]">
        <h2 className="text-3xl text-center text-cyan-400">
          Webinar<span className="text-white">.gg</span>
        </h2>
        <h1 className="text-3xl font-semibold">Check Your Email for Code</h1>
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-zinc-400 text-lg">
            Please Enter the verification code sent to email
            kunalbhalerao789@gmail.com
          </p>
          <div className="flex flex-col items-center justify-center text-white gap-2 bg-[#00274E]">
            <div className="flex flex-row items-center justify-center gap-2 pb-4">
              <SubOtpBox
                ref={ref1}
                onDone={() => {
                  ref2.current.focus();
                }}
                type={"text"}
              />
              <SubOtpBox
                ref={ref2}
                onDone={() => {
                  ref3.current.focus();
                }}
                type={"text"}
              />
              <SubOtpBox
                ref={ref3}
                onDone={() => {
                  ref4.current.focus();
                }}
                type={"text"}
              />
              <SubOtpBox
                ref={ref4}
                onDone={() => {
                  ref5.current.focus();
                }}
                type={"text"}
              />
              <SubOtpBox
                ref={ref5}
                onDone={() => {
                  ref6.current.focus();
                }}
                type={"text"}
              />
              <SubOtpBox
                ref={ref6}
                onDone={() => {
                  setBtnDisabled((prev) => !prev);
                }}
                type={"text"}
              />
            </div>
            <Button disabled={btnDisabled} onClick={btnOnClick}>
              Continue
            </Button>
            <p className="text-zinc-400 text-lg">
              Can't find the email? Click <u className="text-zinc-300">Here</u>{" "}
              to resend the code.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
