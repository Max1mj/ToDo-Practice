import { describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";

import { page, userEvent } from "vitest/browser";
import type { NoteItemType } from "../utils/Notes";
import { SearchContext } from "../Contexts/SearchContext";
import NoteList from "../Components/Body/NoteList";
import { CategoryContext } from "../Contexts/CategoryContext";
import { NotesContext } from "../Contexts/NotesContext";
import SearchProvider from "../Providers/SearchProvider";

describe("Notelist", () => {
  const mockList: NoteItemType[] = [
    { id: 1, noteText: "Note # 1", status: "Complete" },
    { id: 2, noteText: "Hello World", status: "Incomplete" },
    { id: 3, noteText: "Write a test", status: "Complete" },
    { id: 4, noteText: "Run all tests", status: "Incomplete" },
    { id: 5, noteText: "Note # 5", status: "Complete" },
  ];

  it.each(["All", "Complete", "Incomplete"])(
    "renders NoteList with category %s",
    (category) => {
      const searchMock = vi.fn();
      render(
        <CategoryContext value={{ category }}>
          <SearchContext
            value={{
              searchedNote: mockList,
              setSearch: searchMock,
              search: "",
            }}
          >
            <NoteList />
          </SearchContext>
        </CategoryContext>
      );

      const noteList = page.getByTestId("listId");

      expect(noteList).toBeInTheDocument();
    }
  );

  it.each(["All", "Complete", "Incomplete"])(
    "render Notelist fallback on %s",
    (category) => {
      const searchMock = vi.fn();
      render(
        <CategoryContext value={{ category }}>
          <SearchContext
            value={{ searchedNote: [], setSearch: searchMock, search: "" }}
          >
            <NoteList />
          </SearchContext>
        </CategoryContext>
      );
    }
  );
  // it("displays searched note", async () => {
  //   const mockItem = "write";

  //   render(
  //     <NotesContext value={{ noteList: mockList, dispatch: vi.fn() }}>
  //       <SearchProvider>
  //         <NoteList />
  //       </SearchProvider>
  //     </NotesContext>
  //   );

  //   const searchInput = page.getByTestId("searchInput");
  //   await userEvent.fill(searchInput, mockItem);

  //   // const noteList = page.getByTestId("listId");

  //   const noteItem = page.getByText("Write a test");

  //   // expect(noteList).toBeInTheDocument();

  //   // expect(noteItem).toBeInViewport();
  //   expect(noteItem).toBeVisible();
  // });
});
