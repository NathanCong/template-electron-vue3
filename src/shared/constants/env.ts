/**
 * 是否 development 环境
 */
export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
/**
 * 是否 MacOS 平台
 */
export const IS_MAC_OS = process.platform === 'darwin';

/**
 * 开发服务 URL
 */
export const DEV_SERVER_URL = process.env.VITE_DEV_SERVER_URL || '';
