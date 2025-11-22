import { useContext } from "react";
import lightThemeImage from "../../assets/images/Detective-check-footprint_light.svg";
import darkThemeImage from "../../assets/images/Detective-check-footprint_black.svg";
import { ThemeContext } from "../../Contexts/ThemeContext";

const FallbackList = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex flex-col gap-3.5 items-center">
      <img src={theme === "light" ? lightThemeImage : darkThemeImage} />
      <span className={`${theme === "light" ? "text-black" : "text-white"}`}>
        Empty...
      </span>
    </div>
  );
};

export default FallbackList;
