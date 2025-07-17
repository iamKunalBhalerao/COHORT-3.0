import React from "react";
import { useNavigate } from "react-router-dom";

interface SecondaryButtonProps {
  to: string;
  label: string;
}

const SecondaryButton = ({ to, label }: SecondaryButtonProps) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(to);
  };
  return (
    <>
      <button
        onClick={onClickHandler}
        className="px-4 py-2 text-md font-medium rounded-lg bg-blue-100 hover:bg-blue-500 hover:text-white text-blue-700 cursor-pointer"
      >
        {label}
      </button>
    </>
  );
};

export default SecondaryButton;
