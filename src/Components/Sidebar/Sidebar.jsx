import React, { useContext, useState } from "react";
import avatar from "../../assets/Images/avatar.png";
import languageLight from "../../assets/Images/languageLight.png";
import languageDark from "../../assets/Images/languageDark.png";
import sunLight from "../../assets/Images/sunLight.png";
import sunDark from "../../assets/Images/sunDark.png";
import logOutDark from "../../assets/Images/logOutDark.png";
import logOutLight from "../../assets/Images/logOutLight.png";
import menuItem from "../../assets/Images/gridMenu.png";
import menuItemActiveDark from "../../assets/Images/gridMenuDarckActive.png";
import menuItemActiveLight from "../../assets/Images/gridMenuLightActive.png";
import toggleLight from "../../assets/Images/toggleLight.png";
import toggleDark from "../../assets/Images/toggleDark.png";
import downArrowDark from "../../assets/Images/downArrowDark.png";
import downArrowLight from "../../assets/Images/downArrowLight.png";
import menuSelectedDark from "../../assets/Images/menuSelectedDark.png";
import menuSelectedLight from "../../assets/Images/menuSelectedLight.png";
import { ModeContext } from "../../Contexts/ModeContext";

const Sidebar = () => {
  const { theme, setTheme } = useContext(ModeContext);
  const [activeMenuItem, setActiveMenuItem] = useState(1);

  const menuItems = [
    { id: 1, title: "Menu Item 1" },
    { id: 2, title: "Menu Item 2" },
    { id: 3, title: "Menu Item 3" },
    { id: 4, title: "Menu Item 4" },
  ];
  return (
    <div className="shadow-lg dark:shadow-none absolute top-[105px] left-[25px] bg-[#f5faf8] dark:bg-[#0e1726] rounded-[10px] h-[87vh] w-[250px]">
      <div className="px-[20px] flex flex-col justify-between h-full">
        <div>
          <div className="border-b border-b-[#888] flex items-center gap-[10px] pt-[39px] pb-[24px] px-[16px]">
            <div className="w-[42px] h-[42px] rounded-full">
              <img
                src={avatar}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="text-[12px] font-[400] text-[#888]">Good Morning</p>
              <h6 className="text-[14px] font-[500] text-[#333] dark:text-white">
                Kyle Davies
              </h6>
            </div>
          </div>
          {/* items div */}
          <div className="pt-[55px] flex flex-col gap-[16px]">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-[10px] cursor-pointer relative"
                onClick={() => setActiveMenuItem(item.id)}
              >
                <img
                  src={
                    item.id === activeMenuItem
                      ? theme === "dark"
                        ? menuItemActiveDark
                        : menuItemActiveLight
                      : menuItem
                  }
                  alt=""
                />
                <p
                  className={`text-[14px] font-[500] ${
                    item.id === activeMenuItem
                      ? theme === "dark"
                        ? "text-white"
                        : "text-[#0E1726]"
                      : "text-[#888]"
                  }`}
                >
                  {item.title}
                </p>
                {item.id === activeMenuItem && (
                  <img
                    src={
                      theme === "dark" ? menuSelectedDark : menuSelectedLight
                    }
                    alt=""
                    className="absolute right-[-20px]"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-t-[#888] flex flex-col gap-[28px] pt-[32px] pb-[69px]">
          {/* language */}
          <div className="flex items-center justify-between">
            <div className="flex gap-[10px] items-center">
              {" "}
              <img
                src={theme === "dark" ? languageDark : languageLight}
                alt=""
              />
              <p className="text-[14px] font-[400] text-[#333] dark:text-white">
                Language
              </p>
            </div>
            <div className="flex items-center gap-[5px] cursor-pointer">
              <p className="text-[12px] font-[400] text-[#333] dark:text-white">
                English
              </p>
              <img
                src={theme === "dark" ? downArrowDark : downArrowLight}
                alt=""
              />
            </div>
          </div>
          {/* mode */}
          <div className="flex items-center justify-between">
            <div className="flex gap-[10px] items-center">
              {" "}
              <img src={theme === "dark" ? sunDark : sunLight} alt="" />
              <p className="text-[14px] font-[400] text-[#333] dark:text-white">
                Dark Mode
              </p>
            </div>
            {theme === "dark" ? (
              <img
                className="cursor-pointer"
                onClick={() => setTheme("light")}
                src={toggleDark}
                alt=""
              />
            ) : (
              <img
                className="cursor-pointer"
                onClick={() => setTheme("dark")}
                src={toggleLight}
                alt=""
              />
            )}
          </div>
          {/* signout */}
          <div className="flex gap-[10px] items-center cursor-pointer">
            <img src={theme === "dark" ? logOutDark : logOutLight} alt="" />
            <p className="text-[14px] font-[400] text-[#333] dark:text-white">
              SignOut
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
