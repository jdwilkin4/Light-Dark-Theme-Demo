import React from "react";
import useDarkMode from "use-dark-mode";
import { useTheme } from "../utils/useTheme";
import "../components/ThemeBtn.scss";

const ThemeBtn = () => {
  const darkMode = useDarkMode(true);
  const theme = useTheme();
  return (
    <button className="btn-theme" type="button" onClick={darkMode.toggle}>
      {theme === "dark-mode" ? "Light mode" : "Dark mode"}
    </button>
  );
};
export default ThemeBtn;
