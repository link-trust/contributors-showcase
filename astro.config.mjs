import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "static",
  site: "https://link-trust.github.io",
  base: "/contributors-showcase",
  vite: {
    plugins: [tailwindcss()],
  },
});
