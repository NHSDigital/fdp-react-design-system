# NHS FDP Design System - SSR Analysis Suite

A comprehensive testing framework to analyze React component compatibility with Next.js Server-Side Rendering (SSR) and identify required refactoring for optimal server-side performance.

## Overview

This suite analyzes all components in the NHS FDP Design System to:

- ✅ **Identify SSR-compatible components** that work out-of-the-box
- 🔄 **Find components compatible with hydration** (minor client-side setup needed)
- 🖥️ **Detect client-only components** that require browser APIs
- 🔧 **Highlight components needing refactoring** for SSR compatibility
- 🚀 **Provide automated fixes** for common SSR issues
- 📊 **Generate comprehensive reports** with actionable recommendations

## Quick Start

### Run Analysis

```bash
# Analyze all components
npm run analyze:ssr

# Analyze specific directory
npm run analyze:ssr ./src/components ./custom-report

# Run tests
npm run test:ssr
```

### View Results

After analysis, check the generated reports in `./ssr-analysis-report/`:

- **`ssr-analysis.md`** - Complete markdown report
- **`ssr-analysis.json`** - Machine-readable data  
- **`ssr-analysis.csv`** - Spreadsheet format
- **`refactoring-guide.md`** - Step-by-step migration guide

## Analysis Categories

### ✅ Fully SSR Compatible
Components that render perfectly on the server without any modifications.

**Characteristics:**
- No browser API usage
- Pure rendering logic
- No client-side state management
- No DOM manipulation

**Example:**
```typescript
// ✅ SSR-friendly component
export const Tag: React.FC<TagProps> = ({ text, color }) => {
  return <span className={`nhs-tag nhs-tag--${color}`}>{text}</span>;
};
```

### 🔄 Compatible with Hydration
Components that work with SSR but require client-side setup for full functionality.

**Characteristics:**
- Uses React hooks (useState, useRef)
- Client-side event handling
- No direct browser API access

**Example:**
```typescript
// 🔄 Hydration-compatible component
export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <div>
      {tabs.map((tab, index) => (
        <button key={index} onClick={() => setActiveTab(index)}>
          {tab.label}
        </button>
      ))}
    </div>
  );
};
```

### 🖥️ Client-Only Components
Components that require browser APIs and should run only on the client.

**Characteristics:**
- Heavy browser API usage
- Complex client interactions
- Performance-intensive operations

**Usage:**
```typescript
'use client';

import { Header } from 'nhs-fdp-design-system';

// Or use dynamic imports
const Header = dynamic(() => import('nhs-fdp-design-system').then(m => m.Header), {
  ssr: false
});
```

### 🔧 Requires Refactoring
Components with SSR-blocking issues that can be fixed.

**Common Issues:**
- Direct `window` object access
- `localStorage`/`sessionStorage` usage
- `useLayoutEffect` without guards
- Direct DOM manipulation

## Automated Fixes

The suite can automatically fix many common SSR issues:

### Browser API Guards
```typescript
// ❌ Before
const width = window.innerWidth;

// ✅ After (auto-fixed)
const width = typeof window !== 'undefined' ? window.innerWidth : 1024;
```

### Storage Access
```typescript
// ❌ Before
const data = localStorage.getItem('key');

// ✅ After (auto-fixed)
const data = typeof window !== 'undefined' && window.localStorage 
  ? localStorage.getItem('key') 
  : null;
```

### Effect Hooks
```typescript
// ❌ Before
useLayoutEffect(() => {
  // DOM manipulation
}, []);

// ✅ After (auto-fixed)
useEffect(() => {
  // DOM manipulation - safe for SSR
}, []);
```

## API Reference

### Core Functions

#### `runSSRAnalysis(componentsPath: string)`
Analyzes all components in the specified directory.

```typescript
import { runSSRAnalysis } from './tests/ssr-analysis';

const result = await runSSRAnalysis('./src/components');
console.log(`Found ${result.totalComponents} components`);
console.log(`SSR Compatibility: ${result.summary.overallCompatibility}%`);
```

#### `generateSSRReport(result: SSRAnalysisResult, outputDir: string)`
Generates comprehensive reports in multiple formats.

```typescript
import { generateSSRReport } from './tests/ssr-analysis';

await generateSSRReport(result, './my-ssr-report');
```

### Types

```typescript
interface SSRAnalysisResult {
  totalComponents: number;
  fullyCompatible: number;
  compatibleWithHydration: number;
  clientOnly: number;
  requiresRefactoring: number;
  components: ComponentAnalysis[];
  summary: {
    overallCompatibility: number;
    majorIssues: ComponentSSRIssue[];
    quickWins: ComponentAnalysis[];
    complexRefactors: ComponentAnalysis[];
  };
}

interface ComponentAnalysis {
  name: string;
  filePath: string;
  compatibilityLevel: SSRCompatibilityLevel;
  issues: ComponentSSRIssue[];
  hasHooks: boolean;
  usesBrowserAPIs: boolean;
  usesDOM: boolean;
  canBeServerSide: boolean;
  refactoringNeeded: RefactoringAction[];
}
```

## Next.js Integration

### Basic Setup

```typescript
// app/layout.tsx
import { NHSThemeProvider } from 'nhs-fdp-design-system';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NHSThemeProvider>
          {children}
        </NHSThemeProvider>
      </body>
    </html>
  );
}
```

### Component Usage

```typescript
// app/page.tsx
import { Button, Tag, Breadcrumb } from 'nhs-fdp-design-system';
import dynamic from 'next/dynamic';

// SSR-compatible components
export default function Page() {
  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />
      <Button variant="primary">Continue</Button>
      <Tag text="Important" color="blue" />
    </div>
  );
}

// Client-only components
const Header = dynamic(() => 
  import('nhs-fdp-design-system').then(mod => ({ default: mod.Header })), 
  { ssr: false }
);
```

### Testing SSR

```typescript
// __tests__/ssr.test.tsx
import { renderToString } from 'react-dom/server';
import { Button } from 'nhs-fdp-design-system';

describe('SSR Compatibility', () => {
  it('renders Button without errors', () => {
    expect(() => {
      renderToString(<Button>Test</Button>);
    }).not.toThrow();
  });

  it('produces consistent markup', () => {
    const serverMarkup = renderToString(<Button>Test</Button>);
    expect(serverMarkup).toContain('nhs-button');
    expect(serverMarkup).toContain('Test');
  });
});
```

## Development Workflow

### 1. Run Analysis
```bash
npm run analyze:ssr
```

### 2. Review Results
Check the generated reports to understand component compatibility.

### 3. Apply Quick Fixes
Use the automated refactoring tool for simple issues:

```typescript
import { SSRRefactorTool } from './tests/ssr-analysis/refactor-tool';

const fixes = await SSRRefactorTool.autoFix(analysisResult.components, false);
console.log(`Fixed ${fixes.fixed} components`);
```

### 4. Manual Refactoring
For complex components, follow the generated refactoring guide.

### 5. Test Implementation
Add SSR tests to ensure components work correctly:

```typescript
// vitest.config.ts
export default defineConfig({
  test: {
    environment: 'node', // Test in Node.js environment
  },
});
```

### 6. Integrate with Next.js
Use the migration guide to properly integrate components.

## Performance Considerations

### Bundle Splitting
```typescript
// Separate client and server bundles
const ClientOnlyComponents = dynamic(() => import('./client-components'), {
  ssr: false
});
```

### Lazy Loading
```typescript
// Load heavy components on demand
const CharacterCount = dynamic(() => 
  import('nhs-fdp-design-system').then(m => m.CharacterCount),
  { loading: () => <div>Loading...</div> }
);
```

### Selective Hydration
```typescript
// Only hydrate interactive components
'use client';

import { Header } from 'nhs-fdp-design-system';
```

## Troubleshooting

### Common Issues

**Hydration Mismatch**
```
Error: Hydration failed because the initial UI does not match what was rendered on the server.
```

**Solution:** Ensure server and client render identical markup. Use SSR guards for dynamic content.

**Window/Document Undefined**
```
ReferenceError: window is not defined
```

**Solution:** Add browser checks before accessing browser APIs.

**useLayoutEffect Warning**
```
Warning: useLayoutEffect does nothing on the server
```

**Solution:** Replace with useEffect or add SSR guards.

### Debug Mode

Run analysis with verbose output:
```bash
DEBUG=ssr-analysis npm run analyze:ssr
```

## Contributing

### Adding New Detectors

```typescript
// Add new issue pattern to ssr-analyzer.ts
{
  regex: /\bnew\s+WebSocket\s*\(/g,
  type: 'websocket',
  severity: 'high',
  description: 'WebSocket usage requires client environment',
  suggestion: 'Move to useEffect or add SSR guard',
  canAutoFix: true
}
```

### Custom Refactoring Rules

```typescript
// Add to refactor-tool.ts
case 'websocket':
  return this.fixWebSocketUsage(content, issue);
```

## Roadmap

- [ ] AST-based analysis for more accurate detection
- [ ] IDE integration (VS Code extension)
- [ ] Real-time analysis during development
- [ ] Integration with build tools (Webpack, Vite)
- [ ] Performance impact analysis
- [ ] Automatic Next.js configuration generation

---

## License

This SSR analysis suite is part of the NHS FDP Design System and follows the same licensing terms.

## Support

For issues and questions:
- 📖 Check the generated refactoring guide
- 🐛 Report issues in the main repository
- 💬 Join discussions in the NHS FDP community
