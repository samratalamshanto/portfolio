import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For project-page repo "portfolio", base must be "/portfolio/".
// For a user-page repo "<username>.github.io", override with base "/".
// Override at build time:  VITE_BASE=/ npm run build
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE ?? "/portfolio/",
});
