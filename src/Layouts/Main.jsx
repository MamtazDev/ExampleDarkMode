import React, { useContext, useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";
import { ModeContext } from "../Contexts/ModeContext";

const Main = () => {
  //   const [isDarkMode, setIsDarkMode] = useState(false);

  //   // Toggle the dark mode class on the body element
  //   useEffect(() => {
  //     if (isDarkMode) {
  //       document.body.classList.add("dark");
  //     } else {
  //       document.body.classList.remove("dark");
  //     }
  //   }, [isDarkMode]);

  //   const toggleDarkMode = () => {
  //     setIsDarkMode((prevDarkMode) => !prevDarkMode);
  //   };

  const { isDarkMode, setIsDarkMode } = useContext(ModeContext);
  const [authChecked, setAuthChecked] = useState(null);

  console.log(isDarkMode, "cccc");

  useEffect(() => {
    const mode = localStorage.getItem("DarkMode");
    console.log(mode, "auu");
    if (mode) {
      setIsDarkMode(mode);
      setAuthChecked(true);
    } else {
      setAuthChecked(true);
    }
  }, []);
  return authChecked ? (
    <div className="bg-[#fafafa] dark:bg-[#060818] h-screen">
      <Header />
      <Sidebar />
    </div>
  ) : (
    ""
  );
};

export default Main;
