import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { "@": root } },
  build: {
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL("./index.html", import.meta.url)),
        journey: fileURLToPath(new URL("./journey/index.html", import.meta.url)),
        archive: fileURLToPath(new URL("./archive/index.html", import.meta.url)),
      },
    },
  },
});
