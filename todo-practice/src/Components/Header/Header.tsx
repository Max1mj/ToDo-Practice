import { useContext } from "react";
import Title from "./Title";
import Search from "./Search";
import Selector from "./Selector";
import ThemeSwitch from "./ThemeSwitch";
import { ThemeContext } from "../../Contexts/ThemeContext";

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="w-[764px] flex flex-col gap-3 items-center">
      <Title theme={theme} />
      <div className="flex flex-row gap-4">
        <Search theme={theme} />
        <Selector theme={theme} />
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Header;
