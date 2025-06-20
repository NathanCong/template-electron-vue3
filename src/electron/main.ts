import { app, BrowserWindow } from 'electron';
import { PRELOAD_JS_LOAD_PATH, INDEX_HTML_LOAD_PATH } from '@/electron/constants/path';
import { IS_DEVELOPMENT } from '@/electron/constants/env';
import { DEV_SERVER_URL } from '@/electron/constants/server';
import { IS_MAC_OS } from '@/electron/constants/platform';

let mainWindow: BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    fullscreen: false,
    webPreferences: {
      preload: PRELOAD_JS_LOAD_PATH,
      nodeIntegration: false, // 禁用 Node.js 集成
      contextIsolation: true, // 启用上下文隔离
    },
  });

  if (IS_DEVELOPMENT) {
    mainWindow.loadURL(DEV_SERVER_URL);
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(INDEX_HTML_LOAD_PATH);
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => (!IS_MAC_OS && app.quit()));

app.on('activate', () => ((BrowserWindow.getAllWindows().length === 0) && createWindow()));
