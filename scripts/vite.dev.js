import { createServer, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-md";

const config = defineConfig({
  mode: "development",
  base: "/",
  publicDir: false,
  resolve: {
    extensions: [".js", ".vue", ".md"],
  },
  plugins: [vue({ include: [/\.vue$/, /\.md$/] }), Markdown()],
  build: {
    outDir: "public",
    rollupOptions: {
      input: "src/index.js",
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3001,
  },
});

const devServer = await createServer({ configFile: false, ...config });
await devServer.listen();

devServer.printUrls();
