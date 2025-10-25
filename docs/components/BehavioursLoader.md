# BehavioursLoader

React component for safely loading and initializing NHS FDP Design System behaviours after hydration in SSR environments.

## Overview

The `BehavioursLoader` component solves a critical challenge in server-side rendered (SSR) React applications: **how to initialize progressive enhancement behaviours without causing hydration mismatches or attribute conflicts**.

## Why This Exists

When using SSR (Next.js App Router, Remix, etc.), behaviours that manipulate the DOM can cause:

- ❌ Hydration mismatch warnings
- ❌ Attribute conflicts between server and client HTML
- ❌ Race conditions during React hydration
- ❌ Flickering or layout shifts

`BehavioursLoader` solves these by:

- ✅ Deferring behaviour initialization until **after** React hydration completes
- ✅ Dynamically importing the behaviours bundle (keeps it out of server chunks)
- ✅ Providing a clean, reusable API for behaviour lifecycle management
- ✅ Supporting both global and scoped initialization

## Installation

```bash
npm install @fergusbisset/nhs-fdp-design-system
```

## Basic Usage

### Next.js App Router (Recommended)

```tsx
// app/layout.tsx
import { BehavioursLoader } from '@fergusbisset/nhs-fdp-design-system/behaviours/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <BehavioursLoader />
      </body>
    </html>
  );
}
```

### Remix

```tsx
// app/root.tsx
import { BehavioursLoader } from '@fergusbisset/nhs-fdp-design-system/behaviours/react';

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <BehavioursLoader />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
```

## Advanced Usage

### Scoped Initialization

Initialize behaviours only within a specific container:

```tsx
'use client';
import { useRef } from 'react';
import { BehavioursLoader } from '@fergusbisset/nhs-fdp-design-system/behaviours/react';

export function FormSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={containerRef}>
      <form>
        {/* Your form components */}
      </form>
      <BehavioursLoader scope={containerRef.current} />
    </div>
  );
}
```

### With Callbacks

Track initialization status and handle errors:

```tsx
import { BehavioursLoader } from '@fergusbisset/nhs-fdp-design-system/behaviours/react';

export default function App({ children }) {
  return (
    <>
      {children}
      <BehavioursLoader
        onInit={() => {
          console.log('✅ Behaviours initialized');
          // Track analytics, enable features, etc.
        }}
        onError={(error) => {
          console.error('❌ Behaviour init failed:', error);
          // Log to error tracking service
        }}
      />
    </>
  );
}
```

### Dynamic Page Sections

For single-page apps with dynamic content:

```tsx
'use client';
import { useEffect, useRef } from 'react';
import { BehavioursLoader } from '@fergusbisset/nhs-fdp-design-system/behaviours/react';

export function DynamicSection({ content }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [key, setKey] = useState(0);
  
  useEffect(() => {
    // Force re-initialization when content changes
    setKey(k => k + 1);
  }, [content]);
  
  return (
    <div ref={containerRef}>
      {content}
      <BehavioursLoader 
        key={key} 
        scope={containerRef.current}
      />
    </div>
  );
}
```

## API Reference

### Props

```typescript
interface BehavioursLoaderProps {
  /**
   * Optional scope to limit behaviour initialization to a specific container.
   * If not provided, behaviours will be initialized on the entire document.
   * 
   * @default document
   */
  scope?: ParentNode | null;
  
  /**
   * Optional callback invoked after behaviours are successfully initialized.
   */
  onInit?: () => void;
  
  /**
   * Optional callback invoked if behaviour initialization fails.
   */
  onError?: (error: unknown) => void;
}
```

### Component Behavior

- **Client-only**: Uses `"use client"` directive - never runs during SSR
- **Deferred execution**: Waits for React hydration via `useEffect`
- **Dynamic import**: Loads behaviours bundle on-demand in browser only
- **Idempotent**: Safe to mount multiple instances (behaviours prevent duplicate initialization)
- **No visual output**: Returns `null` - purely functional

## How It Works

1. **Server Render**: Component is marked `"use client"`, so it's skipped during SSR
2. **Client Mount**: After React hydration, `useEffect` runs
3. **Module Guard**: Prevents auto-initialization from the behaviours module
4. **Dynamic Import**: Loads `@fergusbisset/nhs-fdp-design-system/behaviours/react` asynchronously
5. **Initialization**: Calls `initAll(scope)` to activate behaviours
6. **Callback**: Triggers `onInit()` or `onError()` based on result

## Behaviours Initialized

When `BehavioursLoader` runs, it initializes:

- **Buttons**: Double-click prevention, keyboard activation
- **Radios**: Arrow key navigation, conditional reveals
- **Checkboxes**: Conditional reveals
- **Character Count**: Live count updates, threshold warnings
- **Range Inputs**: Value synchronization
- **Headers**: Mobile menu, overflow handling
- **Skip Links**: Keyboard navigation

See [Behaviours Guide](../guides/behaviours.md) for details on each behaviour.

## Common Patterns

### Global + Scoped

Initialize globally, then add scoped loaders for dynamic sections:

```tsx
// app/layout.tsx - Global initialization
<BehavioursLoader />

// app/wizard/page.tsx - Scoped for wizard forms
'use client';
export function WizardPage() {
  const wizardRef = useRef(null);
  return (
    <div ref={wizardRef}>
      <WizardSteps />
      <BehavioursLoader scope={wizardRef.current} />
    </div>
  );
}
```

### Conditional Loading

Only load behaviours when needed:

```tsx
export function OptionalBehaviours({ enableBehaviours }) {
  if (!enableBehaviours) return null;
  return <BehavioursLoader />;
}
```

### With Loading State

Show loading indicator until behaviours are ready:

```tsx
'use client';
export function App({ children }) {
  const [ready, setReady] = useState(false);
  
  return (
    <>
      {!ready && <LoadingSpinner />}
      {children}
      <BehavioursLoader onInit={() => setReady(true)} />
    </>
  );
}
```

## Troubleshooting

### Behaviours not initializing

**Check**: Is the component actually mounting?
```tsx
<BehavioursLoader onInit={() => console.log('✅ Loaded')} />
```

**Check**: Are you using server components correctly?
```tsx
// ❌ Won't work - server component importing client component incorrectly
import { BehavioursLoader } from '...'; // Missing 'use client'

// ✅ Works - BehavioursLoader has 'use client' internally
import { BehavioursLoader } from '@fergusbisset/nhs-fdp-design-system/behaviours/react';
```

### Hydration warnings

If you still see hydration warnings, ensure:

1. `BehavioursLoader` is placed **after** your content
2. You're not calling `initAll()` manually elsewhere before hydration
3. Server-rendered HTML matches client HTML structure

### Duplicate initialization

Behaviours are idempotent - multiple `BehavioursLoader` instances are safe. Each element stores a handle to prevent re-initialization.

## Migration from Manual Init

### Before

```tsx
'use client';
import { useEffect } from 'react';

export function App({ children }) {
  useEffect(() => {
    import('@fergusbisset/nhs-fdp-design-system/behaviours/react')
      .then(({ initAll }) => initAll());
  }, []);
  
  return children;
}
```

### After

```tsx
import { BehavioursLoader } from '@fergusbisset/nhs-fdp-design-system/behaviours/react';

export function App({ children }) {
  return (
    <>
      {children}
      <BehavioursLoader />
    </>
  );
}
```

## See Also

- [Behaviours Guide](../guides/behaviours.md) - Complete behaviour documentation
- [SSR and Hydration Guide](../guides/ssr-and-hydration.mdx) - SSR best practices
- [Next.js Example](../../../examples/nextjs/) - Full Next.js integration example
