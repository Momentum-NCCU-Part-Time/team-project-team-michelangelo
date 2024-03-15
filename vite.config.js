import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
  plugins: [vue()],
  build: {
    outDir: 'dist', // Specify output directory
  },
  base: '/', // Specify base URL if deploying to a subpath
});
