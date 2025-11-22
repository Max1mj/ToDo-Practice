import { describe, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import FallbackList from "../Components/Body/FallbackList";

import { ThemeContext } from "../Contexts/ThemeContext";

describe("FallbackList", () => {
  it.each(["light", "dark"])(
    "renders FallbackListComponent with %s theme",
    (theme) => {
      const mockProps = {
        theme: theme,
        toggleTheme: vi.fn(),
      };
      render(
        <ThemeContext value={mockProps}>
          <FallbackList />
        </ThemeContext>
      );
    }
  );
});
