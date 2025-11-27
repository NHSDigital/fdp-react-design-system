# Behaviour Initialization for Server-Rendered HTML

This guide explains how to initialize vanilla JS behaviours for **server-rendered HTML** (e.g., from Nunjucks macros) without using React's "use client" directive.

## Important: React Components vs Server-Rendered HTML

**Do you need this?** It depends on what you're rendering:

### ✅ Use `InitBehaviours` if:
- You're rendering **server-side HTML** (Nunjucks macros, PHP, etc.)
- You're using **static HTML** without React
- You need **progressive enhancement** for plain HTML

### ❌ Don't need `InitBehaviours` if:
- You're using **React components** (Button, Header, Radios, etc.)
- React components **already have built-in interactivity**
- No additional initialization needed!

**Example**: If you're using `<Header />` React component in Next.js, the behaviour is already built-in. You only need `InitBehaviours` if you're rendering the header HTML directly from a Nunjucks macro.

---

## Problem with Old BehavioursLoader

The old `BehavioursLoader` component used React hooks (`useEffect`) which required the "use client" directive in Next.js App Router. This forced the entire component tree to become client-side, defeating the purpose of SSR.

## Solution: Script-Based Initialization

Use Next.js `Script` component or plain `<script>` tags to initialize behaviours after hydration. This keeps your server components as server components while still enabling client-side behaviour enhancements.

---

## Option 1: Next.js Script Component (Recommended)

**Best for**: Next.js App Router applications

### Usage

```tsx
// app/layout.tsx (Server Component - no "use client" needed!)
import { InitBehaviours } from '@nhsdigital/fdp-design-system/nextjs'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <InitBehaviours />
      </body>
    </html>
  )
}
```

### How It Works

1. `InitBehaviours` renders a Next.js `<Script>` component
2. Script runs `afterInteractive` (after hydration completes)
3. Dynamically imports behaviours bundle (keeps it out of server bundle)
4. Calls `initAll(document)` to enhance all components

### Benefits

- ✅ **No "use client"** - Layout stays as Server Component
- ✅ **Automatic hydration timing** - Next.js handles the complexity
- ✅ **Code splitting** - Behaviours bundle loads separately
- ✅ **Type-safe** - Full TypeScript support
- ✅ **Idempotent** - Safe to render multiple times

---

## Option 2: Inline Script (Alternative)

**Best for**: Apps that want behaviours bundled in main bundle

### Usage

```tsx
// app/layout.tsx
import { InitBehavioursInline } from '@nhsdigital/fdp-design-system/nextjs'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <InitBehavioursInline />
      </body>
    </html>
  )
}
```

### Difference from InitBehaviours

- **InitBehaviours**: Uses dynamic import (code splitting)
- **InitBehavioursInline**: Bundles behaviours with your app (larger initial bundle, no extra request)

---

## Option 3: Plain Script Tag

**Best for**: Non-Next.js apps, static sites, or custom setups

### Usage

```html
<!DOCTYPE html>
<html>
<body>
  <!-- Your SSR content here -->
  
  <!-- Load behaviours after content -->
  <script 
    src="/node_modules/@nhsdigital/fdp-design-system/dist/behaviours/init.js" 
    type="module"
    defer
  ></script>
</body>
</html>
```

### Or with CDN

```html
<script 
  src="https://unpkg.com/@nhsdigital/fdp-design-system/dist/behaviours/init.js"
  type="module"
  defer
></script>
```

---

## Option 4: Manual Initialization

**Best for**: Fine-grained control, SPAs, or custom timing

### Usage

```tsx
// app/ClientInitializer.tsx
'use client'
import { useEffect } from 'react'

export function ClientInitializer() {
  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return
    
    // Import and initialize
    import('@nhsdigital/fdp-design-system/behaviours')
      .then(({ initAll }) => {
        initAll(document)
      })
      .catch(console.error)
  }, [])
  
  return null
}
```

```tsx
// app/layout.tsx (Server Component)
import { ClientInitializer } from './ClientInitializer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ClientInitializer />
      </body>
    </html>
  )
}
```

**Note**: This still uses "use client", but only for a tiny wrapper component that doesn't affect your main layout.

---

## Comparison Table

| Method | "use client" Required? | Code Splitting | Next.js Specific | Complexity |
|--------|------------------------|----------------|------------------|------------|
| `<InitBehaviours />` | ❌ No | ✅ Yes | ✅ Yes | 🟢 Low |
| `<InitBehavioursInline />` | ❌ No | ❌ No | ✅ Yes | 🟢 Low |
| `<script>` tag | ❌ No | ✅ Yes | ❌ No | 🟡 Medium |
| Manual (useEffect) | ⚠️ Yes (tiny wrapper) | ✅ Yes | ❌ No | 🔴 High |

---

## Migration from Old BehavioursLoader

### Before (with "use client")

```tsx
// app/layout.tsx
import { BehavioursLoader } from '@nhsdigital/fdp-design-system/behaviours/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <BehavioursLoader /> {/* Forces client boundary! */}
      </body>
    </html>
  )
}
```

### After (pure server component)

```tsx
// app/layout.tsx
import { InitBehaviours } from '@nhsdigital/fdp-design-system/nextjs'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <InitBehaviours /> {/* No client boundary! */}
      </body>
    </html>
  )
}
```

---

## Advanced Usage

### Scoped Initialization

Initialize behaviours only within a specific container:

```tsx
'use client'
import { useEffect, useRef } from 'react'

export function ScopedSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (!containerRef.current) return
    
    import('@nhsdigital/fdp-design-system/behaviours')
      .then(({ initAll }) => {
        initAll(containerRef.current!) // Init only in this container
      })
  }, [])
  
  return (
    <div ref={containerRef}>
      {/* Components here will get behaviours */}
    </div>
  )
}
```

### Cleanup on Unmount

```tsx
'use client'
import { useEffect, useRef } from 'react'

export function ManagedSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (!containerRef.current) return
    
    let cleanup: (() => void) | undefined
    
    import('@nhsdigital/fdp-design-system/behaviours')
      .then(({ initAll, teardownAll }) => {
        initAll(containerRef.current!)
        cleanup = () => teardownAll(containerRef.current!)
      })
    
    return () => cleanup?.()
  }, [])
  
  return <div ref={containerRef}>{/* ... */}</div>
}
```

---

## Troubleshooting

### Behaviours not initializing

**Check**:
1. Verify `<InitBehaviours />` is rendered in layout
2. Check browser console for errors
3. Ensure components have proper data attributes (e.g., `data-module="nhsuk-button"`)

### Hydration warnings

**Solution**: Use `<InitBehaviours />` instead of manual `useEffect`. The Script component handles timing correctly.

### "Module not found" errors

**Check**:
1. Package is installed: `npm list @nhsdigital/fdp-design-system`
2. Import path is correct: `@nhsdigital/fdp-design-system/nextjs`
3. Build succeeded: `npm run build`

### Behaviours run too early (before hydration)

**Solution**: Use `strategy="afterInteractive"` in Script component (default in InitBehaviours)

---

## Performance Considerations

### Initial Bundle Size

- **InitBehaviours** (dynamic import): ~1KB script + separate behaviours bundle (~25KB)
- **InitBehavioursInline**: Behaviours bundled with app (~25KB in main bundle)

### Recommendation

Use `<InitBehaviours />` (with dynamic import) for:
- ✅ Better code splitting
- ✅ Faster initial page load
- ✅ Behaviours cache separately

Use `<InitBehavioursInline />` if:
- ⚠️ You want everything in one bundle
- ⚠️ You're having module resolution issues
- ⚠️ Your hosting doesn't support ES modules well

---

## Summary

**The recommended approach is `<InitBehaviours />`** from the `/nextjs` export:

```tsx
import { InitBehaviours } from '@nhsdigital/fdp-design-system/nextjs'
```

This gives you:
- ✅ No "use client" directive needed
- ✅ Server components stay server components
- ✅ Automatic code splitting
- ✅ Proper hydration timing
- ✅ Simple, declarative API
