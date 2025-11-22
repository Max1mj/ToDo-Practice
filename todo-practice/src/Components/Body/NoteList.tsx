import { useContext } from "react";

import NoteItem from "./NoteItem";
import { CategoryContext } from "../../Contexts/CategoryContext";

import FallbackList from "./FallbackList";
import { SearchContext } from "../../Contexts/SearchContext";

const NoteList = () => {
  const { category } = useContext(CategoryContext);

  const { searchedNote } = useContext(SearchContext);

  const filteredNotes =
    category === "All"
      ? searchedNote
      : searchedNote.filter((item) => item.status === category);

  return (
    <div
      data-testid="listId"
      className="w-full full flex flex-col gap-3 items-center overflow-y-auto py-5"
    >
      {filteredNotes.length === 0 ? (
        <FallbackList />
      ) : (
        filteredNotes.map((note) => (
          <NoteItem
            id={note.id}
            noteText={note.noteText}
            status={note.status}
            key={note.id}
          />
        ))
      )}
    </div>
  );
};

export default NoteList;
