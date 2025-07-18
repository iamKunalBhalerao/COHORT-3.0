import React from "react";
import DashboardTBar from "../../components/DashboardTBar";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";

const Videos = () => {
  return (
    <>
      <div className="">
        <DashboardTBar btnLabel="Add Video" heading="All Videos" startIcon={<AiOutlineVideoCameraAdd />
} />
      </div>
    </>
  );
};

export default Videos;
