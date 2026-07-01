import { defineConfig } from "vite";

// Salón Mirador — static marketing site.
// Assets in /public are copied verbatim to /dist and served from the root.
export default defineConfig({
  root: ".",
  publicDir: "public",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    target: "es2018",
    cssMinify: true,
  },
  server: {
    port: 5173,
    open: false,
    host: true,
  },
  preview: {
    port: 4173,
  },
});
