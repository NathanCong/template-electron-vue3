# template-electron-vue3

基于 Electron + Vue3 + TypeScript + Less + Vite 技术栈的项目模板

## 系统环境

| Item     | Version          |
| -------- | ---------------- |
| OS       | Ubuntu 24.04 LTS |
| Node.js  | 22.16.0          |
| Wine64   | 10.0             |
| Mono     | 6.8.0.105        |

## 目录结构

```
template-electron-vue3
├── public
├── src
│   ├── main
│   ├── preload
│   ├── renderer
│   ├── types
│   ├── utils
│   ├── views
│   ├── App.vue
│   ├── main.ts
│   ├── preload.ts
│   ├── router.ts
│   ├── shims-vue.d.ts
│   └── vite-env.d.ts
├── .env
├── .env.development
├── .env.production
├── .eslintrc.cjs
├── .gitignore
├── .prettierrc
├── README.md
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock
```

## 项目开发

### 依赖安装

```bash
#
# 设置 Electron 镜像（仅 Linux 系统）
#
export ELECTRON_MIRROR="https://npmmirror.com/mirrors/electron/"
#
# 安装项目依赖
#
yarn install
```