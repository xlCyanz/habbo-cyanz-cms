import { resolve } from "path";
import { defineConfig } from "vitest/config";

const r = (p: string) => resolve(__dirname, p);

export default defineConfig({
  plugins: [],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
  },
  resolve: {
    alias: {
      "@core": r("src/core"),
      "@hooks": r("src/hooks"),
      "@utils": r("src/utils"),
      "@atoms": r("src/ui/atoms"),
      "@pages": r("src/ui/pages"),
      "@types": r("src/types"),
      "@contexts": r("src/contexts"),
      "@molecules": r("src/ui/molecules"),
      "@organisms": r("src/ui/organisms"),
      "@templates": r("src/ui/templates"),
      "@hocs": r("src/hoc's"),
    },
  },
});
