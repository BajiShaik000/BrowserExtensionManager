import SunIcon from "/assets/icon-sun.svg";
import MoonIcon from "/assets/icon-moon.svg";
import logoIcon from "/assets/logo.svg";
import { FC, useEffect, useState } from "react";

export const Navbar: FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <div className="nav-bar">
      <div className="logo">
        <img src={logoIcon} alt="logo-icon" />
      </div>
      <button
        className="theme"
        aria-label={`toggle theme - ${darkMode ? "dark" : "light"} mode`}
        onClick={() => setDarkMode((prev) => !prev)}
      >
        <img src={darkMode ? SunIcon : MoonIcon} alt="" aria-hidden="true" />
      </button>
    </div>
  );
};
