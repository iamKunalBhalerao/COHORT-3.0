import type { ReactElement } from "react";
import Button from "./ui/Button";

interface TopBarProps {
  btnLabel: string;
  heading: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
}

const DashboardTBar = ({
  btnLabel,
  heading,
  startIcon,
  endIcon,
}: TopBarProps) => {
  return (
    <>
      <div className="w-full p-4 flex justify-between items-center">
        <p className="text-3xl font-bold">{heading}</p>
        <div className="flex gap-4">
          <Button
            variant="primary"
            size="md"
            startIcon={startIcon}
            endIcon={endIcon}
          >
            {btnLabel}
          </Button>
        </div>
      </div>
    </>
  );
};

export default DashboardTBar;
