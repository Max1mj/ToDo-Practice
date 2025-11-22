import { useContext } from "react";
import NoteList from "./NoteList";
import CreateButton from "./CreateButton";
import { ModalContext } from "../../Contexts/ModalContext";
import { ThemeContext } from "../../Contexts/ThemeContext";

const Body = () => {
  const { onPress } = useContext(ModalContext);

  const { theme } = useContext(ThemeContext);

  return (
    <div className="w-[764px] h-2/4 flex flex-row ">
      <div className="w-full ml-12.5 my-5 ">
        <NoteList />
      </div>
      <div className="flex items-end w-12.5 h-full">
        <CreateButton onEvent={onPress} theme={theme} />
      </div>
    </div>
  );
};

export default Body;
