import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 关键：禁用 Rolldown，改用 Esbuild
  experimental: {
    rolldown: false,
  },
});
