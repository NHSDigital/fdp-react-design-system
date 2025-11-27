import fs from 'fs';
import path from 'path';
import { ComponentAnalysis, ComponentSSRIssue, SSRAnalysisResult, SSRCompatibilityLevel, SSRIssueType, RefactoringAction } from './types';

/**
 * Analyzes React components for Next.js SSR compatibility
 */
export class SSRAnalyzer {
  private componentsPath: string;
  private excludePatterns: string[] = [
    '*.test.tsx',
    '*.test.ts', 
    '*.stories.tsx',
    '*.d.ts',
    'index.ts'
  ];

  constructor(componentsPath: string) {
    this.componentsPath = componentsPath;
  }

  /**
   * Run full SSR analysis on all components
   */
  async runAnalysis(): Promise<SSRAnalysisResult> {
    const componentFiles = await this.findComponentFiles();
    const analyses: ComponentAnalysis[] = [];

    for (const filePath of componentFiles) {
      try {
        const analysis = await this.analyzeComponent(filePath);
        analyses.push(analysis);
      } catch (error) {
        console.warn(`Failed to analyze ${filePath}:`, error);
      }
    }

    return this.generateSummary(analyses);
  }

  /**
   * Find all component files to analyze
   */
  private async findComponentFiles(): Promise<string[]> {
    const files: string[] = [];
    
    const walkDir = async (dir: string): Promise<void> => {
      const entries = await fs.promises.readdir(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        if (entry.isDirectory()) {
          await walkDir(fullPath);
        } else if (entry.isFile() && this.shouldIncludeFile(entry.name)) {
          files.push(fullPath);
        }
      }
    };

    await walkDir(this.componentsPath);
    return files;
  }

  /**
   * Check if file should be included in analysis
   */
  private shouldIncludeFile(fileName: string): boolean {
    if (!fileName.endsWith('.tsx') && !fileName.endsWith('.ts')) {
      return false;
    }

    return !this.excludePatterns.some(pattern => {
      const regex = new RegExp(pattern.replace('*', '.*'));
      return regex.test(fileName);
    });
  }

  /**
   * Analyze a single component file
   */
  private async analyzeComponent(filePath: string): Promise<ComponentAnalysis> {
    const content = await fs.promises.readFile(filePath, 'utf-8');
    const issues = this.detectSSRIssues(content);
    
    const name = this.extractComponentName(filePath);
    const hasHooks = this.detectHooks(content);
    const usesBrowserAPIs = this.detectBrowserAPIs(content);
    const usesDOM = this.detectDOMUsage(content);
    
    const compatibilityLevel = this.determineCompatibilityLevel(issues, hasHooks, usesBrowserAPIs, usesDOM);
    const canBeServerSide = compatibilityLevel === 'fully-compatible';
    
    const refactoringNeeded = this.generateRefactoringActions(issues, compatibilityLevel);

    return {
      name,
      filePath,
      compatibilityLevel,
      issues,
      hasHooks,
      usesBrowserAPIs,
      usesDOM,
      canBeServerSide,
      refactoringNeeded
    };
  }

  /**
   * Detect SSR issues in component code
   */
  private detectSSRIssues(content: string): ComponentSSRIssue[] {
    const issues: ComponentSSRIssue[] = [];
    const lines = content.split('\n');

    // Define patterns for different SSR issues
    const patterns: Array<{
      regex: RegExp;
      type: SSRIssueType;
      severity: 'low' | 'medium' | 'high' | 'blocking';
      description: string;
      suggestion: string;
      canAutoFix: boolean;
    }> = [
      {
        regex: /\buseEffect\s*\(/g,
        type: 'useEffect',
        severity: 'medium',
        description: 'useEffect runs only on client side',
        suggestion: 'Consider moving to useLayoutEffect for DOM measurements or add SSR guards',
        canAutoFix: false
      },
      {
        regex: /\buseLayoutEffect\s*\(/g,
        type: 'useLayoutEffect',
        severity: 'high',
        description: 'useLayoutEffect does not run during SSR',
        suggestion: 'Add SSR guard or use useEffect with proper fallbacks',
        canAutoFix: true
      },
      {
        regex: /\bwindow\./g,
        type: 'window-object',
        severity: 'blocking',
        description: 'Direct window object access',
        suggestion: 'Add typeof window !== "undefined" check or use in useEffect',
        canAutoFix: true
      },
      {
        regex: /\bdocument\./g,
        type: 'document-object',
        severity: 'blocking',
        description: 'Direct document object access',
        suggestion: 'Add typeof document !== "undefined" check or use in useEffect',
        canAutoFix: true
      },
      {
        regex: /\blocalStorage\b/g,
        type: 'localStorage',
        severity: 'blocking',
        description: 'localStorage is not available during SSR',
        suggestion: 'Add browser check or use a library like use-local-storage-state',
        canAutoFix: true
      },
      {
        regex: /\bsessionStorage\b/g,
        type: 'sessionStorage',
        severity: 'blocking',
        description: 'sessionStorage is not available during SSR',
        suggestion: 'Add browser check or use state management library',
        canAutoFix: true
      },
      {
        regex: /\bnavigator\./g,
        type: 'navigator',
        severity: 'high',
        description: 'Navigator API access',
        suggestion: 'Add browser check and fallback values',
        canAutoFix: true
      },
      {
        regex: /\baddEventListener\s*\(/g,
        type: 'event-listener',
        severity: 'medium',
        description: 'Event listener setup',
        suggestion: 'Move to useEffect hook',
        canAutoFix: true
      },
      {
        regex: /\bResizeObserver\b/g,
        type: 'resize-observer',
        severity: 'high',
        description: 'ResizeObserver API usage',
        suggestion: 'Add feature detection and fallbacks',
        canAutoFix: true
      },
      {
        regex: /\bIntersectionObserver\b/g,
        type: 'intersection-observer',
        severity: 'high',
        description: 'IntersectionObserver API usage',
        suggestion: 'Add feature detection and fallbacks',
        canAutoFix: true
      },
      {
        regex: /\bmatchMedia\s*\(/g,
        type: 'media-query',
        severity: 'high',
        description: 'matchMedia API usage',
        suggestion: 'Add window check and use CSS media queries for initial render',
        canAutoFix: true
      }
    ];

    // Scan each line for issues
    lines.forEach((line, index) => {
      patterns.forEach(pattern => {
        const matches = line.matchAll(pattern.regex);
        for (const match of matches) {
          issues.push({
            type: pattern.type,
            line: index + 1,
            code: line.trim(),
            severity: pattern.severity,
            description: pattern.description,
            suggestion: pattern.suggestion,
            canAutoFix: pattern.canAutoFix
          });
        }
      });
    });

    return issues;
  }

  /**
   * Detect React hooks usage
   */
  private detectHooks(content: string): boolean {
    const hookPatterns = [
      /\buseState\s*\(/,
      /\buseEffect\s*\(/,
      /\buseLayoutEffect\s*\(/,
      /\buseRef\s*\(/,
      /\buseCallback\s*\(/,
      /\buseMemo\s*\(/,
      /\buseContext\s*\(/,
      /\buseReducer\s*\(/,
      /\buse[A-Z][a-zA-Z]*\s*\(/ // Custom hooks
    ];

    return hookPatterns.some(pattern => pattern.test(content));
  }

  /**
   * Detect browser API usage
   */
  private detectBrowserAPIs(content: string): boolean {
    const browserAPIPatterns = [
      /\bfetch\s*\(/,
      /\bWebSocket\b/,
      /\bFileReader\b/,
      /\bBlob\b/,
      /\bURL\.createObjectURL\b/,
      /\bgetComputedStyle\b/,
      /\brequestAnimationFrame\b/,
      /\bsetTimeout\b/,
      /\bsetInterval\b/
    ];

    return browserAPIPatterns.some(pattern => pattern.test(content));
  }

  /**
   * Detect DOM usage
   */
  private detectDOMUsage(content: string): boolean {
    const domPatterns = [
      /\bquerySelector\b/,
      /\bgetElementBy\b/,
      /\b\.offsetWidth\b/,
      /\b\.offsetHeight\b/,
      /\b\.scrollTop\b/,
      /\b\.clientWidth\b/,
      /\b\.getBoundingClientRect\b/
    ];

    return domPatterns.some(pattern => pattern.test(content));
  }

  /**
   * Determine SSR compatibility level
   */
  private determineCompatibilityLevel(
    issues: ComponentSSRIssue[],
    hasHooks: boolean,
    usesBrowserAPIs: boolean,
    usesDOM: boolean
  ): SSRCompatibilityLevel {
    const blockingIssues = issues.filter(issue => issue.severity === 'blocking');
    const highSeverityIssues = issues.filter(issue => issue.severity === 'high');
    
    if (blockingIssues.length > 0) {
      return 'requires-refactoring';
    }
    
    if (highSeverityIssues.length > 0 || (usesBrowserAPIs && usesDOM)) {
      return 'client-only';
    }
    
    if (hasHooks && (usesBrowserAPIs || usesDOM)) {
      return 'compatible-with-hydration';
    }
    
    return 'fully-compatible';
  }

  /**
   * Generate refactoring actions
   */
  private generateRefactoringActions(issues: ComponentSSRIssue[], compatibilityLevel: SSRCompatibilityLevel): RefactoringAction[] {
    const actions: RefactoringAction[] = [];

    if (compatibilityLevel === 'requires-refactoring') {
      // Blocking issues need major refactoring
      const blockingIssues = issues.filter(i => i.severity === 'blocking');
      
      if (blockingIssues.length > 0) {
        actions.push({
          type: 'add-ssr-guard' as const,
          description: 'Add SSR guards for browser-only code',
          automated: true,
          complexity: 'medium' as const,
          example: `
// Before: window.innerWidth
// After: typeof window !== 'undefined' ? window.innerWidth : 0`
        });
      }
    }

    if (compatibilityLevel === 'client-only') {
      actions.push({
        type: 'wrap-use-client' as const,
        description: 'Wrap component with "use client" directive',
        automated: true,
        complexity: 'low' as const,
        example: `'use client';\n\nimport React from 'react';`
      });
    }

    // Add dynamic import suggestion for heavy components
    if (issues.length > 5) {
      actions.push({
        type: 'dynamic-import' as const,
        description: 'Consider lazy loading this component',
        automated: false,
        complexity: 'medium' as const,
        example: `
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});`
      });
    }

    return actions;
  }

  /**
   * Extract component name from file path
   */
  private extractComponentName(filePath: string): string {
    const fileName = path.basename(filePath, path.extname(filePath));
    return fileName;
  }

  /**
   * Generate analysis summary
   */
  private generateSummary(analyses: ComponentAnalysis[]): SSRAnalysisResult {
    const totalComponents = analyses.length;
    const fullyCompatible = analyses.filter(a => a.compatibilityLevel === 'fully-compatible').length;
    const compatibleWithHydration = analyses.filter(a => a.compatibilityLevel === 'compatible-with-hydration').length;
    const clientOnly = analyses.filter(a => a.compatibilityLevel === 'client-only').length;
    const requiresRefactoring = analyses.filter(a => a.compatibilityLevel === 'requires-refactoring').length;

    const overallCompatibility = Math.round(
      ((fullyCompatible + compatibleWithHydration * 0.7 + clientOnly * 0.3) / totalComponents) * 100
    );

    // Find major issues
    const majorIssues = analyses
      .flatMap(a => a.issues)
      .filter(issue => issue.severity === 'blocking' || issue.severity === 'high')
      .slice(0, 10); // Top 10 issues

    // Find quick wins (components that need minimal changes)
    const quickWins = analyses.filter(a => 
      a.compatibilityLevel === 'requires-refactoring' && 
      a.issues.filter(i => i.canAutoFix).length > a.issues.length * 0.8
    );

    // Find complex refactors
    const complexRefactors = analyses.filter(a => 
      a.compatibilityLevel === 'requires-refactoring' && 
      a.refactoringNeeded.some(r => r.complexity === 'high')
    );

    return {
      totalComponents,
      fullyCompatible,
      compatibleWithHydration,
      clientOnly,
      requiresRefactoring,
      components: analyses,
      summary: {
        overallCompatibility,
        majorIssues,
        quickWins,
        complexRefactors
      }
    };
  }
}

/**
 * Main function to run SSR analysis
 */
export async function runSSRAnalysis(componentsPath: string): Promise<SSRAnalysisResult> {
  const analyzer = new SSRAnalyzer(componentsPath);
  return analyzer.runAnalysis();
}
