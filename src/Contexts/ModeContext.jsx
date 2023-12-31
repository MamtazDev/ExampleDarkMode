import { createContext, useEffect, useState } from "react";

export const ModeContext = createContext();

const ModeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  const element = document.documentElement;

  const darkQuery = window.matchMedia("(prefers-color-scheme:dark)");

  const onWindowMatch = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  };

  onWindowMatch();
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        break;
    }
  }, [theme]);

  const info = {
    theme,
    setTheme,
  };
  return <ModeContext.Provider value={info}>{children}</ModeContext.Provider>;
};

export default ModeProvider;
