import React from "react";
import DashboardTBar from "../../components/DashboardTBar";
import { MdOutlineAddLink } from "react-icons/md";

const Links = () => {
  return (
    <>
      <div className="">
        <DashboardTBar
          btnLabel="Add Link"
          heading="All Links"
          startIcon={<MdOutlineAddLink />}
        />
      </div>
    </>
  );
};

export default Links;
