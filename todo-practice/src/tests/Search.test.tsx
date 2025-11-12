import { describe, it, expect } from "vitest";
import { render } from "vitest-browser-react";
import { page, userEvent } from "vitest/browser";
import Search from "../Components/Header/Search";
import SearchProvider from "../Providers/SearchProvider";

describe("Search", () => {
  it.each(["light", "dark"])("renders Search with %s theme", (theme) => {
    render(
      <SearchProvider>
        <Search theme={theme} />;
      </SearchProvider>
    );

    const inputElement = page.getByPlaceholder("Search note...");

    expect(inputElement).toBeInTheDocument();
  });

  it.each(["light", "dark"])("reacts on user input", async (theme) => {
    render(
      <SearchProvider>
        <Search theme={theme} />;
      </SearchProvider>
    );
    const inputElement = page.getByPlaceholder("Search note...");
    await userEvent.fill(inputElement, "Check documentation");

    await expect.element(inputElement).toHaveValue("check documentation");
  });

  it.each(["light", "dark"])("reacts on user changes", async (theme) => {
    render(
      <SearchProvider>
        <Search theme={theme} />;
      </SearchProvider>
    );

    const inputElement = page.getByPlaceholder("Search note...");

    await userEvent.fill(inputElement, "Bake a texture");
    expect(inputElement).toHaveValue("bake a texture");

    await userEvent.clear(inputElement);
    expect(inputElement).toHaveValue("");
  });
});
