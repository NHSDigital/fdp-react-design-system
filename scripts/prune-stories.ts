import { glob } from 'glob';
import fs from 'fs';
import path from 'path';

// Configuration
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const STORIES_GLOB = path.join(ROOT, 'src/components/**/*.stories.@(ts|tsx)');
const SKIP_PATTERNS = [
  '.debug.', 'keyboard-test', 'hydration-test', 'ssr.hydration-test'
];

function shouldSkip(file: string) {
  return SKIP_PATTERNS.some(p => file.toLowerCase().includes(p.toLowerCase()));
}

function extractTitle(source: string): string | undefined {
  const m = source.match(/title:\s*['"]([^'"]+)['"]/);
  return m?.[1];
}

/**
 * Extract export block boundaries in a more resilient way than a single regex with non-greedy match.
 * We look for lines starting with `export const` and then balance braces to find the end of the object literal.
 */
function findExportBlocks(source: string) {
  const lines = source.split(/\r?\n/);
  const blocks: { name: string; startLine: number; endLine: number }[] = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const m = line.match(/^export const (\w+)/);
    if (!m) continue;
    const name = m[1];
    // Find first '{' after this line's index in remaining source
    let braceFound = false;
    let braceDepth = 0;
    let endLine = i;
    for (let j = i; j < lines.length; j++) {
      const l = lines[j];
      for (let k = 0; k < l.length; k++) {
        const ch = l[k];
        if (ch === '{') {
          braceFound = true;
          braceDepth++;
        } else if (ch === '}') {
          if (braceFound) braceDepth--;
          if (braceFound && braceDepth === 0) {
            // Include trailing chars on this line until a semicolon if present
            endLine = j;
            // Allow for a following semicolon or comma on same line – no action needed since we keep the entire line
            break;
          }
        }
      }
      if (braceFound && braceDepth === 0) break;
    }
    blocks.push({ name, startLine: i, endLine });
  }
  return { lines, blocks };
}

function pruneStoryFile(file: string, dryRun: boolean) {
  const original = fs.readFileSync(file, 'utf8');
  if (shouldSkip(file)) return false; // leave specialised stories intact

  const alreadyPruned = original.includes('// PRUNED STORY FILE');
  const { lines, blocks } = findExportBlocks(original);
  if (blocks.length <= 2 && !alreadyPruned) return false; // already concise

  // Keep first block; remove rest
  const keep = blocks[0];
  for (let bIndex = 1; bIndex < blocks.length; bIndex++) {
    const b = blocks[bIndex];
    // Replace the block lines with a single comment placeholder to avoid leaving stray braces
    if (lines[b.startLine].includes(`export const ${b.name}`)) {
      lines.splice(
        b.startLine,
        b.endLine - b.startLine + 1,
        `// Removed duplicate story: ${b.name}`
      );
      // Adjust subsequent block indices
      for (let k = bIndex + 1; k < blocks.length; k++) {
        const diff = (b.endLine - b.startLine);
        blocks[k].startLine -= diff;
        blocks[k].endLine -= diff;
      }
    }
  }

  // Repair mode: if already pruned previously with the older regex approach, clean up dangling braces / stray commas.
  if (alreadyPruned) {
    // Remove any orphan lines that are just '};' or '},' or solitary '}' following our removed comment markers.
    for (let i = 0; i < lines.length; i++) {
      if (/^\s*};?\s*$/.test(lines[i]) && /Removed duplicate story/.test(lines[i - 1] || '')) {
        lines.splice(i, 1); i--; continue;
      }
      if (/^\s*},?\s*$/.test(lines[i]) && /Removed duplicate story/.test(lines[i - 1] || '')) {
        lines.splice(i, 1); i--; continue;
      }
    }
  }

  // Prepend banner once.
  if (!alreadyPruned) {
    lines.unshift('// PRUNED STORY FILE: Reduced to a single representative story.');
    lines.unshift('// Original duplicates commented out to minimise Storybook surface area.');
  }

  const newContent = lines.join('\n');
  if (!dryRun) fs.writeFileSync(file, newContent, 'utf8');
  return true;
}

function ensureDocsForStory(file: string, dryRun: boolean) {
  const dir = path.dirname(file);
  const base = path.basename(file); // e.g., Button.stories.tsx
  const componentName = base.split('.stories')[0];
  const docsFile = path.join(dir, `${componentName}.auto.docs.mdx`);
  // Skip if any existing docs mdx for this component (manual docs take precedence)
  const existingMdx = fs.readdirSync(dir).some(f => f.startsWith(componentName) && f.endsWith('.mdx') && !f.includes('.stories'));
  if (existingMdx) return false;
  const source = fs.readFileSync(file, 'utf8');
  const title = extractTitle(source) || `Components/${componentName}`;
  const docsTitle = title.endsWith('/Documentation') ? title : `${title}/Documentation`;
  const docs = `import { Meta, Stories } from '@storybook/blocks';\nimport * as stories from './${componentName}.stories';\n\n<Meta of={stories} title=\"${docsTitle}\" />\n\n# ${componentName}\n\nThis page documents the ${componentName} component.\n\n<Stories />\n`;
  if (!dryRun) fs.writeFileSync(docsFile, docs, 'utf8');
  return true;
}


async function main() {
  const dryRun = process.argv.includes('--dry-run');
  const files = await glob(STORIES_GLOB);
  let pruned = 0;
  let docsCreated = 0;
  for (const f of files) {
    if (pruneStoryFile(f, dryRun)) pruned++;
    if (ensureDocsForStory(f, dryRun)) docsCreated++;
  }
  // eslint-disable-next-line no-console
  console.log(`Story pruning complete. Files processed: ${files.length}. Pruned: ${pruned}. Docs created: ${docsCreated}. Dry run: ${dryRun}`);
}

// Execute if run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(err => {
    // eslint-disable-next-line no-console
    console.error(err);
    process.exit(1);
  });
}
