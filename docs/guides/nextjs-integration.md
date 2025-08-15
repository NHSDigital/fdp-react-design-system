# Next.js Integration Guide

This guide shows how to use the NHS FDP Design System in a Next.js (App Router) project with good SSR, routing, and performance practices.

## 1. Install

```bash
npm install @fergusbisset/nhs-fdp-design-system
```

Optional peer dependency: `next` (the package declares `next` as an optional peer so you will not see warnings when using the design system outside Next.js. In a Next project ensure a compatible version `>=13.4.0` is installed.)

Ensure `react` / `react-dom` versions match those required by the design system (React 19+).

## 2. Global Styles (App Router)

In `app/layout.tsx` (server component) import the lightweight Next entry (core tokens + resets only):

```tsx
// app/layout.tsx
import '@fergusbisset/nhs-fdp-design-system/nextjs';

export const metadata = { title: 'App' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

If you prefer full component baseline styles (potentially larger initial CSS) you can instead import:

```tsx
import '@fergusbisset/nhs-fdp-design-system/css';
```

## 3. Using Components (Client Components)

Any component that uses hooks (e.g. `NavigationSplitView`) must be rendered in a client component:

```tsx
// app/patients/page.tsx
'use client';
import { NavigationSplitView } from '@fergusbisset/nhs-fdp-design-system';

export default function PatientsPage() {
  // ... data fetch via a parent server component or use SWR here
  return (
    <NavigationSplitView
      items={/* patient list */ []}
      renderContent={() => <div>Select a patient</div>}
      syncUrl // optional lightweight query param sync
    />
  );
}
```

## 4. URL State Synchronisation (Next Router Friendly)

Option A (simplest): use `syncUrl` prop (uses `history.replaceState`).

Option B (router aware): use built-in Next hook `useNavigationSplitNextUrlSync` exported from the `/nextjs` entry to ensure updates flow through the App Router (middleware / analytics friendly).

Usage:

```tsx
'use client';
import { NavigationSplitView } from '@fergusbisset/nhs-fdp-design-system';
import { useNavigationSplitNextUrlSync } from '@fergusbisset/nhs-fdp-design-system/nextjs';

export default function Patients() {
  const routerSync = useNavigationSplitNextUrlSync({ paramSelected: 'patient', paramDrill: 'analytics' });

  return (
    <NavigationSplitView
      items={/* items */ []}
      selectedId={routerSync.selectedId}
      onSelectionChange={(id) => routerSync.setSelectedId(id)}
      // When three-column activated externally call routerSync.setDrilledIn(true)
      autoEnableThirdColumn
      renderContent={(item) => item ? <div>{item.label}</div> : <p>Select patient</p>}
      renderSecondaryContent={(item) => item && <div>Analytics for {item.label}</div>}
    />
  );
}
```

Why this approach?

- Uses Next router’s internal navigation system (middleware / analytics aware)
- Avoids direct `history.replaceState`
- Prevents hydration mismatches (search params always derived from current URL)

## 5. Server Components & Data Fetching

Pattern: fetch data in a server component, pass as props to a child client component.

```tsx
// app/patients/page.tsx
import { fetchPatients } from '@/data/patients';
import PatientsClient from './PatientsClient';

export default async function Page() {
  const patients = await fetchPatients();
  return <PatientsClient patients={patients} />;
}
```

```tsx
// app/patients/PatientsClient.tsx
'use client';
import { NavigationSplitView } from '@fergusbisset/nhs-fdp-design-system';
export default function PatientsClient({ patients }) {
  return (
    <NavigationSplitView
      items={patients}
      renderContent={(p) => p ? <div>{p.label}</div> : <p>Select</p>}
    />
  );
}
```

## 6. Fonts

If you rely on the design system font utilities, load them once globally (e.g. in `layout.tsx`) or via Next Font optimization.

```tsx
import '@fergusbisset/nhs-fdp-design-system/styles/fonts.css';
```

Or wrap with `next/font/local` for subsetting.

## 7. Theming / Tokens (Future)

When a runtime theming API is introduced you can inject CSS variables at the root layout. This guide will be updated once theming hooks are public.

## 8. Performance Tips

- Use the core entry (`/nextjs`) to avoid pulling all component CSS eagerly
- Code-split heavy pages (charts, data grids) with dynamic imports
- Avoid blocking font loading; use `font-display: swap`
- Prefetch navigation-heavy pages with `<Link prefetch>` (App Router does this automatically in viewport)

## 9. Troubleshooting

| Issue | Cause | Fix |
|-------|-------|-----|
| Hydration warning on selection | `syncUrl` altering URL during SSR hydration | Use Next adapter hook (above) or disable `syncUrl` until after mount (`useEffect`) |
| Styles missing in prod | Global CSS not imported in `layout.tsx` | Import `@fergusbisset/nhs-fdp-design-system/nextjs` |
| Large initial CSS | Imported full bundle instead of core | Switch to `/nextjs` entry |

## 10. Roadmap (Planned Next.js Helpers)

- Official `useNavigationSplitNextUrlSync` (will add optional peer dependency on `next`)
- Theming server function for generating initial CSS variables inline
- Edge middleware token injection example

---
If you need deeper integration sooner (e.g. middleware-friendly analytics hook), open an issue with details.
