import React from "react";
import Body from "../components/Body";
import Headin1 from "../ui/Headin1";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const Messages = () => {
  const navigate = useNavigate();

  const redirectUser = () => {
    navigate("/");
  };

  return (
    <>
      <Body>
        <Headin1 tabName={"Messages"} />
        <Button onCLickHandler={redirectUser} btnMessage={"Go to Home page"} />
      </Body>
    </>
  );
};

export default Messages;
