import React from "react";
import { Link } from "react-router-dom";

const ButtonWarning = ({ lable, buttonText, to }) => {
  return (
    <>
      <div className="py-2 text-sm flex justify-center">
        <div>{lable}</div>
        <Link className="pointer underline pl-1" to={to}>
          {buttonText}
        </Link>
      </div>
    </>
  );
};

export default ButtonWarning;
