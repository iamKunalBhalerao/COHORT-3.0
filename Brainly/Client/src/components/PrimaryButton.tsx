import React from "react";
import { useNavigate } from "react-router-dom";

interface PrimaryButtonProps {
  to: string;
  label: string;
}

const PrimaryButton = ({ to, label }: PrimaryButtonProps) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(to);
  };
  return (
    <>
      <button
        onClick={onClickHandler}
        className="px-4 py-2 text-md font-medium rounded-lg bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"
      >
        {label}
      </button>
    </>
  );
};

export default PrimaryButton;
