#!/usr/bin/env node
const { spawnSync } = require('node:child_process');

const result = spawnSync('npx', ['style-dictionary', 'build', '--config', 'config/style-dictionary.config.js', '--verbose'], { encoding: 'utf8' });
if (result.error) {
  console.error('Failed to run style-dictionary', result.error);
  process.exit(1);
}
const out = (result.stdout || '') + (result.stderr || '');
const collisionMatch = out.match(/Token collisions detected \((\d+)\)/);
if (collisionMatch) {
  const count = parseInt(collisionMatch[1], 10);
  if (count > 0) {
    console.error(`✖ Token collision check failed: ${count} collisions detected.`);
    process.exit(1);
  }
}
console.log('✔ No token collisions');
