import React from "react";
import type { NoteItemType } from "../../utils/Notes";
import NoteItem from "./NoteItem";

type NoteListType = {
  list: NoteItemType[];
  onRemove: (id: number) => void;
};

const NoteList = ({ list, onRemove }: NoteListType) => {
  return (
    <div
      data-testid="listId"
      className="w-full full flex flex-col gap-3 items-center overflow-y-auto py-5"
    >
      {list.map((note) => (
        <NoteItem
          noteText={note.noteText}
          key={note.id}
          id={note.id}
          status={note.status}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default NoteList;
