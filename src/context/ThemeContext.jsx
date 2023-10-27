"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const value = localStorage.getItem("theme");
    return value || "light";
  } else {
    // Handle the case when localStorage is not available (e.g., on the server)
    return "light"; // Provide a default value
  }
};


export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });

  const toogle = () => {
setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  
  return <ThemeContext.Provider value={{ theme,toogle }}>{children}</ThemeContext.Provider>;
  
};
