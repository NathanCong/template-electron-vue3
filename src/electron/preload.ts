import { contextBridge, ipcRenderer } from 'electron';
import type { IpcMessage, IpcReply } from '@/types/electron';

contextBridge.exposeInMainWorld('electronAPI', {
  // 发送消息
  sendMessage: (message: IpcMessage) => ipcRenderer.send('message', message),
  // 监听响应
  onReply: (callback: (reply: IpcReply) => void) => {
    ipcRenderer.on('reply', (_, reply) => callback(reply));
  },
});
