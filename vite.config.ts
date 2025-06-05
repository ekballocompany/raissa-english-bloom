import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/raissa-english-bloom/", // Caminho base para GitHub Pages

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(), // Ativa somente em modo dev
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    outDir: "dist",             // Diretório de saída
    emptyOutDir: true,          // Limpa a pasta dist antes do build
    sourcemap: false,
    assetsDir: "assets",        // Subpasta onde ficam CSS, imagens, etc

    rollupOptions: {
      input: path.resolve(__dirname, "index.html"), // Usa o index.html raiz
      output: {
        manualChunks: undefined, // Evita chunk splitting (bom para GH Pages)
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
  },
}));
