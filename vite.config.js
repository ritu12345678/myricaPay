import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
 optimizeDeps: {
    include: [
      "@mui/material",
      "@mui/icons-material",
      "primereact",
      "recharts",
      
    ],
    exclude: ["chart.js", "quill"]  // 🚫 skip these optional deps
  },
})
