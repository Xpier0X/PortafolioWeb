// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  site: "https://pieroleon.dev",
  trailingSlash: "never",
  vite: {
    plugins: [tailwindcss()],
  },
})
