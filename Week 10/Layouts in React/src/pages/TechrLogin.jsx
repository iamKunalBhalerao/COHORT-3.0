import React from "react";
import { useNavigate } from "react-router-dom";

const TechrLogin = () => {
  const navigate = useNavigate();
  const redirectUser = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>This is Teacher Login Page</h1>
      <button onClick={redirectUser}>Back to Home Page</button>
    </div>
  );
};

export default TechrLogin;
