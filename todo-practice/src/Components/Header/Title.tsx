import React, { type FC } from "react";

interface ThemeProps {
  theme: string;
}

const Title: FC<ThemeProps> = ({ theme }) => {
  return (
    <p
      className={`uppercase ${theme === "light" ? "text-black" : "text-white"}`}
    >
      todo list
    </p>
  );
};

export default Title;
