import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite';
import { join } from 'path';

// Plugins
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import { VitePluginFonts } from 'vite-plugin-fonts';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Markdown from 'vite-plugin-vue-markdown';
import Vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    resolve: {
      alias: {
        '@': `${join(__dirname, 'src')}`,
      },
    },
    plugins: [
      Vue({
        include: [/\.vue$/, /\.md$/],
        reactivityTransform: true,
      }),
      Markdown({
        markdownItOptions: {
          breaks: true,
          html: true,
          linkify: true,
          typographer: true,
        },
        markdownItSetup(md) {
          md.use(require('markdown-it-anchor'));
          md.use(require('markdown-it-attrs'));
        },
        wrapperClasses: 'article',
      }),
      splitVendorChunkPlugin(),
      AutoImport({
        resolvers: [
          IconsResolver({
            prefix: 'icon',
            alias: {
              fab: 'fa-brands',
              fas: 'fa-solid',
              far: 'fa-regular',
            },
          }),
        ],
      }),
      Components({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: 'icon',
            alias: {
              fab: 'fa-brands',
              fas: 'fa-solid',
              far: 'fa-regular',
            },
            customCollections: ['lkc'],
          }),
        ],
      }),
      Icons({
        compiler: 'vue3',
        autoInstall: true,
        customCollections: {
          lkc: FileSystemIconLoader('./src/assets/images/icons'),
        },
      }),
      VitePluginFonts({
        typekit: {
          id: loadEnv(mode, process.cwd(), '')?.VITE_TYPEKIT_ID,
        },
      }),
    ],
  });
