#!/usr/bin/env node
// Verifies parity between per‑component JS entry files (dist/src/components/*/index.js)
// and per‑component CSS outputs (dist/components/*/*.css directly under the component folder).
// Fails if counts differ or if any component is missing its counterpart.

const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const distSrcComponents = path.join(root, 'dist', 'src', 'components');
const distCssComponents = path.join(root, 'dist', 'components');

function getJsComponents() {
  if (!fs.existsSync(distSrcComponents)) return [];
  return fs.readdirSync(distSrcComponents)
    .filter(name => !name.startsWith('.') && fs.statSync(path.join(distSrcComponents, name)).isDirectory())
    .filter(name => fs.existsSync(path.join(distSrcComponents, name, 'index.js')));
}

function getCssComponents() {
  if (!fs.existsSync(distCssComponents)) return [];
  return fs.readdirSync(distCssComponents)
  // Skip hidden and internal folders (e.g. _internal) from parity checks
  .filter(name => !name.startsWith('.') && !name.startsWith('_') && fs.statSync(path.join(distCssComponents, name)).isDirectory())
    .filter(name => {
      const files = fs.readdirSync(path.join(distCssComponents, name));
      // Count component if it has at least one .css file directly under its directory
      return files.some(f => f.endsWith('.css'));
    });
}

const jsComponents = new Set(getJsComponents());
const cssComponents = new Set(getCssComponents());

// Some components intentionally re-use the CSS of another component (aliases).
// Example: The single Checkbox component's SCSS @use's the Checkboxes styles.
// The build currently only emits one physical CSS asset (Checkbox), so we treat
// Checkboxes as satisfied if Checkbox CSS exists. Extend this map if more
// alias relationships are introduced.
const cssAliasProviders = require('./css-aliases.cjs');

for (const [alias, provider] of Object.entries(cssAliasProviders)) {
  if (!cssComponents.has(alias) && cssComponents.has(provider)) {
    cssComponents.add(alias);
  }
}

const missingCssForJs = [...jsComponents].filter(c => !cssComponents.has(c));
const missingJsForCss = [...cssComponents].filter(c => !jsComponents.has(c));

if (jsComponents.size === 0 && cssComponents.size === 0) {
  console.warn('[verify-component-parity] No components detected; skipping.');
  process.exit(0);
}

const summary = `[verify-component-parity] JS components: ${jsComponents.size} | CSS components: ${cssComponents.size}`;

if (missingCssForJs.length || missingJsForCss.length || jsComponents.size !== cssComponents.size) {
  console.error(summary);
  if (missingCssForJs.length) {
    console.error(' Missing CSS for JS components:', missingCssForJs.join(', '));
  }
  if (missingJsForCss.length) {
    console.error(' Missing JS for CSS components:', missingJsForCss.join(', '));
  }
  if (!missingCssForJs.length && !missingJsForCss.length) {
    console.error(' Count mismatch but no direct missing sets (check filtering logic).');
  }
  process.exit(1);
}

console.log(summary + ' (parity OK)');
