import React from "react";
import DashboardTBar from "../../components/DashboardTBar";
import { FaRetweet } from "react-icons/fa6";

const Tweets = () => {
  return (
    <>
      <div className="">
        <DashboardTBar
          btnLabel="Add Tweet"
          heading="All Tweets"
          startIcon={<FaRetweet />}
        />
      </div>
    </>
  );
};

export default Tweets;
