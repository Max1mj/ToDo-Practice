import { useContext, useMemo, useState, type FC } from "react";

import { NotesContext } from "../Contexts/NotesContext";
import { SearchContext } from "../Contexts/SearchContext";

type SearchProviderType = {
  children: React.ReactNode;
};

const SearchProvider: FC<SearchProviderType> = ({ children }) => {
  const [search, setSearch] = useState("");
  const { noteList } = useContext(NotesContext);

  const searchedNote = useMemo(() => {
    return (noteList ?? []).filter((item) =>
      item.noteText.toLowerCase().includes(search)
    );
  }, [search, noteList]);

  return (
    <SearchContext value={{ search, setSearch, searchedNote }}>
      {children}
    </SearchContext>
  );
};

export default SearchProvider;
