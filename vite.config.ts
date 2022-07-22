import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { join } from 'path';
import Vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': `${join(__dirname, 'src')}`
    }
  },
  plugins: [
    Vue({
      reactivityTransform: true
    }),
    splitVendorChunkPlugin(),
  ]
})
