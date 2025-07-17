import React from "react";
import { Link } from "react-router-dom";
import SecondaryButton from "./SecontaryButton";
import PrimaryButton from "./PrimaryButton";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center py-4 px-4 bg-transparent">
        <Link to={"/"} className="text-2xl font-bold text-blue-700">
          Brainly
        </Link>
        <div className="links">
          <Link to="/dashboard">Go to Dashboard</Link>
        </div>
        <div className="flex gap-2">
          <SecondaryButton to={"/auth/signup"} label={"Sign Up"} />
          <PrimaryButton to={"/auth"} label={"Sign In"} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
