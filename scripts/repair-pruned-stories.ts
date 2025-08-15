#!/usr/bin/env tsx
/**
 * Repair previously pruned story files that still contain dangling fragments
 * from removed stories (leftover args/parameters/JSX) causing parse errors.
 *
 * Strategy:
 *  - Identify files marked with the pruning banner comment.
 *  - Keep everything up to and including the first `export const <Story>` block.
 *  - Reconstruct that first story object by brace balancing starting from the first '{' after '='.
 *  - Discard everything that follows (other removed story comment markers & fragments).
 *  - Write back a clean, syntactically valid file.
 *
 * This intentionally does NOT touch unpruned story files (those without the banner),
 * and skips any file where it cannot confidently locate and balance the first story object.
 */
import { glob } from 'glob';
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(process.cwd(), 'src/components');
const BANNER_PREFIX = '// PRUNED STORY FILE';

interface RepairResult {
  file: string;
  changed: boolean;
  reason?: string;
}

function balanceFirstStoryExport(lines: string[]): { endLine: number } | null {
  // Find first line containing `export const <Name>` followed by '=' and '{' later.
  let exportLineIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (/^export\s+const\s+\w+\s*:?.*=/.test(l)) {
      exportLineIndex = i;
      break;
    }
  }
  if (exportLineIndex === -1) return null;

  // Find first '{' after the '=' from exportLineIndex forward.
  let started = false;
  let braceDepth = 0;
  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  let escaped = false;
  for (let i = exportLineIndex; i < lines.length; i++) {
    const line = lines[i];
    for (let j = 0; j < line.length; j++) {
      const ch = line[j];
      if (escaped) { escaped = false; continue; }
      if (ch === '\\') { escaped = true; continue; }
      if (inSingle) { if (ch === "'") inSingle = false; continue; }
      if (inDouble) { if (ch === '"') inDouble = false; continue; }
      if (inTemplate) { if (ch === '`') inTemplate = false; continue; }
      if (ch === "'") { inSingle = true; continue; }
      if (ch === '"') { inDouble = true; continue; }
      if (ch === '`') { inTemplate = true; continue; }
      if (ch === '{') { braceDepth++; started = true; }
      else if (ch === '}') { if (started) braceDepth--; }
      if (started && braceDepth === 0) {
        // Include this line; look ahead for trailing semicolon.
        return { endLine: i };
      }
    }
  }
  return null; // unbalanced
}

async function repairFile(file: string): Promise<RepairResult> {
  const text = await fs.promises.readFile(file, 'utf8');
  if (!text.startsWith(BANNER_PREFIX)) {
    return { file, changed: false, reason: 'not pruned' };
  }
  const original = text.split(/\r?\n/);
  const balance = balanceFirstStoryExport(original);
  if (!balance) {
    return { file, changed: false, reason: 'could not locate first story export' };
  }

  // Reconstruct: keep lines up to endLine, then trim trailing blank lines, ensure newline.
  const trimmed = original.slice(0, balance.endLine + 1);
  // Ensure final line ends with a comma or semicolon; if story object ends with } add semicolon.
  const lastLineIdx = trimmed.length - 1;
  const lastTrim = trimmed[lastLineIdx].trim();
  if (/}\s*$/.test(lastTrim) && !/};\s*$/.test(lastTrim)) {
    trimmed[lastLineIdx] = trimmed[lastLineIdx] + ';';
  }

  const newContent = trimmed.join('\n').replace(/\n{3,}$/g, '\n\n') + '\n';
  if (newContent === text) {
    return { file, changed: false, reason: 'already clean' };
  }
  await fs.promises.writeFile(file, newContent, 'utf8');
  return { file, changed: true };
}

async function run() {
  const pattern = path.join(ROOT, '**/*.stories.@(ts|tsx)');
  const files = await glob(pattern, { nodir: true });
  const results: RepairResult[] = [];
  for (const f of files) {
    try {
      results.push(await repairFile(f));
    } catch (e) {
      results.push({ file: f, changed: false, reason: 'error: ' + (e as Error).message });
    }
  }
  const changed = results.filter(r => r.changed).length;
  const skipped = results.filter(r => r.reason === 'not pruned').length;
  const failed = results.filter(r => r.reason && !['not pruned','already clean'].includes(r.reason));
  console.log(`Repair complete. Processed: ${results.length}. Updated: ${changed}. Skipped (not pruned): ${skipped}. Issues: ${failed.length}`);
  if (failed.length) {
    failed.slice(0, 15).forEach(r => console.warn('  Issue:', r.file, '-', r.reason));
  }
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
