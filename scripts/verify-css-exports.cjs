#!/usr/bin/env node
// Verifies that every dist/components/**/**.css file has a matching package.json export key.
const fs = require('fs');
const path = require('path');

const pkgPath = path.join(__dirname, '..', 'package.json');
const distComponents = path.join(__dirname, '..', 'dist', 'components');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
const exportsMap = pkg.exports || {};

function walk(dir, base = '') {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).flatMap(entry => {
    const full = path.join(dir, entry);
    const rel = base ? path.join(base, entry) : entry;
    const stat = fs.statSync(full);
    if (stat.isDirectory()) return walk(full, rel);
    return [rel];
  });
}

const cssFiles = walk(distComponents).filter(f => f.endsWith('.css'));
const missing = [];

for (const cssFile of cssFiles) {
  const parts = cssFile.split(path.sep);
  const cssFileName = parts[parts.length - 1];
  const componentName = cssFileName.replace(/\.css$/, '');
  let exportKey;
  if (parts.length === 2) {
    // e.g. Button/Button.css
    const folder = parts[0];
    if (componentName === folder) exportKey = `./components/${folder}/css`;
    else exportKey = `./components/${folder}/${componentName}/css`;
  } else {
    // nested (e.g. SortableDataTable/AriaTabsDataGrid.css OR Header/HeaderStatic.css etc.)
    const folders = parts.slice(0, -1).join('/');
    exportKey = `./components/${folders}/${componentName}/css`;
  }
  if (!exportsMap[exportKey]) missing.push({ cssFile, exportKey });
}

if (missing.length) {
  console.error(`\n[verify-css-exports] Missing exports for ${missing.length} CSS file(s):`);
  missing.forEach(m => console.error(`  - ${m.cssFile} -> expected key ${m.exportKey}`));
  process.exit(1);
}

console.log(`[verify-css-exports] All ${cssFiles.length} component CSS files have export entries.`);
