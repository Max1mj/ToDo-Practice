import { describe, it } from "vitest";
import { render } from "vitest-browser-react";
import Body from "../Components/Body/Body";

describe("Body", () => {
  it("renders component", () => {
    render(<Body />);
  });
});
