import { describe, it, vi } from "vitest";
import { render } from "vitest-browser-react";

import CreateModal from "../Components/Modal/CreateModal";

import { ThemeContext } from "../Contexts/ThemeContext";

describe("CreateModal", () => {
  it.each(["light", "dark"])("renders component with %s theme", (theme) => {
    const mockProps = {
      theme: theme,
      toggleTheme: vi.fn(),
    };

    render(
      <ThemeContext value={mockProps}>
        <CreateModal />
      </ThemeContext>
    );
  });
});
