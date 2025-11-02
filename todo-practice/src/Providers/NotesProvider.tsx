import { useReducer, type FC } from "react";
import { NotesContext } from "../Contexts/NotesContext";
import { listReducer } from "../reducer/listReducer";
import { testNotes } from "../utils/Notes";

type NotesProviderType = {
  children: React.ReactNode;
};

const NotesProvider: FC<NotesProviderType> = ({ children }) => {
  const [noteList, dispatch] = useReducer(listReducer, testNotes);

  return <NotesContext value={{ noteList, dispatch }}>{children}</NotesContext>;
};

export default NotesProvider;
