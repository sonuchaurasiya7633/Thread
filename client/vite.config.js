import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    SERVER_URL: JSON.stringify("http://localhost:5000"),
  },
});