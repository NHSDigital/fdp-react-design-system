#!/usr/bin/env node
// Ensures all declared CSS aliases map to existing provider CSS and that
// package.json exports for aliases point at the provider CSS file path.

const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const distComponents = path.join(root, 'dist', 'components');
const pkgPath = path.join(root, 'package.json');
const aliases = require('./css-aliases.cjs');

const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
const exportsMap = pkg.exports || {};

let failures = 0;

for (const [alias, provider] of Object.entries(aliases)) {
  const providerCssDir = path.join(distComponents, provider);
  if (!fs.existsSync(providerCssDir)) {
    console.error(`[verify-css-aliases] Provider directory missing for alias "${alias}": ${providerCssDir}`);
    failures++;
    continue;
  }
  const providerCssFiles = fs.readdirSync(providerCssDir).filter(f => f.endsWith('.css'));
  if (!providerCssFiles.length) {
    console.error(`[verify-css-aliases] No CSS assets found for provider "${provider}" (alias "${alias}").`);
    failures++;
  }
  const exportKey = `./components/${alias}/css`;
  const firstProviderCss = providerCssFiles.find(f => f === `${provider}.css`) || providerCssFiles[0];
  const expectedExportPath = `./dist/components/${provider}/${firstProviderCss}`;
  const actualExportPath = exportsMap[exportKey];
  if (!actualExportPath) {
    console.error(`[verify-css-aliases] Missing export for alias ${alias} -> expected key ${exportKey}`);
    failures++;
  } else if (actualExportPath !== expectedExportPath) {
    console.error(`[verify-css-aliases] Export path mismatch for alias ${alias}. Expected "${expectedExportPath}" but found "${actualExportPath}"`);
    failures++;
  }
  const aliasDir = path.join(distComponents, alias);
  if (fs.existsSync(aliasDir)) {
    const aliasCss = fs.readdirSync(aliasDir).filter(f => f.endsWith('.css'));
    if (aliasCss.length) {
      console.error(`[verify-css-aliases] Alias directory produces CSS for ${alias} (${aliasCss.join(', ')}). Remove stub styles.`);
      failures++;
    }
  }
}

if (failures) {
  console.error(`[verify-css-aliases] FAILED with ${failures} issue(s).`);
  process.exit(1);
}

console.log('[verify-css-aliases] All CSS aliases validated.');
