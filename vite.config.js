import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For user-page repo "<username>.github.io", base must be "/".
// For project-page repo "samrat-alam-portfolio", base must be "/samrat-alam-portfolio/".
// Override at build time:  VITE_BASE=/samrat-alam-portfolio/ npm run build
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE ?? "/",
});
