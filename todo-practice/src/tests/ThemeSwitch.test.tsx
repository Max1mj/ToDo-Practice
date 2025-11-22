import { describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import ThemeSwitch from "../Components/Header/ThemeSwitch";
import { page, userEvent } from "vitest/browser";

import { ThemeContext } from "../Contexts/ThemeContext";

import ThemeProvider from "../Providers/ThemeProvider";

describe("ThemeSwitch", () => {
  it.each(["light", "dark"])("renders ThemeSwitch with %s theme", (theme) => {
    const toggleTheme = vi.fn();
    render(
      <ThemeContext value={{ theme, toggleTheme }}>
        <ThemeSwitch />
      </ThemeContext>
    );
  });

  it.each(["light", "dark"])("react on toggle", async (theme) => {
    const toggleTheme = vi.fn();
    render(
      <ThemeContext value={{ theme, toggleTheme }}>
        <ThemeSwitch />
      </ThemeContext>
    );

    const switchElement = page.getByRole("button");

    await userEvent.click(switchElement);
    expect(toggleTheme).toHaveBeenCalled();

    await userEvent.click(switchElement);
    expect(toggleTheme).toHaveBeenCalled();
  });

  it("changes component with light theme state", async () => {
    render(
      <ThemeProvider>
        <ThemeSwitch />
      </ThemeProvider>
    );

    const switchElement = page.getByRole("button");
    const sunIcon = page.getByTestId("sun");
    const moonIcon = page.getByTestId("moon");

    await expect.element(moonIcon).toBeVisible();

    await userEvent.click(switchElement);

    await expect.element(sunIcon).toBeVisible();

    await userEvent.click(switchElement);

    await expect.element(moonIcon).toBeVisible();
  });
});
