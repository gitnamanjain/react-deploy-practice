import React, { useContext } from "react";
import { AppContext } from "./ThemeContext";
function Child() {
  const state = useContext(AppContext);
  console.log(state);
  return (
    <>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <br />
      Dark Theme - {state.dark ? "True" : "False"}
      <br />
      <br />
      <button
        className={`${state.dark ? "btn btn-light" : "btn btn-dark"}`}
        onClick={state.handleChange}
      >
        Change Theme
      </button>
    </>
  );
}

export default Child;
