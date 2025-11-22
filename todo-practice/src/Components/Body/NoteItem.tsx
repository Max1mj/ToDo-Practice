import React, { useContext, useState, type FC } from "react";
import { GoPencil } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ThemeContext } from "../../Contexts/ThemeContext";
import type { NoteItemType } from "../../utils/Notes";
import { NotesContext } from "../../Contexts/NotesContext";

const NoteItem: FC<NoteItemType> = ({ noteText, id, status }) => {
  const [error, setError] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [noteLabel, setNoteLabel] = useState(noteText);
  const [itemStatus, setItemStatus] = useState(status);
  const { theme } = useContext(ThemeContext);

  const { dispatch } = useContext(NotesContext);

  const onItemRemove = (id: number) => {
    dispatch({
      type: "deleted_task",
      payload: {
        id: id,
      },
    });
  };

  const onStatusChange = (status: string) => {
    dispatch({
      type: "updated_status",
      payload: {
        id: id,
        status: status,
      },
    });
  };

  const onTextChange = (text: string) => {
    dispatch({
      type: "updated_text",
      payload: {
        id: id,
        noteText: text,
      },
    });
  };

  const onEditing = () => {
    if (noteLabel === "") {
      setError(true);
    } else {
      setIsEditing((editing) => !editing);
      onTextChange(noteLabel);
      setError(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoteLabel(e.target.value);
  };

  const handleStatus = () => {
    const currentStatus = itemStatus === "Complete" ? "Incomplete" : "Complete";

    setItemStatus(currentStatus);
    onStatusChange(currentStatus);
  };

  let editNoteName = <span data-testid="itemText">{noteLabel}</span>;

  if (isEditing) {
    editNoteName = (
      <div className="flex flex-col gap-0.5">
        <input
          data-testid="editId"
          type="text"
          className={`border px-1 focus:outline-none focus:animate-pulse ${
            error
              ? "border-red-500"
              : theme === "light"
              ? "border-indigo-600 text-indigo-600"
              : "border-white text-white"
          }`}
          value={noteLabel}
          onChange={handleChange}
        />
      </div>
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
          checked={itemStatus === "Complete"}
        />

        <span
          className={`text-gray-500 select-none ${
            isEditing
              ? null
              : itemStatus === "Complete"
              ? "line-through"
              : "font-semibold"
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
          onClick={() => onItemRemove(id)}
        >
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
