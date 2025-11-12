import { describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import CreateButton from "../Components/Body/CreateButton";
import ModalProvider from "../Providers/ModalProvider";
import { page, userEvent } from "vitest/browser";

describe("CreateButton", () => {
  it.each(["light", "dark"])("renders CreateButton with %s theme", (theme) => {
    const onChange = vi.fn();

    render(
      <ModalProvider>
        <CreateButton onEvent={onChange} theme={theme} />
      </ModalProvider>
    );

    const createButton = page.getByRole("button");

    expect(createButton).toBeInTheDocument();
  });

  it.each(["light", "dark"])("reacts on interaction", async (theme) => {
    const onChange = vi.fn();

    render(
      <ModalProvider>
        <CreateButton onEvent={onChange} theme={theme} />
      </ModalProvider>
    );

    const createButton = page.getByRole("button");

    await userEvent.click(createButton);
    expect(onChange).toHaveBeenCalled();
  });
});
