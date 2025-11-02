export type CreatedTaskType = {
  type: "created_task";
  payload: {
    noteText: string;
    status: "Incomplete";
  };
};

export type DeletedTaskType = {
  type: "deleted_task";
  payload: {
    id: number;
  };
};

export type NoteActionType = CreatedTaskType | DeletedTaskType;

export type NoteItemType = {
  id: number;
  noteText: string;
  status: "Complete" | "Incomplete";
};

export const testNotes: NoteItemType[] = [
  { id: 1, noteText: "Note # 1", status: "Complete" },
  { id: 2, noteText: "Note # 2", status: "Incomplete" },
  { id: 3, noteText: "Note # 3", status: "Complete" },
  { id: 4, noteText: "Note # 4", status: "Incomplete" },
  { id: 5, noteText: "Note # 5", status: "Complete" },
];
