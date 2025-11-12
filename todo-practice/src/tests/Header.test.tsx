import { describe, it } from "vitest";
import { render } from "vitest-browser-react";
import Header from "../Components/Header/Header";

describe("Header", () => {
  it("Renders Header", () => {
    render(<Header />);
  });
});
