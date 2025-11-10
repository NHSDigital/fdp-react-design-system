/**
 * Lightweight initial SPC package validation script.
 * This will expand over time (bundle size, a11y smoke, export surface diff, etc.).
 */
import { existsSync, readFileSync, statSync } from 'fs';
import { globSync } from 'glob';
import { gzipSync } from 'node:zlib';
import { execSync } from 'node:child_process';

function section(title: string) {
  console.log(`\n=== ${title} ===`);
}

let failed = false;

function fail(msg: string) {
  failed = true;
  console.error(`❌ ${msg}`);
}
function pass(msg: string) {
  console.log(`✅ ${msg}`);
}

section('Presence checks');
['packages/nhs-fdp-spc/package.json', 'packages/nhs-fdp-spc/src/index.ts', 'packages/nhs-fdp-spc/README.md'].forEach(p => {
  existsSync(p) ? pass(`Found ${p}`) : fail(`Missing ${p}`);
});

section('Build SPC package');
try {
  execSync('npm run build:spc', { stdio: 'pipe' });
  pass('SPC package build succeeded');
} catch (e) {
  fail('SPC package build failed');
}

// Removed placeholder check once real exports are wired.
section('Export surface check (no breaking removals)');
try {
  execSync('npm run spc:exports:check', { stdio: 'pipe' });
  pass('Export surface check passed or snapshot not present');
} catch (e) {
  fail('Export surface check failed');
}

section('Test file presence');
try {
  const tests = globSync('packages/nhs-fdp-spc/tests/**/*.test.ts');
  if (tests.length === 0) fail('No test files detected in SPC package');
  else pass(`Detected ${tests.length} test file(s)`);
} catch (e) {
  fail(`Failed to glob tests: ${(e as Error).message}`);
}

section('Bundle size budget (gzipped)');
try {
  const esmPath = 'packages/nhs-fdp-spc/dist/index.esm.js';
  if (!existsSync(esmPath)) throw new Error('Missing dist/index.esm.js');
  const content = readFileSync(esmPath);
  const gz = gzipSync(content);
  const kb = Math.round((gz.length / 1024) * 100) / 100;
  const budgetKb = 150; // target threshold
  if (kb > budgetKb) fail(`Gzipped size ${kb}KB exceeds budget ${budgetKb}KB`);
  else pass(`Gzipped size ${kb}KB within budget (${budgetKb}KB)`);
} catch (e) {
  fail(`Bundle size check failed: ${(e as Error).message}`);
}

section('SSR test gate (SPC scope)');
section('CSS artifact check');
try {
  const cssPath = 'packages/nhs-fdp-spc/dist/spc.css';
  if (!existsSync(cssPath)) throw new Error('Missing spc.css');
  const size = statSync(cssPath).size;
  if (size < 200) fail(`spc.css too small (${size} bytes) – likely build issue`);
  else pass(`spc.css present (${size} bytes)`);
} catch (e) {
  fail(`CSS artifact check failed: ${(e as Error).message}`);
}
try {
  // Use existing SSR test script (fast ~5s) to ensure environment parity
  execSync('npm run test:ssr-components', { stdio: 'pipe' });
  pass('SSR tests passed');
} catch (e) {
  fail('SSR tests failed');
}

section('Result');
if (failed) {
  console.error('\nSPC validation FAILED');
  process.exit(1);
} else {
  console.log('\nSPC validation PASSED');
}
