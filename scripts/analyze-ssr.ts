#!/usr/bin/env node

/**
 * NHS FDP Design System SSR Analysis Runner
 * 
 * This script analyzes all components in the design system to determine
 * their compatibility with Next.js Server-Side Rendering (SSR).
 * 
 * Usage:
 *   npm run analyze:ssr
 *   npm run analyze:ssr -- ./custom/components/path
 *   npm run analyze:ssr -- ./src/components ./custom-report-dir
 */

import { runSSRAnalysis, generateSSRReport } from '../tests/ssr-analysis';
import { promises as fs } from 'fs';
import path from 'path';

async function main() {
  const args = process.argv.slice(2);
  const componentsPath = path.resolve(args[0] || './src/components');
  const outputDir = path.resolve(args[1] || './ssr-analysis-report');

  console.log('🔍 NHS FDP Design System - SSR Compatibility Analysis');
  console.log('=' .repeat(60));
  console.log(`📁 Components: ${componentsPath}`);
  console.log(`📄 Report: ${outputDir}`);
  console.log('');

  // Check if components directory exists
  try {
    await fs.access(componentsPath);
  } catch (error) {
    console.error(`❌ Components directory not found: ${componentsPath}`);
    process.exit(1);
  }

  const startTime = Date.now();

  try {
    console.log('⚡ Scanning components...');
    
    // Run the analysis
    const result = await runSSRAnalysis(componentsPath);
    
    console.log('📊 Generating detailed reports...');
    
    // Generate comprehensive reports
    await generateSSRReport(result, outputDir);
    
    const duration = Date.now() - startTime;
    
    // Display results
    console.log('\n🎯 Analysis Results');
    console.log('-'.repeat(40));
    console.log(`⏱️  Analysis time: ${duration}ms`);
    console.log(`📦 Total components: ${result.totalComponents}`);
    console.log(`🎯 Overall SSR compatibility: ${result.summary.overallCompatibility}%`);
    console.log('');
    
    // Compatibility breakdown
    console.log('📊 Compatibility Breakdown:');
    console.log(`├─ ✅ Fully Compatible: ${result.fullyCompatible} (${Math.round(result.fullyCompatible/result.totalComponents*100)}%)`);
    console.log(`├─ 🔄 Compatible w/ Hydration: ${result.compatibleWithHydration} (${Math.round(result.compatibleWithHydration/result.totalComponents*100)}%)`);
    console.log(`├─ 🖥️  Client-Only: ${result.clientOnly} (${Math.round(result.clientOnly/result.totalComponents*100)}%)`);
    console.log(`└─ 🔧 Requires Refactoring: ${result.requiresRefactoring} (${Math.round(result.requiresRefactoring/result.totalComponents*100)}%)`);
    console.log('');

    // Quick wins
    if (result.summary.quickWins.length > 0) {
      console.log('🚀 Quick Wins (Easy fixes):');
      result.summary.quickWins.slice(0, 5).forEach((comp, idx) => {
        const autoFixable = comp.issues.filter(i => i.canAutoFix).length;
        const prefix = idx === result.summary.quickWins.length - 1 ? '└─' : '├─';
        console.log(`${prefix} ${comp.name}: ${autoFixable}/${comp.issues.length} auto-fixable`);
      });
      console.log('');
    }

    // Major issues
    const blockingIssues = result.summary.majorIssues.filter(i => i.severity === 'blocking');
    if (blockingIssues.length > 0) {
      console.log('⚠️  Top Blocking Issues:');
      blockingIssues.slice(0, 3).forEach((issue, idx) => {
        const prefix = idx === Math.min(2, blockingIssues.length - 1) ? '└─' : '├─';
        console.log(`${prefix} ${issue.type}: ${issue.description}`);
      });
      console.log('');
    }

    // Components by category
    console.log('📋 Component Categories:');
    
    const fullyCompatible = result.components.filter(c => c.compatibilityLevel === 'fully-compatible');
    if (fullyCompatible.length > 0) {
      console.log(`\n✅ Fully SSR Compatible (${fullyCompatible.length}):`);
      fullyCompatible.slice(0, 10).forEach(comp => console.log(`   • ${comp.name}`));
      if (fullyCompatible.length > 10) console.log(`   ... and ${fullyCompatible.length - 10} more`);
    }

    const withHydration = result.components.filter(c => c.compatibilityLevel === 'compatible-with-hydration');
    if (withHydration.length > 0) {
      console.log(`\n🔄 Compatible with Hydration (${withHydration.length}):`);
      withHydration.slice(0, 10).forEach(comp => console.log(`   • ${comp.name} (${comp.issues.length} minor issues)`));
      if (withHydration.length > 10) console.log(`   ... and ${withHydration.length - 10} more`);
    }

    const clientOnly = result.components.filter(c => c.compatibilityLevel === 'client-only');
    if (clientOnly.length > 0) {
      console.log(`\n🖥️  Client-Only Components (${clientOnly.length}):`);
      clientOnly.slice(0, 10).forEach(comp => console.log(`   • ${comp.name}`));
      if (clientOnly.length > 10) console.log(`   ... and ${clientOnly.length - 10} more`);
    }

    const needsRefactoring = result.components.filter(c => c.compatibilityLevel === 'requires-refactoring');
    if (needsRefactoring.length > 0) {
      console.log(`\n🔧 Requires Refactoring (${needsRefactoring.length}):`);
      needsRefactoring.slice(0, 10).forEach(comp => {
        const blocking = comp.issues.filter(i => i.severity === 'blocking').length;
        console.log(`   • ${comp.name} (${comp.issues.length} issues, ${blocking} blocking)`);
      });
      if (needsRefactoring.length > 10) console.log(`   ... and ${needsRefactoring.length - 10} more`);
    }

    // Next steps
    console.log('\n📋 Recommended Next Steps:');
    console.log('1. 🚀 Fix quick wins - automated fixes available');
    console.log('2. 🔧 Refactor blocking issues in critical components');
    console.log('3. 🖥️  Mark heavy interactive components as client-only');
    console.log('4. 🧪 Set up SSR testing pipeline');
    console.log('5. 📚 Review the detailed refactoring guide');

    console.log(`\n✅ Complete! Detailed reports available at: ${outputDir}`);
    console.log('   • ssr-analysis.md - Full markdown report');
    console.log('   • ssr-analysis.json - Machine-readable data');
    console.log('   • ssr-analysis.csv - Spreadsheet format');
    console.log('   • refactoring-guide.md - Step-by-step fixes');

  } catch (error) {
    console.error('❌ Analysis failed:', error);
    console.error('\n💡 Troubleshooting:');
    console.error('   • Check that the components path exists');
    console.error('   • Ensure TypeScript files are valid');
    console.error('   • Verify file permissions');
    process.exit(1);
  }
}

// Run if called directly
const isMainModule = import.meta.url === `file://${process.argv[1]}`;
if (isMainModule) {
  main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}
