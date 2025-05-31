import React from "react";

const App = () => {
  return (
    <>
      <div className="w-full grid grid-cols-1 bg-[#FAFAFA] sm:grid-cols-14">
        <div className="bg-[#1E2640] text-white col-span-1 hidden sm:block sm:col-span-2">
          SideBar
        </div>
        <div className="bg-[#FAFAFA] sm:gap-2 col-span-1 sm:col-span-12 grid grid-cols-1 sm:grid-cols-2 px-4 py-20 lg:grid-cols-3">
          <div className="rounded-xl text-white border border-gray-400 bg-[#146EB4] hover:bg-[#0E4F82]">
            <div className="p-4">
              <p>Next Payout</p>
              <div className="flex w-full justify-between items-center">
                <h2 className="text-2xl font-semibold pt-4">23,312.23</h2>
                <p className="font-semibold flex">
                  <p className="border-b-2 border-white">23 Orders</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </p>
              </div>
            </div>
            <div className="w-full p-2 bg-[#0E4F82] flex justify-between items-center">
              <p>Next Payment Date:</p>
              <p>Today, 4:00PM</p>
            </div>
          </div>
          <div className="p-4 rounded-md shadow text-black font-medium bg-white">
            <p className="flex gap-2">
              Amount Pending
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                />
              </svg>
            </p>
            <div className="flex w-full justify-between items-center">
              <h2 className="text-2xl font-semibold pt-4">23,312.23</h2>
              <p className="font-semibold flex">
                <p className="border-b-2 border-blue-500 text-blue-500">
                  23 Orders
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 text-blue-500x"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </p>
            </div>
          </div>
          <div className="p-4 rounded-md shadow text-black font-medium bg-white">
            <p className="flex gap-2">
              Amount Processed
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
