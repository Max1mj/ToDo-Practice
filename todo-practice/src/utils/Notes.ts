type CreatedTaskType = {
  type: "created_task";
  payload: {
    noteText: string;
    status: string;
  };
};

type DeletedTaskType = {
  type: "deleted_task";
  payload: {
    id: number;
  };
};

type UpdatedStatusType = {
  type: "updated_status";
  payload: {
    id: number;
    status: string;
  };
};

type UpdatetTextType = {
  type: "updated_text";
  payload: {
    id: number;
    noteText: string;
  };
};

export type NoteActionType =
  | CreatedTaskType
  | DeletedTaskType
  | UpdatedStatusType
  | UpdatetTextType;

export type NoteItemType = {
  id: number;
  noteText: string;
  status: string;
};
