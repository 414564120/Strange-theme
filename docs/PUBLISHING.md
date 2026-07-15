# Strange Theme 发布指南

扩展标识由 `publisher.name` 永久决定，当前为 `Oelyn.strange-theme`。发布后不要修改发布者或扩展名称，否则会被市场识别为另一个扩展。

## 首次配置

### VS Code Marketplace

1. 登录 [Visual Studio Marketplace 管理页](https://marketplace.visualstudio.com/manage)。
2. 选择 ID 为 `Oelyn` 的现有发布者。
3. 选择“New extension > Visual Studio Code”。
4. 上传已验证的 `strange-theme-<版本>.vsix`。
5. 等待该版本公开后，再运行 GitHub 的 Release 工作流。

网页手动上传免费，不需要 Azure 订阅或 Marketplace PAT。详细规则见 [微软扩展发布文档](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)。

### Open VSX

1. 登录 [Open VSX](https://open-vsx.org/)。
2. 在用户设置中创建访问令牌。
3. 确认当前账号拥有 `Oelyn` 命名空间。
4. 将令牌保存为 GitHub Actions 仓库密钥 `OPEN_VSX_TOKEN`。

令牌不得提交到代码仓库，也不得粘贴到 Issue、PR、工作流文件、截图或聊天中。详细规则见 [Open VSX 发布文档](https://github.com/eclipse/openvsx/wiki/Publishing-Extensions)。

## 每次发布前

1. 按 `0.0.7 → 0.0.8` 的方式更新 `package.json` 和 `CHANGELOG.md`。
2. 确认新版本高于 VS Code Marketplace 和 Open VSX 已发布的所有版本。
3. 通过 PR 合并，并等待 Validate 工作流成功打包 VSIX。
4. 在干净的编辑器配置中安装 CI 产物，检查 `test-fixtures/` 中的示例文件。
5. 将同一个 VSIX 上传到 VS Code Marketplace，并等待版本公开。

## GitHub Release 与 Open VSX

1. 打开仓库的 Actions 页面。
2. 选择 Release 工作流，输入与 `package.json` 完全相同的版本。
3. 勾选“该版本已在 VS Code Marketplace 公开”。
4. 工作流会校验版本和令牌、构建 VSIX、发布到 Open VSX，然后创建 Git 标签和 GitHub Release。
5. 如果 Open VSX 拒绝发布，先确认该版本是否已部分发布，再决定修复方式；不得覆盖或重复使用已发布版本。

## Cursor、Trae 及其他编辑器

- Cursor 支持安装 VSIX，其公开搜索目录可能存在同步延迟。
- VSCodium、Eclipse Theia 等兼容编辑器通常直接使用 Open VSX。
- Trae 及其他 VS Code 兼容编辑器可通过 VSIX 安装；独立扩展仓库需要另行申请时，以该编辑器当前规则为准。

常用入口：

- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=Oelyn.strange-theme)
- [Open VSX](https://open-vsx.org/extension/Oelyn/strange-theme)
- [Cursor 扩展说明](https://docs.cursor.com/configuration/extensions)
- [GitHub Releases](https://github.com/414564120/Strange-theme/releases)
