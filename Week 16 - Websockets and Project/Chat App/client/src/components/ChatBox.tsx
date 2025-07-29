import { LuSend } from "react-icons/lu";

const ChatBox = () => {
  return (
    <>
      <div className="p-2 md:px-1 md:py-1 w-full md:w-2/4 h-full md:h-5/6 bg-slate-600 rounded-lg border-1 border-slate-200">
        <div className="w-full h-full flex flex-col bg-slate-800 rounded-lg">
          <div className="w-full flex flex-col items-end justify-end h-full p-2">
            <p className="px-2 py-1 rounded-lg bg-slate-600 text-white">Hi</p>
          </div>
          <div className="w-full flex gap-1 bg-slate-950 rounded-b-lg p-1">
            <input
              type="text"
              className="w-full rounded-md bg-slate-900 outline-0 active:outline-0 px-2 text-white text-xl"
            />
            <button className="p-2 text-white bg-slate-900 rounded-lg cursor-pointer hover:bg-green-700 transition-all duration-300 ease-in-out">
              <LuSend />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
