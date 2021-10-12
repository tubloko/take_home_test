import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../hooks/useTheme";

const ToggleThemeButton = () => {
  const [isDarkMode, toggleTheme] = useTheme();

  return (
    <button
      className="app__dark-mode-btn icon level-right"
      onClick={toggleTheme}
    >
      <FontAwesomeIcon
        color={isDarkMode ? "#FFA500" : ""}
        icon={isDarkMode ? faSun : faMoon}
      />
    </button>
  );
}

export default ToggleThemeButton;
