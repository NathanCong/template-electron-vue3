import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import electron from 'vite-plugin-electron';
import electronRenderer from 'vite-plugin-electron-renderer';
import { resolve } from 'path';

function getAlias() {
  return {
    '@': resolve(__dirname, 'src'),
    '@electron': resolve(__dirname, 'src/electron'),
    '@renderer': resolve(__dirname, 'src/renderer'),
    '@shared': resolve(__dirname, 'src/shared'),
  };
}

/**
 * https://vite.dev/config/
 */
export default defineConfig({
  plugins: [
    vue(),
    electron({
      entry: 'src/electron/main.ts',
      vite: {
        resolve: {
          alias: getAlias(),
        },
      },
    }),
    electronRenderer(),
  ],
  resolve: {
    alias: getAlias(),
    extensions: ['.ts'],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "@/styles/variables.less";`,
      },
    },
  },
  server: {
    host: 'localhost',
    allowedHosts: [],
    port: 5173,
    strictPort: false,
    open: false,
  },
  build: {
    emptyOutDir: false,
  },
});