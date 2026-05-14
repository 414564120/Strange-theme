# Trae Vue Theme

专为 Vue 开发优化的 Trae 编辑器暗色主题扩展，包含两套主题。

## 两套主题

| 主题 | 说明 |
|------|------|
| **Trae Vue Pro Dark** | 深海暗蓝底（`#0B1220`），整体偏冷色调 |
| **Trae Vue Dark** | 继承 VS Dark 风格（`#1A1B1D`），三区块分层着色，语义高亮 |

## Trae Vue Dark 核心特性

三区块用不同颜色标识：
- `<template>` — `#F2858C` 暖橙粗体
- `<script>` — `#FFD700` 金色粗体
- `<style>` — `#21bd9e` 青绿粗体

Template 内 Vue 逻辑高亮：

| 元素 | 示例 | 颜色 |
|------|------|------|
| Vue 指令 | `v-if`, `v-model` | `#FF5577` 品红粗体 |
| 动态绑定 | `:columns` | `#C792EA` 紫色粗体 |
| 事件绑定 | `@confirm` | `#FFD700` 金色粗体 |
| 指令值引号 | `"..."` | `#0892dd` 青蓝粗体 |
| Mustache | `{{ }}` | `#0892dd` 青蓝粗体 |

Script 内语义高亮：

| 类型 | 颜色 |
|------|------|
| 函数 / 方法 | `#FF9944` 亮橙粗体 |
| 变量 | `#82AAFF` 柔蓝 |
| 参数 | `#FFB86C` 暖橙斜体 |
| 属性 | `#82D99F` 绿色 |
| 类 | `#FFB86C` 暖橙粗体 |

## 安装

1. 打包：`vsce package`
2. 安装生成的 `.vsix` 文件
3. `Ctrl+Shift+P` → `Preferences: Color Theme` → 选择 `Trae Vue Dark` 或 `Trae Vue Pro Dark`

## 文件结构

```
trae-theme/
├── package.json
├── README.md
├── .gitignore
├── .vscodeignore
└── themes/
    ├── trae-vue-pro-dark.json
    └── trae-vue-dark.json
```
