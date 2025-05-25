import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Harry-Potter/", // <-- TO JEST NAJWAŻNIEJSZE
  plugins: [react()],
});
