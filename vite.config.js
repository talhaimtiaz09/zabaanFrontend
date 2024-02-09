import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        secure: false,
      },
      "/youtube": {
        target: "https://www.youtube.com",
        changeOrigin: true,
        pathRewrite: {
          "^/youtube": "",
        },
      },
    },
  },
  plugins: [react()],
});
