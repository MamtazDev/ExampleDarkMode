import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/Images/logo.png";
import { Link } from "react-router-dom";
import logoLight from "../../assets/Images/logoLight.png";
import tabIconLight from "../../assets/Images/tabMenuLight.png";
import tabIconDark from "../../assets/Images/tabMenuDark.png";
import { ModeContext } from "../../Contexts/ModeContext";

const Header = () => {
  const { theme, setTheme } = useContext(ModeContext);

  const navItems = [
    {
      title: "Internal Link Tool",
      link: "/internal-link-tool",
    },
    {
      title: "Tool 2",
      link: "/tool-2",
    },
    {
      title: "Tool 3",
      link: "/tool-3",
    },
    {
      title: "Tool 4",
      link: "/tool-4",
    },
    {
      title: "Tool 5",
      link: "/tool-5",
    },
    {
      title: "Tool 6",
      link: "/tool-6",
    },
  ];

  return (
    <div className="bg-[#f5faf8] dark:bg-[#0e1726] flex items-center gap-[75px] px-[45px]">
      <div>
        <img src={theme === "dark" ? logo : logoLight} alt="" />
      </div>
      <div className="flex w-full gap-[5px]">
        {navItems.map((item, idx) => (
          <div className="bg-[#f3f5f8] dark:bg-[#0e1726] w-full flex justify-center items-center  rounded-[5px] dark:border-[2px] dark:border-[#888]">
            <Link className="text-[#01ab76] dark:text-[#888888] py-[20px] w-full flex items-center justify-evenly">
              <img src={theme === "dark" ? tabIconDark : tabIconLight} alt="" />
              <p className="text-[14px] font-[500]">{item.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
