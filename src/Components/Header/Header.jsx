import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/Images/logo.png";
import { Link } from "react-router-dom";
import logoLight from "../../assets/Images/logoLight.png";
import tabIconLight from "../../assets/Images/tabMenuLight.png";
import tabIconDark from "../../assets/Images/tabMenuDark.png";
import { ModeContext } from "../../Contexts/ModeContext";

const Header = () => {
  //   const [isDarkMode, setIsDarkMode] = useState(false);

  const { isDarkMode, setIsDarkMode } = useContext(ModeContext);

  //   // Toggle the dark mode class on the body element
  //   useEffect(() => {
  //     if (isDarkMode) {
  //       document.body.classList.add("dark");
  //     } else {
  //       document.body.classList.remove("dark");
  //     }
  //   }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevDarkMode) => !prevDarkMode);
    localStorage.setItem("DarkMode", !isDarkMode);
  };
  return (
    <div className="bg-[#f5faf8] dark:bg-[#0e1726] flex items-center gap-[75px] px-[45px]">
      <div>
        <img
          src={isDarkMode ? logo : logoLight}
          alt=""
          onClick={toggleDarkMode}
        />
      </div>
      <div className="flex w-full gap-[5px]">
        <div className="bg-[#f3f5f8] dark:bg-[#0e1726] w-full flex justify-center items-center rounded-[5px]">
          <Link className="text-[#01ab76] dark:text-[#888888] py-[20px] w-full flex items-center justify-evenly">
            <img src={isDarkMode ? tabIconDark : tabIconLight} alt="" />
            <p className="text-[14px] font-[500]">Internal Link Tool</p>
          </Link>
        </div>
        <div className="bg-[#f3f5f8] dark:bg-[#0e1726] w-full flex justify-center items-center  rounded-[5px]">
          <Link className="text-[#01ab76] dark:text-[#888888] py-[20px] w-full flex items-center justify-evenly">
            <img src={isDarkMode ? tabIconDark : tabIconLight} alt="" />
            <p className="text-[14px] font-[500]">Tool 2</p>
          </Link>
        </div>
        <div className="bg-[#f3f5f8] dark:bg-[#0e1726] w-full flex justify-center items-center rounded-[5px]">
          {" "}
          <Link className="text-[#01ab76] dark:text-[#888888] py-[20px] w-full flex items-center justify-evenly">
            <img src={isDarkMode ? tabIconDark : tabIconLight} alt="" />
            <p className="text-[14px] font-[500]">Tool 3</p>
          </Link>
        </div>
        <div className="bg-[#f3f5f8] dark:bg-[#0e1726] w-full flex justify-center items-center rounded-[5px]">
          {" "}
          <Link className="text-[#01ab76] dark:text-[#888888] py-[20px] w-full flex items-center justify-evenly">
            <img src={isDarkMode ? tabIconDark : tabIconLight} alt="" />
            <p className="text-[14px] font-[500]">Tool 4</p>
          </Link>
        </div>
        <div className="bg-[#f3f5f8] dark:bg-[#0e1726] w-full flex justify-center items-center rounded-[5px]">
          {" "}
          <Link className="text-[#01ab76] dark:text-[#888888] py-[20px] w-full flex items-center justify-evenly">
            <img src={isDarkMode ? tabIconDark : tabIconLight} alt="" />
            <p className="text-[14px] font-[500]">Tool 5</p>
          </Link>
        </div>
        <div className="bg-[#f3f5f8] dark:bg-[#0e1726] w-full flex justify-center items-center rounded-[5px]">
          {" "}
          <Link className="text-[#01ab76] dark:text-[#888888] py-[20px] w-full flex items-center justify-evenly">
            <img src={isDarkMode ? tabIconDark : tabIconLight} alt="" />
            <p className="text-[14px] font-[500]">Tool 6</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
