/**
 * Codemod (initial scaffold): scans for SPC imports from legacy path and proposes replacements.
 * Usage: tsx scripts/codemod-spc-imports.ts [--write]
 */
import { readFileSync, writeFileSync } from 'fs';
import { globSync } from 'glob';

const WRITE = process.argv.includes('--write');
const LEGACY_PATTERN = /from ['"]@nhs-fdp\/design-system['"];?|from ['"]@nhs-fdp\/design-system\/components\/DataVisualisation\/charts\/SPC[^'"]*['"]/g;

interface Change { file: string; before: number; after: number; }
const changes: Change[] = [];

const files: string[] = globSync(['src/**/*.{ts,tsx}', '!src/**/dist/**']);

files.forEach((file: string) => {
  const original = readFileSync(file, 'utf-8');
  if (!LEGACY_PATTERN.test(original)) return; // no legacy import
  const updated = original.replace(/@nhs-fdp\/design-system\/components\/DataVisualisation\/charts\/SPC[^'";]*/g, '@nhs-fdp/spc')
                          .replace(/@nhs-fdp\/design-system(?=['";])/g, '@nhs-fdp/spc');
  if (original !== updated) {
    if (WRITE) writeFileSync(file, updated, 'utf-8');
    changes.push({ file, before: original.length, after: updated.length });
  }
});

if (changes.length === 0) {
  console.log('No SPC legacy imports found.');
} else {
  console.log(`${WRITE ? 'Updated' : 'Would update'} ${changes.length} file(s):`);
  changes.slice(0, 20).forEach(c => console.log(' -', c.file));
  if (changes.length > 20) console.log(`...and ${changes.length - 20} more`);
  if (!WRITE) console.log('Re-run with --write to apply changes.');
}
