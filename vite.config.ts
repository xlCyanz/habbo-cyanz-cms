import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      target: "es2020",
    },
  },
  esbuild: {
    jsxFactory: "jsx",
    jsxInject: `import { jsx } from 'theme-ui'`,
  },
  plugins: [react(), tsconfigPaths()],
});
