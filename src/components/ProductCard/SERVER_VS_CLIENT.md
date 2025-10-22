# ProductCard - Server vs Client Versions

ProductCard comes in **two versions** to support different React rendering paradigms:

## 1. ProductCardServer (SSR Barrel)
**File:** `ProductCard.server.tsx`  
**Import:** `import { ProductCard } from '@fergusbisset/nhs-fdp-design-system/ssr'`

### Use Cases
- ✅ Next.js App Router Server Components (default)
- ✅ Server-Side Rendering (SSR)
- ✅ Static Site Generation (SSG)
- ✅ Non-interactive displays

### Limitations
- ❌ No `onClick` prop on the card
- ❌ Button `onClick` handlers not supported (href only)
- ✅ Navigation via `href` on card and buttons

### Example
```tsx
// app/page.tsx (Server Component - no 'use client')
import { ProductCard } from '@fergusbisset/nhs-fdp-design-system/ssr';

export default function Page() {
  return (
    <ProductCard
      title="FDP Product"
      description="Server-rendered card with navigation"
      image={{
        type: "graphic",
        seed: 12345,
        theme: "blue"
      }}
      href="/product"  // ✅ Entire card is a link
      buttons={[
        { label: "Learn More", href: "/details", variant: "primary" }
      ]}
    />
  );
}
```

## 2. ProductCard (Client Version)
**File:** `ProductCard.tsx`  
**Import:** `import { ProductCard } from '@fergusbisset/nhs-fdp-design-system'`

### Use Cases
- ✅ Interactive cards with click handlers
- ✅ Custom onClick behavior
- ✅ Client Components in Next.js
- ✅ Traditional React applications

### Features
- ✅ `onClick` prop for custom handlers
- ✅ Button `onClick` callbacks
- ✅ `href` navigation
- ✅ Keyboard interaction (`onKeyDown`)

### Example
```tsx
'use client';  // ← Required in Next.js App Router

import { ProductCard } from '@fergusbisset/nhs-fdp-design-system';

export default function InteractiveCard() {
  const handleCardClick = () => {
    console.log('Card clicked!');
    // Custom behavior
  };

  return (
    <ProductCard
      title="Interactive Product"
      description="Client-rendered card with click handler"
      image={{
        type: "graphic",
        seed: 12345,
        theme: "purple"
      }}
      onClick={handleCardClick}  // ✅ Custom click handler
      buttons={[
        { 
          label: "Custom Action", 
          onClick: (e) => {
            e.stopPropagation();
            console.log('Button clicked');
          }
        }
      ]}
    />
  );
}
```

## Migration Guide

### From Client to Server Version
If you're using ProductCard in a Next.js App Router and seeing this error:
```
Event handlers cannot be passed to Client Component props.
  <div ... onClick={function} ...>
```

**Solution:**
1. Remove the `onClick` prop from ProductCard
2. Use `href` for navigation instead
3. Import from `/ssr` barrel
4. Ensure buttons only use `href`, not `onClick`

**Before:**
```tsx
<ProductCard
  title="Product"
  onClick={() => router.push('/product')}
  buttons={[
    { label: "Action", onClick: handleClick }
  ]}
/>
```

**After (Server Component):**
```tsx
import { ProductCard } from '@fergusbisset/nhs-fdp-design-system/ssr';

<ProductCard
  title="Product"
  href="/product"  // ✅ Use href instead
  buttons={[
    { label: "Action", href: "/action" }  // ✅ href only
  ]}
/>
```

**After (Client Component):**
```tsx
'use client';
import { ProductCard } from '@fergusbisset/nhs-fdp-design-system';

<ProductCard
  title="Product"
  onClick={() => router.push('/product')}
  buttons={[
    { label: "Action", onClick: handleClick }
  ]}
/>
```

## Props Comparison

| Prop | Server Version | Client Version |
|------|----------------|----------------|
| `title` | ✅ | ✅ |
| `description` | ✅ | ✅ |
| `image` | ✅ | ✅ |
| `href` | ✅ | ✅ |
| `onClick` | ❌ | ✅ |
| `buttons[].href` | ✅ | ✅ |
| `buttons[].onClick` | ❌ | ✅ |
| `theme`, `layout`, etc. | ✅ | ✅ |

## SSR Best Practices

### Image Seeds
Always provide explicit `seed` values when using graphic images in SSR:

```tsx
<ProductCard
  image={{
    type: "graphic",
    seed: 12345,  // ✅ Explicit seed for SSR consistency
    theme: "blue"
  }}
/>
```

❌ **Don't rely on default seed (0)** - all cards will look identical
✅ **Use unique seeds** - derive from product ID, index, or content hash

### Hydration Safety
The server version is designed to be hydration-safe:
- No client-only hooks (`useRef`, `useEffect`)
- No event handlers that cause hydration mismatches
- Deterministic rendering with explicit seeds
- Identical HTML on server and client

## Testing

### Server Version
```bash
npm run test:ssr-components
```

Validates that ProductCardServer:
- Has no `useRef`, `useEffect`, `useLayoutEffect`
- Has no event handler props (`onClick`, `onKeyDown`, etc.)
- Renders correctly without JavaScript

### Client Version
```bash
npm run test:components
```

Tests interactive behavior:
- Click handlers
- Keyboard navigation
- Button interactions
- Event propagation

## File Structure
```
src/components/ProductCard/
├── ProductCard.tsx              # Client version (main barrel)
├── ProductCard.server.tsx       # Server version (SSR barrel)
├── ProductCard.types.ts         # Shared types
├── ProductCard.scss             # Shared styles
├── ProductCard.client.test.tsx  # Client interaction tests
├── ProductCard.ssr.test.tsx     # Server rendering tests
└── README.md                    # This file
```

## When to Use Which Version?

### Use Server Version When:
- Building Next.js App Router pages (default)
- Cards are purely navigational (no custom logic)
- Maximum performance is critical (no JS bundle)
- SEO is important (fully rendered on server)

### Use Client Version When:
- Need custom onClick behavior
- Tracking analytics on interactions
- Dynamic client-side behavior required
- Building traditional React app (not Next.js)

## Summary

- **Server Version** = Navigation-only, SSR-safe, no event handlers
- **Client Version** = Full interactivity, requires 'use client'
- Both versions share the same visual design and styles
- Choose based on your rendering model and interactivity needs
