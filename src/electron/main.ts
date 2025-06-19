import { app, BrowserWindow } from 'electron';
import { join } from 'path';
import { IS_DEVELOPMENT, DEV_SERVER_URL, IS_MAC_OS } from '@/shared/constants/env';

let mainWindow: BrowserWindow | null;

/**
 * 创建主窗口
 */
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    fullscreen: false,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      nodeIntegration: false, // 禁用 Node.js 集成
      contextIsolation: true, // 启用上下文隔离
    },
  });

  if (IS_DEVELOPMENT) {
    mainWindow.loadURL(DEV_SERVER_URL);
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'));
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => (!IS_MAC_OS && app.quit()));

app.on('activate', () => ((BrowserWindow.getAllWindows().length === 0) && createWindow()));
