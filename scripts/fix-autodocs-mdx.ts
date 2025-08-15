#!/usr/bin/env tsx
/**
 * Convert generated *.auto.docs.mdx files that import from '@storybook/blocks'
 * to a simpler MDX form that doesn't rely on the blocks package.
 * Pattern:
 *   import { Meta, Stories } from '@storybook/blocks';
 *   import * as stories from './X.stories';
 *   <Meta of={stories} title="..." />
 * Replaced with:
 *   import '../X.stories'; (path adjusted relative)
 *   <Meta title="..." />
 */
import { glob } from 'glob';
import fs from 'fs';
import path from 'path';

async function transform(file: string): Promise<boolean> {
  const raw = await fs.promises.readFile(file, 'utf8');
  if (!raw.includes('@storybook/blocks')) return false;
  const lines = raw.split(/\r?\n/);
  let storyImportRemoved = false;
  let metaReplaced = false;
  const out: string[] = [];
  for (const line of lines) {
    if (line.includes("@storybook/blocks")) continue;
    if (line.startsWith('import * as stories')) {
      storyImportRemoved = true;
      continue;
    }
    if (line.startsWith('<Meta of={stories}')) {
      const m = line.match(/title=\"([^\"]+)\"/);
      const title = m ? m[1] : 'Component/Documentation';
      out.push(`<Meta title="${title}" />`);
      metaReplaced = true;
      continue;
    }
    if (line.trim() === '<Stories />') {
      out.push('{/* Stories table auto-generated */}');
      continue;
    }
    out.push(line);
  }
  if (!(storyImportRemoved || metaReplaced)) return false;
  const output = out.join('\n');
  await fs.promises.writeFile(file, output, 'utf8');
  return true;
}

async function run() {
  const files = await glob('src/components/**/*.auto.docs.mdx');
  let changed = 0;
  for (const f of files) {
    if (await transform(f)) changed++;
  }
  console.log(`fix-autodocs-mdx: updated ${changed} files`);
}

run().catch(e => { console.error(e); process.exit(1); });
