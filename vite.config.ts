import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss()],
  // 👇 КРИТИЧЕСКИ ВАЖНО ДЛЯ GITHUB PAGES
  base: "./",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
    // 👇 Генерируем относительные пути
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        articles: resolve(__dirname, "articles.html"),
      },
      output: {
        assetFileNames: "assets/[name].[hash][extname]",
        chunkFileNames: "assets/[name].[hash].js",
        entryFileNames: "assets/[name].[hash].js",
      },
    },
  },
  // 👇 Для разработки
  server: {
    open: true,
    port: 3000,
  },
});
