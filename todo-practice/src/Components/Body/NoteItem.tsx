import React, { useContext, useState, type FC } from "react";
import { GoPencil } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ThemeContext } from "../../Contexts/ThemeContext";

export interface NoteItemProps {
  id: number;
  noteText: string;
  status: "Complete" | "Incomplete";
  onRemove: (id: number) => void;
}

const NoteItem: FC<NoteItemProps> = ({ noteText, id, onRemove, status }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [noteLabel, setNoteLabel] = useState(noteText);
  const [itemStatus, setItemStatus] = useState(status);
  const { theme } = useContext(ThemeContext);

  const onEditing = () => {
    setIsEditing((editing) => !editing);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoteLabel(e.target.value);
  };

  const handleStatus = () => {
    setItemStatus(itemStatus === "Complete" ? "Incomplete" : "Complete");
  };

  let editNoteName = <span data-testid="itemText">{noteLabel}</span>;

  if (isEditing) {
    editNoteName = (
      <input
        data-testid="editId"
        type="text"
        className={`border animate-pulse px-1  ${
          theme === "light" ? "text-indigo-600 " : "text-white"
        }`}
        value={noteLabel}
        onChange={handleChange}
      />
    );
  }

  return (
    <div
      data-testid="noteItemId"
      className="h-7 w-lg flex flex-row justify-between items-center"
      key={id}
    >
      <div className="flex flex-row gap-3">
        <input
          onChange={handleStatus}
          type="checkbox"
          className={`peer relative appearance-none size-6.5
                            border border-gray-500 
                            
                            ${
                              theme === "light"
                                ? "bg-white hover:border-indigo-600 checked:bg-indigo-600"
                                : "bg-black hover:border-white checked:bg-white"
                            }`}
          checked={itemStatus === "Complete" ? true : false}
        />

        <span
          className={`text-gray-500 select-none ${
            itemStatus === "Complete" ? ` line-through` : `font-semibold`
          }`}
        >
          {editNoteName}
        </span>
      </div>

      <div className="flex flex-row gap-2.5 ">
        <button
          data-testid="change"
          className={`cursor-pointer text-gray-500 ${
            theme === "light" ? "hover:text-indigo-400" : "hover:text-white"
          } `}
          onClick={onEditing}
        >
          {isEditing ? "Save" : <GoPencil />}
        </button>

        <button
          data-testid="delete"
          className="cursor-pointer text-gray-500 hover:text-red-500"
          onClick={() => onRemove(id)}
        >
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
