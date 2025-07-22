import { Link } from "react-router-dom";
import Button from "./ui/Button";

const Navbar = () => {
  return (
    <>
      <div className="w-full fixed bg-white flex justify-between items-center py-4 px-4 border-b-1 border-b-slate-200">
        <Link to={"/"} className="text-2xl font-bold text-blue-700">
          Brainly
        </Link>
        <div className="links">
          <Link to="/dashboard">Go to Dashboard</Link>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => alert("Sign Up Message")}
            variant={"secondary"}
            size={"md"}
          >
            Sign Up
          </Button>
          <Button
            onClick={() => alert("Sign In Message")}
            variant={"primary"}
            size={"md"}
          >
            Sign In
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
