import { describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import NoteList from "../Components/Body/NoteList";
import type { NoteItemType } from "../utils/Notes";
import { page } from "vitest/browser";

describe("Notelist", () => {
  const mockList: NoteItemType[] = [
    { id: 1, noteText: "Note # 1", status: "Complete" },
    { id: 2, noteText: "Note # 2", status: "Incomplete" },
    { id: 3, noteText: "Note # 3", status: "Complete" },
    { id: 4, noteText: "Note # 4", status: "Incomplete" },
    { id: 5, noteText: "Note # 5", status: "Complete" },
  ];
  const onRemove = vi.fn();
  it("renders NoteList component", () => {
    render(<NoteList list={mockList} onRemove={onRemove} />);

    const noteList = page.getByTestId("listId");

    expect(noteList).toBeInTheDocument();
  });
});
