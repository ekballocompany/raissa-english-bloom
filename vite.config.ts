import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: './', // <-- isso garante que os caminhos funcionem corretamente
  build: {
    outDir: 'dist', // <-- evita que ele crie subpastas como "arte-corte-identidade-76"
    emptyOutDir: true, // <-- limpa a pasta dist antes do build
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
