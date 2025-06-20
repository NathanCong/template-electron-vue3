import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tsconfigPaths from 'vite-tsconfig-paths';

/**
 * 渲染进程 Vite 构建配置
 * https://vitejs.dev/config/
 */
export default defineConfig({
  root: 'src/renderer',
  base: './',
  plugins: [
    vue(),
    tsconfigPaths(),
  ],
  resolve: {
    extensions: ['.ts'],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "@/renderer/styles/variables.less";`,
      },
    },
  },
  server: {
    host: 'localhost',
    allowedHosts: [],
    port: 3000,
    strictPort: false,
    open: false,
  },
  build: {
    outDir: '../../dist/renderer',
    minify: process.env.NODE_ENV !== 'development',
    emptyOutDir: true,
  },
});