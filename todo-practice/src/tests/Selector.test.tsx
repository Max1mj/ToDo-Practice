import customRender from "../utils/test-utils";
import { describe, expect, it } from "vitest";
import { page, userEvent } from "vitest/browser";

import Selector from "../Components/Header/Selector";

describe("Selector", () => {
  it.each(["light", "dark"])("renders Selector with %s theme", (theme) => {
    customRender(<Selector theme={theme} />);
  });

  it.each(["light", "dark"])("reacts on user interaction", async (theme) => {
    customRender(<Selector theme={theme} />);

    const selectorButton = page.getByRole("button");
    const selectorMenu = page.getByTestId("selector-menu");

    await userEvent.click(selectorButton);
    expect(selectorMenu).toBeInTheDocument();
  });
  it.each(["light", "dark"])("displays default category", async (theme) => {
    customRender(<Selector theme={theme} />);

    const defaultValue = page.getByText("All");
    await expect.element(defaultValue).toBeInTheDocument();
  });

  it.each(["light", "dark"])("changes the category", async (theme) => {
    customRender(<Selector theme={theme} />);

    const selector = page.getByTestId("selector");
    const selectorMenu = page.getByTestId("selector-menu");
    const completedCategory = page.getByText(/^complete$/i);

    await userEvent.click(selector);

    await expect.element(selectorMenu).toBeVisible();

    await userEvent.click(completedCategory);
  });
});
