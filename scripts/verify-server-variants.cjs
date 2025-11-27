#!/usr/bin/env node
/**
 * Verifies that *Server progressive enhancement variants do not call React hooks.
 * Strategy:
 *  - For each component directory, find any export like `export const <Name>Server` in *.tsx files.
 *  - Extract the substring of that file starting at the server variant export until the next `export {` re-export line or end of file.
 *  - Within that substring, forbid usage of disallowed hook identifiers followed by `(`: useState,useEffect,useLayoutEffect,useRef,useCallback,useMemo,useReducer.
 *  - We intentionally allow these names in the shared import line (the main Radios component still imports them).
 *  - If violations are found, print a concise report and exit with code 1.
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const componentsDir = path.join(root, 'src', 'components');
const disallowed = ['useState','useEffect','useLayoutEffect','useRef','useCallback','useMemo','useReducer'];

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const serverExportRegex = /export const (\w+Server)\s*:/g; // export const NameServer: ... OR
  const serverExportRegexNoType = /export const (\w+Server)\s*=\s*\(/g; // export const NameServer = (
  const matches = new Set();
  let m;
  while ((m = serverExportRegex.exec(content)) !== null) matches.add(m[1]);
  while ((m = serverExportRegexNoType.exec(content)) !== null) matches.add(m[1]);
  if (!matches.size) return [];

  const violations = [];
  for (const name of matches) {
    const startIdx = content.indexOf(`export const ${name}`);
    if (startIdx === -1) continue;
    // Slice until next top-level export of another symbol OR end.
    const rest = content.slice(startIdx);
    const nextExport = rest.indexOf('\nexport {');
    const segment = nextExport === -1 ? rest : rest.slice(0, nextExport);
    for (const hook of disallowed) {
      const hookRegex = new RegExp(`(^|[^A-Za-z0-9_])${hook}\\s*\\(`); // simple call pattern
      if (hookRegex.test(segment)) {
        violations.push({ file: path.relative(root, filePath), variant: name, hook });
      }
    }
  }
  return violations;
}

function main() {
  if (!fs.existsSync(componentsDir)) {
    console.error('[verify-server-variants] components directory missing');
    process.exit(1);
  }
  const componentDirs = fs.readdirSync(componentsDir)
    .filter(d => !d.startsWith('.') && fs.statSync(path.join(componentsDir, d)).isDirectory());
  let allViolations = [];
  for (const dir of componentDirs) {
    const dirPath = path.join(componentsDir, dir);
    const tsxFiles = fs.readdirSync(dirPath).filter(f => f.endsWith('.tsx'));
    for (const f of tsxFiles) {
      allViolations = allViolations.concat(scanFile(path.join(dirPath, f)));
    }
  }
  if (allViolations.length) {
    console.error(`\n[verify-server-variants] Found ${allViolations.length} hook usage violation(s) in server variants:`);
    for (const v of allViolations) {
      console.error(` - ${v.file} :: ${v.variant} uses disallowed hook '${v.hook}'`);
    }
    console.error('\nServer variants must remain hook-free.');
    process.exit(1);
  } else {
    console.log('[verify-server-variants] All server variants are hook-free.');
  }
}

main();
