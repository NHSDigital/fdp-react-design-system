#!/usr/bin/env tsx
/**
 * Verifies (initial heuristic) that for each React component directory there exists
 * at least one matching Nunjucks macro file or a TODO entry. This will evolve to structural comparison.
 */
import { glob } from 'glob';
import fs from 'fs';
import path from 'path';

async function run() {
  const componentDirs = await glob('src/components/*/index.ts', { nocase: true });
  const macroFiles = new Set(await glob('src/macros/**/*.njk'));
  const missing: string[] = [];

  for (const compIndex of componentDirs) {
    const compName = path.basename(path.dirname(compIndex));
    const expectedMacro = `src/macros/${compName.toLowerCase()}.njk`;
    if (![...macroFiles].some(f => f.toLowerCase().includes(compName.toLowerCase()))) {
      missing.push(compName + ' -> expected e.g. ' + expectedMacro);
    }
  }

  if (missing.length) {
    console.error('Macro parity check failed. Missing macros for components:');
    missing.forEach(m => console.error(' -', m));
    process.exitCode = 1;
  } else {
    console.log('Macro parity check passed.');
  }
}

run().catch(e => { console.error(e); process.exit(1); });
