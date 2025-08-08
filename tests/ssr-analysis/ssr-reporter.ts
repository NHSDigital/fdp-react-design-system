import fs from 'fs';
import path from 'path';
import { SSRAnalysisResult, ComponentAnalysis } from './types';

/**
 * Generates comprehensive SSR analysis reports
 */
export class SSRReporter {
  
  /**
   * Generate a complete report in multiple formats
   */
  static async generateReport(result: SSRAnalysisResult, outputDir: string): Promise<void> {
    await fs.promises.mkdir(outputDir, { recursive: true });
    
    // Generate different report formats
    await Promise.all([
      this.generateMarkdownReport(result, path.join(outputDir, 'ssr-analysis.md')),
      this.generateJSONReport(result, path.join(outputDir, 'ssr-analysis.json')),
      this.generateCSVReport(result, path.join(outputDir, 'ssr-analysis.csv')),
      this.generateRefactoringGuide(result, path.join(outputDir, 'refactoring-guide.md'))
    ]);
  }

  /**
   * Generate Markdown report
   */
  private static async generateMarkdownReport(result: SSRAnalysisResult, filePath: string): Promise<void> {
    const { summary, components } = result;
    
    const markdown = `# NHS FDP Design System - SSR Compatibility Analysis

## Executive Summary

- **Total Components Analyzed**: ${result.totalComponents}
- **Overall SSR Compatibility**: ${summary.overallCompatibility}%
- **Fully Compatible**: ${result.fullyCompatible} (${Math.round(result.fullyCompatible/result.totalComponents*100)}%)
- **Compatible with Hydration**: ${result.compatibleWithHydration} (${Math.round(result.compatibleWithHydration/result.totalComponents*100)}%)
- **Client-Only**: ${result.clientOnly} (${Math.round(result.clientOnly/result.totalComponents*100)}%)
- **Requires Refactoring**: ${result.requiresRefactoring} (${Math.round(result.requiresRefactoring/result.totalComponents*100)}%)

## Quick Wins 🚀

Components that can be easily made SSR-compatible:

${summary.quickWins.map(comp => `- **${comp.name}**: ${comp.issues.filter(i => i.canAutoFix).length}/${comp.issues.length} issues auto-fixable`).join('\n')}

## Priority Issues

### Blocking Issues (Prevent SSR)
${summary.majorIssues.filter(i => i.severity === 'blocking').slice(0, 5).map(issue => 
  `- **${issue.type}**: ${issue.description}\n  \`\`\`\n  ${issue.code}\n  \`\`\`\n  **Fix**: ${issue.suggestion}\n`
).join('\n')}

## Component Breakdown

### ✅ Fully SSR Compatible (${result.fullyCompatible})
${components.filter(c => c.compatibilityLevel === 'fully-compatible').map(c => `- ${c.name}`).join('\n')}

### 🔄 Compatible with Hydration (${result.compatibleWithHydration})
${components.filter(c => c.compatibilityLevel === 'compatible-with-hydration').map(c => `- ${c.name} - ${c.issues.length} minor issues`).join('\n')}

### 🔧 Requires Refactoring (${result.requiresRefactoring})
${components.filter(c => c.compatibilityLevel === 'requires-refactoring').map(c => 
  `- **${c.name}**: ${c.issues.length} issues (${c.issues.filter(i => i.severity === 'blocking').length} blocking)`
).join('\n')}

### 🖥️ Client-Only (${result.clientOnly})
${components.filter(c => c.compatibilityLevel === 'client-only').map(c => `- ${c.name} - Complex client interactions`).join('\n')}

## Detailed Component Analysis

${components.map(comp => `
### ${comp.name}
- **File**: \`${comp.filePath}\`
- **Compatibility**: ${comp.compatibilityLevel}
- **Issues**: ${comp.issues.length}
- **Uses Hooks**: ${comp.hasHooks ? 'Yes' : 'No'}
- **Browser APIs**: ${comp.usesBrowserAPIs ? 'Yes' : 'No'}
- **DOM Access**: ${comp.usesDOM ? 'Yes' : 'No'}

#### Issues:
${comp.issues.map(issue => `- **${issue.type}** (Line ${issue.line}): ${issue.description}`).join('\n')}

#### Refactoring Actions:
${comp.refactoringNeeded.map(action => `- ${action.type}: ${action.description} (${action.complexity} complexity)`).join('\n')}
`).join('\n')}

## Next Steps

1. **Quick Wins**: Fix auto-fixable issues in ${summary.quickWins.length} components
2. **High Priority**: Address blocking issues in refactoring-required components
3. **Client Components**: Convert ${result.clientOnly} components to client-only
4. **Testing**: Set up SSR testing pipeline for all compatible components

## Automated Fixes Available

${result.components.flatMap(c => c.issues.filter(i => i.canAutoFix)).length} issues can be automatically fixed.
`;

    await fs.promises.writeFile(filePath, markdown, 'utf-8');
  }

  /**
   * Generate JSON report for programmatic use
   */
  private static async generateJSONReport(result: SSRAnalysisResult, filePath: string): Promise<void> {
    await fs.promises.writeFile(filePath, JSON.stringify(result, null, 2), 'utf-8');
  }

  /**
   * Generate CSV report for spreadsheet analysis
   */
  private static async generateCSVReport(result: SSRAnalysisResult, filePath: string): Promise<void> {
    const headers = [
      'Component Name',
      'File Path',
      'Compatibility Level',
      'Total Issues',
      'Blocking Issues',
      'High Issues',
      'Auto-fixable Issues',
      'Uses Hooks',
      'Browser APIs',
      'DOM Access',
      'Can be Server Side',
      'Refactoring Actions'
    ];

    const rows = result.components.map(comp => [
      comp.name,
      comp.filePath,
      comp.compatibilityLevel,
      comp.issues.length.toString(),
      comp.issues.filter(i => i.severity === 'blocking').length.toString(),
      comp.issues.filter(i => i.severity === 'high').length.toString(),
      comp.issues.filter(i => i.canAutoFix).length.toString(),
      comp.hasHooks.toString(),
      comp.usesBrowserAPIs.toString(),
      comp.usesDOM.toString(),
      comp.canBeServerSide.toString(),
      comp.refactoringNeeded.length.toString()
    ]);

    const csv = [headers, ...rows].map(row => row.join(',')).join('\n');
    await fs.promises.writeFile(filePath, csv, 'utf-8');
  }

  /**
   * Generate refactoring guide
   */
  private static async generateRefactoringGuide(result: SSRAnalysisResult, filePath: string): Promise<void> {
    const guide = `# SSR Refactoring Guide

## Auto-fixable Issues

### Browser API Guards
For direct browser API access, add safety checks:

\`\`\`typescript
// ❌ Before
const width = window.innerWidth;

// ✅ After  
const width = typeof window !== 'undefined' ? window.innerWidth : 0;
\`\`\`

### useLayoutEffect Fixes
\`\`\`typescript
// ❌ Before
useLayoutEffect(() => {
  // DOM manipulation
}, []);

// ✅ After
useEffect(() => {
  // DOM manipulation - runs after hydration
}, []);
\`\`\`

## Manual Refactoring Required

### Complex Interactive Components
Components with heavy client interaction should be client-only:

\`\`\`typescript
'use client';

import React from 'react';
// Component code...
\`\`\`

### Dynamic Imports for Heavy Components
\`\`\`typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});
\`\`\`

## Component-Specific Recommendations

${result.components
  .filter(c => c.compatibilityLevel === 'requires-refactoring')
  .map(comp => `
### ${comp.name}

**Issues to Fix:**
${comp.issues.map(issue => `- ${issue.description} (Line ${issue.line})`).join('\n')}

**Recommended Actions:**
${comp.refactoringNeeded.map(action => `- ${action.description}${action.example ? '\n```typescript\n' + action.example + '\n```' : ''}`).join('\n')}
`).join('\n')}

## Testing Strategy

1. **Unit Tests**: Ensure all components render without errors in Node.js environment
2. **SSR Tests**: Test server-side rendering output matches client-side
3. **Hydration Tests**: Verify no hydration mismatches occur
4. **E2E Tests**: Test full SSR flow in Next.js application

## Implementation Phases

### Phase 1: Quick Wins (${result.summary.quickWins.length} components)
- Apply automated fixes
- Add basic SSR guards
- Estimated time: 1-2 days

### Phase 2: Medium Refactoring (${result.components.filter(c => c.refactoringNeeded.some(r => r.complexity === 'medium')).length} components)
- Restructure component logic
- Move browser code to effects
- Estimated time: 1-2 weeks

### Phase 3: Complex Components (${result.summary.complexRefactors.length} components)
- Major architectural changes
- Consider client-only approach
- Estimated time: 2-4 weeks
`;

    await fs.promises.writeFile(filePath, guide, 'utf-8');
  }
}

/**
 * Main function to generate SSR report
 */
export async function generateSSRReport(result: SSRAnalysisResult, outputDir: string = './ssr-analysis-report'): Promise<void> {
  await SSRReporter.generateReport(result, outputDir);
  console.log(`📊 SSR Analysis report generated in: ${outputDir}`);
}
