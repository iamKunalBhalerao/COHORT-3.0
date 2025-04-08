import React, { useState } from "react";

const Sidebar = () => {
  const [sidebarClose, setSidebarClose] = useState(true);

  function onCLickHandler() {
    setSidebarClose(!sidebarClose);
  }

  return (
    <>
      <div className="flex flex-col lg:h-full h-41 lg:w-auto lg:order-0 order-2 w-full bg-[#0A0B10] border-r border-zinc-800 shadow-lg">
        <div className="h-20 flex items-center justify-start gap-2 px-6 border-b border-zinc-800">
          <button onClick={onCLickHandler}>
            <i class="ri-menu-2-line text-2xl text-white font-semibold lg:block hidden cursor-pointer hover:text-[#4785ED] duration-300 ease-in-out"></i>
          </button>
          {sidebarClose ? null : (
            <p className="text-2xl text-white font-semibold  lg:block hidden">
              Menu
            </p>
          )}
        </div>
        <div className="pages w-full flex flex-col items-start justify-start gap-6 px-2 py-6">
          <a
            href="/"
            className="flex gap-2 px-2 py-2 items-center justify-start bg-[#0F1831] rounded-lg"
          >
            <i className="ri-home-3-line text-2xl text-[#4785ED]"></i>
            {sidebarClose ? null : (
              <p className="text-lg font-medium text-[#4785ED]">Home</p>
            )}
          </a>
          <a
            href="#"
            className="w-full flex gap-2 px-2 py-2 items-center justify-start rounded-lg"
          >
            <i className="ri-bookmark-line text-2xl text-white"></i>
            {sidebarClose ? null : (
              <p className="text-lg font-medium text-white">Bookmarks</p>
            )}
          </a>
          <a
            href="#"
            className="w-full flex gap-2 px-2 py-2 items-center justify-start rounded-lg"
          >
            <i className="ri-chat-4-line text-2xl text-white"></i>
            {sidebarClose ? null : (
              <p className="text-lg font-medium text-white">Questions</p>
            )}
          </a>
          <a
            href="#"
            className="w-full flex gap-2 px-2 py-2 items-center justify-start rounded-lg"
          >
            <i className="ri-history-fill text-2xl text-white"></i>
            {sidebarClose ? null : (
              <p className="text-lg font-medium text-white">Watch History</p>
            )}
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
