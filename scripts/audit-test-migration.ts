#!/usr/bin/env tsx
/**
 * Audit test migration status for component test splitting.
 * Classifies each component directory under src/components:
 *  - fullyMigrated: has .client/.ssr/.hydration tests and no monolithic <Name>.test.tsx
 *  - partiallyMigrated: has at least one split test but missing others or still has monolithic
 *  - legacy: only has monolithic <Name>.test.tsx (or other ad-hoc tests) and no split pattern
 *  - skipped: directories not matching component test conventions or utility files
 */
import { readdirSync, statSync, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

interface ComponentStatus {
  name: string;
  hasClient: boolean;
  hasSSR: boolean;
  hasHydration: boolean;
  hasMonolithic: boolean;
  status: 'fullyMigrated' | 'partiallyMigrated' | 'legacy' | 'skipped';
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');
const componentsDir = path.join(root, 'src', 'components');

const entries = readdirSync(componentsDir).filter(f => !f.startsWith('_'));
const results: ComponentStatus[] = [];

for (const entry of entries) {
  const full = path.join(componentsDir, entry);
  if (!statSync(full).isDirectory()) continue;
  // Skip non-component dirs (heuristic: contains at least one .tsx file matching entry name or a *.test.tsx)
  const baseName = entry; // assume folder name is component base
  const monolithic = path.join(full, `${baseName}.test.tsx`);
  const client = path.join(full, `${baseName}.client.test.tsx`);
  const ssr = path.join(full, `${baseName}.ssr.test.tsx`);
  const hydration = path.join(full, `${baseName}.hydration.test.tsx`);

  // Treat renamed deprecated monolithic tests (*.test.deprecated) as absent
  const deprecatedMonolithic = path.join(full, `${baseName}.test.deprecated`);
  const hasMonolithic = existsSync(monolithic) && !existsSync(deprecatedMonolithic);
  const hasClient = existsSync(client);
  const hasSSR = existsSync(ssr);
  const hasHydration = existsSync(hydration);

  let status: ComponentStatus['status'];
  const anySplit = hasClient || hasSSR || hasHydration;
  if (hasClient && hasSSR && hasHydration && !hasMonolithic) status = 'fullyMigrated';
  else if (anySplit) status = 'partiallyMigrated';
  else if (hasMonolithic) status = 'legacy';
  else status = 'skipped';

  results.push({ name: baseName, hasClient, hasSSR, hasHydration, hasMonolithic, status });
}

const fully = results.filter(r => r.status === 'fullyMigrated');
const partial = results.filter(r => r.status === 'partiallyMigrated');
const legacy = results.filter(r => r.status === 'legacy');

const totalConsidered = results.filter(r => r.status !== 'skipped').length;
const pct = (n: number) => totalConsidered ? ((n / totalConsidered) * 100).toFixed(1) : '0.0';

const summary = {
  totals: {
    fullyMigrated: fully.length,
    partiallyMigrated: partial.length,
    legacy: legacy.length,
    considered: totalConsidered,
    fullyMigratedPct: pct(fully.length),
  },
  nextSuggested: legacy.slice(0, 10).map(l => l.name),
};

console.log(JSON.stringify(summary, null, 2));

// Optional verbose output
if (process.argv.includes('--verbose')) {
  const table = results.map(r => ({
    component: r.name,
    status: r.status,
    client: r.hasClient ? '✓' : '',
    ssr: r.hasSSR ? '✓' : '',
    hydration: r.hasHydration ? '✓' : '',
    mono: r.hasMonolithic ? '✓' : '',
  }));
  console.table(table);
}
