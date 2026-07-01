import { defineConfig } from "vite";

// Salón Mirador — static marketing site.
// Assets in /public are copied verbatim to /dist and served from the root.
// `base` controls the URL prefix for assets.
//   - Local dev / custom domain / user site  -> "/" (default)
//   - GitHub Pages project site               -> "/salon-mirador/"
// The deploy workflow sets VITE_BASE; locally it stays "/".
export default defineConfig({
  base: process.env.VITE_BASE || "/",
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
