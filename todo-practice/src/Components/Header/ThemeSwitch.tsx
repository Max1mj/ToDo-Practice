import React, { useState, type FC } from "react";
import { LuMoon } from "react-icons/lu";
import { GoSun } from "react-icons/go";

export type ThemeType = "light" | "dark";

interface ThemeSwiitchProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeSwitch: FC<ThemeSwiitchProps> = ({ theme, toggleTheme }) => {
  const [isToggled, setIsToggled] = useState(false);

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
      {isToggled ? <GoSun className="size-6" /> : <LuMoon className="size-6" />}
    </button>
  );
};

export default ThemeSwitch;
