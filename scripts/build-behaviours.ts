#!/usr/bin/env tsx
/**
 * Simple behaviour bundler prototype.
 * Copies behaviour TS files into dist/behaviours as ESM JS (tsc emits types already via build:types).
 * Later we can wire this into Vite for optimisation.
 */
import { build } from 'esbuild';
import { glob } from 'glob';
import path from 'path';

async function run() {
  // Only build .ts files, exclude .tsx (React components like BehavioursLoader)
  // React components are handled by the main TypeScript build
  const entries = await glob('src/behaviours/**/*.ts', {
    ignore: ['**/*.tsx', '**/*.test.ts', '**/*.test.tsx']
  });
  if (!entries.length) {
    console.log('No behaviour files found.');
    return;
  }
  await build({
    entryPoints: entries,
    outdir: 'dist/behaviours',
    format: 'esm',
    platform: 'browser',
    sourcemap: true,
    target: ['es2019'],
    treeShaking: true,
    logLevel: 'info'
  });
  //console.log('Behaviours built -> dist/behaviours');
}
run().catch(e => { console.error(e); process.exit(1); });
