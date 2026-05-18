# Strange Theme

专为 Vue SFC 开发优化的暗色主题，支持 **Trae**、**VS Code** 和 **Cursor** 编辑器。在保持暗色舒适观感的同时，通过三区块分层着色和语义高亮，让 Vue 模板中的逻辑代码与普通 HTML 一眼可辨。

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
| 关键字 (`const` `let` `if` `return`) | `#C792EA` 紫色 |
| `this` / `super` | `#FF5577` 品红粗体 |
| `null` / `undefined` / `true` / `false` | `#FF9944` 亮橙 |
| 模板字符串 `${}` | `#82D99F` 绿色 |
| 装饰器 `@` | `#FFD700` 金色 |
| 正则表达式 | `#F48CCA` 粉色 |

### CSS / Style 区域配色

| 类型 | 示例 | 颜色 |
|------|------|------|
| 类选择器 | `.my-class` | `#FFB86C` 暖橙 |
| ID 选择器 | `#my-id` | `#FF9944` 亮橙 |
| 标签选择器 | `div`, `span` | `#569CD6` 蓝色 |
| 伪类 | `:hover` | `#C792EA` 紫色 |
| 伪元素 | `::before` | `#82AAFF` 柔蓝 |
| CSS 属性 | `color`, `display` | `#82D99F` 绿色 |
| CSS 值 | `flex`, `block` | `#DCDCAA` 暖黄 |
| 字符串值 | `"hello"` | `#CE9178` 橙色 |
| 数值 + 单位 | `10px`, `1.5rem` | `#F48CCA` 粉色 |
| CSS 变量 | `--my-var` | `#FF5577` 品红 |
| CSS 函数 | `rgb()`, `var()` | `#FFD700` 金色 |
| `!important` | `!important` | `#FF5577` 品红粗体 |
| 嵌套 `&` | `&` (SCSS/Less) | `#FF9944` 亮橙粗体 |

### JSON 配色

| 类型 | 颜色 |
|------|------|
| Key 键名 | `#82AAFF` 柔蓝 |
| String 字符串值 | `#CE9178` 橙色 |

## 配色

基于 VS Dark 暗色系，覆盖 **59 条 TextMate 规则 + 32 条语义规则**：

- 背景：`#1A1B1D`
- 前景：`#D1D3DB`
- 光标：`#FFFFFF`
- 选中：`#3579FF47`
- 当前行：`#292c34`

## 安装

### Trae / VS Code / Cursor

1. 打包：`pnpm dlx @vscode/vsce package`
2. 在扩展面板中，点击 `...` → `Install from VSIX`，选择生成的 `.vsix`
3. 或在 Cursor 中：`Ctrl+Shift+P` → `Extensions: Install from VSIX`
4. `Ctrl+Shift+P` → `Preferences: Color Theme` → 选 `Strange Theme`

## 文件结构

```
strange-theme/
├── package.json
├── README.md
├── LICENSE
├── .gitignore
├── .vscodeignore
├── icons/
│   └── icon.png
└── themes/
    └── strange-theme.json
```
