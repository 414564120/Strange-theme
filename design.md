# Strange Theme Design

Strange Theme is a self-contained dark color theme. It does not inherit another theme and has no runtime extension code.

## Visual hierarchy

1. Workbench colors establish a warm dark editor surface.
2. TextMate rules define the syntax structure for Vue, HTML, CSS/SCSS, JavaScript/TypeScript, JSON, and Markdown.
3. Semantic token rules distinguish functions, variables, parameters, properties, classes, and types when a language server provides semantic tokens.
4. User customizations remain the final override.

Vue SFC section labels use separate colors: template `#F2858C`, script `#FFD700`, and style `#21BD9E`. Template attributes separate static HTML (`#C896E0`) from directives (`#FF5577`), bindings (`#C792EA`), and events (`#FFD700`).

## Constraints

- Preserve `Oelyn.strange-theme`; changing the publisher or package name creates a different marketplace extension.
- Keep the theme declarative and free of runtime code.
- Confirm scopes with **Developer: Inspect Editor Tokens and Scopes** before adding rules.
- Maintain at least 4.5:1 contrast for normal syntax text against `#1A1B1D` where practical.
- Do not change editor preferences through `configurationDefaults`.

## Verification

Run `pnpm validate`, package the VSIX, inspect its file list, and review every file under `test-fixtures/` in a clean editor profile.
