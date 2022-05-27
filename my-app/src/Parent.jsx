import Child from "./Child";
import React, { useContext } from "react";
import { AppContext } from "./ThemeContext";
function Parent() {
  const state = useContext(AppContext);
  return (
    <div className={`${state.dark ? "dark" : "light"}`}>
      <div><h1>React Context API Practice</h1></div>
      <Child></Child>
    </div>
  );
}

export default Parent;
