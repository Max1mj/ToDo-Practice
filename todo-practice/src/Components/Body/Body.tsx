import { useContext } from "react";
import NoteList from "./NoteList";
import { NotesContext } from "../../Contexts/NotesContext";
import { CategoryContext } from "../../Contexts/CategoryContext";
import { SearchContext } from "../../Contexts/SearchContext";
import CreateButton from "./CreateButton";
import { ModalContext } from "../../Contexts/ModalContext";
import { ThemeContext } from "../../Contexts/ThemeContext";

const Body = () => {
  const { onPress } = useContext(ModalContext);
  const { category } = useContext(CategoryContext);

  const { dispatch } = useContext(NotesContext);
  const { searchedNote } = useContext(SearchContext);
  const { theme } = useContext(ThemeContext);

  const onItemRemove = (id: number) => {
    dispatch({
      type: "deleted_task",
      payload: {
        id: id,
      },
    });
  };

  const displayedNotes =
    category === "All"
      ? searchedNote
      : searchedNote.filter((item) => item.status === category);

  return (
    <div className="w-[764px] h-2/4 flex flex-row ">
      <div className="w-full ml-12.5 my-5 ">
        <NoteList list={displayedNotes} onRemove={onItemRemove} />
      </div>
      <div className="flex items-end w-12.5 h-full">
        <CreateButton onEvent={onPress} theme={theme} />
      </div>
    </div>
  );
};

export default Body;
