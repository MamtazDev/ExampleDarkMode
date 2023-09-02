import { createContext, useEffect, useState } from "react";

export const ModeContext = createContext();

const ModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  if (isDarkMode) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  const info = {
    isDarkMode,
    setIsDarkMode,
  };
  return <ModeContext.Provider value={info}>{children}</ModeContext.Provider>;
};

export default ModeProvider;
