import { createContext, type Dispatch, type SetStateAction } from "react";
import { testNotes, type NoteItemType } from "../utils/Notes";

type SearchContextType = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  searchedNote: NoteItemType[];
};

export const SearchContext = createContext<SearchContextType>({
  search: "",
  setSearch: () => {},
  searchedNote: testNotes,
});
