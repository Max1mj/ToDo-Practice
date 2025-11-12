import type { ReactElement } from "react";

import { render, type RenderOptions } from "vitest-browser-react";
import WrapperProvider from "./WrapperProvider";

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: WrapperProvider, ...options });

export default customRender;
