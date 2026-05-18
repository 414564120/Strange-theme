# v0.1.0

## 新增
- 完成 Strange Theme 核心着色架构
- 三区块分层着色：`<template>` / `<script>` / `<style>` 标签使用不同颜色区分
- 14 条 TextMate `tokenColors` 规则覆盖 SFC 语法骨架
- 25 条 Semantic `tokenColors` 规则覆盖 TypeScript/JS 语义高亮
- Vue 指令（`v-if`、`v-model`、`v-for` 等）专用着色
- 动态绑定（`:prop`）和事件绑定（`@click`）差异化高亮
- Mustache 表达式（`{{ }}`）内部着色
- 自包含主题定义，无外部依赖

## 说明

这是 Strange Theme 的首个公开发布版本。主题专为 Vue SFC 开发优化，通过颜色分层让模板逻辑代码与普通 HTML 在视觉上强烈区分。

安装方式：
- Trae / VS Code / Cursor 扩展面板 → Install from VSIX → 选择 `.vsix` 包
- 或通过扩展市场搜索 "Strange Theme"
