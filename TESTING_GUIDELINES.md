# Testing Guidelines

This document defines standards for the component test suite (Vitest + React Testing Library + SSR helpers).

## Test File Pattern

Split by concern:

- `Component.client.test.tsx` – interactive behavior, events, keyboard, accessibility.
- `Component.ssr.test.tsx` – structural SSR output (roles, landmark semantics, critical classes, conditional omission).
- `Component.hydration.test.tsx` – SSR → client integrity + one post-hydration interaction.

Monolithic `Component.test.tsx` files are deprecated. A `Component.test.deprecated` placeholder documents migration.

## Query Priority (Testing Library)

1. `getByRole` (with `name` option)
2. `getByLabelText`
3. `getByPlaceholderText`
4. `getByText` (scoped, exact)
5. `getByTestId` (only when no semantic alternative)
6. Avoid class / tag selectors – brittle; only as last resort with explanatory comment.

## Assertion Focus

- Behavior > implementation. Avoid asserting internal class lists unless they encode a semantic/variant contract.
- Prefer `aria-*` / role correctness and visible text over raw HTML substrings.
- For variant classes (e.g. `--small`, `--error`), assert presence of the variant, not the whole class string.

## Accessibility (A11y)

Each interactive component should have at least:

- One a11y smoke test using `axe` (no critical violations).
- Assertions for: labels, `aria-describedby` relationships, `aria-current`, focus trapping / escape (if applicable), keyboard navigation.

## Hydration Tests

Pattern:

```ts
const jsx = <Component {...props} />;
const { server, client } = hydrateWithoutMismatch({ ssr: jsx, client: jsx });
// Post-hydration interaction (e.g. click toggle, select radio)
```

Validate one enhanced behavior after hydration to ensure event listeners and progressive enhancement logic attached.

## Edge & Negative Cases

Include at least one test covering:

- Empty / minimal props (component renders nothing or fallback correctly)
- Disabled or read-only behavior (interaction prevented)
- Large collections (force overflow path – mock measurements if needed)
- Keyboard navigation sequences (`Tab`, `ArrowUp/Down`, `Escape`)

## Test Data Builders

Centralise repetitive option/nav arrays in `src/test-utils/builders.ts`:

```ts
buildRadiosOptions({ count: 3, withConditional: true });
buildNavItems({ length: 6, currentIndex: 2 });
```

Helps evolve shapes without touching many files.

## Snapshot Usage

- Avoid broad snapshots of full HTML trees (too noisy).
- Allow curated structural snapshots for complex, deterministic markup (e.g. responsive navigation skeleton) – store in `__snapshots__/` with clear intent.

## Coverage & Thresholds (Suggested)

Introduce thresholds and ratchet gradually:

- Statements: 60% (raise over time)
- Branches: 45%
- Lines: 60%
- Functions: 55%

## Performance / Flake Mitigation

- Debounced / timed logic: inject or mock timers (`vi.useFakeTimers()`), advance deterministically.
- Avoid relying on JSDOM layout metrics (`offsetWidth`) directly; mock measurements; isolate overflow calculations.

## Do / Don’t Summary

| Do | Don’t |
|----|-------|
| Use role-based queries | Assert internal implementation details not part of public contract |
| Add one post-hydration interaction | Only check for hydration mismatch and stop |
| Provide negative & keyboard cases | Cover only happy path presence |
| Centralise test data | Duplicate large option arrays inline |
| Add a11y smoke tests | Rely solely on manual visual checks |

## Roadmap (Adoption Steps)

1. Add axe utility + initial smoke tests for 3–5 core components.
2. Introduce builders and refactor Radios / Select tests.
3. Enhance hydration tests with an interaction.
4. Add keyboard navigation tests to Radios, Tabs, Menu-like components.
5. Ratchet coverage thresholds after stabilisation.

## Example (Improved Client Test Sketch)

```ts
it('changes selection with ArrowDown', () => {
  render(<Radios name="contact" options={buildRadiosOptions({ count: 3 })} />);
  const radios = screen.getAllByRole('radio');
  radios[0].focus();
  fireEvent.keyDown(radios[0], { key: 'ArrowDown' });
  expect(radios[1]).toBeChecked();
});
```

## Maintenance

- New component PRs MUST ship the triad + a11y smoke + at least one keyboard or negative path test if interactive.
- Any refactor altering accessible name/role must update or add corresponding assertions.

---

This document will evolve; propose additions via PR comments.
