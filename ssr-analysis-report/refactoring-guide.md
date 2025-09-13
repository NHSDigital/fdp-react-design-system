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


### ChartEnhancer

**Issues to Fix:**
- useEffect runs only on client side (Line 33)
- Direct window object access (Line 51)
- Direct window object access (Line 52)

**Recommended Actions:**
- Add SSR guards for browser-only code
```typescript

// Before: window.innerWidth
// After: typeof window !== 'undefined' ? window.innerWidth : 0
```


### ChartWithTableTabs

**Issues to Fix:**
- Direct document object access (Line 145)
- Direct document object access (Line 150)
- Direct document object access (Line 152)

**Recommended Actions:**
- Add SSR guards for browser-only code
```typescript

// Before: window.innerWidth
// After: typeof window !== 'undefined' ? window.innerWidth : 0
```


### spc

**Issues to Fix:**
- Direct window object access (Line 399)
- Direct window object access (Line 418)

**Recommended Actions:**
- Add SSR guards for browser-only code
```typescript

// Before: window.innerWidth
// After: typeof window !== 'undefined' ? window.innerWidth : 0
```


### spcTestCases

**Issues to Fix:**
- Direct document object access (Line 2)

**Recommended Actions:**
- Add SSR guards for browser-only code
```typescript

// Before: window.innerWidth
// After: typeof window !== 'undefined' ? window.innerWidth : 0
```


### SPCSpark.types

**Issues to Fix:**
- Direct window object access (Line 32)

**Recommended Actions:**
- Add SSR guards for browser-only code
```typescript

// Before: window.innerWidth
// After: typeof window !== 'undefined' ? window.innerWidth : 0
```


### useFocusNav

**Issues to Fix:**
- useEffect runs only on client side (Line 17)
- Direct window object access (Line 19)
- Event listener setup (Line 19)
- Direct window object access (Line 20)

**Recommended Actions:**
- Add SSR guards for browser-only code
```typescript

// Before: window.innerWidth
// After: typeof window !== 'undefined' ? window.innerWidth : 0
```


### patterns

**Issues to Fix:**
- Direct document object access (Line 125)
- Direct document object access (Line 130)
- Direct document object access (Line 140)

**Recommended Actions:**
- Add SSR guards for browser-only code
```typescript

// Before: window.innerWidth
// After: typeof window !== 'undefined' ? window.innerWidth : 0
```


### FontDebugger

**Issues to Fix:**
- useEffect runs only on client side (Line 12)
- Direct document object access (Line 17)
- Direct document object access (Line 22)
- Direct document object access (Line 28)
- useEffect runs only on client side (Line 32)

**Recommended Actions:**
- Add SSR guards for browser-only code
```typescript

// Before: window.innerWidth
// After: typeof window !== 'undefined' ? window.innerWidth : 0
```


### GanttChart

**Issues to Fix:**
- Direct document object access (Line 88)
- Direct document object access (Line 108)
- useEffect runs only on client side (Line 211)
- Direct document object access (Line 240)
- Direct document object access (Line 245)
- Direct document object access (Line 253)
- Direct document object access (Line 317)
- Direct document object access (Line 322)
- Direct document object access (Line 330)
- useEffect runs only on client side (Line 450)
- ResizeObserver API usage (Line 453)
- ResizeObserver API usage (Line 454)
- ResizeObserver API usage (Line 454)
- ResizeObserver API usage (Line 454)

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
- useEffect runs only on client side (Line 40)
- useEffect runs only on client side (Line 48)
- Direct document object access (Line 59)
- Event listener setup (Line 59)
- Direct document object access (Line 60)
- Direct document object access (Line 89)
- Direct window object access (Line 104)
- ResizeObserver API usage (Line 124)
- useEffect runs only on client side (Line 125)
- Direct window object access (Line 133)
- ResizeObserver API usage (Line 143)
- Direct window object access (Line 150)
- useEffect runs only on client side (Line 156)

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
- useEffect runs only on client side (Line 106)
- useEffect runs only on client side (Line 154)
- Direct document object access (Line 220)
- Direct document object access (Line 225)
- Event listener setup (Line 255)
- Direct document object access (Line 272)
- Direct document object access (Line 275)
- Event listener setup (Line 298)
- useEffect runs only on client side (Line 638)
- useEffect runs only on client side (Line 643)
- useEffect runs only on client side (Line 656)
- useEffect runs only on client side (Line 798)
- useEffect runs only on client side (Line 820)
- Direct window object access (Line 823)
- Direct window object access (Line 832)
- Event listener setup (Line 832)
- Direct window object access (Line 833)
- useEffect runs only on client side (Line 858)
- useEffect runs only on client side (Line 872)
- Direct document object access (Line 881)
- localStorage is not available during SSR (Line 991)
- Direct window object access (Line 998)
- localStorage is not available during SSR (Line 1005)
- Direct window object access (Line 1010)
- localStorage is not available during SSR (Line 1010)
- useEffect runs only on client side (Line 1023)
- useEffect runs only on client side (Line 1031)
- localStorage is not available during SSR (Line 1035)
- Direct window object access (Line 1039)
- localStorage is not available during SSR (Line 1039)
- Direct window object access (Line 1046)
- Direct window object access (Line 1048)
- Direct window object access (Line 1048)
- Direct window object access (Line 1049)
- useEffect runs only on client side (Line 1075)
- useEffect runs only on client side (Line 1086)
- useEffect runs only on client side (Line 1099)
- useEffect runs only on client side (Line 1103)

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


### ProductRoadmap

**Issues to Fix:**
- Direct window object access (Line 116)
- Direct window object access (Line 117)
- Direct window object access (Line 117)
- matchMedia API usage (Line 117)
- Direct document object access (Line 120)

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
- Direct window object access (Line 68)
- Direct window object access (Line 69)
- Direct window object access (Line 69)
- Direct window object access (Line 69)
- Direct window object access (Line 69)
- Direct window object access (Line 69)
- Direct window object access (Line 69)
- matchMedia API usage (Line 69)
- Direct window object access (Line 70)
- Direct window object access (Line 70)
- Direct window object access (Line 70)
- Direct window object access (Line 70)
- Direct window object access (Line 70)
- Direct window object access (Line 70)
- matchMedia API usage (Line 70)
- useEffect runs only on client side (Line 167)
- Direct window object access (Line 178)
- Event listener setup (Line 178)
- Direct window object access (Line 179)
- Event listener setup (Line 179)
- Direct window object access (Line 182)
- Direct window object access (Line 183)
- Direct window object access (Line 183)
- Direct window object access (Line 183)
- Direct window object access (Line 183)
- Direct window object access (Line 183)
- matchMedia API usage (Line 183)
- Direct window object access (Line 185)
- Direct window object access (Line 186)
- Direct window object access (Line 186)
- Direct window object access (Line 186)
- Direct window object access (Line 186)
- Direct window object access (Line 186)
- matchMedia API usage (Line 186)
- Event listener setup (Line 191)
- Event listener setup (Line 192)
- Direct window object access (Line 195)
- Direct window object access (Line 196)
- useEffect runs only on client side (Line 204)
- ResizeObserver API usage (Line 233)
- ResizeObserver API usage (Line 235)
- ResizeObserver API usage (Line 236)
- ResizeObserver API usage (Line 236)
- ResizeObserver API usage (Line 236)
- ResizeObserver API usage (Line 236)
- Direct document object access (Line 240)
- Direct window object access (Line 246)
- Direct document object access (Line 275)
- Direct document object access (Line 280)
- Direct document object access (Line 293)
- Direct window object access (Line 298)
- Direct document object access (Line 299)
- Direct document object access (Line 304)

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
- Direct window object access (Line 107)

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

### Phase 1: Quick Wins (11 components)
- Apply automated fixes
- Add basic SSR guards
- Estimated time: 1-2 days

### Phase 2: Medium Refactoring (16 components)
- Restructure component logic
- Move browser code to effects
- Estimated time: 1-2 weeks

### Phase 3: Complex Components (0 components)
- Major architectural changes
- Consider client-only approach
- Estimated time: 2-4 weeks
