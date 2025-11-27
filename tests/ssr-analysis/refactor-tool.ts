import fs from 'fs';
import path from 'path';
import { ComponentSSRIssue, ComponentAnalysis } from './types';

/**
 * Automated refactoring utility for common SSR issues
 */
export class SSRRefactorTool {
  
  /**
   * Apply automated fixes to components with auto-fixable issues
   */
  static async autoFix(components: ComponentAnalysis[], dryRun: boolean = true): Promise<{
    fixed: number;
    errors: string[];
    changes: Array<{ file: string; fixes: string[]; preview: string }>;
  }> {
    const results = {
      fixed: 0,
      errors: [] as string[],
      changes: [] as Array<{ file: string; fixes: string[]; preview: string }>
    };

    for (const component of components) {
      const autoFixableIssues = component.issues.filter(issue => issue.canAutoFix);
      
      if (autoFixableIssues.length === 0) continue;

      try {
        const fixes = await this.fixComponent(component, autoFixableIssues, dryRun);
        if (fixes) {
          results.changes.push(fixes);
          results.fixed++;
        }
      } catch (error) {
        results.errors.push(`Failed to fix ${component.name}: ${error}`);
      }
    }

    return results;
  }

  /**
   * Fix a single component
   */
  private static async fixComponent(
    component: ComponentAnalysis, 
    issues: ComponentSSRIssue[], 
    dryRun: boolean
  ): Promise<{ file: string; fixes: string[]; preview: string } | null> {
    const content = await fs.promises.readFile(component.filePath, 'utf-8');
    let fixedContent = content;
    const appliedFixes: string[] = [];

    // Apply fixes for each issue type
    for (const issue of issues) {
      const fix = this.getFixForIssue(issue, fixedContent);
      if (fix) {
        fixedContent = fix.newContent;
        appliedFixes.push(fix.description);
      }
    }

    // Only write if not dry run and changes were made
    if (!dryRun && fixedContent !== content) {
      await fs.promises.writeFile(component.filePath, fixedContent, 'utf-8');
    }

    if (fixedContent === content) return null;

    return {
      file: component.filePath,
      fixes: appliedFixes,
      preview: this.generatePreview(content, fixedContent)
    };
  }

  /**
   * Get fix for a specific issue
   */
  private static getFixForIssue(issue: ComponentSSRIssue, content: string): {
    newContent: string;
    description: string;
  } | null {
    
    switch (issue.type) {
      case 'window-object':
        return this.fixWindowAccess(content, issue);
      
      case 'document-object':
        return this.fixDocumentAccess(content, issue);
      
      case 'localStorage':
        return this.fixLocalStorageAccess(content, issue);
      
      case 'sessionStorage':
        return this.fixSessionStorageAccess(content, issue);
      
      case 'navigator':
        return this.fixNavigatorAccess(content, issue);
      
      case 'useLayoutEffect':
        return this.fixUseLayoutEffect(content, issue);
      
      case 'resize-observer':
        return this.fixResizeObserver(content, issue);
      
      case 'media-query':
        return this.fixMediaQuery(content, issue);
      
      default:
        return null;
    }
  }

  /**
   * Fix direct window object access
   */
  private static fixWindowAccess(content: string, issue: ComponentSSRIssue): {
    newContent: string;
    description: string;
  } {
    // Replace direct window access with SSR guard
    const windowPatterns = [
      /\bwindow\.innerWidth\b/g,
      /\bwindow\.innerHeight\b/g,
      /\bwindow\.location\b/g,
      /\bwindow\.screen\b/g,
      /\bwindow\.navigator\b/g
    ];

    let newContent = content;
    let fixes = 0;

    windowPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        matches.forEach(match => {
          const property = match.split('.')[1];
          const replacement = `(typeof window !== 'undefined' ? ${match} : ${this.getDefaultValue(property)})`;
          newContent = newContent.replace(match, replacement);
          fixes++;
        });
      }
    });

    return {
      newContent,
      description: `Added SSR guards for ${fixes} window property access`
    };
  }

  /**
   * Fix direct document object access
   */
  private static fixDocumentAccess(content: string, issue: ComponentSSRIssue): {
    newContent: string;
    description: string;
  } {
    const documentPatterns = [
      /\bdocument\.body\b/g,
      /\bdocument\.documentElement\b/g,
      /\bdocument\.getElementById\([^)]+\)/g,
      /\bdocument\.querySelector\([^)]+\)/g
    ];

    let newContent = content;
    let fixes = 0;

    documentPatterns.forEach(pattern => {
      newContent = newContent.replace(pattern, (match) => {
        fixes++;
        return `(typeof document !== 'undefined' ? ${match} : null)`;
      });
    });

    return {
      newContent,
      description: `Added SSR guards for ${fixes} document access calls`
    };
  }

  /**
   * Fix localStorage access
   */
  private static fixLocalStorageAccess(content: string, issue: ComponentSSRIssue): {
    newContent: string;
    description: string;
  } {
    // Wrap localStorage calls with try-catch and SSR guard
    const newContent = content.replace(
      /\blocalStorage\.(getItem|setItem|removeItem|clear)\([^)]*\)/g,
      (match) => {
        return `(typeof window !== 'undefined' && window.localStorage ? ${match} : ${
          match.includes('getItem') ? 'null' : 'undefined'
        })`;
      }
    );

    return {
      newContent,
      description: 'Added SSR guards for localStorage access'
    };
  }

  /**
   * Fix sessionStorage access
   */
  private static fixSessionStorageAccess(content: string, issue: ComponentSSRIssue): {
    newContent: string;
    description: string;
  } {
    const newContent = content.replace(
      /\bsessionStorage\.(getItem|setItem|removeItem|clear)\([^)]*\)/g,
      (match) => {
        return `(typeof window !== 'undefined' && window.sessionStorage ? ${match} : ${
          match.includes('getItem') ? 'null' : 'undefined'
        })`;
      }
    );

    return {
      newContent,
      description: 'Added SSR guards for sessionStorage access'
    };
  }

  /**
   * Fix navigator access
   */
  private static fixNavigatorAccess(content: string, issue: ComponentSSRIssue): {
    newContent: string;
    description: string;
  } {
    const newContent = content.replace(
      /\bnavigator\.([a-zA-Z]+)/g,
      (match, property) => {
        const defaultValue = this.getNavigatorDefault(property);
        return `(typeof navigator !== 'undefined' ? ${match} : ${defaultValue})`;
      }
    );

    return {
      newContent,
      description: 'Added SSR guards for navigator access'
    };
  }

  /**
   * Fix useLayoutEffect usage
   */
  private static fixUseLayoutEffect(content: string, issue: ComponentSSRIssue): {
    newContent: string;
    description: string;
  } {
    // Add SSR guard for useLayoutEffect
    const hasSSRGuard = content.includes('typeof window !== \'undefined\'');
    
    if (!hasSSRGuard) {
      // Simple replacement - in real implementation, would need more sophisticated AST parsing
      const newContent = content.replace(
        /\buseLayoutEffect\s*\(/g,
        'useEffect('
      );

      return {
        newContent,
        description: 'Replaced useLayoutEffect with useEffect for SSR compatibility'
      };
    }

    return {
      newContent: content,
      description: 'useLayoutEffect already has SSR guard'
    };
  }

  /**
   * Fix ResizeObserver usage
   */
  private static fixResizeObserver(content: string, issue: ComponentSSRIssue): {
    newContent: string;
    description: string;
  } {
    const newContent = content.replace(
      /\bnew\s+ResizeObserver\s*\(/g,
      '(typeof ResizeObserver !== \'undefined\' ? new ResizeObserver(' 
    ).replace(
      /observer\.observe\s*\(/g,
      'observer?.observe('
    );

    return {
      newContent,
      description: 'Added ResizeObserver feature detection'
    };
  }

  /**
   * Fix matchMedia usage
   */
  private static fixMediaQuery(content: string, issue: ComponentSSRIssue): {
    newContent: string;
    description: string;
  } {
    const newContent = content.replace(
      /\bwindow\.matchMedia\s*\(/g,
      '(typeof window !== \'undefined\' && window.matchMedia ? window.matchMedia('
    );

    return {
      newContent,
      description: 'Added SSR guard for matchMedia'
    };
  }

  /**
   * Get default values for window properties
   */
  private static getDefaultValue(property: string): string {
    const defaults: Record<string, string> = {
      'innerWidth': '1024',
      'innerHeight': '768', 
      'location': '{ href: "", pathname: "/" }',
      'screen': '{ width: 1024, height: 768 }',
      'navigator': '{ userAgent: "" }'
    };
    
    return defaults[property] || '0';
  }

  /**
   * Get default values for navigator properties
   */
  private static getNavigatorDefault(property: string): string {
    const defaults: Record<string, string> = {
      'userAgent': '""',
      'language': '"en-US"',
      'platform': '""',
      'onLine': 'true'
    };
    
    return defaults[property] || '""';
  }

  /**
   * Generate a preview of changes
   */
  private static generatePreview(original: string, fixed: string): string {
    const originalLines = original.split('\n');
    const fixedLines = fixed.split('\n');
    
    const changes: string[] = [];
    
    for (let i = 0; i < Math.max(originalLines.length, fixedLines.length); i++) {
      const origLine = originalLines[i] || '';
      const fixedLine = fixedLines[i] || '';
      
      if (origLine !== fixedLine) {
        changes.push(`Line ${i + 1}:`);
        changes.push(`- ${origLine}`);
        changes.push(`+ ${fixedLine}`);
        changes.push('');
      }
      
      // Limit preview to first 5 changes
      if (changes.length > 20) {
        changes.push('... (more changes)');
        break;
      }
    }
    
    return changes.join('\n');
  }
}

/**
 * Generate migration guide for Next.js
 */
export function generateMigrationGuide(analysis: ComponentAnalysis[]): string {
  const fullyCompatible = analysis.filter(c => c.compatibilityLevel === 'fully-compatible');
  const clientOnly = analysis.filter(c => c.compatibilityLevel === 'client-only');
  const needsRefactoring = analysis.filter(c => c.compatibilityLevel === 'requires-refactoring');

  return `# Next.js Migration Guide for NHS FDP Components

## Summary
- ✅ **${fullyCompatible.length} components** ready for SSR
- 🖥️ **${clientOnly.length} components** should be client-only
- 🔧 **${needsRefactoring.length} components** need refactoring

## Implementation Steps

### 1. Server-Side Compatible Components
These can be used directly in Next.js:

\`\`\`typescript
${fullyCompatible.slice(0, 10).map(c => `import { ${c.name} } from 'nhs-fdp-design-system';`).join('\n')}
\`\`\`

### 2. Client-Only Components  
Mark these with "use client" directive:

\`\`\`typescript
'use client';

import { ${clientOnly.slice(0, 5).map(c => c.name).join(', ')} } from 'nhs-fdp-design-system';
\`\`\`

### 3. Dynamic Imports for Heavy Components
For performance, lazy load interactive components:

\`\`\`typescript
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('nhs-fdp-design-system').then(mod => ({ default: mod.Header })), {
  ssr: false,
  loading: () => <div>Loading header...</div>
});
\`\`\`

### 4. Components Requiring Refactoring

${needsRefactoring.slice(0, 5).map(comp => `
#### ${comp.name}
**Issues:** ${comp.issues.map(i => i.type).join(', ')}
**Actions:** ${comp.refactoringNeeded.map(a => a.description).join(', ')}
`).join('')}

## Testing Strategy

1. **SSR Test**: Ensure components render without errors in Node.js
2. **Hydration Test**: Check for hydration mismatches
3. **E2E Test**: Full Next.js application testing

\`\`\`typescript
// Example SSR test
import { renderToString } from 'react-dom/server';
import { Button } from 'nhs-fdp-design-system';

test('Button renders on server', () => {
  expect(() => {
    renderToString(<Button>Test</Button>);
  }).not.toThrow();
});
\`\`\`
`;
}
