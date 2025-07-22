import React, { useRef, useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { axiosInstance } from "../utils/AxiosInstance";
import { FaTwitter, FaYoutube } from "react-icons/fa";

interface CreateContentProps {
  onClick: () => void;
}
type ContentType = "youtube" | "twitter";

const CreateContentModel = ({ onClick }: CreateContentProps) => {
  const [loading, setLoading] = useState(false);
  const [selectedType, setSelectedType] = useState<ContentType | null>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);

  const createContentHandler = async () => {
    setLoading(true);
    axiosInstance.defaults.withCredentials = true;
    try {
      const title = titleRef.current?.value;
      const link = linkRef.current?.value;

      if (!title || !link) {
        setLoading(false);
        alert("Please fill in both title and link fields");
        return;
      }
      
      if (!selectedType) {
        setLoading(false);
        alert("Please select a content type");
        return;
      }

      const isYouTubeLink =
        link.startsWith("https://youtu.be/") ||
        link.startsWith("https://www.youtube.com/watch") ||
        link.startsWith("https://youtube.com/watch") ||
        link.startsWith("https://youtu.be") ||
        link.startsWith("https://m.youtube.com/watch");

      const isTwitterLink =
        link.startsWith("https://twitter.com/") ||
        link.startsWith("https://x.com/") ||
        link.startsWith("https://www.twitter.com/") ||
        link.startsWith("https://www.x.com/");

      if (!isYouTubeLink && !isTwitterLink) {
        setLoading(false);
        alert("Link must be a YouTube or Twitter link!");
        return;
      }

      await axiosInstance.post("/content/", {
        title,
        link,
      });

      setLoading(false);
      onClick();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="fixed p-4 md:p-0 w-full h-screen flex justify-center items-center inset-0 z-55 bg-slate-400/50 backdrop-blur-xs">
        <div className="w-full md:w-2xl text-center flex flex-col items-center p-4 bg-white opacity-100 rounded-xl">
          <div className="w-full  justify-end px-4">
            <IoArrowBackSharp
              onClick={onClick}
              className="text-4xl bg-slate-200 p-2 cursor-pointer rounded-lg transition-all duration-300 ease-in-out hover:bg-slate-300"
            />
          </div>
          <h1 className="text-3xl mb-6 font-bold text-slate-950">
            Add Content
          </h1>
          <Input
            ref={titleRef}
            type={"text"}
            onChange={() => {
              return null;
            }}
            placeholder={"Enter Title"}
          />
          <Input
            ref={linkRef}
            type={"text"}
            onChange={() => {
              return null;
            }}
            placeholder={"Enter Link"}
          />

          <h3 className="text-lg font-semibold text-gray-700 mb-3 text-left">
            Select Content Type
          </h3>
          <div className="flex gap-6 mb-3 justify-center">
            {/* YouTube Option */}
            <div
              onClick={() => setSelectedType("youtube")}
              className={`
            flex-1 max-w-40 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-105
            ${
              selectedType === "youtube"
                ? "border-red-500 bg-red-50 shadow-lg"
                : "border-gray-200 bg-white hover:border-red-300 hover:shadow-md"
            }
          `}
            >
              <div className="flex flex-col items-center space-y-2">
                <FaYoutube
                  className={`text-3xl ${
                    selectedType === "youtube"
                      ? "text-red-500"
                      : "text-gray-400"
                  }`}
                />
                <span
                  className={`font-medium ${
                    selectedType === "youtube"
                      ? "text-red-700"
                      : "text-gray-600"
                  }`}
                >
                  YouTube
                </span>
                {selectedType === "youtube" && (
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                )}
              </div>
            </div>

            {/* Twitter Option */}
            <div
              onClick={() => setSelectedType("twitter")}
              className={`
            flex-1 max-w-40 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-105
            ${
              selectedType === "twitter"
                ? "border-blue-500 bg-blue-50 shadow-lg"
                : "border-gray-200 bg-white hover:border-blue-300 hover:shadow-md"
            }
          `}
            >
              <div className="flex flex-col items-center space-y-2">
                <FaTwitter
                  className={`text-3xl ${
                    selectedType === "twitter"
                      ? "text-blue-500"
                      : "text-gray-400"
                  }`}
                />
                <span
                  className={`font-medium ${
                    selectedType === "twitter"
                      ? "text-blue-700"
                      : "text-gray-600"
                  }`}
                >
                  Twitter
                </span>
                {selectedType === "twitter" && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </div>
            </div>
          </div>

          <Button
            loading={loading}
            onClick={createContentHandler}
            variant="primary"
            size="md"
            fullWidth
          >
            Add
          </Button>
        </div>
      </div>
    </>
  );
};

export default CreateContentModel;
