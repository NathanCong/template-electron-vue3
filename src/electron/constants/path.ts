import { join } from 'path';

/**
 * 脚本 Preload.js 加载路径
 * 
 * preload.ts 构建路径：dist/preload.js
 *    main.ts 构建路径：dist/main.js
 */
export const PRELOAD_JS_LOAD_PATH = join(__dirname, './preload.js');

/**
 * 页面 Index.html 加载路径
 * 
 * index.html 构建路径：dist/renderer/index.html
 *    main.ts 构建路径：dist/main.js
 */
export const INDEX_HTML_LOAD_PATH = join(__dirname, './renderer/index.html');
