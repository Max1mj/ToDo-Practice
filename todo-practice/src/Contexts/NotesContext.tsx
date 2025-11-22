import { createContext, type Dispatch } from "react";
import { type NoteActionType, type NoteItemType } from "../utils/Notes";

type NotesContextType = {
  noteList?: NoteItemType[];
  dispatch: Dispatch<NoteActionType>;
};

export const NotesContext = createContext<NotesContextType>({
  noteList: [],
  dispatch: () => {},
});
