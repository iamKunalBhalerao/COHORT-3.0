import React from "react";
import SheduleTab from "../ui/SheduleTab";
import SheduleButton from "../ui/SheduleButton";

const DashboardHome = () => {
  return (
    <div className="absolute w-full pl-64 h-screen flex flex-col justify-start ">
      <img
        src="https://cdn.pixabay.com/photo/2016/09/12/09/10/hexagonal-1663344_1280.jpg"
        className="w-full h-1/6"
      />
      <div className="flex relative items-start justify-between px-6 py-4 w-full h-5/6 bg-[#F5F7F7]">
        {/* Profile Card */}
        <div className="flex flex-col absolute gap-4 px-8 py-14 rounded-xl items-center justify-center bg-white border-1 border-zinc-300 shadow-lg">
          <div className="flex items-center justify-center w-30 h-30">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
          <h4 className="text-xl font-semibold">Kunal Bhalerao</h4>
          <div className="socials flex flex-col items-center justify-center text-zinc-500">
            <p>kunalbhalerao789@gmail.com</p>
            <p>8788416841</p>
          </div>
          <p className="text-zinc-500">Maharashtra, India</p>
        </div>
        {/* Shedule Card */}
        <div className="pl-72 w-full">
          <div className="p-6 w-full flex items-center justify-evenly">
            <div className="date w-full flex flex-col p-4">
              <p>Monday, 14 October</p>
              <h2 className="text-2xl pt-2 font-bold text-[#002A5B]">
                Good Morning, Kunal!
              </h2>
              <div className="dateCard flex flex-col p-4 bg-white rounded-md shadow-md border-1 border-zinc-200 mt-10">
                <div className="w-full flex px-4 py-2 items-center justify-between rounded-lg bg-[#F5F7F7]">
                  <p>Monday, 14 October 2024</p>
                  <div className="arrows flex gap-4">
                    <i class="ri-arrow-left-line text-xl"></i>
                    <i class="ri-arrow-right-line text-xl"></i>
                  </div>
                </div>
                <div className="cardBottom flex flex-col gap-4 mt-4">
                  <SheduleTab
                    time={"11:30"}
                    title={"UX Webinar"}
                    live={"Live"}
                  />
                  <hr className="text-zinc-200" />
                  <SheduleTab
                    time={"11:30"}
                    title={"UX Webinar"}
                    live={"Upcoming"}
                  />
                  <hr className="text-zinc-200" />
                  <SheduleTab
                    time={"11:30"}
                    title={"UX Webinar"}
                    live={"Upcoming"}
                  />
                  <hr className="text-zinc-200" />
                  <SheduleTab
                    time={"11:30"}
                    title={"UX Webinar"}
                    live={"Upcoming"}
                  />
                </div>
              </div>
            </div>
            <div className="buttons w-1/2 bg-white border-1 border-zinc-200 shadow-md rounded-lg p-4 flex gap-9">
              <SheduleButton
                icon={<i class="ri-calendar-schedule-fill"></i>}
                task={"Shedule a Webinar"}
              />
              <SheduleButton
                icon={<i class="ri-add-large-line"></i>}
                task={"Join a Webinar"}
              />
              <SheduleButton
                icon={<i class="ri-film-line"></i>}
                task={"Open Recordings"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
