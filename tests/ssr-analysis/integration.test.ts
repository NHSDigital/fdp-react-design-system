import { describe, it, expect } from 'vitest';
import { runSSRAnalysis } from '../ssr-analysis';
import path from 'path';

describe('SSR Analysis Integration', () => {
  it('should analyze NHS FDP components and provide actionable insights', async () => {
    const componentsPath = path.resolve('./src/components');
    
    const result = await runSSRAnalysis(componentsPath);

    // Basic validation
    expect(result.totalComponents).toBeGreaterThan(0);
    expect(result.components).toHaveLength(result.totalComponents);
    
    // Summary should add up correctly
    const total = result.fullyCompatible + result.compatibleWithHydration + 
                  result.clientOnly + result.requiresRefactoring;
    expect(total).toBe(result.totalComponents);

    // Compatibility percentage should be reasonable
    expect(result.summary.overallCompatibility).toBeGreaterThanOrEqual(0);
    expect(result.summary.overallCompatibility).toBeLessThanOrEqual(100);

    // Each component should have required fields
    result.components.forEach(component => {
      expect(component.name).toBeTruthy();
      expect(component.filePath).toBeTruthy();
      expect(['fully-compatible', 'compatible-with-hydration', 'client-only', 'requires-refactoring'])
        .toContain(component.compatibilityLevel);
      expect(Array.isArray(component.issues)).toBe(true);
      expect(Array.isArray(component.refactoringNeeded)).toBe(true);
    });

    // Log results for manual inspection
    console.log('\n📊 NHS FDP SSR Analysis Results:');
    console.log(`Total Components: ${result.totalComponents}`);
    console.log(`Overall Compatibility: ${result.summary.overallCompatibility}%`);
    
    console.log('\nCompatibility Breakdown:');
    console.log(`✅ Fully Compatible: ${result.fullyCompatible}`);
    console.log(`🔄 Compatible w/ Hydration: ${result.compatibleWithHydration}`);
    console.log(`🖥️  Client-Only: ${result.clientOnly}`);
    console.log(`🔧 Requires Refactoring: ${result.requiresRefactoring}`);

    // Show sample issues
    const sampleIssues = result.summary.majorIssues.slice(0, 3);
    if (sampleIssues.length > 0) {
      console.log('\nSample Issues:');
      sampleIssues.forEach(issue => {
        console.log(`- ${issue.type}: ${issue.description}`);
      });
    }

    // Show quick wins
    if (result.summary.quickWins.length > 0) {
      console.log('\nQuick Wins Available:');
      result.summary.quickWins.slice(0, 3).forEach(comp => {
        const autoFixable = comp.issues.filter(i => i.canAutoFix).length;
        console.log(`- ${comp.name}: ${autoFixable}/${comp.issues.length} auto-fixable`);
      });
    }
  }, 30000); // 30 second timeout for full analysis

  it('should identify specific component patterns correctly', async () => {
    const componentsPath = path.resolve('./src/components');
    const result = await runSSRAnalysis(componentsPath);

    // Find specific components we know about
    const header = result.components.find(c => c.name.toLowerCase().includes('header'));
    const button = result.components.find(c => c.name.toLowerCase().includes('button'));
    const tag = result.components.find(c => c.name.toLowerCase().includes('tag'));

    // Header should be complex (uses lots of browser APIs)
    if (header) {
      expect(['client-only', 'requires-refactoring']).toContain(header.compatibilityLevel);
      expect(header.usesBrowserAPIs).toBe(true);
      expect(header.hasHooks).toBe(true);
      console.log(`\n🔍 Header Analysis: ${header.compatibilityLevel} (${header.issues.length} issues)`);
    }

    // Button might be simpler
    if (button) {
      console.log(`🔍 Button Analysis: ${button.compatibilityLevel} (${button.issues.length} issues)`);
    }

    // Tag should be very simple
    if (tag) {
      expect(tag.issues.length).toBeLessThanOrEqual(2); // Should have minimal issues
      console.log(`🔍 Tag Analysis: ${tag.compatibilityLevel} (${tag.issues.length} issues)`);
    }
  });

  it('should provide meaningful refactoring suggestions', async () => {
    const componentsPath = path.resolve('./src/components');
    const result = await runSSRAnalysis(componentsPath);

    const componentsNeedingRefactoring = result.components.filter(
      c => c.compatibilityLevel === 'requires-refactoring'
    );

    if (componentsNeedingRefactoring.length > 0) {
      const component = componentsNeedingRefactoring[0];
      
      expect(component.refactoringNeeded.length).toBeGreaterThan(0);
      
      component.refactoringNeeded.forEach(action => {
        expect(action.type).toBeTruthy();
        expect(action.description).toBeTruthy();
        expect(['low', 'medium', 'high']).toContain(action.complexity);
        expect(typeof action.automated).toBe('boolean');
      });

      console.log(`\n🔧 Sample Refactoring for ${component.name}:`);
      component.refactoringNeeded.slice(0, 2).forEach(action => {
        console.log(`- ${action.type}: ${action.description}`);
      });
    }
  });
});
