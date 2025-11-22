import { describe, expect, it } from "vitest";
import type { NoteItemType } from "../utils/Notes";
import { listReducer } from "../reducer/listReducer";

describe("listReducer", () => {
  it("handles addedd item to empty list", () => {
    const previousState: NoteItemType[] = [];
    const mockItem = {
      noteText: "Run the tests",
      status: "Incomplete",
    };
    const expectedItem = {
      id: Date.now(),
      noteText: "Run the tests",
      status: "Incomplete",
    };
    expect(
      listReducer(previousState, {
        type: "created_task",
        payload: {
          ...mockItem,
        },
      })
    ).toEqual([expectedItem]);
  });

  it("handles added item to an existing list", () => {
    const previousState: NoteItemType[] = [
      {
        id: 1763673261575,
        noteText: "Create a todo",
        status: "Complete",
      },
    ];
    const mockItem = {
      noteText: "Run the tests",
      status: "Incomplete",
    };
    const expectedItem = {
      id: Date.now(),
      noteText: "Run the tests",
      status: "Incomplete",
    };
    expect(
      listReducer(previousState, {
        type: "created_task",
        payload: {
          ...mockItem,
        },
      })
    ).toEqual([...previousState, expectedItem]);
  });

  it("handles updating status of existing item", () => {
    const mockItem = {
      id: 1763673261575,
      noteText: "Create a todo",
      status: "Complete",
    };
    const previousState: NoteItemType[] = [{ ...mockItem }];

    const expectedItem = {
      id: 1763673261575,
      noteText: "Create a todo",
      status: "Incomplete",
    };

    const result = listReducer(previousState, {
      type: "updated_status",
      payload: {
        id: mockItem.id,
        status: "Incomplete",
      },
    });

    expect(result[0]).toEqual(expectedItem);
  });

  it("handles keeps status of existing item", () => {
    const mockItem = {
      id: 1763673261575,
      noteText: "Create a todo",
      status: "Complete",
    };

    const otherItem = {
      id: 1763673261578,
      noteText: "Run the tests",
      status: "Complete",
    };
    const previousState: NoteItemType[] = [{ ...mockItem }, { ...otherItem }];

    const expectedItem = {
      id: 1763673261575,
      noteText: "Create a todo",
      status: "Incmplete",
    };

    const result = listReducer(previousState, {
      type: "updated_status",
      payload: {
        id: mockItem.id,
        status: "Incmplete",
      },
    });

    expect(previousState[1]).toEqual(result[1]);
    expect(result[0]).toEqual(expectedItem);
  });

  it("handles deleting item in existing list", () => {
    const previousState: NoteItemType[] = [
      { id: 1763673261575, noteText: "Create a todo", status: "Complete" },
      { id: 1763673261578, noteText: "Run the tests", status: "Incomplete" },
    ];

    const result = listReducer(previousState, {
      type: "deleted_task",
      payload: {
        id: previousState[1].id,
      },
    });

    expect(result).not.toContain(previousState[1]);
  });

  it("expects empty array on deleting last item", () => {
    const previousState: NoteItemType[] = [
      { id: 1763673261578, noteText: "Run the tests", status: "Incomplete" },
    ];

    expect(
      listReducer(previousState, {
        type: "deleted_task",
        payload: {
          id: previousState[0].id,
        },
      })
    ).toEqual([]);
  });

  it("handles text change of an item", () => {
    const mockItem = {
      id: 1763673261575,
      noteText: "Create a todo",
      status: "Complete",
    };

    const expecteddItem = {
      id: 1763673261575,
      noteText: "Run the tests",
      status: "Complete",
    };
    const previousState: NoteItemType[] = [{ ...mockItem }];

    const result = listReducer(previousState, {
      type: "updated_text",
      payload: {
        id: mockItem.id,
        noteText: "Run the tests",
      },
    });

    expect(result[0]).toEqual(expecteddItem);
  });

  it("handles text change in exisiting list", () => {
    const previousState: NoteItemType[] = [
      { id: 1763673261575, noteText: "Create a todo", status: "Complete" },
      { id: 1763673261578, noteText: "Run the tests", status: "Incomplete" },
    ];

    const expectedItem = {
      id: 1763673261575,
      noteText: "Update item status",
      status: "Complete",
    };

    const result = listReducer(previousState, {
      type: "updated_text",
      payload: {
        id: previousState[0].id,
        noteText: "Update item status",
      },
    });
    expect(result[0]).toEqual(expectedItem);
    expect(previousState[1]).toEqual(result[1]);
  });
});
