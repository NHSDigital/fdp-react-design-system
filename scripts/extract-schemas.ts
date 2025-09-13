#!/usr/bin/env tsx
/**
 * Extracts all ComponentSchema definitions from the src/components tree
 * (files ending with .schema.ts) and publishes an aggregated JSON manifest
 * at dist/meta/components.json.
 *
 * This enables downstream docs, macro generation, and parity tooling to
 * consume a single source of truth for component props and metadata.
 */
import { glob } from 'glob';
import fs from 'fs';
import path from 'path';
import type { ComponentSchema } from '../src/schemas/componentMeta';

type AnyModule = Record<string, unknown>;

interface ExtractedMetaV1 {
  version: string;
  generatedAt: string; // ISO string
  count: number;
  components: Record<string, ComponentSchema & { source: string }>; // keyed by component name
  categories: Record<string, string[]>; // category -> [component names]
}

function isComponentSchema(v: unknown): v is ComponentSchema {
  if (!v || typeof v !== 'object') return false;
  const obj = v as any;
  return typeof obj.name === 'string' && Array.isArray(obj.props);
}

async function run() {
  const schemaFiles = await glob('src/components/**/**.schema.ts', { nocase: true });
  const meta: ExtractedMetaV1 = {
    version: (JSON.parse(await fs.promises.readFile('package.json', 'utf-8')).version) || '0.0.0',
    generatedAt: new Date().toISOString(),
    count: 0,
    components: {},
    categories: {},
  };

  for (const file of schemaFiles) {
    // Dynamic import using absolute path so tsx can resolve TS modules
    const abs = path.resolve(file);
    let mod: AnyModule;
    try {
      mod = await import(abs);
    } catch (err) {
      console.warn('[extract-schemas] Failed to import', file, err);
      continue;
    }

    // Prefer named export ending with "Schema", fall back to default if suitable
    const namedKeys = Object.keys(mod).filter((k) => /Schema$/.test(k));
    const candidates: Array<[string, ComponentSchema]> = [];
    for (const key of namedKeys) {
      const val = (mod as AnyModule)[key];
      if (isComponentSchema(val)) candidates.push([key, val]);
    }
    if (!candidates.length && isComponentSchema((mod as AnyModule).default)) {
      candidates.push(['default', (mod as AnyModule).default as ComponentSchema]);
    }

    if (!candidates.length) {
      console.warn('[extract-schemas] No ComponentSchema export found in', file);
      continue;
    }

    // Use the first candidate; conventionally this is e.g. ButtonSchema
    const [, schema] = candidates[0];
    const name = schema.name;
    if (!name) {
      console.warn('[extract-schemas] Schema missing name in', file);
      continue;
    }

    // Augment with source path and index by name
    const withSource = { ...schema, source: path.relative(process.cwd(), file) } as ComponentSchema & { source: string };
    meta.components[name] = withSource;
    meta.count += 1;

    // Track categories for quick grouping
    const cat = (schema as any).category || 'uncategorised';
    if (!meta.categories[cat]) meta.categories[cat] = [];
    meta.categories[cat].push(name);
  }

  // Ensure output directory exists
  await fs.promises.mkdir('dist/meta', { recursive: true });
  const outPath = 'dist/meta/components.json';
  await fs.promises.writeFile(outPath, JSON.stringify(meta, null, 2));
  console.log(`[extract-schemas] Wrote ${meta.count} schemas to ${outPath}`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
