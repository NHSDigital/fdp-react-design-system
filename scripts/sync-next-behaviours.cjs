#!/usr/bin/env node
// Copies built behaviours bundle(s) into the Next.js example public folder so that
// runtime dynamic imports (and direct <script> tags if added) resolve without 404.
// Source: dist/behaviours/*.js -> examples/nextjs/public/dist/behaviours/
// Safe to run repeatedly; will create destination folders.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const srcDir = path.join(root, 'dist', 'behaviours');
const destDir = path.join(root, 'examples', 'nextjs', 'public', 'dist', 'behaviours');

if (!fs.existsSync(srcDir)) {
  console.error('[sync-next-behaviours] Source behaviours directory missing. Run build:behaviours first.');
  process.exit(1);
}
fs.mkdirSync(destDir, { recursive: true });

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.js'));
if (!files.length) {
  console.warn('[sync-next-behaviours] No JS files found to copy.');
  process.exit(0);
}
for (const f of files) {
  const src = path.join(srcDir, f);
  const dest = path.join(destDir, f);
  fs.copyFileSync(src, dest);
}
console.log(`[sync-next-behaviours] Copied ${files.length} behaviour file(s) to next public dist.`);
