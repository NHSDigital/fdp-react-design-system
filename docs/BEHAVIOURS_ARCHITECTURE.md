# Behaviours System Architecture

## Overview

The NHS FDP Design System uses a dual-rendering approach:
- **SSR Components**: Render HTML structure on the server (Next.js App Router, Express, etc.)
- **Client Behaviours**: Enhance the HTML with interactivity after hydration

This architecture ensures:
- ✅ Fast initial page loads (SSR HTML)
- ✅ SEO-friendly content
- ✅ Progressive enhancement
- ✅ No hydration mismatches

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│  Server (Next.js App Router, Express, etc.)             │
│                                                          │
│  ┌────────────────────────────────────────────┐        │
│  │ SSR Components (from /ssr or main export)  │        │
│  │ - Button, Input, Radios, etc.              │        │
│  │ - Render complete HTML structure            │        │
│  │ - Include data-* attributes for behaviours  │        │
│  └────────────────────────────────────────────┘        │
│                      │                                   │
│                      │ HTML sent to browser              │
└──────────────────────┼───────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────┐
│  Client (Browser)                                        │
│                                                          │
│  1. React hydrates SSR HTML                             │
│  2. BehavioursLoader (Client Component) initializes     │
│  3. Vanilla JS behaviours enhance the DOM               │
│                                                          │
│  ┌────────────────────────────────────────────┐        │
│  │ BehavioursLoader (Client Component)        │        │
│  │ "use client"                                │        │
│  │                                             │        │
│  │ - Runs after React hydration                │        │
│  │ - Dynamically imports behaviours bundle     │        │
│  │ - Initializes vanilla JS behaviours         │        │
│  └────────────────────────────────────────────┘        │
│                      │                                   │
│                      ▼                                   │
│  ┌────────────────────────────────────────────┐        │
│  │ Vanilla JS Behaviours (/behaviours)        │        │
│  │ - buttonBehaviour.js                       │        │
│  │ - radiosBehaviour.js                       │        │
│  │ - headerBehaviour.js                       │        │
│  │ - etc.                                     │        │
│  │                                             │        │
│  │ Find DOM elements by data-module="..."     │        │
│  │ Add event listeners, state management      │        │
│  └────────────────────────────────────────────┘        │
└─────────────────────────────────────────────────────────┘
```

## Component Types

### 1. SSR Components (Server-Side)

**Import from:** `@nhsdigital/fdp-design-system/ssr` or main export

**Usage:**
```tsx
// app/page.tsx (Next.js App Router - Server Component)
import { Button, Radios, Input } from '@nhsdigital/fdp-design-system/ssr';

export default function Page() {
  return (
    <form>
      <Input name="email" label="Email" />
      <Radios 
        name="contact" 
        legend="How should we contact you?"
        items={[
          { value: 'email', label: 'Email' },
          { value: 'phone', label: 'Phone' }
        ]}
      />
      <Button>Submit</Button>
    </form>
  );
}
```

**Characteristics:**
- ✅ Render complete HTML on server
- ✅ Include `data-module` attributes for behaviour attachment
- ✅ No React hooks (useState, useEffect, etc.)
- ✅ No browser APIs (window, document)
- ✅ Fast, SEO-friendly

### 2. BehavioursLoader (Client Component)

**Import from:** `@nhsdigital/fdp-design-system/behaviours/react`

**Usage:**
```tsx
// app/layout.tsx (Next.js App Router - Server Component)
import { BehavioursLoader } from '@nhsdigital/fdp-design-system/behaviours/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        
        {/* 
          BehavioursLoader is a CLIENT component
          It runs AFTER hydration to enhance the SSR HTML
        */}
        <BehavioursLoader />
      </body>
    </html>
  );
}
```

**Characteristics:**
- ✅ Must be a Client Component (`"use client"`)
- ✅ Uses React hooks (useEffect)
- ✅ Runs after React hydration completes
- ✅ Dynamically imports vanilla JS behaviours
- ✅ Prevents hydration mismatches
- ❌ NOT for SSR rendering

**Why it needs "use client":**
- Uses `useEffect` hook (client-only)
- Accesses `window` object
- Dynamically imports at runtime
- Runs post-hydration logic

### 3. Vanilla JS Behaviours (Browser-Only)

**Import from:** `@nhsdigital/fdp-design-system/behaviours`

**Usage:**
```typescript
// Traditional approach (if not using React)
import { initAll } from '@nhsdigital/fdp-design-system/behaviours';

// After DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initAll();
});
```

**Characteristics:**
- ✅ Pure vanilla JavaScript
- ✅ No framework dependencies
- ✅ Progressive enhancement
- ✅ Find elements via `data-module` attributes
- ❌ Browser-only (no SSR)

## Common Patterns

### Pattern 1: Next.js App Router (Recommended)

```tsx
// app/layout.tsx (Server Component)
import { BehavioursLoader } from '@nhsdigital/fdp-design-system/behaviours/react';
import '@nhsdigital/fdp-design-system/css';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <BehavioursLoader />  {/* Client Component */}
      </body>
    </html>
  );
}
```

```tsx
// app/page.tsx (Server Component)
import { Button, Radios } from '@nhsdigital/fdp-design-system/ssr';

export default function Page() {
  return (
    <div>
      <Radios {...props} />
      <Button>Submit</Button>
    </div>
  );
}
```

### Pattern 2: Next.js Pages Router

```tsx
// pages/_app.tsx
import { BehavioursLoader } from '@nhsdigital/fdp-design-system/behaviours/react';
import '@nhsdigital/fdp-design-system/css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <BehavioursLoader />
    </>
  );
}
```

### Pattern 3: Express + Nunjucks (Traditional SSR)

```typescript
// server.ts
import express from 'express';
import nunjucks from 'nunjucks';

const app = express();

// Serve behaviours bundle
app.use('/static', express.static('node_modules/@nhsdigital/fdp-design-system/dist/behaviours'));

// In your template:
// <script src="/static/index.js"></script>
// <script>
//   document.addEventListener('DOMContentLoaded', () => {
//     window.nhsFdpBehaviours.initAll();
//   });
// </script>
```

## How Behaviours Work

### 1. Component Renders with data-module

```tsx
// SSR Component renders:
<div data-module="nhsuk-radios">
  <input type="radio" id="radio-1" name="contact" value="email">
  <label for="radio-1">Email</label>
  
  <input type="radio" id="radio-2" name="contact" value="phone">
  <label for="radio-2">Phone</label>
</div>
```

### 2. BehavioursLoader Initializes

```tsx
// After React hydration:
useEffect(() => {
  import('./behaviours').then(({ initAll }) => {
    initAll(document);  // Find all [data-module] and enhance
  });
}, []);
```

### 3. Behaviour Attaches Event Listeners

```javascript
// radiosBehaviour.js
export function initRadios(scope = document) {
  const radios = scope.querySelectorAll('[data-module="nhsuk-radios"]');
  
  radios.forEach(radio => {
    // Add conditional reveal logic
    // Add keyboard navigation
    // Add ARIA announcements
  });
}
```

## Troubleshooting

### Error: "createContext is not a function"

**Problem:** You're importing BehavioursLoader in a Server Component without the `"use client"` directive.

**Solution:** BehavioursLoader is ALWAYS a Client Component. Ensure:

```tsx
// ✅ CORRECT - Import in layout, use after children
// app/layout.tsx (Server Component is OK)
import { BehavioursLoader } from '@nhsdigital/fdp-design-system/behaviours/react';

export default function Layout({ children }) {
  return (
    <html>
      <body>
        {children}
        <BehavioursLoader />  {/* This is a client component */}
      </body>
    </html>
  );
}

// ❌ WRONG - Don't try to render BehavioursLoader in SSR context
// It's designed to run AFTER hydration, not during SSR
```

### Error: "Hydration mismatch"

**Problem:** Behaviours are modifying DOM before React hydration completes.

**Solution:** BehavioursLoader uses `useEffect` to ensure it runs AFTER hydration. Make sure you're using it correctly:

```tsx
// ✅ CORRECT - BehavioursLoader at end of body
<body>
  {children}
  <BehavioursLoader />
</body>

// ❌ WRONG - Behaviours run too early
<body>
  <BehavioursLoader />
  {children}
</body>
```

### Components Don't Have Interactivity

**Problem:** BehavioursLoader is not being rendered.

**Solution:**
1. Verify BehavioursLoader is in your layout
2. Check browser console for import errors
3. Verify components have `data-module` attributes

## API Reference

### BehavioursLoader Props

```typescript
interface BehavioursLoaderProps {
  /**
   * Optional scope to limit behaviour initialization.
   * Default: document (entire page)
   */
  scope?: ParentNode | null;
  
  /**
   * Callback after successful initialization
   */
  onInit?: () => void;
  
  /**
   * Callback if initialization fails
   */
  onError?: (error: unknown) => void;
}
```

### Usage Examples

```tsx
// Basic usage (entire document)
<BehavioursLoader />

// Scoped to specific container
<BehavioursLoader scope={containerRef.current} />

// With callbacks
<BehavioursLoader 
  onInit={() => console.log('Behaviours ready')}
  onError={(e) => console.error('Failed:', e)}
/>
```

## Key Concepts

1. **SSR Components render structure** - They create the HTML
2. **BehavioursLoader is the bridge** - It runs client-side to enhance SSR HTML
3. **Vanilla behaviours add interactivity** - Pure JS, no React dependency
4. **Progressive enhancement** - Content works without JS, enhanced with it

## When to Use What

| Scenario | Use | Why |
|----------|-----|-----|
| Rendering form fields | SSR Components | Static HTML, SEO-friendly |
| Adding interactivity | BehavioursLoader | Post-hydration enhancement |
| Custom client logic | Client Components | Need React hooks/state |
| Static content | SSR Components | Fast, cacheable |
| Dynamic interactions | Client Components | Real-time updates |

## Remember

- ✅ BehavioursLoader is ALWAYS a client component
- ✅ SSR components render HTML on the server
- ✅ Behaviours enhance HTML after hydration
- ✅ This prevents hydration mismatches
- ✅ Content works without JavaScript (progressive enhancement)

The error you're seeing means you're trying to use BehavioursLoader in an SSR context. It's designed to run **after** SSR, not during it!
