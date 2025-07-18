import React from "react";
import DashBoardTopBar from "../../components/ui/DashBoardTopBar";
import { LuShare2 } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";

const Dashboard = () => {
  return (
    <>
      <DashBoardTopBar
        heading="All Notes"
        btnLabel1="Share Brain"
        btnLabel2="Add Content"
        onclick1={() => alert("share Brain")}
        onclick2={() => alert("Add Content")}
        startIcon1={<LuShare2 />}
        startIcon2={<IoMdAdd />}
      />
    </>
  );
};

export default Dashboard;
