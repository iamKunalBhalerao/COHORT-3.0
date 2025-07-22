import { Link, useNavigate } from "react-router-dom";
import Button from "./ui/Button";

const Navbar = () => {
  const navigate = useNavigate();
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
            onClick={() => navigate("/auth/signup")}
            variant={"secondary"}
            size={"md"}
          >
            Sign Up
          </Button>
          <Button
            onClick={() => navigate("/auth")}
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
