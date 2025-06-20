import type { ForgeConfig } from '@electron-forge/shared-types';
import { MakerSquirrel } from '@electron-forge/maker-squirrel';
import { MakerZIP } from '@electron-forge/maker-zip';
import { MakerDeb } from '@electron-forge/maker-deb';
import { MakerRpm } from '@electron-forge/maker-rpm';
import { VitePlugin } from '@electron-forge/plugin-vite';
import { FusesPlugin } from '@electron-forge/plugin-fuses';
import { FuseV1Options, FuseVersion } from '@electron/fuses';

/**
 * Electron Forge 配置
 * https://www.electronforge.io/configuration
 */
export default {
  packagerConfig: {
    asar: true,
    name: 'tev3',
    icon: 'src/assets/icons/icon',
  },
  makers: [
    new MakerSquirrel({}),
    new MakerZIP({}, ['darwin']),
    new MakerDeb({}),
    new MakerRpm({}),
  ],
  plugins: [
    new VitePlugin({
      build: [
        {
          entry: 'src/electron/main.ts', // 主进程 entry 文件
          config: 'vite.main.config.ts', // 主进程 Vite 配置
          target: 'main',
        },
        {
          entry: 'src/electron/preload.ts', // 预加载脚本 entry 文件
          config: 'vite.preload.config.ts', // 预加载脚本 Vite 配置
          target: 'preload',
        },
      ],
      renderer: [
        {
          name: 'main_window',               // 窗口名称
          config: 'vite.renderer.config.ts', // 渲染进程 Vite 配置
        },
      ],
    }),
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,                            // 禁止以Node.js进程运行
      [FuseV1Options.EnableCookieEncryption]: true,                // 启用cookie加密
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false, // 禁用NODE_OPTIONS环境变量
      [FuseV1Options.EnableNodeCliInspectArguments]: false,        // 禁用调试参数(如--inspect)
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true, // 验证ASAR文件完整性
      [FuseV1Options.OnlyLoadAppFromAsar]: true,                   // 强制从ASAR文件加载应用
    }),
  ],
} satisfies ForgeConfig;