# Release Readiness Design

## Goal

Prepare Strange Theme for a reviewed `0.0.7` release to the VS Code Marketplace and Open VSX without changing its established visual identity.

## Scope

- Preserve the extension ID `Oelyn.strange-theme` and the single-theme architecture.
- Raise the three low-contrast syntax colors above a 4.5:1 contrast ratio on the editor background.
- Remove extension-wide configuration defaults; document guide settings as optional user preferences.
- Validate the manifest, theme files, color formats, icon, fixtures, and requested release version with deterministic code.
- Run validation and VSIX packaging on pull requests and `main`.
- Publish to Open VSX only from a manual workflow after the VS Code Marketplace upload and committed version are validated.

## Release Flow

1. Review and merge a version bump through a pull request.
2. Run the `Release` workflow with the same version as `package.json`.
3. Manually upload the reviewed VSIX to the VS Code Marketplace and wait for it to become public.
4. Validate the Open VSX secret, version, tag availability, package metadata, and theme data.
5. Build and publish the Open VSX package.
6. Create the Git tag and GitHub Release after Open VSX publication succeeds.

## Verification

- `pnpm validate`
- `pnpm package --out strange-theme-0.0.7.vsix`
- Inspect the VSIX file list and install it in a clean VS Code-compatible editor.
- Open every file in `test-fixtures/` with semantic highlighting enabled.
