import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJSX from '@vitejs/plugin-vue-jsx';
import vueMacros from 'vue-macros/vite';

// https://vite.dev/config/
export default defineConfig({
  experimental: {
    enableNativePlugin: true,
  },
  plugins: [
    vueMacros({
      betterDefine: false,
      plugins: {
        vue: vue(),
        vueJsx: vueJSX({
          optimize: true,
        }),
      },
    }),
  ],
});
