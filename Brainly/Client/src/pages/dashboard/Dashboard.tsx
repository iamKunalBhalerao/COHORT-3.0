import React, { useState } from "react";
import DashBoardTopBar from "../../components/ui/DashBoardTopBar";
import { LuShare2 } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import Card from "../../components/ui/Card";
import CreateContentModel from "../../components/CreateContentModel";
import ShareBrainModal from "../../components/ShareBrainModal";

const Dashboard = () => {
  const [addContentTaggle, setAddContentTaggle] = useState(false);
  const [shareBrainToggle, setShareBrainToggle] = useState(false);

  const toggleAddContentModal = () => {
    setAddContentTaggle(!addContentTaggle);
  };

  const toggleShareBrain = () => {
    setShareBrainToggle(!shareBrainToggle);
  };

  return (
    <>
      {addContentTaggle && (
        <CreateContentModel onClick={toggleAddContentModal} />
      )}
      {shareBrainToggle && <ShareBrainModal onClick={toggleShareBrain} />}
      <DashBoardTopBar
        heading="All Notes"
        btnLabel1="Share Brain"
        btnLabel2="Add Content"
        onclick1={toggleShareBrain}
        onclick2={toggleAddContentModal}
        startIcon1={<LuShare2 />}
        startIcon2={<IoMdAdd />}
      />
      <div className="gap-2 flex flex-wrap justify-center">
        <Card
          title={"Tweet"}
          link={"https://x.com/Pratikwebtech/status/1947125916980674798"}
          type={"tweet"}
        />
        <Card
          title={"Youtube"}
          link={"https://youtu.be/rJORiMZe2hA?si=TsQ42PzOwYMJQA5t"}
          type={"youtube"}
        />
      </div>
    </>
  );
};

export default Dashboard;
