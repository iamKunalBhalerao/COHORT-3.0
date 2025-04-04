import React from "react";
import Body from "../components/Body";
import Headin1 from "../ui/Headin1";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const navigate = useNavigate();

  const goToNetwork = () => {
    navigate("/network");
  };

  const goToMessages = () => {
    navigate("/messages");
  };

  const goToJobs = () => {
    navigate("/jobs");
  };

  const goToNotifications = () => {
    navigate("/notifications");
  };

  return (
    <>
      <Body>
        <Headin1 tabName={"Feeds"} />
        <Button
          onCLickHandler={goToNetwork}
          btnMessage={"Go to Network page"}
        />
        <Button
          onCLickHandler={goToMessages}
          btnMessage={"Go to Messsages page"}
        />
        <Button onCLickHandler={goToJobs} btnMessage={"Go to Messsages page"} />
        <Button
          onCLickHandler={goToNotifications}
          btnMessage={"Go to Notifications page"}
        />
      </Body>
    </>
  );
};

export default Feed;
