#!/usr/bin/env node
/**
 * Heuristic scanner for Sass "mixed declarations" deprecation patterns.
 * It flags when a plain property declaration appears after a nested rule (@media, &:hover, child selector)
 * within the same top-level selector block.
 */
const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '..', 'src', 'components');

function walk(dir, list = []) {
  if (!fs.existsSync(dir)) return list;
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full, list);
    else if (/\.scss$/i.test(entry)) list.push(full);
  }
  return list;
}

function isProperty(line) {
  // crude: starts with optional whitespace, then a CSS identifier, colon, not an @include or variable assignment
  return /^(\s*)([a-zA-Z-]+)\s*:\s*[^:]+;\s*$/.test(line) && !/^(\s*)(@|\$)/.test(line);
}
function isNestedStart(line) {
  // detect nested selector or media query
  const trimmed = line.trim();
  if (trimmed.startsWith('@media')) return true;
  if (trimmed.startsWith('&') && trimmed.endsWith('{')) return true;
  if (/^\.[A-Za-z0-9_-]+.*\{$/.test(trimmed) && !trimmed.startsWith('.:')) return true; // nested class
  if (trimmed.startsWith(':') && trimmed.endsWith('{')) return true; // pseudo
  return false;
}

const files = walk(SRC_DIR);
let issues = 0;
files.forEach(file => {
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
  const stack = [];
  let seenNestedInCurrent = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('{')) {
      stack.push({ seenNested: seenNestedInCurrent });
      // entering new block resets nested tracking for that block
      seenNestedInCurrent = false;
    }
    if (isNestedStart(line)) {
      seenNestedInCurrent = true;
    }
    if (isProperty(line) && seenNestedInCurrent) {
      // flag potential mixed declaration
      console.log(`Potential mixed declaration: ${file}:${i + 1}\n  ${line.trim()}`);
      issues++;
    }
    if (line.includes('}')) {
      // close block(s) for each }
      const closes = line.split('}').length - 1;
      for (let c = 0; c < closes; c++) {
        const prev = stack.pop();
        seenNestedInCurrent = stack.length ? stack[stack.length - 1].seenNested : false;
      }
    }
  }
});

if (!issues) console.log('No potential mixed declaration patterns detected (heuristic).');
else console.log(`\nTotal potential issues: ${issues}`);
