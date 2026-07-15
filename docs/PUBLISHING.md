# Publishing Strange Theme

The extension ID is permanently derived from `publisher.name`: `Oelyn.strange-theme`. Do not create a second publisher or rename the package after publication.

## One-time accounts

### VS Code Marketplace

1. Sign in at https://marketplace.visualstudio.com/manage.
2. Confirm that the publisher ID is exactly `Oelyn`. Create it only if it does not already exist.
3. In Azure DevOps, open https://dev.azure.com/, then **User settings > Personal access tokens**.
4. Create a token for **All accessible organizations** with **Marketplace > Manage** scope. Use the shortest practical expiration and record the expiry date.
5. In this GitHub repository, open **Settings > Secrets and variables > Actions** and create `VSCE_PAT`.

Microsoft's publishing documentation: https://code.visualstudio.com/api/working-with-extensions/publishing-extension

### Open VSX

1. Sign in at https://open-vsx.org/ using the account that will own the namespace.
2. Open the user settings token page and create an access token.
3. Confirm that the `Oelyn` namespace exists and is controlled by the same account. If it does not exist, run `pnpm exec ovsx create-namespace Oelyn -p <TOKEN>` once.
4. Add the token to GitHub Actions as `OPEN_VSX_TOKEN`.

Open VSX publishing documentation: https://github.com/eclipse/openvsx/wiki/Publishing-Extensions

Never commit either token or paste it into an Issue, PR, workflow file, screenshot, or chat.

## Before every release

1. Update `package.json`, `CHANGELOG.md`, and `release-notes.md` in a pull request.
2. Use a version greater than every version already published in both registries.
3. Merge only after the `Validate` workflow packages the VSIX successfully.
4. Install the CI artifact in a clean editor profile and inspect all `test-fixtures/` files.

## Release

1. Open the repository's **Actions** tab.
2. Select **Release**, choose **Run workflow**, and enter the exact version from `package.json`.
3. The workflow validates both secrets, builds one VSIX, publishes it to both registries, then creates the Git tag and GitHub Release.
4. If either registry rejects the package, fix the cause and rerun only after checking whether that version was partially published. Never overwrite or reuse a published version.

## Cursor, Trae, and other editors

- Cursor supports VSIX installation. Its public search catalog can change independently, so verify the listing in Cursor after the Open VSX publication rather than assuming automatic ingestion.
- VSCodium, Eclipse Theia, and many compatible products use Open VSX directly.
- Trae and other VS Code-compatible editors can install the VSIX. A separate catalog submission, if offered by the editor, is an additional distribution channel rather than a different build.

Useful pages:

- Cursor extensions documentation: https://docs.cursor.com/configuration/extensions
- Cursor marketplace: https://cursor.com/marketplace
- GitHub Releases: https://github.com/414564120/Strange-theme/releases
