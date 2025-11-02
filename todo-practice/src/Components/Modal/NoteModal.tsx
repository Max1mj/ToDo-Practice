import React, { useContext, useState, type FC } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";

export interface ModalProps {
  onCreate: (text: string) => void;
  onEvent: (state: boolean) => void;
}

const NoteModal: FC<ModalProps> = ({ onEvent, onCreate }) => {
  const [noteText, setNoteText] = useState("");
  const [error, setError] = useState(false);
  const { theme } = useContext(ThemeContext);

  const handleSubmit = () => {
    if (noteText === "") {
      setError(true);
    } else {
      setError(false);
      onCreate(noteText);
    }
  };

  return (
    <div
      className={`w-lg h-72 rounded-2xl flex flex-col items-center px-8 py-8 justify-between border ${
        theme === "light"
          ? "bg-gray-50  border-indigo-600"
          : "bg-neutral-900 border-white"
      }`}
    >
      <div className="flex flex-col gap-3 items-center">
        <p
          className={`uppercase ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          new note
        </p>
        <div className="flex flex-col gap-0.5">
          {error ? <label className="text-red-500">Error message</label> : null}

          <input
            onChange={(e) => setNoteText(e.target.value)}
            type="text"
            placeholder={"Input your note..."}
            className={`w-md h-9.5 px-4 py-2 border  rounded  focus:outline-none ${
              theme === "light"
                ? "border-indigo-600 placeholder:text-[#C3C1E5] text-black"
                : "border-white placeholder:text-gray-50 text-white"
            }`}
          />
        </div>
      </div>

      <div className="flex flex-row justify-between w-full">
        <button
          onClick={() => onEvent(false)}
          className={`w-28 h-9.5 px-5.5 py-2.5 rounded flex items-center justify-center border  uppercase  cursor-pointer ${
            theme === "light"
              ? "border-indigo-600 text-indigo-500"
              : "border-white text-white"
          }`}
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className={`uppercase  w-28 h-9.5 px-5.5 py-2.5 rounded flex items-center justify-center  cursor-pointer ${
            theme === "light"
              ? "text-white bg-indigo-500"
              : "text-black bg-white"
          }`}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default NoteModal;
