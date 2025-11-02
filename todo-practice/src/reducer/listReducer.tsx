import { type NoteActionType, type NoteItemType } from "../utils/Notes";

export const listReducer = (todos: NoteItemType[], action: NoteActionType) => {
  const { type } = action;

  switch (type) {
    case "created_task": {
      return [
        ...todos,
        {
          id: Date.now(),
          noteText: action.payload.noteText,
          status: action.payload.status,
        },
      ];
    }
    case "deleted_task": {
      return todos.filter((item) => item.id !== action.payload.id);
    }
  }
};
