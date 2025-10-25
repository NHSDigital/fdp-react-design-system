# Next.js Setup Guide

## Essential Setup: Progressive Enhancement with Behaviours

The NHS FDP Design System uses **progressive enhancement** - components render working HTML on the server, then JavaScript adds interactivity. **This means you MUST initialize the behaviour layer in your Next.js app.**

### Why You Need This

Components like `HeaderServer` rely on client-side JavaScript to:

- Measure navigation items and create overflow menus
- Add keyboard navigation
- Enable interactive features like dropdowns
- Remove the `data-ssr-hydrating` marker to enable CSS transitions

**Without behaviour initialization, these components will not be interactive.**

## Quick Start: Add to Your Layout

### App Router (Recommended)

Add `InitBehaviours` to your root layout:

```tsx
// app/layout.tsx
import { InitBehaviours } from '@fergusbisset/nhs-fdp-design-system/nextjs'
import '@fergusbisset/nhs-fdp-design-system/dist/nhs-fdp-design-system.css'

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* Initialize behaviours after hydration */}
        <InitBehaviours />
      </body>
    </html>
  )
}
```

### Pages Router

Add to `_app.tsx`:

```tsx
// pages/_app.tsx
import type { AppProps } from 'next/app'
import { InitBehaviours } from '@fergusbisset/nhs-fdp-design-system/nextjs'
import '@fergusbisset/nhs-fdp-design-system/dist/nhs-fdp-design-system.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <InitBehaviours />
    </>
  )
}
```

## How It Works

`InitBehaviours` adds a script that:

1. Waits for React hydration to complete
2. Initializes all interactive behaviours:
   - `initHeaders()` - Header overflow menus
   - `initButtons()` - Button interactions
   - `initCharacterCounts()` - Character count validation
   - `initRadios()` / `initCheckboxes()` - Conditional reveals
   - `initSkipLinks()` - Skip link focus management
   - `initRanges()` - Range input enhancements

## Alternative: Manual Initialization

If you need more control, you can manually initialize behaviours:

```tsx
// components/BehaviourInitializer.tsx
'use client'

import { useEffect } from 'react'
import { initAll } from '@fergusbisset/nhs-fdp-design-system/dist/behaviours'

export function BehaviourInitializer() {
  useEffect(() => {
    // Initialize on mount
    initAll(document)
    
    // Optional: Reinitialize on route changes
    const handleRouteChange = () => {
      initAll(document)
    }
    
    // If using next/router:
    // router.events.on('routeChangeComplete', handleRouteChange)
    // return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [])
  
  return null
}
```

Then use it in your layout:

```tsx
// app/layout.tsx
import { BehaviourInitializer } from './components/BehaviourInitializer'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <BehaviourInitializer />
      </body>
    </html>
  )
}
```

## Component-Specific Initialization

If you only use specific components, you can initialize just their behaviours:

```tsx
'use client'

import { useEffect } from 'react'
import { initHeaders } from '@fergusbisset/nhs-fdp-design-system/dist/behaviours'

export function HeaderWrapper({ children }) {
  useEffect(() => {
    const instances = initHeaders(document)
    
    return () => {
      // Cleanup on unmount
      instances.forEach(instance => instance.destroy())
    }
  }, [])
  
  return <>{children}</>
}
```

## Troubleshooting

### Headers Not Responding

**Symptom**: HeaderServer navigation doesn't create overflow menus, items just wrap or scroll

**Solution**: Add `<InitBehaviours />` to your layout as shown above

### No CSS Transitions

**Symptom**: Header appears but transitions are disabled

**Cause**: The `data-ssr-hydrating` attribute is still present

**Solution**: Behaviours must run to remove this marker. Check that:

1. `<InitBehaviours />` is in your layout
2. Check browser console for errors
3. Verify the script is loading: look for `nhs-fdp-behaviours` in DevTools

### Behaviours Run Multiple Times

**Symptom**: Console warnings or duplicate dropdown menus

**Solution**:

- Only include `<InitBehaviours />` once in your app
- Each behaviour checks for existing instances and won't double-initialize
- If using manual `initAll()`, ensure it's in a `useEffect` with proper dependencies

### Works in Storybook But Not Next.js

This is the **exact issue you're experiencing**. The fix:

1. Add `<InitBehaviours />` to your Next.js layout
2. Verify it's loaded: open DevTools → Network tab → look for inline script
3. Check console for any errors during behaviour initialization

## SSR Components Reference

These components specifically need behaviours initialized:

- **HeaderServer** - Navigation overflow management
- **CharacterCount** - Live character counting
- **Checkboxes** - Conditional reveals
- **Radios** - Conditional reveals
- **Button** - Loading states and disabled interactions

## Testing Your Setup

To verify behaviours are working:

1. **Open browser DevTools console**
2. **Check for the global**: `window.__nhsFdpBehavioursInitialized` should be `true`
3. **Test HeaderServer**: Resize window, overflow menu should appear/disappear
4. **Check for errors**: No errors should appear in console

## Performance Notes

- `InitBehaviours` uses `strategy="afterInteractive"` - runs after hydration
- Behaviours only enhance existing markup, no reflows
- Total behaviour bundle is ~20KB gzipped
- Behaviours are idempotent - safe to call multiple times

## Complete Example

```tsx
// app/layout.tsx
import { InitBehaviours } from '@fergusbisset/nhs-fdp-design-system/nextjs'
import { HeaderServer } from '@fergusbisset/nhs-fdp-design-system/ssr'
import '@fergusbisset/nhs-fdp-design-system/dist/nhs-fdp-design-system.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeaderServer
          service={{ text: 'My NHS Service', href: '/' }}
          navigation={{
            items: [
              { href: '/', text: 'Home' },
              { href: '/appointments', text: 'Appointments' },
              { href: '/prescriptions', text: 'Prescriptions' },
              { href: '/messages', text: 'Messages' },
              { href: '/health-records', text: 'Health Records' },
              { href: '/settings', text: 'Settings' }
            ]
          }}
        />
        <main>{children}</main>
        {/* Critical: Initialize behaviours for progressive enhancement */}
        <InitBehaviours />
      </body>
    </html>
  )
}
```

Now your HeaderServer will:

- ✅ Render on the server with all navigation items visible
- ✅ Hydrate without layout shift (no reflow)
- ✅ Progressively enhance with overflow menu when needed
- ✅ Respond to window resizing
- ✅ Support keyboard navigation

## Need Help?

If behaviours still aren't working:

1. Check `window.__nhsFdpBehavioursInitialized` in console
2. Verify no JavaScript errors in console
3. Check that CSS is loaded (DevTools → Network → CSS files)
4. Try the manual initialization approach for more control
5. Open an issue with your Next.js version and setup details
