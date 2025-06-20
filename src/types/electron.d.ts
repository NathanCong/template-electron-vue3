/**
 * Renderer 向 Electron 发送的消息
 */
export interface IpcMessage {
  id: string;        // 消息 ID
  type: string;      // 消息类型
  payload: any;      // 携带参数
  timestamp: number; // 消息时间戳
}

/**
 * Electron 向 Renderer 回复的内容
 */
export interface IpcReply {
  id: string;        // 回复 ID（与请求 ID 对应）
  success: boolean;  // 是否处理成功
  error?: string;    // 错误消息（处理失败时返回）
  data: any;         // 回复数据（处理成功时返回）
  timestamp: number; // 回复时间戳
}
