#!/usr/bin/env node
// Auto-add per-component JS subpath exports to package.json based on built files in dist/src/components
// Pattern: "./components/ComponentName": { types, import, require }
// Also adds optional "./components/ComponentName/server" mapping when a server .d.ts is present.

const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const pkgPath = path.join(root, 'package.json');
const distComponents = path.join(root, 'dist', 'src', 'components');

function loadPkg() {
  return JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
}

function savePkg(pkg) {
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');
}

function getComponentDirs() {
  if (!fs.existsSync(distComponents)) return [];
  return fs.readdirSync(distComponents, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    // exclude internal and non-component buckets
    .filter(name => !name.startsWith('_'))
    .filter(name => name !== 'Foundations');
}

function ensureExport(pkg, key, mapping) {
  if (!pkg.exports) pkg.exports = {};
  const existing = pkg.exports[key];
  const same = existing && typeof existing === 'object'
    && existing.import === mapping.import
    && existing.require === mapping.require
    && existing.types === mapping.types;
  if (!same) {
    pkg.exports[key] = mapping;
    return true;
  }
  return false;
}

function run() {
  const pkg = loadPkg();
  const components = getComponentDirs();
  let added = 0;
  let updated = 0;

  for (const name of components) {
    const indexJs = `./dist/src/components/${name}/index.js`;
    const indexDts = `./dist/src/components/${name}/index.d.ts`;
    const indexJsFull = path.join(root, indexJs.replace(/^\.\//, ''));
    const indexDtsFull = path.join(root, indexDts.replace(/^\.\//, ''));
    if (!fs.existsSync(indexJsFull) || !fs.existsSync(indexDtsFull)) {
      continue;
    }

    const key = `./components/${name}`;
    const mapping = { types: indexDts, import: indexJs, require: indexJs };
    const existed = !!pkg.exports?.[key];
    if (ensureExport(pkg, key, mapping)) {
      if (existed) updated++; else added++;
    }

    // Optional server alias if any server .d.ts exists
    const hasServer = fs.readdirSync(path.dirname(indexDtsFull)).some(f => /\.server\.d\.ts$/.test(f));
    if (hasServer) {
      const serverKey = `./components/${name}/server`;
      const serverMapping = { types: indexDts, import: indexJs };
      const existedServer = !!pkg.exports?.[serverKey];
      if (ensureExport(pkg, serverKey, serverMapping)) {
        if (existedServer) updated++; else added++;
      }
    }
  }

  if (added || updated) {
    savePkg(pkg);
  }

  console.log(`[update-js-exports] ${added} added, ${updated} updated component JS export entries.`);
}

run();
