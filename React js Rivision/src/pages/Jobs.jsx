import React from "react";
import Body from "../components/Body";
import Headin1 from "../ui/Headin1";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const Jobs = () => {
  const navigate = useNavigate();
  const redirectUser = () => {
    navigate("/");
  };

  return (
    <>
      <Body>
        <Headin1 tabName={"Jobs"} />
        <Button onCLickHandler={redirectUser} btnMessage={"Go to Home page"} />
      </Body>
    </>
  );
};

export default Jobs;
