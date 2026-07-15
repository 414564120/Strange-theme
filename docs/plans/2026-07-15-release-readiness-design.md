# Release Readiness Design

## Goal

Prepare Strange Theme for a reviewed `0.0.7` release to the VS Code Marketplace and Open VSX without changing its established visual identity.

## Scope

- Preserve the extension ID `Oelyn.strange-theme` and the single-theme architecture.
- Raise the three low-contrast syntax colors above a 4.5:1 contrast ratio on the editor background.
- Remove extension-wide configuration defaults; document guide settings as optional user preferences.
- Validate the manifest, theme files, color formats, icon, fixtures, and requested release version with deterministic code.
- Run validation and VSIX packaging on pull requests and `main`.
- Publish only from a manual workflow after both marketplace credentials and the committed version are validated.

## Release Flow

1. Review and merge a version bump through a pull request.
2. Run the `Release` workflow with the same version as `package.json`.
3. Validate secrets, version, tag availability, package metadata, and theme data.
4. Build one VSIX and publish it to both registries.
5. Create the Git tag and GitHub Release only after both registry publications succeed.

## Verification

- `pnpm validate`
- `pnpm package -- --out strange-theme-0.0.7.vsix`
- Inspect the VSIX file list and install it in a clean VS Code-compatible editor.
- Open every file in `test-fixtures/` with semantic highlighting enabled.
