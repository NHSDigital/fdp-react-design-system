# SSR surface hardening (Sep 2025)

This note summarises the recent SSR improvements and how to use them in Next.js and other server-rendered environments.

## What changed

- Introduced a strictly SSR-safe export surface at `@nhsdigital/fdp-design-system/ssr`.
  - Exports only components that render without React hooks/context.
  - Adds server-only variants where needed, e.g. `Header` and `SkipLink`.
  - Preferred server-first button: `ButtonServer`.
  - New: server-first `Input` available as `Input` from the SSR surface.
  - New: `Textarea` and `Select` are available directly from the SSR surface (no hooks/state).
  - New: server-first `Radios` and `Checkboxes` now available from the SSR surface. These render pure markup with the appropriate `data-nhs-behaviour` attributes for progressive enhancement, without importing any client hooks or context.
  - New: server-first `DateInput` and `ErrorSummary` now available from the SSR surface. `ErrorSummary` in SSR omits autofocus side effects; client pages can enhance focus when needed.
  - New: `MetricCard` is available from the SSR surface (pure render, no browser APIs). Import directly from the SSR entry to avoid the broader Data Visualisation barrel.
  - New: `WidthContainer` is exported on the SSR surface as a simple layout helper.
- Split `Header` into a server renderer (`HeaderServer`) and kept the client variant separate. The SSR entry re-exports the server one as `Header`.
- Added a pure server `SkipLink` variant and wired it into the SSR export surface to avoid hook leakage.
- Tightened example app imports so SSR pages only import from the `/ssr` entry.
- Next.js example updated to load core styles once and use granular component CSS where possible; behaviours are deferred post-hydration via a small loader to avoid pre-hydration DOM mutations.
- Fixed a legacy DOM prop leak (`serviceName`) by mapping internally and not passing unknown props to DOM.

## How to use

- In server components (e.g. Next.js App Router):

```tsx
// Import only SSR-safe components
import {
  Header,
  ButtonServer,
  SummaryList,
  Pagination,
  SkipLink,
  Input,
  Textarea,
  Select,
  Radios,
  Checkboxes,
  DateInput,
  ErrorSummary,
  WidthContainer,
  MetricCard,
} from '@nhsdigital/fdp-design-system/ssr';
```

- In client components, continue to use the root entry if you need interactive variants:

```tsx
'use client';
import { Button, NavigationSplitView } from '@nhsdigital/fdp-design-system';
```

- Global styles for Next.js:

```tsx
// app/layout.tsx (server)
import '@nhsdigital/fdp-design-system/nextjs';
```

## Validation done

- Full parity build passing.
- SSR-first test suite: 52 files, 177 tests – all passing.
- Smoke tests green (Button, Header client/server).
- Typecheck and lint clean.
- Next.js example `/ssr` route renders 200 OK using SSR-safe imports only; ESLint guardrails prevent non-SSR imports on that route.
- New example `/example-form` demonstrates POST-Redirect-GET with `#errors` hash and SSR `ErrorSummary` (no client JS required); includes optional `:target` CSS highlight.

## Breaking/behavioural notes

- `Header` imported from `/ssr` is the server variant (no hooks). Use the root export for enhanced behaviour in client components.
- `SkipLink` from `/ssr` is server-only. The client-enhanced variant is available from the root entry if needed.
- `Radios` and `Checkboxes` are available on the `/ssr` surface as server-first variants. They render semantic markup and include `data-nhs-behaviour` attributes for progressive enhancement. For client-side enhancements (e.g. managed focus, keyboard handling), use the interactive variants from the root export in a client component.
- API note: `Radios` expects an `options` array; `Checkboxes` expects an `items` array. For conditional content, pass `conditional: { children: <Input .../> }` where `Input` comes from the SSR surface when used on the server.
- `Input`, `Textarea`, and `Select` are available from `/ssr` for static markup rendering (no handlers/state). Use the root exports for client-enhanced behaviour.

## Example (Next.js App Router)

```tsx
// app/ssr/page.tsx
import {
  Header,
  ButtonServer,
  SummaryList,
  CareCard,
  Pagination,
  List,
  Radios,
  Checkboxes,
  Input,
} from '@nhsdigital/fdp-design-system/ssr';

export default function Page() {
  return (
    <main>
      <Header service={{ text: 'Service' }} organisation={{ name: 'NHS' }} />
      <List>
        <List.Item><ButtonServer href="#">Action</ButtonServer></List.Item>
      </List>
      <Radios
        name="contact"
        fieldset={{ legend: { children: 'How should we contact you?' } }}
        options={[
          { value: 'email', label: 'Email' },
          {
            value: 'phone',
            label: 'Phone',
            hint: 'We will only use this if urgent',
            conditional: {
              children: (
                <Input name="phone" label={{ children: 'Your phone number' }} type="tel" />
              ),
            },
          },
        ]}
      />
      <Checkboxes
        name="services"
        fieldset={{ legend: { children: 'Which services do you use?' } }}
        items={[
          { value: 'gp', label: 'GP' },
          {
            value: 'hospital',
            label: 'Hospital',
            conditional: {
              children: (
                <Input name="dept" label={{ children: 'Department (optional)' }} />
              ),
            },
          },
        ]}
      />
        <form action={submit} noValidate>
          <Fieldset legend={{ text: 'Your details' }}>
            <Label htmlFor="email">Email address</Label>
            <Input id="email" name="email" type="email" />
            <Label htmlFor="name">Full name</Label>
            <Input id="name" name="name" />
          </Fieldset>
          <ButtonServer type="submit">Send</ButtonServer>
        </form>
    </main>
  );
}
```

### FYI: how SSR stays hook-free for form controls

- The shared radios/checkboxes renderers avoid importing client-only components by receiving an `Input` implementation via dependency injection. The server variants pass the SSR-safe `Input`, while client variants pass the interactive `Input`.
- As a consumer, you don’t need to pass this explicitly—just import from the `/ssr` entry in server code and from the root entry in client code.

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

## Redirect-with-hash validation (Next.js, no client JS)

A simple, accessible pattern for failed form submissions is to use POST-Redirect-GET with a URL hash that scrolls the user back to an ErrorSummary rendered on the server – no client JavaScript required.

High level:

1. On GET, render your form and (optionally) an SSR `ErrorSummary` wrapped in a container with a stable `id` (for example, `errors`).
1. On POST, validate on the server. If invalid, set a short-lived “flash” cookie with the errors and `redirect('/your-page#errors')`.
1. On the next GET, read the flash cookie, render the `ErrorSummary`, and the browser will scroll to it via the `#errors` fragment. Optionally use CSS `:target` to highlight.

### 1) GET route: render form and load flash errors

```tsx
// app/example-form/page.tsx (server component)
import { cookies } from 'next/headers';
import { ErrorSummary, Input, ButtonServer, Fieldset, Label } from '@nhsdigital/fdp-design-system/ssr';
import { submit } from './submit';

type ErrorItem = { text?: string; html?: string; href?: string };

export default function Page() {
  const jar = cookies();
  const flash = jar.get('example-form-errors');
  let errors: ErrorItem[] | null = null;
  if (flash?.value) {
    try {
      errors = JSON.parse(flash.value);
    } catch {}
  }

  return (
    <main>
      {/* Anchor container for hash-based scroll */}
      <div id="errors">
        {errors?.length ? (
          <ErrorSummary
            titleText="There is a problem"
            errorList={errors}
            descriptionText="Fix the following"
          />
        ) : null}
      </div>

      <form action={submit} noValidate>
        <Fieldset legend={{ text: 'Your details' }}>
          {/* Use stable IDs that match error hrefs */}
          <Label htmlFor="email">Email address</Label>
          <Input id="email" name="email" type="email" />
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" />
        </Fieldset>
        <ButtonServer type="submit">Send</ButtonServer>
      </form>
    </main>
  );
}
```

### 2) POST via Server Action: validate, set flash cookie, and redirect with hash

```ts
// app/example-form/submit.ts
'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function submit(formData: FormData) {
  const email = String(formData.get('email') || '');
  const name = String(formData.get('name') || '');

  const errors: { text: string; href: string }[] = [];
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    errors.push({ text: 'Enter a valid email address', href: '#email' });
  }
  if (!name.trim()) {
    errors.push({ text: 'Enter your full name', href: '#name' });
  }

  if (errors.length) {
    // Keep payloads small; don’t put sensitive data in the URL or cookie
    cookies().set('example-form-errors', JSON.stringify(errors), {
      httpOnly: true,
      path: '/example-form',
      maxAge: 30, // seconds – short-lived flash
    });
    redirect('/example-form#errors');
  }

  // Success → redirect to a confirmation page
  redirect('/example-form/success');
}
```

Notes:

- The hash fragment in `redirect('/example-form#errors')` is preserved in the Location header; browsers will scroll to the element with `id="errors"` on load.
- The SSR `ErrorSummary` renders without hooks; wrapping it in `#errors` keeps this pattern fully server-only.
- Use `href` entries in `errorList` (e.g. `#email`) that match the `id` on the related form controls, so clicking an error moves focus appropriately.
- In App Router, `cookies()` in a server component is read-only. Don’t mutate cookies there; rely on a short `maxAge` for the flash or clear it in a GET route handler if you need immediate removal.
- When you set a function (server action) as the form `action`, React provides `method` and `encType` automatically; specifying them will be overridden. Omit `method`/`encType` in that case (as shown above).

### Alternative: Route Handler for POST

If you prefer a route handler, implement POST in `app/example-form/route.ts`:

```ts
// app/example-form/route.ts
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = String(formData.get('email') || '');
  const name = String(formData.get('name') || '');

  const errors: { text: string; href: string }[] = [];
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    errors.push({ text: 'Enter a valid email address', href: '#email' });
  }
  if (!name.trim()) {
    errors.push({ text: 'Enter your full name', href: '#name' });
  }

  if (errors.length) {
    cookies().set('example-form-errors', JSON.stringify(errors), {
      httpOnly: true,
      path: '/example-form',
      maxAge: 30,
    });
    return NextResponse.redirect(new URL('/example-form#errors', request.url), 303);
  }

  return NextResponse.redirect(new URL('/example-form/success', request.url), 303);
}
```

### Optional: Visual highlight with :target

You can draw attention to the summary when navigated via the hash using CSS only:

```css
/* app/globals.css */
#errors:target .nhsuk-error-summary {
  outline: 3px solid var(--nhsuk-focus-color, #0b0c0c);
  outline-offset: 2px;
}
```

Accessibility tips:

1. The hash scrolls the summary into view but does not move keyboard focus. If you need focus management, see the client options below.
1. Keep the flash lifetime short and scoped to the path; never store sensitive values in the cookie.
1. Ensure each error links to a focusable field by matching `href` to the field `id`.

## Enhancing ErrorSummary focus on the client

The SSR `ErrorSummary` intentionally omits autofocus (no hooks/side effects). You have two easy options to focus it on the client after a failed submission.

1. Use the interactive client variant

```tsx
'use client';
import { ErrorSummary } from '@nhsdigital/fdp-design-system';

export function FormErrorSummary(props: {
  errorList: { text?: string; html?: string; href?: string }[];
  titleText?: string;
  descriptionText?: string;
}) {
  // Client variant manages focus on mount
  return <ErrorSummary {...props} />;
}
```

1. Wrap the SSR variant and opt-in to focus

```tsx
'use client';
import { useEffect, useRef } from 'react';
import { ErrorSummary as SSRErrorSummary } from '@nhsdigital/fdp-design-system/ssr';

export function FocusedErrorSummary(props: {
  errorList: { text?: string; html?: string; href?: string }[];
  titleText?: string;
  descriptionText?: string;
}) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!props.errorList?.length) return;
    // Focus the inner summary (SSR variant sets tabIndex="-1")
    hostRef.current?.querySelector<HTMLElement>('.nhsuk-error-summary')?.focus();
  }, [props.errorList]);

  return (
    <div ref={hostRef}>
      <SSRErrorSummary {...props} />
    </div>
  );
}
```

Recommendations:

- Only focus when errors are present and the summary becomes visible.
- Prefer focusing once after submit/navigation to avoid stealing focus during typing.
- Keep the summary’s `tabIndex={-1}` (already set in SSR variant) so programmatic focus is allowed without adding to tab order.
