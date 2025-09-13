# SSR surface hardening (Sep 2025)

This note summarises the recent SSR improvements and how to use them in Next.js and other server-rendered environments.

## What changed

- Introduced a strictly SSR-safe export surface at `@fergusbisset/nhs-fdp-design-system/ssr`.
  - Exports only components that render without React hooks/context.
  - Adds server-only variants where needed, e.g. `Header` and `SkipLink`.
  - Preferred server-first button: `ButtonServer`.
  - New: server-first `Input` available as `Input` from the SSR surface.
  - New: `Textarea` and `Select` are available directly from the SSR surface (no hooks/state).
- Split `Header` into a server renderer (`HeaderServer`) and kept the client variant separate. The SSR entry re-exports the server one as `Header`.
- Added a pure server `SkipLink` variant and wired it into the SSR export surface to avoid hook leakage.
- Tightened example app imports so SSR pages only import from the `/ssr` entry.
- Fixed a legacy DOM prop leak (`serviceName`) by mapping internally and not passing unknown props to DOM.

## How to use

- In server components (e.g. Next.js App Router):

```tsx
// Import only SSR-safe components
import { Header, ButtonServer, SummaryList, Pagination, SkipLink, Input, Textarea, Select } from '@fergusbisset/nhs-fdp-design-system/ssr';
```

- In client components, continue to use the root entry if you need interactive variants:

```tsx
'use client';
import { Button, NavigationSplitView } from '@fergusbisset/nhs-fdp-design-system';
```

- Global styles for Next.js:

```tsx
// app/layout.tsx (server)
import '@fergusbisset/nhs-fdp-design-system/nextjs';
```

## Validation done

- Full parity build passing.
- SSR-first test suite: 52 files, 177 tests – all passing.
- Smoke tests green (Button, Header client/server).
- Typecheck and lint clean.
- Next.js example `/ssr` route renders 200 OK using SSR-safe imports only.

## Breaking/behavioural notes

- `Header` imported from `/ssr` is the server variant (no hooks). Use the root export for enhanced behaviour in client components.
- `SkipLink` from `/ssr` is server-only. The client-enhanced variant is available from the root entry if needed.
- Some form controls are intentionally excluded from `/ssr` while they rely on hooks/context (e.g. Checkboxes, Radios). Use a client wrapper or dynamic import when rendering them in Next.js.
- `Input`, `Textarea`, and `Select` are now available from `/ssr` for static markup rendering (no handlers/state). Use the root exports for client-enhanced behaviour.

## Example (Next.js App Router)

```tsx
// app/ssr/page.tsx
import { Header, ButtonServer, SummaryList, CareCard, Pagination, List } from '@fergusbisset/nhs-fdp-design-system/ssr';

export default function Page() {
  return (
    <main>
      <Header service={{ text: 'Service' }} organisation={{ name: 'NHS' }} />
      <List>
        <List.Item><ButtonServer href="#">Action</ButtonServer></List.Item>
      </List>
    </main>
  );
}
```

## Where to learn more

- Guide: `docs/guides/ssr-and-hydration.mdx` – patterns, tests, pitfalls
- Guide: `docs/guides/nextjs-integration.md` – Next.js specific setup and helpers
- Entry: `src/components/ssr.ts` – the curated SSR export surface

---

## Next steps

- Expand server-first variants for selected form components (Radios, Checkboxes) where a static markup path is safe.
- Add Storybook docs showing SSR vs client-enhanced variants side by side.
- Strengthen lint rule(s) to forbid importing root components into SSR-only example pages.
- Keep the SSR suite as a required check in CI; optionally add the example Next.js route smoke test.
- Document the “server-only SkipLink” and “ButtonServer” patterns directly in the component docs.
