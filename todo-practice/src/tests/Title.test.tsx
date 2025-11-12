import Title from "../Components/Header/Title";
import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-react";
import { page } from "vitest/browser";

describe("Title", () => {
  it.each(["light", "dark"])("renders Title with %s theme", async (theme) => {
    render(<Title theme={theme} />);

    const titleElement = page.getByTestId("titleId");

    await expect.element(titleElement).toBeInTheDocument();
    await expect.element(titleElement).toHaveTextContent(/todo/i);
  });
});
