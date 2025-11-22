import { describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";

import NoteModal from "../Components/Modal/NoteModal";
import { page, userEvent } from "vitest/browser";

import { ModalContext } from "../Contexts/ModalContext";

import { ThemeContext } from "../Contexts/ThemeContext";

describe("NoteModal", () => {
  it.each(["light", "dark"])(
    "renders component with %s theme",
    async (theme) => {
      const mockProps = {
        theme: theme,
        toggleTheme: vi.fn(),
      };
      render(
        <ThemeContext value={mockProps}>
          <NoteModal />
        </ThemeContext>
      );
    }
  );

  it("handles cancel event", async () => {
    const onEvent = vi.fn((state: boolean) => !state);
    render(
      <ModalContext value={{ state: true, onPress: onEvent }}>
        <NoteModal />
      </ModalContext>
    );
    const modalElement = page.getByTestId("note-modal");
    const closeButton = page.getByText(/cancel/i);

    await expect.element(modalElement).toBeInTheDocument();

    await userEvent.click(closeButton);

    expect(onEvent).toHaveBeenCalled();
  });

  it("handles user submit", async () => {
    const mockValue = "Create a render";
    render(<NoteModal />);

    const userInput = page.getByPlaceholder("Input your note...");
    const sumbitButton = page.getByText(/apply/i);

    await userEvent.fill(userInput, mockValue);
    expect(userInput).toHaveValue(mockValue);

    await userEvent.click(sumbitButton);
  });

  it("displays error message on empty submit", async () => {
    render(<NoteModal />);
    const userInput = page.getByPlaceholder("Input your note...");
    const sumbitButton = page.getByText(/apply/i);
    const errorLabel = page.getByTestId("error-label");

    await expect.element(userInput).toHaveValue("");
    await userEvent.click(sumbitButton);

    expect(errorLabel).toBeVisible();
  });
});
