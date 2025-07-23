import React, { useState } from "react";
import DashBoardTopBar from "../../components/ui/DashBoardTopBar";
import { LuShare2 } from "react-icons/lu";
import { IoMdAdd } from "react-icons/io";
import Card from "../../components/ui/Card";
import CreateContentModel from "../../components/CreateContentModel";
import ShareBrainModal from "../../components/ShareBrainModal";
import useContent from "../../Hooks/useContent";
import { FaLocationArrow } from "react-icons/fa";

export interface Content {
  title: string;
  link: string;
}

const Dashboard = () => {
  const [addContentTaggle, setAddContentTaggle] = useState(false);
  const [shareBrainToggle, setShareBrainToggle] = useState(false);

  const contents = useContent();

  console.log(contents);

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
        {contents.length !== 0 ? (
          contents.map((item: Content, index) => (
            <Card
              key={index}
              title={item.title}
              link={item.link}
              type={item.link.startsWith("https://x.com") ? "tweet" : "youtube"}
            />
          ))
        ) : (
          <div className="w-full mt-20 md:mt-30 flex items-center justify-center">
            <h1 className="flex items-center gap-4 text-4xl text-center text-blue-800 font-bold">
              Create Your First Content onClicking Add Content Button{" "}
              <FaLocationArrow />
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
