import React from "react";
import { LuShare2 } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";
// import { TbNotes } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";

interface CardProps {
  title: string;
  link: string;
  type: "tweet" | "youtube";
}

const Card = ({ title, link, type }: CardProps) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full lg:w-96 bg-white p-4 m-4 shadow border-1 border-slate-200 rounded-lg">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center-safe text-lg">
            {type === "youtube" && <FaYoutube className="text-2xl" />}
            {type === "tweet" && <BsTwitterX className="text-lg" />}
            <p className="font-medium">{title}</p>
          </div>
          <div className="flex gap-2 items-center-safe text-lg">
            <LuShare2
              onClick={() => navigate(link)}
              className="text-lg cursor-pointer hover:text-blue-500 transition-all duration-300"
            />
            <MdDeleteOutline className="text-xl cursor-pointer hover:text-red-500 transition-all duration-300" />
          </div>
        </div>
        {type === "youtube" && (
          <div className=" flex justify-center pt-4">
            <iframe
              className="w-full h-52 rounded-lg"
              src={link.replace(
                "https://youtu.be",
                "https://www.youtube.com/embed"
              )}
              //   www.youtube.com/embed/iU34dK03nyc?si=mRfX02tlaqN1EVi2
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {type === "tweet" && (
          <div className="flex justify-start">
            <blockquote className="twitter-tweet">
              <a
                href={link.replace("https://x.com", "https://twitter.com")}
              ></a>
            </blockquote>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
