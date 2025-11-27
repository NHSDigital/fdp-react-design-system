#!/usr/bin/env tsx
/**
 * Verifies that for each component we have a corresponding Nunjucks macro.
 * Prefers the aggregated schema manifest (dist/meta/components.json) if present,
 * otherwise falls back to globbing component index files under src/components.
 */
import { glob } from 'glob';
import fs from 'fs';
import path from 'path';

function toKebabCase(name: string): string {
  return name
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}

async function getComponentNames(): Promise<string[]> {
  // Try aggregated meta first
  try {
    const metaPath = path.resolve('dist/meta/components.json');
    const json = JSON.parse(await fs.promises.readFile(metaPath, 'utf-8'));
    if (json && json.components) return Object.keys(json.components);
  } catch {/* ignore, fall back */}

  // Fallback: derive from src/components/*/index.ts
  const componentDirs = await glob('src/components/*/index.ts', { nocase: true });
  return componentDirs.map((p) => path.basename(path.dirname(p)));
}

async function run() {
  const componentNames = await getComponentNames();
  const macroFiles = await glob('src/macros/**/*.njk');
  const macroBaseNames = new Set(macroFiles.map((f) => path.basename(f).toLowerCase()));
  const missing: string[] = [];

  for (const compName of componentNames) {
    const lower = compName.toLowerCase();
    const kebab = toKebabCase(compName);
    const candidates = new Set([
      `${lower}.njk`,
      `${kebab}.njk`,
    ]);
    const has = [...candidates].some((c) => macroBaseNames.has(c));
    if (!has) missing.push(`${compName} -> expected e.g. src/macros/${kebab}.njk`);
  }

  if (missing.length) {
    console.error('Macro parity check failed. Missing macros for components:');
    missing.forEach((m) => console.error(' -', m));
    process.exitCode = 1;
  } else {
    console.log('Macro parity check passed.');
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
