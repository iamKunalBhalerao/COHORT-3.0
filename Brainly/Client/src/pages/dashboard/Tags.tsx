import React from "react";
import DashboardTBar from "../../components/DashboardTBar";
import { FaHashtag } from "react-icons/fa";

const Tags = () => {
  return (
    <>
      <div className="">
        <DashboardTBar btnLabel="Add Tag" heading="All Tags" startIcon={<FaHashtag />} />
      </div>
    </>
  );
};

export default Tags;
