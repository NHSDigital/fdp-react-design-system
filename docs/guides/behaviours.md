# Behaviour Layer & Progressive Enhancement

The behaviour layer supplies JavaScript enhancements that mirror React interactive logic for non‑React (Nunjucks / static HTML) environments while remaining opt‑in and easily disposable.

## React Component for SSR/Hydration

For React applications (especially Next.js App Router), use the `BehavioursLoader` component to safely initialize behaviours after hydration:

```tsx
import { BehavioursLoader } from '@nhsdigital/nhs-fdp-design-system/behaviours/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <BehavioursLoader />
      </body>
    </html>
  );
}
```

**Features:**
- ✅ Prevents SSR/client attribute mismatches
- ✅ Avoids hydration warnings
- ✅ Dynamically imports behaviours bundle (keeps it out of server chunk)
- ✅ Initializes after React hydration completes
- ✅ Supports scoped initialization
- ✅ Provides error handling callbacks

**Props:**
- `scope?: ParentNode | null` - Optional container to limit behaviour initialization
- `onInit?: () => void` - Callback invoked after successful initialization
- `onError?: (error: unknown) => void` - Callback invoked if initialization fails

**Scoped example:**
```tsx
'use client';
import { useRef } from 'react';
import { BehavioursLoader } from '@nhsdigital/nhs-fdp-design-system/behaviours/react';

export function FormSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={containerRef}>
      <YourFormComponents />
      <BehavioursLoader 
        scope={containerRef.current}
        onInit={() => console.log('Form behaviours ready')}
      />
    </div>
  );
}
```

## Provided Behaviours

| Area | Init Function | Teardown | Features | Custom Events |
|------|---------------|----------|----------|---------------|
| Buttons (double‑click prevention) | `initButtons` | `detachButtons` | Prevent duplicate submits, space key activation on anchors | *(none)* |
| Radios | `initRadios` | `detachRadios` | Arrow key roving focus, conditional reveal (exclusive) | `nhs:radios:change` |
| Checkboxes | `initCheckboxes` | `detachCheckboxes` | Conditional reveal (multi) | `nhs:checkboxes:change` |
| Range Input | `initRanges` | `detachRanges` | Live current value sync | `nhs:range:update` |
| Character Count | `initCharacterCounts` | `detachCharacterCounts` | Live count, threshold, over‑limit messaging | `nhs:character-count:update` |

Global convenience:

- `initAll()` initialises every behaviour under a scope (default `document`)
- `teardownAll()` detaches all behaviours in a scope

These are exposed globally in browsers as:
```js
window.__nhsInitAllBehaviours()
window.__nhsTeardownAllBehaviours()
```
and per‑behaviour hooks like `window.__nhsInitRadios`, `window.__nhsDetachRadios`, etc.

### Conditional Reveal Utility

File: `src/behaviours/conditionalRevealUtil.ts` centralises the pattern: input with id `x` controls content container `#x-conditional`.

Options:

```ts
attachConditionalReveals({
  inputSelector: 'input.nhsuk-radios__input[type="radio"][name="example"]',
  hiddenClass: 'nhsuk-radios__conditional--hidden',
  container: someElement,
  eventName: 'nhs:radios:change',
  exclusive: true // (radios)
});
```

### Usage Example (Static HTML)

```html
<form>
  <div class="nhsuk-radios">
    <div class="nhsuk-radios__item">
      <input class="nhsuk-radios__input" id="contact-email" type="radio" name="contact" checked>
      <label class="nhsuk-radios__label" for="contact-email">Email</label>
      <div id="contact-email-conditional" class="nhsuk-radios__conditional">You selected email.</div>
    </div>
    <div class="nhsuk-radios__item">
      <input class="nhsuk-radios__input" id="contact-phone" type="radio" name="contact">
      <label class="nhsuk-radios__label" for="contact-phone">Phone</label>
      <div id="contact-phone-conditional" class="nhsuk-radios__conditional nhsuk-radios__conditional--hidden">You selected phone.</div>
    </div>
  </div>
</form>
<script type="module">
  import { initRadios } from '@nhsdigital/nhs-fdp-design-system/behaviours/react';
  initRadios();
  document.addEventListener('nhs:radios:change', e => {
    // analytics hook
  });
</script>
```

### Event Details

| Event | Detail Payload (if any) | When Fired |
|-------|-------------------------|-----------|
| `nhs:radios:change` | none | After selection changes & conditionals updated |
| `nhs:checkboxes:change` | none | After any checkbox toggled & relevant conditionals updated |
| `nhs:range:update` | none | On each `input` for range slider |
| `nhs:character-count:update` | `{ current, remaining, isOverLimit }` | On each `input` change in the textarea |

### Pattern: Idempotent Initialisation

Each element stores a private handle (e.g. `__nhsRadiosBehaviour`) ensuring calling `initRadios()` multiple times is safe. Teardown deletes the handle so a subsequent `init*` re‑enables the behaviour.

### Teardown Example

```js
import { initAll, teardownAll } from '@nhsdigital/nhs-fdp-design-system/behaviours/react';

initAll();
// Later, for single page navigation cleanup
teardownAll();
```

### Character Count Notes

Initial server / macro render shows the baseline message (disabled state). Dynamic remaining / over‑limit messaging appears only after the first input event, matching the React SSR and hydration timing.

### Extending with a New Behaviour

1. Implement an `enhanceX` function that returns `{ detach() }`.
2. Attach handles to DOM nodes with a unique property name to guarantee idempotence.
3. Export `initX` / `detachX` and add to `behaviours/index.ts` `initAll` and `teardownAll`.
4. Emit a custom namespaced event (`nhs:component:action`) for parity and observability.
5. Add minimal tests (SSR unaffected; consider DOM jsdom interaction tests).

### Roadmap

- Debounced event emission for high‑frequency inputs (range, character count)
- Optional configuration for double‑click prevention duration
- Lightweight analytics hook registration API

---

See also: `docs/guides/multi-render-architecture.md` for macro generation and parity.
