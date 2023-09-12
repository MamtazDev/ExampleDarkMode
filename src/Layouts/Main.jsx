import React, { useState } from "react";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Main = () => {
  const [open, setOpen] = useState(false);
  const handleSidebar = () => {
    setOpen(!open);
  };
  return (
    <div className="bg-[#1A7B58] dark:bg-[#060818] h-screen relative">
      <Header />
      <button
        className="block dark:text-white xl:hidden p-2"
        onClick={handleSidebar}
      >
        {open ? (
          <i class="fa-solid fa-xmark"></i>
        ) : (
          <i class="fa-solid fa-bars"></i>
        )}
      </button>
      <div className="xl:grid grid-cols-6 relative">
        <div className="">
          <div
            className={`absolute top-0 z-50 ${
              open ? "left-0" : "left-[-325px]"
            } xl:static xl:pt-[45px] xl:pl-[25px]`}
          >
            <Sidebar />
          </div>
        </div>
        <div className="w-full col-span-5 p-2 xl:p-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
