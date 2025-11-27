#!/usr/bin/env tsx
/**
 * Basic verification using the aggregated schema meta:
 * - Ensures a macro file exists for each component in the manifest
 * - Heuristically checks that macro files reference the declared schema props (via params.<prop>)
 * - Reports missing/unknown props to ssr-analysis-report/macro-parity/schema-vs-macro.json
 *
 * Notes:
 * - This is a non-blocking early-warning tool. It exits with code 0 but surfaces findings.
 * - Future phases can make this stricter and compare normalised output.
 */
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

type Meta = {
  version: string;
  components: Record<string, { name: string; props: { name: string }[] }>;
};

function toKebabCase(name: string): string {
  return name
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}

// Aliases: treat any of the listed macro prop names as satisfying the schema prop
const ALIASES: Record<string, string[]> = {
  className: ['classes'],
};

// Global schema props considered optional/derived for macro parity purposes
const GLOBAL_IGNORE_MISSING = new Set<string>([
  'children', // macros often use text/html instead
]);

// Per-component missing prop ignore list
const IGNORE_MISSING: Record<string, Set<string>> = {
  Button: new Set(['children', 'className', 'target', 'rel', 'aria-disabled', 'disabled']),
  Label: new Set(['children']),
  Hint: new Set(['children']),
  Heading: new Set(['children']),
  ErrorMessage: new Set(['children']),
  Select: new Set([]),
  Textarea: new Set(['disabled', 'readOnly', 'required']),
  CharacterCount: new Set(['countMessageClasses', 'hasError', 'describedBy']),
};

// Macro-only props that are acceptable and shouldn't be flagged as unknown
const GLOBAL_MACRO_ONLY = new Set<string>([
  'html',
  'text',
  'children',
  'attributes',
  'classes',
]);

// Per-component macro-only extras (if needed)
const MACRO_ONLY: Record<string, Set<string>> = {
  Select: new Set(['children']),
};

async function run() {
  const metaPath = path.resolve('dist/meta/components.json');
  let meta: Meta;
  try {
    meta = JSON.parse(await fs.promises.readFile(metaPath, 'utf-8')) as Meta;
  } catch (e) {
    console.error('[verify-schema-macro] Missing or unreadable manifest at dist/meta/components.json');
    process.exitCode = 0;
    return;
  }

  const macroFiles = await glob('src/macros/**/*.njk');
  const macroByBase = new Map<string, string>();
  macroFiles.forEach((f) => macroByBase.set(path.basename(f).toLowerCase(), f));

  const report: any = {
    version: meta.version,
    generatedAt: new Date().toISOString(),
    componentsChecked: 0,
    issues: [] as any[],
  };

  for (const compName of Object.keys(meta.components)) {
    report.componentsChecked += 1;
    const kebab = toKebabCase(compName);
    const lower = compName.toLowerCase();
    const candidates = [`${kebab}.njk`, `${lower}.njk`];
    const found = candidates.map((c) => macroByBase.get(c)).find(Boolean);
    if (!found) {
      report.issues.push({ component: compName, kind: 'missing-macro', detail: { candidates } });
      continue;
    }

    // Heuristic: collect params.<prop> mentions
    const content = await fs.promises.readFile(found, 'utf-8');
    const usedProps = new Set<string>();
    for (const m of content.matchAll(/params\.([a-zA-Z0-9_\-]+)/g)) {
      usedProps.add(m[1]);
    }

    const schemaProps = new Set(meta.components[compName].props.map((p) => p.name));
    const missingFromMacro: string[] = [];
    for (const p of schemaProps) {
      // Ignore globally or per-component
      if (GLOBAL_IGNORE_MISSING.has(p) || (IGNORE_MISSING[compName] && IGNORE_MISSING[compName].has(p))) continue;
      // Direct use or alias use satisfies
      const aliases = ALIASES[p] || [];
      const satisfied = usedProps.has(p) || aliases.some((a) => usedProps.has(a));
      if (!satisfied) missingFromMacro.push(p);
    }

    // Unknown props in macro (might be fine; warn only)
    const unknownInMacro: string[] = [];
    for (const up of usedProps) {
      // Allowed globally or per-component
      if (GLOBAL_MACRO_ONLY.has(up)) continue;
      if (MACRO_ONLY[compName] && MACRO_ONLY[compName]!.has(up)) continue;
      if (!schemaProps.has(up)) unknownInMacro.push(up);
    }

    if (missingFromMacro.length || unknownInMacro.length) {
      report.issues.push({
        component: compName,
        kind: 'prop-drift',
        detail: { macro: path.relative(process.cwd(), found), missingFromMacro, unknownInMacro },
      });
    }
  }

  const outDir = path.resolve('ssr-analysis-report/macro-parity');
  await fs.promises.mkdir(outDir, { recursive: true });
  const outPath = path.join(outDir, 'schema-vs-macro.json');
  await fs.promises.writeFile(outPath, JSON.stringify(report, null, 2));
  const summary = `[verify-schema-macro] Components checked: ${report.componentsChecked}; Issues: ${report.issues.length}. Report: ${path.relative(process.cwd(), outPath)}`;
  if (report.issues.length) {
    console.warn(summary);
  } else {
    console.log(summary);
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
