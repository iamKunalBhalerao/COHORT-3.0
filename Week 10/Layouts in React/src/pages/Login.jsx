import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const redirectUser = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>This is Student Login Page</h1>
      <button onClick={redirectUser}>Back to Home Page</button>
    </div>
  );
};

export default Login;
