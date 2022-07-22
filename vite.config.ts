import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { join } from 'path';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Vue from '@vitejs/plugin-vue';

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
    AutoImport({
      resolvers: [
        IconsResolver({
          prefix: 'icon',
          alias: {
            fab: 'fa-brands',
            fas: 'fa-solid',
            far: 'fa-regular'
          }
        })
      ]
    }),
    Components({
      dts: true,
      resolvers: [
        IconsResolver({
          prefix: 'icon',
          alias: {
            fab: 'fa-brands',
            fas: 'fa-solid',
            far: 'fa-regular'
          },
          customCollections: ['agh']
        })
      ]
    }),
    Icons({
      compiler: 'vue3',
      autoInstall: true,
      customCollections: {
        agh: FileSystemIconLoader('./src/assets/images/icons')
      }
    }),
  ]
})
