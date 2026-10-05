import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss()],
  publicDir: false,
  define: { "process.env.NODE_ENV": JSON.stringify("production") },
  resolve: { alias: { "@": path.resolve("src") } },
  build: isSsrBuild
    ? {
        outDir: "dist",
        emptyOutDir: false,
        rollupOptions: { output: { entryFileNames: "portal-server.mjs" } },
      }
    : {
        outDir: "public/portal",
        emptyOutDir: true,
        lib: {
          entry: "src/portal-client.jsx",
          formats: ["es"],
          fileName: () => "app.js",
          cssFileName: "portal",
        },
        minify: true,
        cssCodeSplit: false,
      },
}));
