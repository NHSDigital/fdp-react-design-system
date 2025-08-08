import { describe, it, expect, vi, beforeEach } from 'vitest';
import { runSSRAnalysis, SSRAnalyzer } from './ssr-analyzer';
import fs from 'fs';

// Mock fs
vi.mock('fs', () => ({
  promises: {
    readdir: vi.fn(),
    readFile: vi.fn(),
    writeFile: vi.fn(),
    mkdir: vi.fn()
  }
}));

const mockFs = fs as any;

describe('SSR Analyzer', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Component Analysis', () => {
    it('should identify fully compatible components', async () => {
      const simpleComponent = `
import React from 'react';

export const SimpleButton: React.FC = ({ children }) => {
  return <button className="nhs-button">{children}</button>;
};`;

      mockFs.promises.readdir.mockResolvedValue([
        { name: 'Button.tsx', isFile: () => true, isDirectory: () => false }
      ]);
      mockFs.promises.readFile.mockResolvedValue(simpleComponent);

      const analyzer = new (SSRAnalyzer as any)('./src/components');
      const result = await analyzer.runAnalysis();

      expect(result.fullyCompatible).toBe(1);
      expect(result.components[0].compatibilityLevel).toBe('fully-compatible');
    });

    it('should identify components requiring refactoring', async () => {
      const problematicComponent = `
import React, { useEffect, useState } from 'react';

export const ProblematicComponent: React.FC = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <div>Width: {width}</div>;
};`;

      mockFs.promises.readdir.mockResolvedValue([
        { name: 'Problematic.tsx', isFile: () => true, isDirectory: () => false }
      ]);
      mockFs.promises.readFile.mockResolvedValue(problematicComponent);

      const analyzer = new (SSRAnalyzer as any)('./src/components');
      const result = await analyzer.runAnalysis();

      expect(result.requiresRefactoring).toBe(1);
      expect(result.components[0].issues.length).toBeGreaterThan(0);
      expect(result.components[0].issues.some(i => i.type === 'window-object')).toBe(true);
    });

    it('should detect various SSR issues', async () => {
      const componentWithIssues = `
import React, { useLayoutEffect, useState } from 'react';

export const ComponentWithIssues: React.FC = () => {
  const [state, setState] = useState('');

  useLayoutEffect(() => {
    const data = localStorage.getItem('key');
    setState(data || '');
    
    const observer = new ResizeObserver(() => {});
    observer.observe(document.body);
    
    navigator.clipboard.writeText('test');
  }, []);

  return <div>{state}</div>;
};`;

      mockFs.promises.readdir.mockResolvedValue([
        { name: 'Issues.tsx', isFile: () => true, isDirectory: () => false }
      ]);
      mockFs.promises.readFile.mockResolvedValue(componentWithIssues);

      const analyzer = new (SSRAnalyzer as any)('./src/components');
      const result = await analyzer.runAnalysis();

      const component = result.components[0];
      const issueTypes = component.issues.map(i => i.type);

      expect(issueTypes).toContain('useLayoutEffect');
      expect(issueTypes).toContain('localStorage');
      expect(issueTypes).toContain('resize-observer');
      expect(issueTypes).toContain('document-object');
      expect(issueTypes).toContain('navigator');
    });

    it('should provide refactoring suggestions', async () => {
      const component = `
import React, { useEffect } from 'react';

export const Component: React.FC = () => {
  useEffect(() => {
    window.location.href = '/redirect';
  }, []);

  return <div>Component</div>;
};`;

      mockFs.promises.readdir.mockResolvedValue([
        { name: 'Component.tsx', isFile: () => true, isDirectory: () => false }
      ]);
      mockFs.promises.readFile.mockResolvedValue(component);

      const analyzer = new (SSRAnalyzer as any)('./src/components');
      const result = await analyzer.runAnalysis();

      const comp = result.components[0];
      expect(comp.refactoringNeeded.length).toBeGreaterThan(0);
      expect(comp.refactoringNeeded.some(a => a.type === 'add-ssr-guard')).toBe(true);
    });
  });

  describe('File Discovery', () => {
    it('should find TypeScript React files', async () => {
      mockFs.promises.readdir.mockImplementation((dir: string) => {
        if (dir === './src/components') {
          return Promise.resolve([
            { name: 'Button', isFile: () => false, isDirectory: () => true },
            { name: 'Header', isFile: () => false, isDirectory: () => true }
          ]);
        }
        if (dir.includes('Button')) {
          return Promise.resolve([
            { name: 'Button.tsx', isFile: () => true, isDirectory: () => false },
            { name: 'Button.test.tsx', isFile: () => true, isDirectory: () => false },
            { name: 'index.ts', isFile: () => true, isDirectory: () => false }
          ]);
        }
        if (dir.includes('Header')) {
          return Promise.resolve([
            { name: 'Header.tsx', isFile: () => true, isDirectory: () => false }
          ]);
        }
        return Promise.resolve([]);
      });

      mockFs.promises.readFile.mockResolvedValue('export const Component = () => <div />;');

      const result = await runSSRAnalysis('./src/components');
      
      // Should find 2 components (Button.tsx and Header.tsx), excluding test files
      expect(result.totalComponents).toBe(2);
    });

    it('should exclude test and story files', async () => {
      mockFs.promises.readdir.mockResolvedValue([
        { name: 'Component.tsx', isFile: () => true, isDirectory: () => false },
        { name: 'Component.test.tsx', isFile: () => true, isDirectory: () => false },
        { name: 'Component.stories.tsx', isFile: () => true, isDirectory: () => false },
        { name: 'index.ts', isFile: () => true, isDirectory: () => false }
      ]);

      mockFs.promises.readFile.mockResolvedValue('export const Component = () => <div />;');

      const analyzer = new (SSRAnalyzer as any)('./src/components');
      const result = await analyzer.runAnalysis();

      // Should only find Component.tsx
      expect(result.totalComponents).toBe(1);
    });
  });

  describe('Compatibility Levels', () => {
    it('should correctly categorize components by compatibility', async () => {
      const components = [
        { name: 'Simple.tsx', content: 'export const Simple = () => <div />;' },
        { name: 'WithHooks.tsx', content: 'import { useState } from "react"; export const WithHooks = () => { const [s] = useState(""); return <div />; };' },
        { name: 'ClientOnly.tsx', content: 'import { useEffect } from "react"; export const ClientOnly = () => { useEffect(() => { window.open("/"); }, []); return <div />; };' },
        { name: 'Broken.tsx', content: 'export const Broken = () => { localStorage.setItem("key", "value"); return <div />; };' }
      ];

      mockFs.promises.readdir.mockResolvedValue(
        components.map(c => ({ name: c.name, isFile: () => true, isDirectory: () => false }))
      );

      mockFs.promises.readFile.mockImplementation((filePath: string) => {
        const fileName = filePath.split('/').pop();
        const component = components.find(c => c.name === fileName);
        return Promise.resolve(component?.content || '');
      });

      const result = await runSSRAnalysis('./src/components');

      expect(result.fullyCompatible).toBe(1); // Simple
      expect(result.compatibleWithHydration).toBe(1); // WithHooks
      expect(result.clientOnly).toBe(1); // ClientOnly
      expect(result.requiresRefactoring).toBe(1); // Broken
    });
  });

  describe('Summary Generation', () => {
    it('should calculate overall compatibility percentage correctly', async () => {
      mockFs.promises.readdir.mockResolvedValue([
        { name: 'Component1.tsx', isFile: () => true, isDirectory: () => false },
        { name: 'Component2.tsx', isFile: () => true, isDirectory: () => false },
        { name: 'Component3.tsx', isFile: () => true, isDirectory: () => false },
        { name: 'Component4.tsx', isFile: () => true, isDirectory: () => false }
      ]);

      const contents = [
        'export const C1 = () => <div />;', // fully compatible
        'import { useState } from "react"; export const C2 = () => { useState(""); return <div />; };', // compatible with hydration
        'import { useEffect } from "react"; export const C3 = () => { useEffect(() => { window.open("/"); }, []); return <div />; };', // client only
        'export const C4 = () => { localStorage.setItem("key", "value"); return <div />; };' // requires refactoring
      ];

      mockFs.promises.readFile.mockImplementation((filePath: string, encoding: string) => {
        const index = parseInt(filePath.match(/Component(\d+)/)?.[1] || '1') - 1;
        return Promise.resolve(contents[index] || '');
      });

      const result = await runSSRAnalysis('./src/components');

      // 1 fully + 0.7*1 hydration + 0.3*1 client-only + 0*1 broken = 2.0/4 = 50%
      expect(result.summary.overallCompatibility).toBe(50);
    });
  });
});
