import React from "react";
import DashBoardTopBar from "../../components/ui/DashBoardTopBar";
import { LuShare2 } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import Card from "../../components/ui/Card";

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
      <div className="gap-2 flex flex-wrap justify-center">
        <Card
          title={"Tweet"}
          link={"https://x.com/heysatya_/status/1946498444954321264"}
          type={"tweet"}
        />
        <Card
          title={"Youtube"}
          link={"https://youtu.be/iU34dK03nyc?si=mRfX02tlaqN1EVi2"}
          type={"youtube"}
        />
        <Card
          title={"Youtube"}
          link={"https://youtu.be/iU34dK03nyc?si=mRfX02tlaqN1EVi2"}
          type={"youtube"}
        />
        <Card
          title={"Tweet"}
          link={"https://x.com/developer_boii/status/1946277856964919648"}
          type={"tweet"}
        />
        <Card
          title={"Youtube"}
          link={"https://youtu.be/iU34dK03nyc?si=mRfX02tlaqN1EVi2"}
          type={"youtube"}
        />
        <Card
          title={"Tweet"}
          link={"https://x.com/Divyansharma001/status/1945937369179283925"}
          type={"tweet"}
        />
        <Card
          title={"Youtube"}
          link={"https://youtu.be/iU34dK03nyc?si=mRfX02tlaqN1EVi2"}
          type={"youtube"}
        />
        <Card
          title={"Tweet"}
          link={"https://x.com/developer_boii/status/1946277856964919648"}
          type={"tweet"}
        />
        <Card
          title={"Tweet"}
          link={"https://x.com/Divyansharma001/status/1945937369179283925"}
          type={"tweet"}
        />
        <Card
          title={"Tweet"}
          link={"https://x.com/Divyansharma001/status/1945937369179283925"}
          type={"tweet"}
        />
      </div>
    </>
  );
};

export default Dashboard;
