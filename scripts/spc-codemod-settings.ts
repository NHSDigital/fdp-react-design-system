#!/usr/bin/env tsx
/**
 * SPC settings codemod (assistive):
 * - Scans for deprecated settings names and suggests grouped V2 replacements.
 * - Safely auto-rewrites dot-access reads:
 *     .emergingDirectionGrace  -> .grace?.emergingEnabled
 *     .collapseClusterRules    -> .rules?.collapseWeakerClusterRules
 * - Reports (does NOT edit) object literal keys and bracket-access patterns.
 * - Reports (does NOT edit) legacy trend gating fields (no-op now):
 *     trendSideGatingEnabled, trendFavourableSideOnly
 *
 * Usage:
 *   # scan only (default)
 *   npm run spc:codemod:scan
 *
 *   # apply safe dot-access edits
 *   npm run spc:codemod:apply
 *
 * Flags (optional):
 *   --apply   Apply safe edits (dot-access only). Without this flag, runs as dry-run.
 *   --help    Show this help and exit.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { globSync } from 'glob';
import path from 'node:path';

type Flags = { apply: boolean, help: boolean };
const flags: Flags = {
  apply: process.argv.includes('--apply'),
  help: process.argv.includes('--help') || process.argv.includes('-h'),
};

if (flags.help) {
  const usage = `\nSPC Settings Codemod\n\n` +
`Scans source files for deprecated SPC settings and helps migrate to grouped SpcSettingsV2.\n` +
`\nUsage:\n` +
`  tsx scripts/spc-codemod-settings.ts [--apply] [--help]\n` +
`\nWhen run via npm scripts:\n` +
`  npm run spc:codemod:scan   # dry-run (default)\n` +
`  npm run spc:codemod:apply  # apply safe dot-access edits\n` +
`\nNotes:\n` +
`- Only dot-access usages are auto-rewritten.\n` +
`- Object literal keys and bracket-access patterns are reported for manual edits.\n` +
`- Legacy trend gating flags are reported to remove (engine always side-gates).\n`;
  console.log(usage);
  process.exit(0);
}

const ROOT = process.cwd();
const patterns = [
  'src/**/*.{ts,tsx,js,jsx,mdx}',
  'tests/**/*.{ts,tsx,js,jsx}',
  'docs/**/*.{md,mdx}',
  'examples/**/*.{ts,tsx,js,jsx,mdx}',
];

const files = patterns.flatMap((p) => globSync(p, { cwd: ROOT, dot: false, nodir: true }));

const report = {
  scanned: 0,
  modified: 0,
  dotAccessRewrites: 0,
  objectLiteralKeys: [] as Array<{ file: string; line: number; key: string }>,
  bracketAccess: [] as Array<{ file: string; line: number; key: string }>,
  trendGatingRefs: [] as Array<{ file: string; line: number; key: string }>,
};

const regex = {
  // Safe dot-access replacements
  dotEmerging: /\.emergingDirectionGrace\b/g,
  dotCollapse: /\.collapseClusterRules\b/g,
  // Bracket access detections
  brEmerging: /\[\s*['"]emergingDirectionGrace['"]\s*\]/g,
  brCollapse: /\[\s*['"]collapseClusterRules['"]\s*\]/g,
  // Object literal key (heuristic): key: value
  keyEmerging: /(^|\s|[,{])\s*emergingDirectionGrace\s*:/,
  keyCollapse: /(^|\s|[,{])\s*collapseClusterRules\s*:/,
  // Legacy trend gating (report only)
  trendSide: /trendSideGatingEnabled\b/g,
  trendFavourable: /trendFavourableSideOnly\b/g,
};

for (const fileRel of files) {
  const file = path.join(ROOT, fileRel);
  let text = '';
  try {
    text = readFileSync(file, 'utf8');
  } catch {
    continue;
  }
  report.scanned++;

  // Collect line info helper
  const lines = text.split(/\r?\n/);
  function recordMatches(r: RegExp, key: string, sink: Array<{ file: string; line: number; key: string }>) {
    lines.forEach((ln, i) => {
      if (r.test(ln)) sink.push({ file: fileRel, line: i + 1, key });
      r.lastIndex = 0; // reset stateful regex just in case
    });
  }

  // Object literal keys (report only)
  recordMatches(regex.keyEmerging, 'emergingDirectionGrace', report.objectLiteralKeys);
  recordMatches(regex.keyCollapse, 'collapseClusterRules', report.objectLiteralKeys);

  // Bracket access (report only)
  recordMatches(regex.brEmerging, "['emergingDirectionGrace']", report.bracketAccess);
  recordMatches(regex.brCollapse, "['collapseClusterRules']", report.bracketAccess);

  // Legacy trend gating (report only)
  recordMatches(regex.trendSide, 'trendSideGatingEnabled', report.trendGatingRefs);
  recordMatches(regex.trendFavourable, 'trendFavourableSideOnly', report.trendGatingRefs);

  // Safe dot-access rewrites
  let changed = false;
  if (regex.dotEmerging.test(text)) {
    text = text.replaceAll(regex.dotEmerging, '.grace?.emergingEnabled');
    report.dotAccessRewrites++;
    changed = true;
  }
  if (regex.dotCollapse.test(text)) {
    text = text.replaceAll(regex.dotCollapse, '.rules?.collapseWeakerClusterRules');
    report.dotAccessRewrites++;
    changed = true;
  }

  if (changed && flags.apply) {
    writeFileSync(file, text, 'utf8');
    report.modified++;
  }
}

// Output summary
const header = flags.apply ? '[SPC Codemod] Apply mode' : '[SPC Codemod] Dry-run (scan only)';
console.log(header);
console.log(`Scanned files: ${report.scanned}`);
if (flags.apply) console.log(`Files modified: ${report.modified}`);
console.log(`Dot-access rewrites: ${report.dotAccessRewrites}`);

function printFindings(title: string, items: Array<{ file: string; line: number; key: string }>, hint?: string) {
  if (!items.length) return;
  console.log(`\n${title} (${items.length})`);
  if (hint) console.log(hint);
  for (const it of items.slice(0, 200)) {
    console.log(`- ${it.file}:${it.line}  ${it.key}`);
  }
  if (items.length > 200) console.log(`… and ${items.length - 200} more`);
}

printFindings(
  'Object literal keys needing manual grouping',
  report.objectLiteralKeys,
  'Replace with grouped V2 e.g. { rules: { collapseWeakerClusterRules: … }, grace: { emergingEnabled: … } }'
);
printFindings(
  "Bracket-access usages (won't auto-rewrite)",
  report.bracketAccess,
  'Refactor to grouped access e.g. settings.grace?.emergingEnabled, settings.rules?.collapseWeakerClusterRules'
);
printFindings(
  'Legacy trend gating flags (remove or refactor UI to TrendVisualMode)',
  report.trendGatingRefs,
  'These are no-ops in engine; prefer UI visual enum or remove entirely.'
);

console.log('\nDone.');
