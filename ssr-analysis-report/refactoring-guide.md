# SSR Refactoring Guide

## Auto-fixable Issues

### Browser API Guards
For direct browser API access, add safety checks:

```typescript
// ❌ Before
const width = window.innerWidth;

// ✅ After  
const width = typeof window !== 'undefined' ? window.innerWidth : 0;
```

### useLayoutEffect Fixes
```typescript
// ❌ Before
useLayoutEffect(() => {
  // DOM manipulation
}, []);

// ✅ After
useEffect(() => {
  // DOM manipulation - runs after hydration
}, []);
```

## Manual Refactoring Required

### Complex Interactive Components
Components with heavy client interaction should be client-only:

```typescript
'use client';

import React from 'react';
// Component code...
```

### Dynamic Imports for Heavy Components
```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});
```

## Component-Specific Recommendations


### ChartWithTableTabs

**Issues to Fix:**
- Direct document object access (Line 107)
- Direct document object access (Line 112)
- Direct document object access (Line 114)

**Recommended Actions:**
- Add SSR guards for browser-only code
```typescript

// Before: window.innerWidth
// After: typeof window !== 'undefined' ? window.innerWidth : 0
```


### useFocusNav

**Issues to Fix:**
- useEffect runs only on client side (Line 17)
- Direct window object access (Line 18)
- Event listener setup (Line 18)
- Direct window object access (Line 19)

**Recommended Actions:**
- Add SSR guards for browser-only code
```typescript

// Before: window.innerWidth
// After: typeof window !== 'undefined' ? window.innerWidth : 0
```


### FontDebugger

**Issues to Fix:**
- useEffect runs only on client side (Line 11)
- Direct document object access (Line 13)
- Direct document object access (Line 18)
- Direct document object access (Line 23)
- Direct document object access (Line 56)
- Direct document object access (Line 57)

**Recommended Actions:**
- Add SSR guards for browser-only code
```typescript

// Before: window.innerWidth
// After: typeof window !== 'undefined' ? window.innerWidth : 0
```
- Consider lazy loading this component
```typescript

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});
```


### GanttChart

**Issues to Fix:**
- Direct document object access (Line 87)
- Direct document object access (Line 107)
- useEffect runs only on client side (Line 211)
- Direct document object access (Line 239)
- Direct document object access (Line 242)
- Direct document object access (Line 248)
- Direct document object access (Line 310)
- Direct document object access (Line 313)
- Direct document object access (Line 319)
- useEffect runs only on client side (Line 438)
- ResizeObserver API usage (Line 441)

**Recommended Actions:**
- Add SSR guards for browser-only code
```typescript

// Before: window.innerWidth
// After: typeof window !== 'undefined' ? window.innerWidth : 0
```
- Consider lazy loading this component
```typescript

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});
```


### Header

**Issues to Fix:**
- useEffect runs only on client side (Line 46)
- useEffect runs only on client side (Line 54)
- Direct window object access (Line 120)
- useEffect runs only on client side (Line 181)
- Direct document object access (Line 192)
- Event listener setup (Line 192)
- Direct document object access (Line 193)
- useEffect runs only on client side (Line 198)
- Direct window object access (Line 224)
- Direct window object access (Line 225)
- matchMedia API usage (Line 225)
- Event listener setup (Line 236)
- Direct window object access (Line 242)
- Event listener setup (Line 242)
- Direct window object access (Line 245)
- useEffect runs only on client side (Line 263)
- Direct document object access (Line 278)
- Event listener setup (Line 278)
- Direct document object access (Line 279)

**Recommended Actions:**
- Add SSR guards for browser-only code
```typescript

// Before: window.innerWidth
// After: typeof window !== 'undefined' ? window.innerWidth : 0
```
- Consider lazy loading this component
```typescript

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});
```


### NavigationSplitView

**Issues to Fix:**
- useEffect runs only on client side (Line 85)
- useEffect runs only on client side (Line 153)
- useEffect runs only on client side (Line 226)
- useEffect runs only on client side (Line 244)
- Direct window object access (Line 247)
- Direct window object access (Line 256)
- Event listener setup (Line 256)
- Direct window object access (Line 257)
- useEffect runs only on client side (Line 269)
- useEffect runs only on client side (Line 280)
- localStorage is not available during SSR (Line 363)
- Direct window object access (Line 366)
- localStorage is not available during SSR (Line 370)
- Direct window object access (Line 372)
- localStorage is not available during SSR (Line 372)
- useEffect runs only on client side (Line 379)
- useEffect runs only on client side (Line 383)
- localStorage is not available during SSR (Line 386)
- Direct window object access (Line 387)
- localStorage is not available during SSR (Line 387)
- Direct window object access (Line 390)
- Direct window object access (Line 392)
- Direct window object access (Line 392)
- Direct window object access (Line 393)
- useEffect runs only on client side (Line 408)
- useEffect runs only on client side (Line 417)
- useEffect runs only on client side (Line 428)
- useEffect runs only on client side (Line 432)

**Recommended Actions:**
- Add SSR guards for browser-only code
```typescript

// Before: window.innerWidth
// After: typeof window !== 'undefined' ? window.innerWidth : 0
```
- Consider lazy loading this component
```typescript

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});
```


### NavigationSplitView.types

**Issues to Fix:**
- localStorage is not available during SSR (Line 140)
- localStorage is not available during SSR (Line 141)

**Recommended Actions:**
- Add SSR guards for browser-only code
```typescript

// Before: window.innerWidth
// After: typeof window !== 'undefined' ? window.innerWidth : 0
```


### SkipLink

**Issues to Fix:**
- useEffect runs only on client side (Line 34)
- useEffect runs only on client side (Line 38)
- Direct document object access (Line 42)
- Direct document object access (Line 43)
- Direct document object access (Line 52)
- Direct window object access (Line 65)
- Direct window object access (Line 66)
- Direct document object access (Line 82)
- Event listener setup (Line 84)
- Direct window object access (Line 94)
- Direct window object access (Line 95)

**Recommended Actions:**
- Add SSR guards for browser-only code
```typescript

// Before: window.innerWidth
// After: typeof window !== 'undefined' ? window.innerWidth : 0
```
- Consider lazy loading this component
```typescript

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});
```


### useIntelligentLayout

**Issues to Fix:**
- Direct window object access (Line 61)
- Direct window object access (Line 62)
- Navigator API access (Line 67)
- Direct window object access (Line 68)
- Direct window object access (Line 69)
- matchMedia API usage (Line 69)
- Direct window object access (Line 70)
- matchMedia API usage (Line 70)
- useEffect runs only on client side (Line 167)
- Direct window object access (Line 178)
- Event listener setup (Line 178)
- Direct window object access (Line 179)
- Event listener setup (Line 179)
- Direct window object access (Line 182)
- matchMedia API usage (Line 182)
- Direct window object access (Line 183)
- matchMedia API usage (Line 183)
- Event listener setup (Line 187)
- Event listener setup (Line 188)
- Direct window object access (Line 191)
- Direct window object access (Line 192)
- useEffect runs only on client side (Line 200)
- ResizeObserver API usage (Line 226)
- ResizeObserver API usage (Line 228)
- Direct document object access (Line 233)
- Direct document object access (Line 267)
- Direct document object access (Line 273)
- Direct document object access (Line 277)
- Direct document object access (Line 283)
- Direct document object access (Line 289)
- Direct document object access (Line 294)

**Recommended Actions:**
- Add SSR guards for browser-only code
```typescript

// Before: window.innerWidth
// After: typeof window !== 'undefined' ? window.innerWidth : 0
```
- Consider lazy loading this component
```typescript

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});
```


### TransactionalPageTemplate

**Issues to Fix:**
- Direct window object access (Line 106)

**Recommended Actions:**
- Add SSR guards for browser-only code
```typescript

// Before: window.innerWidth
// After: typeof window !== 'undefined' ? window.innerWidth : 0
```


## Testing Strategy

1. **Unit Tests**: Ensure all components render without errors in Node.js environment
2. **SSR Tests**: Test server-side rendering output matches client-side
3. **Hydration Tests**: Verify no hydration mismatches occur
4. **E2E Tests**: Test full SSR flow in Next.js application

## Implementation Phases

### Phase 1: Quick Wins (7 components)
- Apply automated fixes
- Add basic SSR guards
- Estimated time: 1-2 days

### Phase 2: Medium Refactoring (10 components)
- Restructure component logic
- Move browser code to effects
- Estimated time: 1-2 weeks

### Phase 3: Complex Components (0 components)
- Major architectural changes
- Consider client-only approach
- Estimated time: 2-4 weeks
