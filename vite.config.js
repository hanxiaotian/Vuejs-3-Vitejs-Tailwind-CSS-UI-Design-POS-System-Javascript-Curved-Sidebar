import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  server: {
    proxy: {
      '/api/inference': {
        target: 'http://localhost:5050',
        changeOrigin: true,
        secure: false,      
        ws: true,
      },
      '/api/setting': {
        target: 'http://localhost:5050',
        changeOrigin: true,
        secure: false,      
        ws: true,
      },
    }
  }
})
