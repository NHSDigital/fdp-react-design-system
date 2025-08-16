#!/usr/bin/env node
const fs = require('fs');
const crypto = require('crypto');
const { execSync } = require('child_process');
const path = require('path');

const HASH_FILE = '.tokens.hash';
// Directories / files to hash – adjust if token sources live elsewhere
const TOKEN_SOURCES = [
  'tokens',
  'config/style-dictionary.config.js',
  'config/style-dictionary-basic.config.js',
  'config/style-dictionary-enhanced.config.js',
  'config/style-dictionary-semantic.config.js'
].filter(p => fs.existsSync(p));

function hashPaths(paths) {
  const h = crypto.createHash('sha256');
  for (const p of paths) {
    const stat = fs.statSync(p);
    if (stat.isDirectory()) {
      walk(p, h);
    } else {
      h.update(fs.readFileSync(p));
    }
  }
  return h.digest('hex');
}

function walk(dir, h) {
  const ents = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of ents) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full, h);
    else h.update(fs.readFileSync(full));
  }
}

function main() {
  const newHash = hashPaths(TOKEN_SOURCES);
  const oldHash = fs.existsSync(HASH_FILE) ? fs.readFileSync(HASH_FILE, 'utf8') : '';
  if (newHash === oldHash) {
    console.log('[tokens] Unchanged – skipping style-dictionary build');
    return;
  }
  console.log('[tokens] Changes detected – rebuilding');
  execSync('npx style-dictionary build --config config/style-dictionary.config.js', { stdio: 'inherit' });
  try { execSync('node scripts/add-use-directives.js', { stdio: 'inherit' }); } catch {}
  fs.writeFileSync(HASH_FILE, newHash);
}

main();
