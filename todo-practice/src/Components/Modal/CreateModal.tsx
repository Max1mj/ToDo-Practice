import React, { useContext } from "react";
import NoteModal from "./NoteModal";
import { NotesContext } from "../../Contexts/NotesContext";
import { ModalContext } from "../../Contexts/ModalContext";
import { ThemeContext } from "../../Contexts/ThemeContext";

const CreateModal = () => {
  const { dispatch } = useContext(NotesContext);
  const { onPress } = useContext(ModalContext);
  const { theme } = useContext(ThemeContext);

  const onItemCreate = (text: string) => {
    dispatch({
      type: "created_task",
      payload: {
        noteText: text,
        status: "Incomplete",
      },
    });
  };
  return (
    <div
      className={` w-full h-full flex justify-center items-center absolute ${
        theme === "light" ? "bg-black/65" : "bg-white/20"
      }`}
    >
      <NoteModal onEvent={onPress} onCreate={onItemCreate} />
    </div>
  );
};

export default CreateModal;
