import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function fail(message) {
  console.error(`Validation failed: ${message}`);
  process.exit(1);
}

function readJson(path) {
  try {
    return JSON.parse(readFileSync(join(root, path), "utf8"));
  } catch (error) {
    fail(`${path} is not valid JSON: ${error.message}`);
  }
}

function assert(condition, message) {
  if (!condition) fail(message);
}

function isHexColor(value) {
  return typeof value === "string" && /^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(value);
}

function luminance(color) {
  const hex = color.slice(1, 7);
  const channels = [0, 2, 4].map((offset) => Number.parseInt(hex.slice(offset, offset + 2), 16) / 255);
  const linear = channels.map((channel) => channel <= 0.04045
    ? channel / 12.92
    : ((channel + 0.055) / 1.055) ** 2.4);
  return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
}

function contrast(foreground, background) {
  const lighter = Math.max(luminance(foreground), luminance(background));
  const darker = Math.min(luminance(foreground), luminance(background));
  return (lighter + 0.05) / (darker + 0.05);
}

const packageJson = readJson("package.json");
const requiredFields = ["name", "displayName", "description", "version", "publisher", "license", "icon"];

for (const field of requiredFields) {
  assert(packageJson[field], `package.json is missing ${field}`);
}

assert(/^\d+\.\d+\.\d+$/.test(packageJson.version), "package.json version must be semver");
assert(packageJson.publisher === "Oelyn", "publisher must remain Oelyn to preserve the extension ID");
assert(packageJson.name === "strange-theme", "name must remain strange-theme to preserve the extension ID");
assert(!packageJson.contributes?.configurationDefaults, "theme installation must not change user editor settings");

const expectedVersionIndex = process.argv.indexOf("--version");
if (expectedVersionIndex !== -1) {
  const expectedVersion = process.argv[expectedVersionIndex + 1];
  assert(expectedVersion, "--version requires a value");
  assert(packageJson.version === expectedVersion, `package version ${packageJson.version} does not match ${expectedVersion}`);
}

assert(existsSync(join(root, packageJson.icon)), `icon not found: ${packageJson.icon}`);
const icon = readFileSync(join(root, packageJson.icon));
assert(icon.length >= 24 && icon.toString("hex", 1, 4) === "504e47", "icon must be a PNG");
const width = icon.readUInt32BE(16);
const height = icon.readUInt32BE(20);
assert(width === 128 && height === 128, "marketplace icon must be exactly 128x128");

const themes = packageJson.contributes?.themes;
assert(Array.isArray(themes) && themes.length === 1, "exactly one theme contribution is required");

const themePath = themes[0].path.replace(/^\.\//, "");
assert(existsSync(join(root, themePath)), `theme not found: ${themePath}`);
const theme = readJson(themePath);

assert(theme.type === "dark", "theme type must be dark");
assert(theme.semanticHighlighting === true, "semantic highlighting must be enabled");
assert(Array.isArray(theme.tokenColors) && theme.tokenColors.length > 0, "tokenColors must not be empty");
assert(theme.semanticTokenColors && typeof theme.semanticTokenColors === "object", "semanticTokenColors must be defined");

for (const [key, value] of Object.entries(theme.colors ?? {})) {
  assert(isHexColor(value), `invalid workbench color ${key}: ${value}`);
}

const syntaxColors = new Set();

for (const rule of theme.tokenColors) {
  const color = rule.settings?.foreground;
  if (color !== undefined) {
    assert(isHexColor(color), `invalid token color in ${rule.name ?? "unnamed rule"}: ${color}`);
    syntaxColors.add(color.slice(0, 7));
  }
}

for (const [key, value] of Object.entries(theme.semanticTokenColors)) {
  const color = typeof value === "string" ? value : value.foreground;
  if (color !== undefined) {
    assert(isHexColor(color), `invalid semantic color ${key}: ${color}`);
    syntaxColors.add(color.slice(0, 7));
  }
}

const editorBackground = theme.colors["editor.background"].slice(0, 7);
let minimumContrast = Number.POSITIVE_INFINITY;
for (const color of syntaxColors) {
  const ratio = contrast(color, editorBackground);
  minimumContrast = Math.min(minimumContrast, ratio);
  assert(ratio >= 4.5, `${color} has only ${ratio.toFixed(2)}:1 contrast against ${editorBackground}`);
}

for (const fixture of ["showcase.vue", "showcase.ts", "showcase.scss", "showcase.json", "showcase.md"]) {
  assert(existsSync(join(root, "test-fixtures", fixture)), `missing test fixture: ${fixture}`);
}

console.log(`Validated ${packageJson.publisher}.${packageJson.name} v${packageJson.version}`);
console.log(`Theme: ${Object.keys(theme.colors).length} workbench colors, ${theme.tokenColors.length} TextMate rules, ${Object.keys(theme.semanticTokenColors).length} semantic rules`);
console.log(`Icon: ${width}x${height}`);
console.log(`Minimum syntax contrast: ${minimumContrast.toFixed(2)}:1`);
