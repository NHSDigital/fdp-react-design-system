#!/usr/bin/env node

import { runSSRAnalysis, generateSSRReport } from './index';
import path from 'path';

/**
 * CLI tool for running SSR analysis
 */
async function main() {
  const args = process.argv.slice(2);
  const componentsPath = args[0] || './src/components';
  const outputDir = args[1] || './ssr-analysis-report';

  console.log('🔍 Starting NHS FDP Design System SSR Analysis...');
  console.log(`📁 Components path: ${componentsPath}`);
  console.log(`📄 Output directory: ${outputDir}`);

  try {
    // Run the analysis
    console.log('\n⚡ Analyzing components...');
    const result = await runSSRAnalysis(componentsPath);

    // Generate report
    console.log('\n📊 Generating reports...');
    await generateSSRReport(result, outputDir);

    // Print summary to console
    console.log('\n🎯 Analysis Summary:');
    console.log(`├─ Total Components: ${result.totalComponents}`);
    console.log(`├─ Overall SSR Compatibility: ${result.summary.overallCompatibility}%`);
    console.log(`├─ Fully Compatible: ${result.fullyCompatible} (${Math.round(result.fullyCompatible/result.totalComponents*100)}%)`);
    console.log(`├─ Compatible w/ Hydration: ${result.compatibleWithHydration} (${Math.round(result.compatibleWithHydration/result.totalComponents*100)}%)`);
    console.log(`├─ Client-Only: ${result.clientOnly} (${Math.round(result.clientOnly/result.totalComponents*100)}%)`);
    console.log(`└─ Requires Refactoring: ${result.requiresRefactoring} (${Math.round(result.requiresRefactoring/result.totalComponents*100)}%)`);

    console.log('\n🚀 Quick Wins Available:');
    result.summary.quickWins.slice(0, 5).forEach(comp => {
      const autoFixable = comp.issues.filter(i => i.canAutoFix).length;
      console.log(`  • ${comp.name}: ${autoFixable}/${comp.issues.length} issues auto-fixable`);
    });

    console.log('\n⚠️  Top Blocking Issues:');
    result.summary.majorIssues.filter(i => i.severity === 'blocking').slice(0, 3).forEach(issue => {
      console.log(`  • ${issue.type}: ${issue.description}`);
    });

    console.log(`\n✅ Analysis complete! Check the full report at: ${outputDir}`);

  } catch (error) {
    console.error('❌ Analysis failed:', error);
    process.exit(1);
  }
}

// Run if called directly
const isMainModule = import.meta.url === `file://${process.argv[1]}`;
if (isMainModule) {
  main();
}
