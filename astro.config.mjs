// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      devSourcemap: true, // ✅ Enables CSS/SCSS source maps for better debugging
    },
  },
  site: "https://prairiehavenhomes.ca/",
  integrations: [react(), sitemap()],
  image: {
    domains: ["prairiehaven.swbdatabases.ca/"],
    remotePatterns: [{ protocol: "https" }],
  },
});
