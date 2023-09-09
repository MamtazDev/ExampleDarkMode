import React from "react";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-[#1A7B58] dark:bg-[#060818] h-screen relative">
      <Header />
      <div className="flex">
        <div className="w-2/12">
          <Sidebar />
        </div>
        <div className="w-10/12 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
