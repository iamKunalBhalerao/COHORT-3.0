import React, { useEffect, useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import Button from "./ui/Button";
import { MdContentCopy } from "react-icons/md";
import { MdOutlineErrorOutline } from "react-icons/md";
import { axiosInstance } from "../utils/AxiosInstance";

interface ShareBrainProps {
  onClick: () => void;
}

const ShareBrainModal = ({ onClick }: ShareBrainProps) => {
  const [shortUrl, setShortUrl] = useState("");

  const submitHandler = async () => {
    try {
      const { data } = await axiosInstance.post("/brain/share", {
        share: true,
      });
      setShortUrl(`http://localhost:3000/api/v1/brain/${data.data.shortUrl}`);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    submitHandler();
  }, []);

  return (
    <>
      <div className="fixed w-full h-screen flex items-center justify-center inset-0 z-55 bg-slate-400/50 backdrop-blur-sm">
        <div className="w-lg flex flex-col items-center bg-white px-6 py-4 rounded-xl shadow">
          <div className="w-full  justify-end py-2">
            <IoArrowBackSharp
              onClick={onClick}
              className="text-4xl bg-slate-200 p-2 cursor-pointer rounded-lg transition-all duration-300 ease-in-out hover:bg-slate-300"
            />
          </div>
          <h1 className="text-4xl py-2 text-blue-600 font-bold">
            Share Your Brain
          </h1>
          <p className="text-lg py-3 text-gray-600 font-bold">
            Share your entire collection of Notes, Documents, Tweets and videos
            with others. They'll be able to inport your content into their own
            second brain
          </p>
          <div className="p-2 w-full rounded-xl my-2 text-xl font-medium border-1 border-zinc-200">
            {shortUrl}
          </div>
          <Button
            variant="primary"
            size="md"
            fullWidth
            startIcon={<MdContentCopy />}
          >
            Share Brain
          </Button>
          <p className="text-lg py-2 text-gray-500 flex items-center gap-2">
            only 3 times will be shared <MdOutlineErrorOutline />
          </p>
        </div>
      </div>
    </>
  );
};

export default ShareBrainModal;
