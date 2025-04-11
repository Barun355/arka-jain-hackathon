import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true, // listens on all addresses
    port: 5173,
  },
  preview: {
    host: true,
    port: 4173,
    allowedHosts: [
      "hindswood.com",
      "www.hindswood.com",
      // Add any other domains or subdomains you need
    ],
  },
});
