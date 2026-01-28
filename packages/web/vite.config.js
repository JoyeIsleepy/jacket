import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 关键：禁用 Rolldown，改用 Esbuild
  // experimental: {
  //   rolldown: false,
  // },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),  
    },
  },
});
