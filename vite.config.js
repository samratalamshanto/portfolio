import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For user-page repo "<username>.github.io", base must be "/".
// For project-page repo "portfolio", base must be "/portfolio/".
// Override at build time:  VITE_BASE=/portfolio/ npm run build
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE ?? "/portfolio/",
});
