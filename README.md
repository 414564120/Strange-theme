# Trae Vue Dark

专为 Vue SFC 开发优化的 Trae 编辑器暗色主题。在保持 VS Dark 暗色舒适观感的同时，通过三区块分层着色和语义高亮，让 Vue 模板中的逻辑代码与普通 HTML 一眼可辨。

## 核心设计

三个顶层标签用不同颜色标识，打开 `.vue` 文件立刻知道光标在哪个区：

- `<template>` — `#F2858C` 暖橙粗体
- `<script>` — `#FFD700` 金色粗体
- `<style>` — `#21bd9e` 青绿粗体

### Template 内 Vue 逻辑高亮

| 元素 | 示例 | 效果 |
|------|------|------|
| Vue 指令 | `v-if`, `v-model` | `#FF5577` 品红粗体 |
| 动态绑定 | `:columns`, `:class` | `#C792EA` 紫色粗体 |
| 事件绑定 | `@click`, `@confirm` | `#FFD700` 金色粗体 |
| 指令值引号 | `"..."` | `#0892dd` 青蓝粗体 |
| Mustache 插值 | `{{ }}` | `#0892dd` 青蓝粗体 |
| 普通 HTML 标签 | `<div>`, `<span>` | `#569CD6` 蓝色 |
| 普通静态属性 | `title`, `class` | `#9CDCFE` 淡蓝 |
| 静态属性值 | `"hello"` | `#CE9178` 橙色 |

### Script 内语义高亮

| 类型 | 颜色 |
|------|------|
| 函数 / 方法 | `#FF9944` 亮橙粗体 |
| 变量 | `#82AAFF` 柔蓝 |
| 参数 | `#FFB86C` 暖橙斜体 |
| 属性 | `#82D99F` 绿色 |
| 类 | `#FFB86C` 暖橙粗体 |

## 配色

基于 VS Dark 暗色系：

- 背景：`#1A1B1D`
- 前景：`#D1D3DB`
- 光标：`#FFFFFF`
- 选中：`#3579FF47`
- 当前行：`#292c34`

## 安装

1. 打包：`pnpm dlx @vscode/vsce package`
2. 在 Trae 扩展面板中，点击 `...` → `Install from VSIX`，选择生成的 `.vsix`
3. `Ctrl+Shift+P` → `Preferences: Color Theme` → 选 `Trae Vue Dark`

## 文件结构

```
trae-vue-theme/
├── package.json
├── README.md
├── LICENSE
├── .gitignore
├── .vscodeignore
├── icons/
│   └── icon.png
└── themes/
    └── trae-vue-dark.json
```
