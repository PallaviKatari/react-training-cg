import React, { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider1 = ({ children }) => {
  const [theme1, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme1, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider1 };
