import { describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import NoteItem, { type NoteItemProps } from "../Components/Body/NoteItem";
import { page, userEvent } from "vitest/browser";

describe("NoteItem", () => {
  const mockProps: NoteItemProps = {
    noteText: "Hello World!",
    id: 1,
    status: "Incomplete",
    onRemove: vi.fn(() => {}),
  };

  // function noteItemRenderer(props: NoteItemProps) {
  //   const component = render(<NoteItem {...props} />);
  //   const noteItem = page.getByTestId("noteItemId");
  //   return { ...component, noteItem };
  // }

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
});
