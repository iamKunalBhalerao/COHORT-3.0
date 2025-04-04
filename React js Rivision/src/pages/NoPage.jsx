import React from "react";
import Body from "../components/Body";
import Headin1 from "../ui/Headin1";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const NoPage = () => {
  const navigate = useNavigate();

  const redirectUser = () => {
    navigate("/");
  };

  return (
    <>
      <Body>
        <Headin1 tabName={"404 Page Not Found"} />
        <Button onCLickHandler={redirectUser} btnMessage={"Go to Home page"} />
      </Body>
    </>
  );
};

export default NoPage;
