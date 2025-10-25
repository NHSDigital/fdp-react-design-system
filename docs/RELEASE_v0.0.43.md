# Release Notes: v0.0.43

**Release Date:** 22 October 2025  
**Previous Version:** v0.0.42  
**Breaking Changes:** Yes (SSR barrel only)

## Overview

This release adds **full Next.js App Router Server Components compatibility** for ProductCard through a dual-component architecture, allowing the component to work in both server and client contexts.

## What Changed

### ProductCard: Server Components Support

Created a server-safe version of ProductCard that works with Next.js Server Components (the default rendering mode in App Router).

**Problem Solved:**
```
Error: Event handlers cannot be passed to Client Component props.
  <div onClick={function} onKeyDown={function}>
       ^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^^^^^^^
If you need interactivity, consider converting part of this to a Client Component.
```

**Solution:**
- **ProductCard.server.tsx** - New SSR-safe version (no event handlers)
- **ProductCard.tsx** - Original interactive version (unchanged)
- SSR barrel (`/ssr`) exports server version by default
- Main barrel exports client version (backward compatible)

### Enhanced SSR Validation

Updated automated SSR validation tests to detect **both** client-only patterns:

1. **React hooks** (already detected):
   - `useRef`, `useEffect`, `useLayoutEffect`, `useInsertionEffect`

2. **Event handler props** (NEW):
   - `onClick`, `onKeyDown`, `onKeyUp`, `onKeyPress`
   - `onChange`, `onInput`, `onFocus`, `onBlur`
   - `onSubmit`, `onMouseDown`, `onMouseUp`
   - `onMouseEnter`, `onMouseLeave`
   - `onTouchStart`, `onTouchEnd`

Validation runs automatically on every release via `preversion` script.

## Breaking Changes

### For SSR Barrel Users Only

If you import ProductCard from `/ssr`:

**Before (v0.0.42):**
```tsx
import { ProductCard } from '@fergusbisset/nhs-fdp-design-system/ssr';

<ProductCard
  title="Product"
  onClick={() => router.push('/product')}  // ❌ No longer works
  buttons={[
    { label: "Action", onClick: handleClick }  // ❌ No longer works
  ]}
/>
```

**After (v0.0.43):**
```tsx
import { ProductCard } from '@fergusbisset/nhs-fdp-design-system/ssr';

<ProductCard
  title="Product"
  href="/product"  // ✅ Use href for navigation
  buttons={[
    { label: "Action", href: "/action" }  // ✅ href only
  ]}
/>
```

### No Breaking Changes for Main Barrel

Client-side usage (main barrel) is **100% backward compatible**:

```tsx
import { ProductCard } from '@fergusbisset/nhs-fdp-design-system';

// All existing code continues to work unchanged
<ProductCard
  title="Product"
  onClick={() => router.push('/product')}  // ✅ Still works
  buttons={[
    { label: "Action", onClick: handleClick }  // ✅ Still works
  ]}
/>
```

## Migration Guide

### Option 1: Server Component (Recommended for Next.js App Router)

```tsx
// app/products/page.tsx (Server Component - default)
import { ProductCard } from '@fergusbisset/nhs-fdp-design-system/ssr';

export default function ProductsPage() {
  return (
    <ProductCard
      title="FDP Product"
      description="Server-rendered, no JavaScript needed"
      href="/product/details"
      image={{
        type: "graphic",
        seed: 12345,  // Explicit seed for SSR consistency
        theme: "blue"
      }}
      buttons={[
        { label: "Learn More", href: "/learn-more" }
      ]}
    />
  );
}
```

**Benefits:**
- ✅ Renders on server (faster initial load)
- ✅ No client-side JavaScript required
- ✅ Smaller bundle size
- ✅ Works without hydration
- ✅ Full SEO support

### Option 2: Client Component (Interactive Behavior)

```tsx
// app/products/interactive.tsx
'use client';  // Required in Next.js App Router

import { ProductCard } from '@fergusbisset/nhs-fdp-design-system';
import { useRouter } from 'next/navigation';

export default function InteractiveProduct() {
  const router = useRouter();
  
  return (
    <ProductCard
      title="Interactive Product"
      description="Client-rendered with custom behavior"
      onClick={() => {
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
          onClick: (e) => {
            e.stopPropagation();
            alert('Button clicked');
          }
        }
      ]}
    />
  );
}
```

**Benefits:**
- ✅ Full event handler support
- ✅ Custom click behavior
- ✅ Client-side state management
- ✅ Interactive features

## Files Changed

### Created
- `src/components/ProductCard/ProductCard.server.tsx` - Server-safe version
- `src/components/ProductCard/SERVER_VS_CLIENT.md` - Usage documentation
- `docs/PRODUCTCARD_SSR_FIX.md` - Technical documentation

### Modified
- `src/components/ssr.ts` - Export server version by default
- `tests/ssr-validation/client-hooks.test.ts` - Event handler detection
- `dist/meta/components.json` - Updated metadata

## Documentation

Comprehensive documentation available:

- **Quick Guide:** `src/components/ProductCard/SERVER_VS_CLIENT.md`
- **Technical Details:** `docs/PRODUCTCARD_SSR_FIX.md`
- **Storybook:** Component stories updated with SSR examples

## Testing

All quality gates passed:

```
✅ Component Tests: 1388 passed (342 test files)
✅ SSR Tests: 216 passed (58 test files)
✅ SSR Validation: 12 components validated (0 violations)
✅ Build: All builds successful (~33s)
✅ Type Check: No TypeScript errors
✅ Linting: 5 minor warnings (pre-existing, non-blocking)
```

### SSR Validation Results

```
📊 SSR Barrel Validation:
   Total components: 12
   ✅ Valid (no client hooks/handlers): 12
   ❌ Invalid: 0
   ⚠️  Warnings: 0

✅ All SSR barrel components are free of client-only features!
```

## Next Steps

### For Developers

1. **Update imports** if using ProductCard from `/ssr` barrel
2. **Replace onClick with href** for card navigation
3. **Replace button onClick with href** for actions
4. **Test in your Next.js app** to verify SSR compatibility

### For Next.js App Router Users

You can now use ProductCard in **Server Components** (the default):

```tsx
// app/page.tsx - No 'use client' needed!
import { ProductCard } from '@fergusbisset/nhs-fdp-design-system/ssr';

export default function HomePage() {
  return <ProductCard title="My Product" href="/product" />;
}
```

## Pattern Established

This dual-component pattern (`.server.tsx` + `.tsx`) is now established for future components requiring SSR compatibility:

- Server version: No hooks, no event handlers, pure HTML
- Client version: Full React features, interactivity
- SSR barrel: Exports server versions
- Main barrel: Exports client versions
- Automated validation: Prevents regressions

## Support

Questions? Check the documentation:
- Server vs Client guide: `src/components/ProductCard/SERVER_VS_CLIENT.md`
- Technical details: `docs/PRODUCTCARD_SSR_FIX.md`
- Storybook examples: Run `npm run storybook`

## Git Tags

- **v0.0.43** - ProductCard SSR compatibility (this release)
- **v0.0.42** - Previous release
- **v0.1.0** - Deleted (incorrect version bump)

## Installation

```bash
npm install @fergusbisset/nhs-fdp-design-system@0.0.43
```

or with `.npmrc`:

```
@fergusbisset:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

then:

```bash
npm install @fergusbisset/nhs-fdp-design-system@latest
```
