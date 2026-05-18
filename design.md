# Trae Vue Dark — 主题设计文档

日期：2026-05-14

## 目标

基于现有 `dark_vs.json`（Dark Visual Studio）主题，创建一个专门为 Vue SFC 优化的暗色主题文件 `trae-vue-dark.json`。核心目标是让 Vue 单文件组件中的 `<script>`、`<template>`、`<style>` 三区块在视觉上明显区分，template 内的 Vue 逻辑（指令、动态绑定、事件、函数引用）与普通 HTML 静态内容形成高对比，script 内的函数/方法一目了然。

## 总体架构

```
trae-vue-dark.json
├── name: "Trae Vue Dark"
├── include: "./dark_vs.json"         ← 继承暗色 UI + 通用语言基础 token 色
├── colors: {}                        ← 微调 UI 色（按需）
├── tokenColors: [...]                ← TextMate 规则（语法骨架层）
├── semanticTokenColors: {...}        ← Semantic 规则（语义血肉层）
└── semanticHighlighting: true
```

着色优先级（低→高）：
1. `dark_vs.json` 打底 — 通用语言 TextMate 着色
2. 本主题 `tokenColors` — Vue 专用 scope 追加（标签标识、指令关键字、标点）
3. 本主题 `semanticTokenColors` — 语义层追加（函数粗体、变量着色、参数斜体）
4. 用户 `settings.json` 的 `textMateRules` — 最终覆盖层（保留已有规则）

## 三区标识色

| 区域 | 标识方式 | 颜色 |
|------|---------|------|
| `<template>` | 标签名 `entity.name.tag.template.html` | `#F2858C`（暖橙），粗体 |
| `<script>` | 标签名 `entity.name.tag.script.html` | `#FFD700`（亮金），粗体 |
| `<style>` | 标签名 `entity.name.tag.style.html` | `#21bd9e`（青绿），粗体 |

## Template 内分层色板

| 元素 | TextMate scope / Semantic type | 颜色 | 样式 |
|------|-------------------------------|------|------|
| 普通 HTML 标签 (`van-picker`) | `entity.name.tag.html` | `#569CD6` | 正常 |
| 普通静态属性 (`title`) | `entity.other.attribute-name.html` | `#9CDCFE` | 正常 |
| 静态属性值 (`"请选择目的地"`) | `string.quoted` | `#82D99F` | 正常 |
| `:` 动态绑定 (`:columns`) | `entity.other.attribute-name.bind.vue` | `#C792EA` | **粗体** |
| `@` 事件绑定 (`@confirm`) | `entity.other.attribute-name.event.vue` | `#FFD700` | **粗体** |
| `=` 等号 | `punctuation.separator.key-value` | `#D5D8E0` | 正常 |
| 引号 `""` | `string.quoted`（在指令 context） | `#0892dd` | **粗体** |
| 绑定值/函数引用 (`cityColumns`, `handleCityConfirm`) | semantic `function` / `variable` | `#FFB86C` | **粗体** |
| Vue 指令关键字 (`v-if`, `v-model`) | `keyword.control.directive.vue` | `#FF5577` | **粗体** |
| Mustache `{{ }}` | `punctuation.definition.interpolation` | `#0892dd` | **粗体** |
| Mustache 内表达式 | `expression.embedded.vue` | `#0da860` | **粗体** |

## Script 内语义分层

| 元素 | 语义类型 | 颜色 | 样式 |
|------|---------|------|------|
| 函数声明 / 方法名 | `function`, `method` | `#FFD700` | **粗体** |
| 变量 / ref / computed | `variable`, `variable.readonly` | `#82AAFF` | 正常 |
| 参数 | `parameter` | `#FFB86C` | *斜体* |
| 关键字 (`const`, `let`, `return`) | `keyword` | `#C792EA` | 正常（继承 dark_vs） |
| 字符串 | `string` | `#82D99F` | 正常 |
| 类 / 类型 | `class`, `type` | `#FFB86C` | **粗体**（class） |
| 属性 | `property`, `property.declaration` | `#82D99F` | 正常 |
| 注释 | `comment` | `#737780` | *斜体* |

## Style 区域

不做额外语义覆盖，保留 dark_vs 原生 CSS 着色。标签名青绿粗体已足够区分。

## TextMate tokenColors 详细规则

### A. 顶层标签
- `entity.name.tag.template.html` → `#F2858C` bold
- `entity.name.tag.script.html` → `#FFD700` bold
- `entity.name.tag.style.html` → `#21bd9e` bold

### B. HTML 骨架（保持 dark_vs 风格）
- `entity.name.tag.html` → `#569CD6`（普通标签名）
- `entity.other.attribute-name.html` → `#9CDCFE`（普通属性名）
- `punctuation.definition.tag` → `#D5D8E0`（尖括号）

### C. Vue 指令体系
- `keyword.control.directive.vue` → `#FF5577` bold
- `entity.other.attribute-name.bind.vue` → `#C792EA` bold
- `entity.other.attribute-name.event.vue` → `#FFD700` bold
- `punctuation.separator.key-value` → `#D5D8E0`
- `meta.attribute.*.vue string.quoted` → `#0892dd` bold（指令值引号）

### D. Mustache 插值
- `punctuation.definition.interpolation.begin.vue` / `.end.vue` → `#0892dd` bold
- `expression.embedded.vue` → `#0da860` bold

### E. 嵌入语言（不额外着色，交给 semantic 层）
- `meta.embedded.block.ts`, `meta.embedded.block.js`
- `meta.embedded.block.css`, `meta.embedded.block.scss`

## Semantic Token 详细规则

```json
"semanticTokenColors": {
  "function": { "foreground": "#FFD700", "bold": true },
  "method": { "foreground": "#FFD700", "bold": true },
  "variable": "#82AAFF",
  "variable.readonly": "#82AAFF",
  "parameter": { "foreground": "#FFB86C", "italic": true },
  "property": "#82D99F",
  "class": { "foreground": "#FFB86C", "bold": true },
  "type": "#FFB86C",
  "keyword": "#C792EA",
  "string": "#82D99F",
  "number": "#F48CCA",
  "comment": "#737780"
}
```

注意：function/method 使用 `{ "foreground": "...", "bold": true }` 对象格式确保粗体生效；parameter 同理使用 `italic: true`。不使用通配符 `*.declaration`，避免变量/属性声明处意外加粗。

## 产出文件

| 文件 | 路径 | 说明 |
|------|------|------|
| `trae-vue-dark.json` | `F:\trae-theme\trae-vue-dark.json` | 主主题文件 |

## 使用方式

1. 将 `trae-vue-dark.json` 放入 VS Code/Trae 可访问的路径
2. `Ctrl+Shift+P` → `Preferences: Color Theme` → 选择 `Trae Vue Dark`
3. 或在 `settings.json` 中设置 `"workbench.colorTheme": "Trae Vue Dark"`
