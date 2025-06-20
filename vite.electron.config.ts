import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

/**
 * 主进程 Vite 构建配置
 * https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [
    tsconfigPaths(), // 支持tsconfig路径别名
  ],
  resolve: {
    extensions: ['.ts'],
  },
  build: {
    outDir: 'dist/electron',
    lib: {
      entry: 'src/electron/main.ts',
      fileName: 'main',
      formats: ['cjs'],
    },
    rollupOptions: {
      external: ['electron', 'path'],
    },
    minify: process.env.NODE_ENV !== 'development',
    emptyOutDir: true,
  },
});