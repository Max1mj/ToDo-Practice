import { useContext, type FC } from "react";
import { IoIosSearch } from "react-icons/io";
import { SearchContext } from "../../Contexts/SearchContext";

interface SearchProps {
  theme: string;
}

const Search: FC<SearchProps> = ({ theme }) => {
  const { search, setSearch } = useContext(SearchContext);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div
      className={`w-xl h-10 flex flex-row  items-center justify-between px-4 py-2 border  ${
        theme === "light"
          ? "text-indigo-600 border-indigo-600"
          : "text-white border-white"
      }`}
    >
      <input
        type="text"
        placeholder="Search note..."
        className="h-full w-full focus:outline-none"
        value={search}
        onChange={handleSearch}
      />
      <IoIosSearch className="size-5" />
    </div>
  );
};

export default Search;
