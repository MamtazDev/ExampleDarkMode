import React from "react";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";

const Main = () => {
  return (
    <div className="bg-[#fafafa] dark:bg-[#060818] h-screen relative">
      <Header />
      <Sidebar />
    </div>
  );
};

export default Main;
