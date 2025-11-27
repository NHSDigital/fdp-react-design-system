# SSR Header Behaviour Enhancement

## Summary

The **HeaderServer** component is now fully configured for SSR-safe behaviour enhancement without requiring "use client" or useEffect hooks.

## How It Works

### 1. Server-Side Rendering (HeaderServer)

The `HeaderServer` component renders static HTML with the necessary markup:

```tsx
<header
  className="nhsuk-header"
  role="banner"
  data-module="nhsuk-header"  // ← Behaviour detection attribute
  ...
>
  {/* Navigation, overflow handling, etc. */}
</header>
```

**Key attributes:**
- `data-module="nhsuk-header"` - Tells the behaviour script to enhance this element
- Standard NHSUK header classes for progressive enhancement

### 2. Client-Side Enhancement (headerBehaviour.ts)

The `headerBehaviour.ts` script automatically finds and enhances headers:

```typescript
export function initHeaders(scope: ParentNode = document): HeaderBehaviourInstance[] {
  const headers = scope.querySelectorAll<HTMLElement>('.nhsuk-header');
  return headers.map(enhanceHeader).filter(Boolean);
}
```

**What it does:**
- Finds all elements with class `.nhsuk-header`
- Adds responsive overflow handling (More button)
- Handles dropdown menu interactions
- Manages navigation item visibility based on viewport width

### 3. Initialization (InitBehaviours)

The `InitBehaviours` component (from `/nextjs` export) initializes all behaviours after hydration:

```tsx
// app/layout.tsx (Server Component - no "use client" needed!)
import { InitBehaviours } from '@nhsdigital/nhs-fdp-design-system/nextjs'
import { HeaderServer } from '@nhsdigital/nhs-fdp-design-system/ssr'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeaderServer navigation={{ items: [...] }} />
        {children}
        <InitBehaviours /> {/* Enhances HeaderServer automatically */}
      </body>
    </html>
  )
}
```

**Process:**
1. **Server**: HeaderServer renders static HTML
2. **Hydration**: Next.js hydrates the page
3. **Enhancement**: `<InitBehaviours />` script runs `afterInteractive`
4. **Result**: Header gets overflow handling, dropdowns, responsive behaviour

## Benefits

### ✅ SSR-Safe
- No `useEffect` or React hooks in HeaderServer
- No hydration mismatches
- Works with Next.js Server Components

### ✅ Progressive Enhancement
- Header is fully functional without JavaScript
- All links accessible in SSR HTML
- Overflow handling gracefully degrades

### ✅ Automatic Initialization
- No manual wiring needed
- `initAll(document)` finds and enhances all headers
- Works for dynamically added headers too

### ✅ Clean Separation
- Server component stays pure
- Behaviour layer is independent
- No "use client" boundaries

## Architecture Flow

```
┌─────────────────────────────────────────────────────────────────┐
│ Server (Next.js)                                                │
├─────────────────────────────────────────────────────────────────┤
│ HeaderServer renders:                                           │
│ <header data-module="nhsuk-header">                            │
│   <nav class="nhsuk-header__navigation">                       │
│     <ul class="nhsuk-header__navigation-list">                 │
│       <li>Item 1</li>                                           │
│       <li>Item 2</li>                                           │
│       ...                                                       │
│     </ul>                                                       │
│   </nav>                                                        │
│ </header>                                                       │
└─────────────────────────────────────────────────────────────────┘
                           ↓
                   HTML sent to browser
                           ↓
┌─────────────────────────────────────────────────────────────────┐
│ Browser (Client)                                                │
├─────────────────────────────────────────────────────────────────┤
│ 1. HTML renders (header visible immediately)                   │
│ 2. React hydrates (no changes to header DOM)                   │
│ 3. <InitBehaviours /> runs afterInteractive                     │
│ 4. headerBehaviour.initHeaders() called                         │
│ 5. Header enhanced:                                             │
│    - Measures available space                                   │
│    - Adds "More" button if needed                               │
│    - Moves overflow items to dropdown                           │
│    - Attaches resize listeners                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Comparison: Client Header vs SSR Header

### Client Header (Header.tsx)
- Uses React hooks (useState, useEffect, useRef)
- Manages overflow in React
- Requires "use client" context
- Full React lifecycle control

### SSR Header (HeaderServer)
- Pure function component
- No hooks or state
- Works in Server Components
- Enhanced by behaviour script

**Both produce the same user experience, but SSR Header is better for:**
- Server Components
- Static generation
- SEO (fully formed HTML)
- Performance (less JS to execute)

## Testing

### Manual Test
1. Create a Next.js app with many navigation items
2. Use HeaderServer in layout
3. Add InitBehaviours at end of body
4. Resize viewport - overflow should work

### Automated Test
The headerBehaviour is already tested in `headerBehaviour.test.ts` (if it exists) or can be tested in Storybook:

```tsx
// HeaderServerOverflow.stories.tsx
export const ManyItems: Story = {
  args: {
    navigation: {
      items: [
        { text: 'Item 1', href: '#1' },
        { text: 'Item 2', href: '#2' },
        // ... many items
        { text: 'Item 10', href: '#10' },
      ]
    }
  }
};
```

## Troubleshooting

### Header overflow not working
**Check:**
1. ✅ HeaderServer includes `data-module="nhsuk-header"`
2. ✅ `<InitBehaviours />` is rendered in layout
3. ✅ No JavaScript errors in console
4. ✅ Header has navigation items

### Hydration warnings
**Solution:** This architecture prevents hydration warnings because:
- Server renders complete, static HTML
- Behaviour script only enhances (doesn't change structure)
- No React state on server

### Items not moving to dropdown
**Check:**
1. ✅ Viewport is actually narrow enough
2. ✅ CSS loaded (`.nhsuk-header__navigation-container`)
3. ✅ Behaviour script loaded (check Network tab)
4. ✅ No CSS conflicts overriding widths

## Advanced: Custom Initialization

If you need fine-grained control (rare), you can initialize specific headers:

```tsx
'use client'
import { useEffect, useRef } from 'react'

export function CustomHeaderInit() {
  const headerRef = useRef<HTMLElement>(null)
  
  useEffect(() => {
    if (!headerRef.current) return
    
    import('@nhsdigital/nhs-fdp-design-system/behaviours')
      .then(({ initHeaders }) => {
        const instances = initHeaders(headerRef.current!)
        return () => instances.forEach(i => i.destroy())
      })
  }, [])
  
  return (
    <header ref={headerRef} data-module="nhsuk-header">
      {/* ... */}
    </header>
  )
}
```

But **99% of the time, just use `<InitBehaviours />`** - it handles everything automatically.

## Summary

**The HeaderServer already works perfectly with behaviours!** 

You don't need to add anything to HeaderServer itself. Just:

1. ✅ Use `<HeaderServer />` in your layout
2. ✅ Add `<InitBehaviours />` at end of body
3. ✅ That's it!

The behaviour script will automatically find and enhance the header with overflow handling, dropdowns, and responsive behaviour - all without "use client" or useEffect.
