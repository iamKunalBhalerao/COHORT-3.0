import React, { type ReactElement } from "react";
import Button from "./Button";

interface TopBarProps {
  btnLabel1: string;
  btnLabel2: string;
  heading: string;
  onclick1: () => void;
  onclick2: () => void;
  startIcon1?: ReactElement;
  startIcon2?: ReactElement;
  endIcon1?: ReactElement;
  endIcon2?: ReactElement;
}

const DashBoardTopBar = ({
  btnLabel1,
  btnLabel2,
  heading,
  onclick1,
  onclick2,
  startIcon1,
  startIcon2,
  endIcon1,
  endIcon2,
}: TopBarProps) => {
  return (
    <>
      <>
        <div className="w-full p-4 flex justify-between items-center">
          <p className="text-3xl font-bold">{heading}</p>
          <div className="flex gap-4 items-center">
            <Button
              onClick={onclick1}
              variant="secondary"
              size="md"
              startIcon={startIcon1}
              endIcon={endIcon1}
            >
              {btnLabel1}
            </Button>
            <Button
              onClick={onclick2}
              variant="primary"
              size="md"
              startIcon={startIcon2}
              endIcon={endIcon2}
            >
              {btnLabel2}
            </Button>
          </div>
        </div>
      </>
    </>
  );
};

export default DashBoardTopBar;
