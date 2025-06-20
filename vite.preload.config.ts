import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

/**
 * 预加载脚本 Vite 构建配置
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
    outDir: 'dist/preload',
    lib: {
      entry: 'src/preload/main.ts',
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