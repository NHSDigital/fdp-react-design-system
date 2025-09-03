#!/usr/bin/env tsx
/**
 * inventory-design-system.ts
 * Generates an inventory report of the design system covering:
 *  - Component counts (React source, built JS, built CSS)
 *  - Macro (Nunjucks) coverage (if macros generated)
 *  - Parity gaps (missing CSS for JS, missing JS for CSS, missing macro)
 *  - SSR analysis summary (reads latest ssr-analysis-report/*.json if present)
 *  - Sass mixed declaration remediation progress (optional: runs existing heuristic script)
 *  - Token bundle freshness (hash timestamps vs dist)
 *  - Outputs machine-readable JSON + a concise Markdown summary
 *
 * Usage:  npx tsx scripts/inventory-design-system.ts [--no-sass-scan] [--md inventory.md] [--json inventory.json]
 */
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { spawnSync } from 'child_process';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// ESM-safe equivalent of __dirname
const __dirnameESM = path.dirname(new URL(import.meta.url).pathname);

interface InventoryOptions {
  runSassScan: boolean;
  mdPath: string;
  jsonPath: string;
  ci: boolean;
  failOnTokenDrift: boolean;
  failOnSass: boolean;
  configPath?: string;
}

const root = path.join(__dirnameESM, '..');
const distDir = path.join(root, 'dist');
const srcComponentsDir = path.join(root, 'src', 'components');
const distSrcComponentsDir = path.join(distDir, 'src', 'components');
const distCssComponentsDir = path.join(distDir, 'components');
const macrosDistDir = path.join(distDir, 'macros');
const ssrReportDir = path.join(root, 'ssr-analysis-report');
const defaultConfigFile = path.join(root, 'inventory.config.json');
const defaultHistoryDir = path.join(root, 'reports', 'inventory-history');

function parseArgs(): InventoryOptions {
  const args = process.argv.slice(2);
  let runSassScan = true;
  let mdPath = 'inventory.md';
  let jsonPath = 'inventory.json';
  let ci = false;
  let failOnTokenDrift = false;
  let failOnSass = false;
  let configPath: string | undefined;
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--no-sass-scan') runSassScan = false;
    else if (a === '--ci') ci = true;
    else if (a === '--fail-on-token-drift') failOnTokenDrift = true;
    else if (a === '--fail-on-sass') failOnSass = true;
    else if (a === '--config') configPath = args[++i];
    else if (a === '--md') mdPath = args[++i];
    else if (a === '--json') jsonPath = args[++i];
  }
  return { runSassScan, mdPath, jsonPath, ci, failOnTokenDrift, failOnSass, configPath };
}

function listDirs(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => !f.startsWith('.') && fs.statSync(path.join(dir, f)).isDirectory());
}

function componentSourceNames(): string[] {
  return listDirs(srcComponentsDir);
}

function componentBuiltJsNames(): string[] {
  if (!fs.existsSync(distSrcComponentsDir)) return [];
  return fs.readdirSync(distSrcComponentsDir)
    .filter(d => fs.statSync(path.join(distSrcComponentsDir, d)).isDirectory())
    .filter(d => fs.existsSync(path.join(distSrcComponentsDir, d, 'index.js')));
}

function componentBuiltCssNames(): string[] {
  if (!fs.existsSync(distCssComponentsDir)) return [];
  return fs.readdirSync(distCssComponentsDir)
    .filter(d => fs.statSync(path.join(distCssComponentsDir, d)).isDirectory())
    .filter(d => fs.readdirSync(path.join(distCssComponentsDir, d)).some(f => f.endsWith('.css')));
}

function nunjucksMacroNames(): string[] {
  if (!fs.existsSync(macrosDistDir)) return [];
  // Macros may be nested; gather .njk files and derive component-ish names from filename stem
  const result = new Set<string>();
  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir)) {
      const full = path.join(dir, entry);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) walk(full); else if (entry.endsWith('.njk')) {
        const stem = entry.replace(/\.njk$/, '');
        result.add(stem);
      }
    }
  };
  walk(macrosDistDir);
  return [...result];
}

function loadSsrStatus(): Record<string, any> {
  if (!fs.existsSync(ssrReportDir)) return {};
  const files = fs.readdirSync(ssrReportDir).filter(f => f.endsWith('.json'));
  const status: Record<string, any> = {};
  for (const f of files) {
    try {
      const json = JSON.parse(fs.readFileSync(path.join(ssrReportDir, f), 'utf8'));
      Object.assign(status, json.components || {});
    } catch { /* noop */ }
  }
  return status;
}

function loadSsrAggregate() {
  const file = path.join(ssrReportDir, 'ssr-analysis.json');
  if (!fs.existsSync(file)) return null;
  try {
    const json = JSON.parse(fs.readFileSync(file, 'utf8'));
    return {
      total: json.totalComponents,
      fullyCompatible: json.fullyCompatible,
      compatibleWithHydration: json.compatibleWithHydration,
      clientOnly: json.clientOnly,
      requiresRefactoring: json.requiresRefactoring
    };
  } catch { return null; }
}

function loadSsrComponentMap(): Record<string, string> {
  const file = path.join(ssrReportDir, 'ssr-analysis.json');
  if (!fs.existsSync(file)) return {};
  try {
    const json = JSON.parse(fs.readFileSync(file, 'utf8'));
    const map: Record<string, string> = {};
    (json.components || []).forEach((c: any) => { if (c.name && c.compatibilityLevel) map[c.name] = c.compatibilityLevel; });
    return map;
  } catch { return {}; }
}

interface InventoryConfig {
  failOn?: {
    parityGap?: boolean;
    tokenDrift?: boolean;
    sassMixed?: boolean;
    macroCoverageBelowMin?: boolean;
  };
  thresholds?: {
    maxSassMixed?: number;
    minMacroCoverage?: number;
  };
  history?: {
    dir?: string;
    keepLast?: number;
    csv?: string;
  };
}

function loadConfig(pathOverride?: string): InventoryConfig {
  const file = pathOverride ? path.resolve(root, pathOverride) : defaultConfigFile;
  if (!fs.existsSync(file)) return {};
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch { return {}; }
}

function ensureHistoryRetention(dir: string, keep: number) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'))
    .map(f => ({ f, t: fs.statSync(path.join(dir, f)).mtimeMs }))
    .sort((a,b) => b.t - a.t);
  const toRemove = files.slice(keep);
  toRemove.forEach(r => { try { fs.unlinkSync(path.join(dir, r.f)); } catch { /* noop */ } });
}

function appendCsvRow(csvPath: string, headers: string[], row: Record<string, any>) {
  const headerLine = headers.join(',');
  if (!fs.existsSync(csvPath)) {
    ensureDirFor(csvPath);
    fs.writeFileSync(csvPath, headerLine + '\n');
  }
  const line = headers.map(h => JSON.stringify(row[h] ?? '')).join(',');
  fs.appendFileSync(csvPath, line + '\n');
}

function hashFile(file: string): string | null {
  if (!fs.existsSync(file)) return null;
  const h = crypto.createHash('sha1');
  h.update(fs.readFileSync(file));
  return h.digest('hex').slice(0, 12);
}

function tokenFreshness() {
  // Compare main tokens source folder hash to generated master SCSS file hash
  const tokensSrcDir = path.join(root, 'tokens');
  const distTokensScss = path.join(root, 'packages', 'nhs-fdp', 'dist', 'scss', '_tokens.scss');
  function dirHash(dir: string): string {
    const h = crypto.createHash('sha1');
    if (!fs.existsSync(dir)) return '';
    const walk = (d: string) => {
      for (const e of fs.readdirSync(d)) {
        const full = path.join(d, e);
        const stat = fs.statSync(full);
        if (stat.isDirectory()) walk(full); else h.update(fs.readFileSync(full));
      }
    };
    walk(dir);
    return h.digest('hex').slice(0, 12);
  }
  const sourceHash = dirHash(tokensSrcDir);
  const distHash = hashFile(distTokensScss);
  return { sourceHash, distHash, inSync: !!distHash && distHash === sourceHash };
}

function runSassMixedScan(): { totalLines: number; lines: string[] } | null {
  const script = path.join(root, 'scripts', 'find-sass-mixed-declarations.cjs');
  if (!fs.existsSync(script)) return null;
  const res = spawnSync('node', [script], { encoding: 'utf8' });
  if (res.error) return null;
  const out = res.stdout.trim();
  const lines = out.split(/\r?\n/).filter(l => /Potential mixed declaration/.test(l));
  return { totalLines: lines.length, lines };
}

function ensureDirFor(filePath: string) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function main() {
  const opts = parseArgs();
  const src = new Set(componentSourceNames());
  const builtJs = new Set(componentBuiltJsNames());
  const builtCss = new Set(componentBuiltCssNames());
  // Apply CSS alias providers so inventory aligns with verify-component-parity semantics
  try {
    const cssAliasProviders = require('./css-aliases.cjs');
    for (const [alias, provider] of Object.entries(cssAliasProviders)) {
      if (!builtCss.has(alias) && builtCss.has(provider as string)) builtCss.add(alias);
    }
  } catch { /* ignore */ }
  const macros = new Set(nunjucksMacroNames());
  const ssr = loadSsrStatus();
  const ssrAgg = loadSsrAggregate();
  const ssrMap = loadSsrComponentMap();
  const tokens = tokenFreshness();
  const config = loadConfig(opts.configPath);

  // Derive parity
  const missingCss = [...builtJs].filter(c => !builtCss.has(c));
  const missingJs = [...builtCss].filter(c => !builtJs.has(c));
  const missingMacro = [...src].filter(c => !macros.has(c));
  const missingReactForMacro = [...macros].filter(m => !src.has(m));

  const sassScan = opts.runSassScan ? runSassMixedScan() : null;

  const macroCoverage = src.size ? (macros.size / src.size) : 0;
  const macroCoveragePercent = +(macroCoverage * 100).toFixed(1);
  const perComponent = [...src].sort().map(name => ({
    name,
    hasMacro: macros.has(name),
    ssr: ssrMap[name] || ''
  }));
  const summary = {
    generatedAt: new Date().toISOString(),
    counts: {
      sourceComponents: src.size,
      builtJs: builtJs.size,
      builtCss: builtCss.size,
      macros: macros.size,
      ssrEntries: Object.keys(ssr).length,
      macroCoveragePercent
    },
    parity: { missingCss, missingJs, missingMacro, missingReactForMacro },
    tokens,
    sassMixedDeclarations: sassScan ? { total: sassScan.totalLines } : null,
    ssr: ssrAgg || null,
    components: perComponent
  };

  // Write JSON
  const jsonOut = path.join(root, summaryPath(opts.jsonPath));
  ensureDirFor(jsonOut);
  fs.writeFileSync(jsonOut, JSON.stringify(summary, null, 2));

  // Markdown concise output
  const md = renderMarkdown(summary, opts);
  const mdOut = path.join(root, summaryPath(opts.mdPath));
  ensureDirFor(mdOut);
  fs.writeFileSync(mdOut, md);

  console.log('[inventory] Wrote: ' + opts.jsonPath + ' & ' + opts.mdPath);
  const parityGap = missingCss.length || missingJs.length;
  if (parityGap) console.warn('[inventory] Parity gaps detected.');
  // History snapshot
  const historyDir = config.history?.dir ? path.join(root, config.history.dir) : defaultHistoryDir;
  const ts = new Date().toISOString().replace(/[:]/g, '-');
  try {
    ensureDirFor(path.join(historyDir, 'x'));
    const histFile = path.join(historyDir, `inventory-${ts}.json`);
    fs.writeFileSync(histFile, JSON.stringify(summary, null, 2));
    if (config.history?.keepLast) ensureHistoryRetention(historyDir, config.history.keepLast);
    const csvPath = path.join(root, config.history?.csv || path.join('reports', 'inventory-history.csv'));
    appendCsvRow(csvPath, ['timestamp','sourceComponents','builtJs','builtCss','macros','macroCoveragePercent','sassMixed','tokensInSync','missingMacroCount','parityCssGaps','parityJsGaps'], {
      timestamp: summary.generatedAt,
      sourceComponents: summary.counts.sourceComponents,
      builtJs: summary.counts.builtJs,
      builtCss: summary.counts.builtCss,
      macros: summary.counts.macros,
      macroCoveragePercent: summary.counts.macroCoveragePercent,
      sassMixed: summary.sassMixedDeclarations ? summary.sassMixedDeclarations.total : '',
      tokensInSync: summary.tokens.inSync,
      missingMacroCount: summary.parity.missingMacro.length,
      parityCssGaps: summary.parity.missingCss.length,
      parityJsGaps: summary.parity.missingJs.length
    });
  } catch (e) {
    console.warn('[inventory] history write failed:', (e as Error).message);
  }

  // CI evaluation (config + flags)
  const thresholds = config.thresholds || {};
  const failOn = config.failOn || {};
  const sassTotal = sassScan ? sassScan.totalLines : 0;
  const maxSass = thresholds.maxSassMixed ?? (opts.failOnSass ? 0 : undefined);
  const minMacroCoverage = thresholds.minMacroCoverage ?? 0;
  const macroBelow = macroCoveragePercent < minMacroCoverage;
  const combinedCi = opts.ci || failOn.parityGap || failOn.tokenDrift || failOn.sassMixed || failOn.macroCoverageBelowMin;
  if (combinedCi) {
    let fail = false;
    if ((opts.ci && parityGap) || (failOn.parityGap && parityGap)) fail = true;
    if ((opts.failOnTokenDrift || failOn.tokenDrift) && !tokens.inSync) fail = true;
    if ((opts.failOnSass || failOn.sassMixed) && sassTotal > 0) fail = true;
    if (maxSass !== undefined && sassTotal > maxSass) fail = true;
    if (failOn.macroCoverageBelowMin && macroBelow) fail = true;
    if (fail) {
      console.error('[inventory] CI mode: failing due to thresholds.', JSON.stringify({ parityGap, sassTotal, maxSass, tokensInSync: tokens.inSync, macroCoveragePercent, minMacroCoverage }, null, 2));
      process.exit(1);
    }
  }
}

function summaryPath(p: string) { return p.startsWith('.') || p.includes('/') ? p : path.join('reports', p); }

function renderMarkdown(summary: any, opts: InventoryOptions) {
  const { counts, parity, tokens, sassMixedDeclarations, ssr, components } = summary;
  const ssrLines = ssr ? `\n## SSR\n- Fully compatible: ${ssr.fullyCompatible}\n- Compatible w/ hydration: ${ssr.compatibleWithHydration}\n- Client only: ${ssr.clientOnly}\n- Requires refactoring: ${ssr.requiresRefactoring}` : '';
  const tableHeader = '| Component | Macro | SSR |';
  const tableSep = '|---|---|---|';
  const tableRows = components.map((c: any) => `| ${c.name} | ${c.hasMacro ? 'Yes' : 'No'} | ${c.ssr || ''} |`).join('\n');
  const macroTable = `\n## Macro & SSR Coverage\n${tableHeader}\n${tableSep}\n${tableRows}\n`;
  return `# Design System Inventory\n\nGenerated: ${summary.generatedAt}\n\n## Counts\n- Source components: ${counts.sourceComponents}\n- Built JS: ${counts.builtJs}\n- Built CSS: ${counts.builtCss}\n- Nunjucks macros: ${counts.macros}\n- SSR entries: ${counts.ssrEntries}\n- Macro coverage: ${counts.macroCoveragePercent}%\n\n## Parity Gaps\n- Missing CSS for JS: ${parity.missingCss.length ? parity.missingCss.join(', ') : 'None'}\n- Missing JS for CSS: ${parity.missingJs.length ? parity.missingJs.join(', ') : 'None'}\n- Missing macro for component: ${parity.missingMacro.length ? parity.missingMacro.join(', ') : 'None'}\n- Macros without React component: ${parity.missingReactForMacro.length ? parity.missingReactForMacro.join(', ') : 'None'}\n\n## Tokens\n- Source hash: ${tokens.sourceHash}\n- Dist hash: ${tokens.distHash || 'N/A'}\n- In sync: ${tokens.inSync}\n\n## Sass Mixed Declarations\n${sassMixedDeclarations ? `- Outstanding potential issues: ${sassMixedDeclarations.total}` : '- Scan skipped'}${ssrLines}${macroTable}`;
}

main();
