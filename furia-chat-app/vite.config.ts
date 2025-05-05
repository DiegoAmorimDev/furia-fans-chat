import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    allowedHosts: [
      '24f1-2804-d4b-b42d-8d00-2425-d47e-e05c-6645.ngrok-free.app', // Adicione o domínio do seu ngrok aqui
      'localhost'
    ]
  },
})
