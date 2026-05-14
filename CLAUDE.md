# Trae Vue Dark — 项目核心规范

## 项目概述

Trae Vue Dark 是一个 VS Code 暗色主题扩展，专为 Vue SFC 开发优化。通过三区块分层着色和语义高亮，让 Vue 模板中的逻辑代码与普通 HTML 在视觉上强烈区分。

## 文件结构

```
F:\trae-theme/
├── package.json                  # 扩展清单
├── README.md                     # 说明文档
├── LICENSE                       # 许可证
├── CLAUDE.md                     # 本文件 — 项目规范
├── .gitignore                    # Git 排除规则
├── .vscodeignore                 # vsce 打包排除规则
├── icons/
│   └── icon.png                  # 128×128 扩展图标
└── themes/
    └── trae-vue-dark.json        # 主题定义（自包含，无 include）
```

## 构建与发布

```powershell
# 打包 vsix
pnpm dlx @vscode/vsce package

# 安装
# Trae 扩展面板 → ... → Install from VSIX → 选择 .vsix 文件
```

打包时会读取 `.vscodeignore` 排除不必要的文件。包内只含 `package.json`、`themes/`、`icons/`、`README.md`、`LICENSE`。

## Git 工作流

### 提交规范

使用英文短句，关键词开头：

| 前缀 | 场景 | 示例 |
|------|------|------|
| `feat:` | 新功能/特性 | `feat: add extension icon` |
| `fix:` | 修 bug | `fix: fix function color conflict with script tag` |
| `refactor:` | 重构 | `refactor: remove Pro theme, update to single-theme project` |
| `chore:` | 杂项（配置、工具链） | `chore: add .gitignore and .vscodeignore` |

### 标准流程

```powershell
git add -A
git status           # 确认变更无误
git commit -m "类型: 描述"
git push origin main
```

所有文件变更后都执行此流程（包括主题文件修改、README 更新、图片添加等）。

## 主题架构

### 分层设计

主题着色优先顺序（低→高）：
1. VS Code 内置默认着色
2. `tokenColors`（TextMate 正则匹配 — 语法骨架层）
3. `semanticTokenColors`（Volar 语言服务器 — 语义血肉层）
4. 用户 `settings.json` 的 `textMateRules`（最终覆盖层）

### TextMate tokenColors（14 条规则）

| 规则 | 负责内容 | 颜色 |
|------|---------|------|
| SFC 标签 | `<template>` `<script>` `<style>` 标签名 | template `#F2858C` / script `#FFD700` / style `#21bd9e`，均粗体 |
| 指令关键字 | `v-if` `v-model` `v-for` 等 | `#FF5577` 粗体 |
| 动态绑定 | `:prop` `:class` `:columns` | `#C792EA` 粗体 |
| 事件绑定 | `@click` `@confirm` `@cancel` | `#FFD700` 粗体 |
| 指令值引号 | 绑定/事件/指令的 `""` | `#0892dd` 粗体 |
| Mustache 括号 | `{{ }}` | `#0892dd` 粗体 |
| Mustache 表达式 | `{{ expr }}` 内部 | `#0da860` 粗体 |
| HTML 标签 | `<div>` `<span>` 普通标签 | `#569CD6` |
| HTML 属性 | 普通静态属性名 | `#9CDCFE` |
| 静态属性值 | `title="xxx"` 字符串值 | `#CE9178` |
| 绑定/事件值 | TextMate fallback | `#DCDCAA` |
| 内嵌 CSS | `<style>` 块内 CSS | `#B5CEA8` |
| 等号分隔符 | `=` 号 | `#D5D8E0` |

### Semantic tokenColors（25 条规则）

| 语义类型 | 颜色 | 样式 | 说明 |
|---------|------|------|------|
| `function`, `method` | `#FF9944` | **粗体** | 函数/方法声明与引用 |
| `variable` | `#82AAFF` | 正常 | 变量（含 readonly、local） |
| `parameter` | `#FFB86C` | *斜体* | 函数参数 |
| `property` | `#82D99F` | 正常 | 对象属性 |
| `class` | `#FFB86C` | **粗体** | 类 |
| `type`, `interface` | `#FFB86C` | 正常 | TypeScript 类型 |
| `keyword` | `#C792EA` | 正常 | 关键字 |
| `string` | `#82D99F` | 正常 | 字符串 |
| `number` | `#F48CCA` | 正常 | 数字 |
| `comment` | `#737780` | 正常 | 注释 |

### 核心设计原则

1. **三区标识**：三个顶层标签用不同颜色区分，打开文件立刻知道光标在哪个区域
2. **Template 逻辑 vs 静态**：Vue 指令/绑定的颜色与普通 HTML 属性产生强烈反差
3. **函数高亮**：script 内函数用亮橙粗体区别于 script 标签的金色，便于快速扫描
4. **指令层级分明**：指令关键字 → 绑定/事件名 → 引号 → 内部表达式，层层颜色递进
5. **自包含主题**：不依赖 `include`，所有颜色和规则直接定义在单个 JSON 文件中

## 开发约定

- 修改主题文件后必须更新 README.md（文件结构、颜色表）
- 不要往主题里添加主题无关的逻辑
- 颜色选择优先保证高对比度和可读性
- 新增 scope 规则前，先用 `Developer: Inspect Editor Tokens and Scopes` 确认实际 scope
