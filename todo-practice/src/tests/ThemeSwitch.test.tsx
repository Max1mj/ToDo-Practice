import { describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import ThemeSwitch from "../Components/Header/ThemeSwitch";
import { page, userEvent } from "vitest/browser";

describe("ThemeSwitch", () => {
  it.each(["light", "dark"])("renders ThemeSwitch with %s theme", (theme) => {
    const toggleTheme = vi.fn(() => {});
    render(<ThemeSwitch theme={theme} toggleTheme={toggleTheme} />);
  });

  it.each(["light", "dark"])("react on toggle", async (theme) => {
    const toggleTheme = vi.fn(() => {});
    render(<ThemeSwitch theme={theme} toggleTheme={toggleTheme} />);

    const switchElement = page.getByRole("button");

    await userEvent.click(switchElement);
    expect(toggleTheme).toHaveBeenCalled();
  });
});
