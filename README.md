# Strange Theme

A warm dark theme for Vue SFC, TypeScript, JavaScript, CSS, JSON, and Markdown. It is built for VS Code-compatible editors and makes Vue template logic easier to distinguish from static HTML.

Strange Theme 是一款面向 Vue 开发的暖色暗色主题，通过分区颜色、Vue 指令高亮和语义高亮提升单文件组件的可读性。

![Strange Theme syntax preview](media/preview.png)

## Highlights

- Distinct `<template>`, `<script>`, and `<style>` section colors.
- Separate colors for static attributes, Vue directives, bindings, events, and interpolations.
- Semantic highlighting for functions, variables, parameters, properties, classes, and types.
- Dedicated rules for CSS/SCSS, JSON, and Markdown.
- 59 workbench colors, 60 TextMate rules, and 32 semantic token rules.
- No runtime code, telemetry, network access, or background services.

## Compatibility

| Editor | Installation | Registry |
| --- | --- | --- |
| Visual Studio Code | Marketplace or VSIX | VS Code Marketplace |
| Cursor | Extension search or VSIX | Availability depends on Cursor's current catalog |
| VSCodium / Eclipse Theia | Registry or VSIX | Open VSX |
| Trae and other VS Code-compatible editors | VSIX | Check the editor's current extension catalog |

The extension identifier is `Oelyn.strange-theme`.

## Install

### From a registry

- VS Code Marketplace: search for `Strange Theme` by `Oelyn`.
- Open VSX: search for `Strange Theme` in an Open VSX-compatible editor.

### From a VSIX

1. Download the VSIX from [GitHub Releases](https://github.com/414564120/Strange-theme/releases).
2. Open the editor's Extensions view.
3. Choose **Install from VSIX...** and select the downloaded file.
4. Run **Preferences: Color Theme** and select **Strange Theme**.

## Optional editor guides

Strange Theme colors bracket and indentation guides but does not change user settings during installation. Enable the guides explicitly if desired:

```json
{
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": "active",
  "editor.guides.indentation": true,
  "editor.guides.highlightActiveBracketPair": true,
  "editor.guides.highlightActiveIndentation": true
}
```

## Vue palette

| Syntax | Color |
| --- | --- |
| `<template>` | `#F2858C` |
| `<script>` | `#FFD700` |
| `<style>` | `#21BD9E` |
| Vue directive | `#FF5577` |
| Dynamic binding | `#C792EA` |
| Event binding | `#FFD700` |
| Static HTML attribute | `#C896E0` |
| Function / method | `#FF9944` |
| Variable | `#82AAFF` |
| Property | `#82D99F` |

## Development

Requires Node.js 22 or later.

```powershell
pnpm install
pnpm validate
pnpm package --out strange-theme.vsix
```

Open the files under `test-fixtures/` to review Vue, TypeScript, SCSS, JSON, and Markdown highlighting. Use **Developer: Inspect Editor Tokens and Scopes** before changing a TextMate scope.

Release setup and account steps are documented in [docs/PUBLISHING.md](docs/PUBLISHING.md).

## Privacy

This is a declarative color theme. It executes no extension code and collects no data.

## License

[MIT](LICENSE)
