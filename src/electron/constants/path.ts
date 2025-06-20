import { join } from 'path';

/**
 * 脚本 Preload 加载路径
 * 
 * 打包后 preload 的路径为：dist/preload/main.js
 * 打包后 electron 主进程的路径为：dist/electron/main.js
 */
export const PRELOAD_JS_LOAD_PATH = join(__dirname, '../preload/main.js');

/**
 * 页面 Index.html 加载路径
 * 
 * 打包后 index.html 的路径为：dist/renderer/index.html
 * 打包后 electron 主进程的路径为：dist/electron/main.js
 */
export const INDEX_HTML_LOAD_PATH = join(__dirname, '../renderer/index.html');
