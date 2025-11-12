import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config.ts";
import { playwright } from "@vitest/browser-playwright";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        include: ["src/**/*.{ts,tsx}"],
        provider: "istanbul",
      },
      browser: {
        provider: playwright(),
        enabled: true,
        instances: [{ browser: "firefox" }],
      },
    },
  })
);
