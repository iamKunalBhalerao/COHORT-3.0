import React, { useState, type ReactElement } from "react";
import { LuBrainCircuit } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";
import { MdSpaceDashboard } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { IoDocuments } from "react-icons/io5";
import { FaLink } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";

const Sidebar = () => {
  const [collaps, setCollaps] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  interface NavItem {
    name: string;
    path: string;
    icon: ReactElement;
  }

  const navItems: NavItem[] = [
    { name: "Dashboard", path: "all", icon: <MdSpaceDashboard /> },
    { name: "Tweets", path: "tweets", icon: <BsTwitterX /> },
    { name: "Videos", path: "videos", icon: <FaYoutube /> },
    { name: "Documents", path: "docs", icon: <IoDocuments /> },
    { name: "Links", path: "links", icon: <FaLink /> },
    { name: "Tags", path: "tags", icon: <FaHashtag /> },
  ];

  return (
    <>
      <div
        className={`${
          collaps ? "w-auto" : "w-64"
        } bg-blue-950 border-r-1 border-blue-500 text-white flex flex-col transition-all duration-300 ease-in-out`}
      >
        <div className="p-4 flex justify-between items-center">
          {!collaps && (
            <p
              onClick={() => navigate("/dashboard")}
              className="text-3xl flex gap-2 items-center font-black cursor-pointer"
            >
              <LuBrainCircuit />
              Brainly
            </p>
          )}
          {collaps ? (
            <button
              onClick={() => setCollaps(!collaps)}
              className="pl-2 cursor-pointer"
            >
              <RiMenuUnfoldLine className="text-white text-3xl font-black" />
            </button>
          ) : (
            <button
              onClick={() => setCollaps(!collaps)}
              className="px-0 cursor-pointer"
            >
              <VscChromeClose className="text-white text-2xl font-black" />
            </button>
          )}
        </div>
        <nav
          className={`flex flex-col ${
            collaps && "items-center"
          } gap-2 px-4 py-2 mt-4 transition-all duration-300`}
        >
          {navItems.map((tab) => (
            <Link
              key={tab.path}
              to={`/dashboard/${tab.path}`}
              className={`p-4 w-auto rounded-lg text-lg hover:bg-blue-700 hover:text-white transition-all duration-300 ${
                location.pathname.includes(tab.path) ? "bg-blue-700" : ""
              }`}
            >
              {collaps ? (
                <span className="text-center text-xl">{tab.icon}</span>
              ) : (
                <span
                  className={`transition-opacity flex items-center gap-2 text-xl duration-300 ${
                    collaps ? "opacity-0 w-0" : "opacity-100 w-full"
                  }`}
                >
                  {tab.icon}
                  {tab.name}
                </span>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
