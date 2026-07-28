import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from https://ossrezz.github.io/portfolio/ — every asset needs the sub-path prefix.
export default defineConfig({
  base: "/portfolio/",
  plugins: [react()],
  build: { outDir: "dist", sourcemap: false },
});
