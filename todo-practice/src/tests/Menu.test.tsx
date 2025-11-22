import { describe, it, vi } from "vitest";
import { render } from "vitest-browser-react";

import Menu from "../Components/Menu";

import { ThemeContext } from "../Contexts/ThemeContext";
import { ModalContext } from "../Contexts/ModalContext";

describe("Body", () => {
  it.each(["light", "dark"])("renders component with %s theme", (theme) => {
    const mockProps = {
      theme: theme,
      toggleTheme: vi.fn(),
    };
    render(
      <ThemeContext value={mockProps}>
        <Menu />
      </ThemeContext>
    );
  });

  it.each([true, false])("renders component with ModalProvider", (state) => {
    const mockProps = {
      state: state,
      onPress: vi.fn(),
    };
    render(
      <ModalContext value={mockProps}>
        <Menu />
      </ModalContext>
    );
  });
});
