import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

/**
 * 主进程 Vite 构建配置
 * https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [
    tsconfigPaths(),
  ],
  resolve: {
    extensions: ['.ts'],
  },
  build: {
    outDir: '.vite/build',
    minify: process.env.NODE_ENV !== 'development',
    emptyOutDir: false,
  },
});