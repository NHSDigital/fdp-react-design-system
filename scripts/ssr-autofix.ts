#!/usr/bin/env node

/**
 * Apply "quick win" SSR autofixes detected by the analyzer.
 * - Runs the analyzer over src/components
 * - Performs a dry-run to preview fixes
 * - Applies autofixes (non-dry) and prints a concise summary
 */
import path from 'path';
import { runSSRAnalysis } from '../tests/ssr-analysis';
import { SSRRefactorTool } from '../tests/ssr-analysis/refactor-tool';

async function main() {
  const componentsPath = path.resolve('./src/components');
  console.log('🔧 SSR Quick Wins Autofix');
  console.log(`📁 Components: ${componentsPath}`);

  const result = await runSSRAnalysis(componentsPath);
  const candidates = result.summary.quickWins;

  if (!candidates.length) {
    console.log('✅ No quick-win candidates found. Nothing to fix.');
    return;
  }

  console.log(`📝 Candidates: ${candidates.length} components`);

  // Dry-run first for visibility
  const dry = await SSRRefactorTool.autoFix(candidates, true);
  console.log(`
🔍 Dry-run preview: ${dry.fixed} components with proposed changes`);
  dry.changes.slice(0, 10).forEach((c) => {
    console.log(`— ${path.relative(process.cwd(), c.file)}:`);
    c.fixes.forEach((f) => console.log(`   • ${f}`));
  });
  if (dry.changes.length > 10) {
    console.log(`… and ${dry.changes.length - 10} more`);
  }

  // Apply actual fixes
  const applied = await SSRRefactorTool.autoFix(candidates, false);
  console.log(`
✅ Applied fixes to ${applied.fixed} components`);
  if (applied.errors.length) {
    console.log('⚠️  Errors:');
    applied.errors.forEach((e) => console.log(` - ${e}`));
  }
}

main().catch((err) => {
  console.error('❌ Autofix failed:', err);
  process.exit(1);
});
