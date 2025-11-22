import { useState, type FC } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";

export type ThemeProviderType = {
  children: React.ReactNode;
};
export type ThemeType = "light" | "dark";

const ThemeProvider: FC<ThemeProviderType> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType | string>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};

export default ThemeProvider;
