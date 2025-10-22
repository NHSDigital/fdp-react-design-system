# ProductCard SSR Compatibility Fix

## Problem

ProductCard was failing in Next.js App Router Server Components with the error:
```
Event handlers cannot be passed to Client Component props.
  <div className=... style=... onClick=... onKeyDown={function b} role=... tabIndex=... children=...>
                                                     ^^^^^^^^^^^^
If you need interactivity, consider converting part of this to a Client Component.
```

## Root Cause

In Next.js App Router, Server Components **cannot have event handlers** like `onClick`, `onKeyDown`, etc. These props require JavaScript to run in the browser, which breaks the server-only rendering model.

The ProductCard component had:
- `onClick` prop for card-level click handling
- `onKeyDown` for keyboard navigation  
- `window.location.href` for programmatic navigation
- Button `onClick` callbacks for interactive actions

## Solution: Dual Component Architecture

Created **two versions** of ProductCard:

### 1. ProductCard.server.tsx (SSR Barrel)
- **No event handlers** - uses `<a href>` for navigation
- **No onClick callbacks** - buttons only support `href`
- **No window/document access** - pure HTML output
- ✅ Works in Next.js Server Components
- ✅ Fully server-rendered
- ✅ No JavaScript required

### 2. ProductCard.tsx (Main Barrel)  
- ✅ Full event handler support
- ✅ Custom onClick behavior
- ✅ Interactive buttons
- ⚠️ Requires `'use client'` in Next.js App Router

## Changes Made

### Created Files
1. **`src/components/ProductCard/ProductCard.server.tsx`**
   - Server-safe version without event handlers
   - Wraps entire card in `<a href>` when navigation needed
   - Buttons are `<a>` tags with `href` only (no onClick)
   - Exports `ProductCardServer` component
   - Exports `ProductCardServerProps` type (no onClick/button.onClick)

2. **`src/components/ProductCard/SERVER_VS_CLIENT.md`**
   - Comprehensive guide on which version to use
   - Migration examples
   - Props comparison table
   - Best practices for SSR

### Modified Files

1. **`src/components/ssr.ts`**
   ```diff
   - export { ProductCard, ProductCardThemeEnum } from './ProductCard';
   + export { ProductCardServer as ProductCard, ProductCardThemeEnum } from './ProductCard/ProductCard.server';
   - export type { ProductCardProps, ProductCardButton } from './ProductCard';
   + export type { ProductCardServerProps as ProductCardProps } from './ProductCard/ProductCard.server';
   ```

2. **`tests/ssr-validation/client-hooks.test.ts`**
   - Added event handler detection (`onClick`, `onKeyDown`, etc.)
   - Updated validation to check for event handler props
   - Added specific ProductCardServer regression test
   - Enhanced error messages with fix suggestions

### Updated Validation

The SSR validation test now checks for:

**Client-only hooks** (already checked):
- `useRef`, `useEffect`, `useLayoutEffect`, `useInsertionEffect`

**Event handler props** (NEW):
- `onClick`, `onKeyDown`, `onKeyUp`, `onKeyPress`
- `onChange`, `onInput`, `onFocus`, `onBlur`
- `onSubmit`, `onMouseDown`, `onMouseUp`
- `onMouseEnter`, `onMouseLeave`
- `onTouchStart`, `onTouchEnd`

## Test Results

```
✅ Found 12 components in SSR barrel
✅ Valid (no client hooks/handlers): 12
❌ Invalid (has client hooks/handlers): 0

✅ All SSR barrel components are free of client-only features!
```

All 58 SSR test files pass (216 tests total).

## Usage Examples

### Server Component (Next.js App Router)
```tsx
// app/products/page.tsx
import { ProductCard } from '@fergusbisset/nhs-fdp-design-system/ssr';

export default function ProductsPage() {
  return (
    <ProductCard
      title="FDP Product"
      description="Server-rendered product card"
      href="/product/details"  // ← Navigation via href
      image={{
        type: "graphic",
        seed: 12345,  // ← Explicit seed for SSR
        theme: "blue"
      }}
      buttons={[
        { label: "Learn More", href: "/learn-more" }  // ← href only
      ]}
    />
  );
}
```

### Client Component (Interactive)
```tsx
'use client';  // ← Required in Next.js App Router

import { ProductCard } from '@fergusbisset/nhs-fdp-design-system';
import { useRouter } from 'next/navigation';

export default function InteractiveProduct() {
  const router = useRouter();
  
  return (
    <ProductCard
      title="Interactive Product"
      description="Client-rendered with custom behavior"
      onClick={() => {  // ← Custom onClick handler
        console.log('Track click');
        router.push('/product');
      }}
      image={{
        type: "graphic",
        seed: 12345,
        theme: "purple"
      }}
      buttons={[
        { 
          label: "Custom Action",
          onClick: (e) => {  // ← Button onClick callback
            e.stopPropagation();
            alert('Button clicked');
          }
        }
      ]}
    />
  );
}
```

## Migration Path

### If using ProductCard in Next.js App Router:

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
  href="/product"  // ← Use href instead of onClick
  buttons={[
    { label: "Action", href: "/action" }  // ← href only
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

## Why This Approach?

### Alternative Considered: Remove All Event Handlers
❌ **Rejected** - Would break existing applications using the component with click handlers

### Chosen: Dual Component Pattern
✅ **Backward compatible** - existing client-side usage unaffected  
✅ **SSR compatible** - server version works in Next.js Server Components  
✅ **Clear separation** - explicit choice between server/client rendering  
✅ **Type-safe** - TypeScript prevents incorrect prop usage  
✅ **Validated** - automated tests prevent regressions  

## Benefits

1. **Next.js App Router Support**
   - ProductCard now works in Server Components (default)
   - No 'use client' needed for simple navigation cards
   - Smaller JavaScript bundles (no event handlers shipped)

2. **Backward Compatibility**
   - Existing client-side usage unchanged
   - Main barrel still exports interactive version
   - No breaking changes for current users

3. **Quality Assurance**
   - Automated validation prevents future SSR breaks
   - Runs on every build via preversion script
   - Tests both server and client versions

4. **Developer Experience**
   - Clear documentation on which version to use
   - Type safety guides correct usage
   - Helpful error messages when validation fails

## Related Files

- `src/components/ProductCard/ProductCard.tsx` - Client version (interactive)
- `src/components/ProductCard/ProductCard.server.tsx` - Server version (navigation-only)
- `src/components/ProductCard/ProductCard.types.ts` - Shared types
- `src/components/ProductCard/SERVER_VS_CLIENT.md` - Usage guide
- `src/components/ssr.ts` - SSR barrel exports
- `tests/ssr-validation/client-hooks.test.ts` - Validation test

## Summary

**Problem:** ProductCard broke Next.js Server Components due to event handlers  
**Solution:** Created separate server version without event handlers  
**Result:** Works in both server and client contexts with appropriate imports  
**Validation:** Automated tests prevent future SSR compatibility issues
