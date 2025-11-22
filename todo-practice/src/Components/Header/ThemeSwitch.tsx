import React, { useContext, useState } from "react";
import { LuMoon } from "react-icons/lu";
import { GoSun } from "react-icons/go";
import { ThemeContext } from "../../Contexts/ThemeContext";

export type ThemeType = "light" | "dark";

const ThemeSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const onToggleChange = () => {
    setIsToggled((prev) => !prev);
    toggleTheme();
  };

  return (
    <button
      onClick={onToggleChange}
      className={`size-10 text-white  rounded flex items-center justify-center cursor-pointer shadow-sm ${
        theme === "light"
          ? "bg-indigo-600 shadow-indigo-600"
          : "bg-black shadow-white"
      } `}
    >
      {isToggled ? (
        <GoSun className="size-6" data-testid="sun" />
      ) : (
        <LuMoon className="size-6" data-testid="moon" />
      )}
    </button>
  );
};

export default ThemeSwitch;
