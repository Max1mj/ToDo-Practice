import React, { useContext } from "react";
import NoteModal from "./NoteModal";

import { ThemeContext } from "../../Contexts/ThemeContext";

const CreateModal = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={` w-full h-full flex justify-center items-center absolute ${
        theme === "light" ? "bg-black/65" : "bg-white/20"
      }`}
    >
      <NoteModal />
    </div>
  );
};

export default CreateModal;
