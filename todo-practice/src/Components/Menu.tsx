import { useContext } from "react";

import { ThemeContext } from "../Contexts/ThemeContext";

import { ModalContext } from "../Contexts/ModalContext";
import CreateModal from "./Modal/CreateModal";
import Header from "./Header/Header";
import Body from "./Body/Body";
import CategoryProvider from "../Providers/CategoryProvider";
import SearchProvider from "../Providers/SearchProvider";

const Menu = () => {
  const { theme } = useContext(ThemeContext);
  const { state } = useContext(ModalContext);

  return (
    <div
      className={`w-full h-dvh flex relative  ${
        theme === "light" ? "bg-white" : "bg-black"
      }`}
    >
      <div className="w-full flex flex-col items-center justify-center">
        <CategoryProvider>
          <SearchProvider>
            <Header />
            <Body />
          </SearchProvider>
        </CategoryProvider>
      </div>
      {state ? <CreateModal /> : false}
    </div>
  );
};

export default Menu;
