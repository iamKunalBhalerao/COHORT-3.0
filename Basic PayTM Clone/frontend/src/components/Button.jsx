import React from "react";
import { Link } from "react-router-dom";

const Button = ({ lable, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className="w-full cursor-pointer text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-4"
      >
        {/* <Link to={"/dashboard"}>{lable}</Link> */}
        {lable}
      </button>
    </>
  );
};

export default Button;
