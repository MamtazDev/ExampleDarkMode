import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/Images/logo.png";
import { Link, useLocation } from "react-router-dom";
import logoLight from "../../assets/Images/logoLight.png";
import tabIconLight from "../../assets/Images/tabMenuLight.png";
import tabIconDark from "../../assets/Images/tabMenuDark.png";
import tabIconDarkActive from "../../assets/Images/tabMenuDarkActive.png";
import tabIconLightActive from "../../assets/Images/tabMenuLightActive.png";
import { ModeContext } from "../../Contexts/ModeContext";

const Header = () => {
  const { theme, setTheme } = useContext(ModeContext);

  const navItems = [
    {
      title: "Internal Link Tool",
      link: "/",
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

  const { pathname } = useLocation();

  const [hoverIndex, setHoverIndex] = useState(null);

  const mouseOver = (idx) => {
    setHoverIndex(idx);
  };

  const mouseOut = (idx) => {
    setHoverIndex(null);
  };
  return (
    <div className="bg-[#f5faf8] dark:bg-[#0e1726] flex items-center  px-[45px] shadow-md dark:shadow-none">
      <div>
        <Link to="/">
          <img
            src={theme === "dark" ? logo : logoLight}
            alt=""
            className="cursor-pointer mr-[150px]"
          />
        </Link>
      </div>
      <div className="flex w-full gap-[5px]">
        {navItems.map((item, idx) => (
          <div
            key={idx}
            onMouseOver={() => mouseOver(idx)}
            onMouseLeave={() => mouseOut(idx)}
            className={`${
              pathname === item.link
                ? "bg-[#01ab76] dark:bg-[#cdcdcd] border-transparent "
                : "bg-[#f3f5f8] dark:bg-[#0e1726] border border-[#01ab76]  dark:border-[#888]"
            }  w-full flex justify-center items-center hover:bg-[#01ab76] hover:dark:bg-[#cdcdcd]  rounded-[5px] border-[2px] `}
          >
            <Link
              to={item.link}
              className={`${
                pathname === item.link
                  ? "text-[#f5faf8] dark:text-[#0e1726]"
                  : "text-[#01ab76] dark:text-[#888888]"
              }  py-[20px] relative w-full text-center hover:text-[#f5faf8] hover:dark:text-[#0e1726]`}
            >
              <img
                className="absolute top-[50%] translate-y-[-50%] left-[39px]"
                src={
                  pathname === item.link
                    ? theme === "dark"
                      ? tabIconDarkActive
                      : tabIconLightActive
                    : theme === "dark"
                    ? hoverIndex === idx
                      ? tabIconDarkActive
                      : tabIconDark
                    : hoverIndex === idx
                    ? tabIconLightActive
                    : tabIconLight
                }
                alt=""
              />
              <p className="text-[14px] font-[500]">{item.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
