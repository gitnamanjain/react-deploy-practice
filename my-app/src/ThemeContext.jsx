import React, { createContext, useState } from "react";

export const AppContext = createContext();
export const ThemeProvider = (props) => {
  const [dark, setDark] = useState(false);
  const handleChange = () => {
    setDark(!dark);
  };
  return (
    <AppContext.Provider value={{ dark, handleChange }}>
      {props.children}
    </AppContext.Provider>
  );
};
