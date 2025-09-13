#!/usr/bin/env node
// Copies docs/static-html/*.html into examples/nextjs/public/static-html/
const fs = require('fs');
const path = require('path');

function copyFile(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

function main() {
  const repoRoot = process.cwd();
  const sourceDir = path.join(repoRoot, 'docs', 'static-html');
  const targetDir = path.join(repoRoot, 'examples', 'nextjs', 'public', 'static-html');
  if (!fs.existsSync(sourceDir)) {
    console.log('[sync-next-static-html] No docs/static-html directory found, skipping.');
    return;
  }
  const files = fs.readdirSync(sourceDir).filter((f) => f.endsWith('.html'));
  if (files.length === 0) {
    console.log('[sync-next-static-html] No .html files to copy.');
    return;
  }
  for (const file of files) {
    const src = path.join(sourceDir, file);
    const dest = path.join(targetDir, file);
    copyFile(src, dest);
    console.log(`[sync-next-static-html] Copied ${src} -> ${dest}`);
  }
}

main();
