import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Children from "../components/Children";

const Jobs = () => {
  const [netWork, setNetwork] = useState(0);
  const [jobs, setJobs] = useState(0);
  const [messaging, setMessaging] = useState(0);
  const [notificationCount, setNotificationCount] = useState(0);

  return (
    <>
      <Navbar
        notificationCount={notificationCount}
        netWork={netWork}
        jobs={jobs}
        messaging={messaging}
      />
      <Children
        setNotificationCount={setNotificationCount}
        setNetwork={setNetwork}
        setJobs={setJobs}
        setMessaging={setMessaging}
      />
    </>
  );
};

export default Jobs;
