import React from "react";
import Body from "../components/Body";
import Headin1 from "../ui/Headin1";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const Network = () => {
  const navigate = useNavigate();
  const redirectUser = () => {
    navigate("/");
  };

  return (
    <>
      <Body>
        <Headin1 tabName={"Networks"} />
        <Button onCLickHandler={redirectUser} btnMessage={"Go to Home page"} />
      </Body>
    </>
  );
};

export default Network;
