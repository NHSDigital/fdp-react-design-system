# Next.js Quick Start (SSR + Behaviours)

## TL;DR - The Problem

You import `HeaderServer` from `/ssr` and it renders perfectly... but it's not interactive. No overflow menus, no keyboard navigation, nothing.

**Why?** The behaviours script isn't loading because you're only importing SSR components, not the behaviour layer.

## The Solution

Load the behaviours via a tiny client-only component provided by the library. This keeps your layout as a Server Component and ensures the behaviours are bundled in your app.

### Recommended: NHSBehavioursInit

```tsx
// app/layout.tsx (Server Component)
import '@nhsdigital/fdp-design-system/dist/nhs-fdp-design-system.css';
import { HeaderServer } from '@nhsdigital/fdp-design-system/ssr';
import { NHSBehavioursInit } from '@nhsdigital/fdp-design-system/nextjs';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NHSBehavioursInit />
        <HeaderServer
          service={{ text: 'My Service', href: '/' }}
          navigation={{ items: [ { href: '/', text: 'Home' }, { href: '/about', text: 'About' } ] }}
        />
        {children}
      </body>
    </html>
  );
}
```

Alternative (legacy): If you can’t use the component, create your own client-only wrapper that imports '@nhsdigital/fdp-design-system/behaviours'. Note: avoid manual script tags (e.g. adding a src directly) – this is brittle in Next.js and won’t help SSR inline dynamic imports.

## How to Verify It's Working

Open your browser DevTools console and check:

```javascript
window.__nhsInitAllBehaviours  // Should be a function
window.__nhsFdpBehavioursInitialized  // May be undefined, that's OK
```

Then test the Header:

1. **Resize your browser window** to make it narrower
2. **Look for a "More" dropdown** appearing when items don't fit
3. **Use arrow keys** to navigate the menu
4. **Check for `data-ssr-hydrating` attribute** - it should be removed from the `<nav>` element after the page loads

## Why This Wasn't Obvious

In **Storybook**, every story with a Header has a decorator that runs:

```tsx
useEffect(() => { initAll(); }, []);
```

So behaviours **automatically initialize** there. But in your Next.js app, nothing imports the behaviours module unless you explicitly do it.

## What the Behaviours Do

When you import `@nhsdigital/fdp-design-system/behaviours`, it:

1. **Auto-initializes** on DOM ready (code at bottom of `behaviours/index.ts`)
2. **Finds all headers** on the page (`.nhsuk-header`)
3. **Removes `data-ssr-hydrating`** marker from `<nav>` elements
4. **Measures navigation items** and available space
5. **Creates overflow dropdown** if items don't fit
6. **Adds keyboard navigation** (arrow keys, etc.)
7. **Sets up resize listeners** to recalculate on window resize

Without this, you just get the static SSR markup with no interactivity.

## Complete Working Example

```tsx
// app/layout.tsx
import '@nhsdigital/fdp-design-system/behaviours'  // ← The magic line
import { Header } from '@nhsdigital/fdp-design-system/ssr'
import '@nhsdigital/fdp-design-system/dist/nhs-fdp-design-system.css'

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en">
      <body>
        <Header
          service={{ text: 'NHS Digital Service', href: '/' }}
          navigation={{
            ariaLabel: 'Primary navigation',
            items: [
              { href: '/', text: 'Home', current: true },
              { href: '/appointments', text: 'Appointments' },
              { href: '/prescriptions', text: 'Prescriptions' },
              { href: '/messages', text: 'Messages' },
              { href: '/health-records', text: 'Health Records' },
              { href: '/account', text: 'Account' },
              { href: '/settings', text: 'Settings' },
              { href: '/help', text: 'Help' }
            ]
          }}
          account={{
            text: 'John Smith',
            href: '/account'
          }}
        />
        <main>{children}</main>
      </body>
    </html>
  )
}
```

Now your HeaderServer will:

✅ Render on server with all items visible  
✅ Load behaviours script on client  
✅ Remove hydration marker  
✅ Measure and create overflow menu if needed  
✅ Respond to window resize  
✅ Support keyboard navigation  

## Still Not Working?

Check these:

1. **Console errors?** Look for import/module errors
2. **Script loaded?** Check Network tab for `behaviours/index.js`
3. **Window check:** Type `window.__nhsInitAllBehaviours` in console - should be a function
4. **Data attribute:** Inspect the `<nav>` element - `data-ssr-hydrating` should be removed after load
5. **Next.js version:** Make sure you're on Next.js 13+ for App Router

## Why Not Auto-Import from /ssr?

Good question! We **could** add:

```typescript
// src/ssr.ts
import './behaviours';  // Side effect initialization
```

But this would:

- Bundle behaviours into your server bundle (wasted KB)
- Run browser code during SSR (potential errors)
- Force client-side code into server components

Instead, use a small client island (NHSBehavioursInit), which:

- Only loads on client
- Keeps server bundle clean
- Gives you control over when/how behaviours load

This is the **progressive enhancement** pattern - server renders working HTML, client adds interactivity.
