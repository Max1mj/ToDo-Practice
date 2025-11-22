import { describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import NoteItem from "../Components/Body/NoteItem";
import { page, userEvent } from "vitest/browser";
import type { NoteItemType } from "../utils/Notes";
import { NotesContext } from "../Contexts/NotesContext";

import { ThemeContext } from "../Contexts/ThemeContext";

describe("NoteItem", () => {
  const mockProps: NoteItemType = {
    noteText: "Hello World!",
    id: 1,
    status: "Incomplete",
  };

  it("renders component", () => {
    render(<NoteItem {...mockProps} />);

    const noteItem = page.getByTestId("noteItemId");

    expect(noteItem).toBeInTheDocument();
  });

  it("handle checkbox change", async () => {
    render(<NoteItem {...mockProps} />);
    const checkbox = page.getByRole("checkbox");

    await userEvent.click(checkbox);

    await expect.element(checkbox).toBeChecked();

    await userEvent.click(checkbox);
    await expect.element(checkbox).not.toBeChecked();
  });

  it("displays input element on interaction", async () => {
    render(<NoteItem {...mockProps} />);

    const changeButton = page.getByTestId("change");
    const inputElement = page.getByTestId("editId");

    await userEvent.click(changeButton);

    await expect.element(inputElement).toBeVisible();
  });

  it("handles text changes", async () => {
    render(<NoteItem {...mockProps} />);

    const mockText = "Check docs";

    const changeButton = page.getByTestId("change");
    const inputElement = page.getByTestId("editId");
    const itemText = page.getByTestId("itemText");

    await userEvent.click(changeButton);

    await expect.element(inputElement).toBeVisible();

    await userEvent.fill(inputElement, mockText);
    await expect.element(inputElement).toHaveValue(mockText);

    await userEvent.click(changeButton);
    await expect.element(itemText).toHaveTextContent(mockText);
  });

  it("handles item delete", async () => {
    const onDelete = vi.fn();
    render(
      <NotesContext value={{ dispatch: onDelete }}>
        <NoteItem {...mockProps} />
      </NotesContext>
    );
    const deleteButton = page.getByTestId("delete");

    await userEvent.click(deleteButton);
    expect(onDelete).toHaveBeenCalled();
  });

  it.each(["light", "dark"])("renders Noteitem with %s thame", (theme) => {
    const mockTheme = {
      theme: theme,
      toggleTheme: vi.fn(),
    };
    render(
      <ThemeContext value={mockTheme}>
        <NoteItem {...mockProps} />
      </ThemeContext>
    );
  });

  it.each(["light", "dark"])(
    "keeps input element if typed nothing",
    async (theme) => {
      const mockTheme = {
        theme: theme,
        toggleTheme: vi.fn(),
      };
      render(
        <ThemeContext value={mockTheme}>
          <NoteItem {...mockProps} />
        </ThemeContext>
      );

      const changeButton = page.getByTestId("change");
      const inputElement = page.getByTestId("editId");

      await userEvent.click(changeButton);

      await expect.element(inputElement).toBeVisible();

      await userEvent.clear(inputElement);
      await expect.element(inputElement).toHaveValue("");

      await userEvent.click(changeButton);
      await expect.element(inputElement).toBeVisible();
    }
  );
});
