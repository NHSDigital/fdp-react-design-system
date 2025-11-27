#!/usr/bin/env node
// Verifies that exported JS entry points in package.json resolve to existing built files.
// Checks: main/module fields, exports object entries with import/require pointing to .js files.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const pkgPath = path.join(root, 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

// Early hint if user runs verification before types build
const distSrc = path.join(root, 'dist', 'src');
if (!fs.existsSync(distSrc)) {
  console.error('[verify-js-entries] dist/src not found – did you run the types build? (npm run build:types)');
}

const missing = [];

function checkFile(rel) {
  const cleaned = rel.replace(/^\.\//, '');
  const full = path.join(root, cleaned);
  if (!fs.existsSync(full)) missing.push(rel);
}

if (pkg.main) checkFile(pkg.main);
if (pkg.module) checkFile(pkg.module);
// Only check root types if dist/src exists (avoids failing earlier in custom sequences)
if (pkg.types && fs.existsSync(distSrc)) checkFile(pkg.types);

const EXPORT_IGNORE_SUFFIXES = ['.css'];
function isCssPath(p) { return EXPORT_IGNORE_SUFFIXES.some(s => p.endsWith(s)); }

const exportEntries = Object.entries(pkg.exports || {});
let enforcedCount = 0;
for (const [key, val] of exportEntries) {
  if (typeof val === 'string') {
    if (isCssPath(val)) continue; // ignore css passthrough entries
    // Simple string export (rare here) – enforce if .js
    if (val.endsWith('.js')) { checkFile(val); enforcedCount++; }
  } else if (val && typeof val === 'object') {
    const isComponent = key.startsWith('./components/');
    const isTopLevel = ['.', './core', './ssr', './nextjs', './pure'].includes(key);
    if (!isComponent && !isTopLevel) continue; // ignore other structured entries
    const paths = [val.import, val.require, val.default].filter(Boolean);
    for (const p of paths) {
      if (typeof p === 'string' && p.endsWith('.js') && !isCssPath(p)) { checkFile(p); enforcedCount++; }
    }
    if (val.types && typeof val.types === 'string' && fs.existsSync(distSrc)) { checkFile(val.types); enforcedCount++; }
  }
}

if (missing.length) {
  console.error(`[verify-js-entries] Missing ${missing.length} built file(s):`);
  missing.forEach(m => console.error('  -', m));
  process.exit(1);
}

if (!missing.length) {
  console.log(`[verify-js-entries] All referenced JS/type entry files exist (checked ${enforcedCount}).`);
}
