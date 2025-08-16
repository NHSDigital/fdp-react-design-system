# SSR Testing Guide

This project uses a unified server-side rendering helper `renderSSR` for all SSR-only tests.

## Why `renderSSR`?

React 19 changes (notably around hydration and render APIs) made a bespoke `ServerRenderer` abstraction harder to maintain. `renderSSR`:

- Wraps `renderToString` and sets up a JSDOM document with a fixed URL (enables storage APIs)
- Binds all `@testing-library/dom` queries to the server-generated `container`
- Preserves leading `<link>` preload tags for hydration fidelity
- Returns a familiar query API (getByRole, getByText, queryByTestId, etc.)

```ts
const { container, getByRole, getByText } = renderSSR(<MyComponent />);
expect(getByRole('heading', { level: 2 })).toBeTruthy();
```

## Returned Object Shape

```ts
interface SSRRenderResult {
  container: HTMLElement;        // <body> element containing server markup
  html: string;                  // Raw server HTML string
  prettyDOM: (...args) => string;// Pretty-printer wrapper
  // Bound testing-library queries (getByRole, queryByText, etc.)
}
```

Unlike client `@testing-library/react` `render`, there is no `unmount` and no `rerender` (SSR output is static). For re-renders just call `renderSSR` again.

## Text Fragmentation Caveat

Server output often splits inline formatting across nodes (`<strong>`, `<em>`, etc.). Exact `getByText('Full sentence with bold word')` calls can fail because the text is not a single text node. Prefer one of:

```ts
// 1. Substring match
expect(container.textContent).toContain('Full sentence');

// 2. Regex match
expect(getByText(/Full sentence/)).toBeTruthy();

// 3. Target the formatted segment explicitly
aexpect(getByText('bold word').tagName).toBe('STRONG');
```

## Helper: assertContainsText

For repetitive substring assertions you can import the lightweight helper:

```ts
import { assertContainsText } from '../../test-utils/assertContainsText';
assertContainsText(container, 'Important notice');
```

The helper normalises whitespace and gives a clearer error message.

## Hydration Tests

Hydration validation should be in dedicated `*.hydration.test.tsx` files. Pattern:

```ts
const { html, container } = renderSSR(<HeaderSSR {...props} />);
const wrapper = document.createElement('div');
wrapper.innerHTML = html; // initial server markup
hydrateRoot(wrapper, <HeaderSSR {...props} />);
```

Keep preload `<link>` tags intact at the start of `html`, as they are part of the fidelity contract.

## Do / Avoid

Do:

- Use bound queries (getByRole) for accessibility-oriented assertions
- Use `container.querySelector` for structural hooks (.nhsuk-* classes)
- Prefer substring / regex for long or mixed-format text

Avoid:

- Using legacy `ServerRenderer` (removed)
- Depending on `unmount` or `rerender`
- Over-destructuring unused queries (keep it minimal)

## Debugging Tips

```ts
// Print nicely formatted DOM
console.log(prettyDOM());
// Raw HTML for diffing
console.log(html);
```

If a `getByText` fails, inspect `container.innerHTML` and adjust to a substring/regex or target inner element.

## Migration Status

All tests now use `renderSSR`; legacy `ServerRenderer` was removed. The transitional alias export `render` was also dropped.

---
Feel free to extend this guide with streaming SSR or hydration mismatch troubleshooting in future iterations.
