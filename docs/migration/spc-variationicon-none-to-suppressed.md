# Migrate VariationIcon.None to VariationIcon.Suppressed

Status: active (Phase 4 prep) — `Suppressed` is canonical; `None` is a deprecated alias accepted temporarily.

## Why

- Engine now emits `variationIcon: 'suppressed'` for no‑judgement states (e.g., below minimum points).
- UI and descriptors treat `None` as a deprecated alias; a one‑time runtime warning is logged when encountered at the icon boundary.
- Tests/docs use `suppressed` as the canonical value.

## What to change

- Replace enum and string usages of `None` with `Suppressed` in code and tests.
- Remove redundant branches checking both `Suppressed` and `None`. Prefer a single canonical check.
- Keep consumer handling of legacy data if needed by normalising `none` → `suppressed` at boundaries.

### Before

```ts
if (icon === VariationIcon.Suppressed || icon === VariationIcon.None) {
  // ...
}
```

### After

```ts
const canonical = icon === VariationIcon.None ? VariationIcon.Suppressed : icon;
if (canonical === VariationIcon.Suppressed) {
  // ...
}
```

## Engine and UI boundaries

- Engine: Emits `suppressed` under below‑threshold and other no‑judgement cases.
- UI: `SPCIcon` logs one‑time deprecation when `None` is observed and renders as no‑judgement.
- Chart boundary: `SPCChart` canonicalises `None` → `Suppressed` before rendering (added in this phase).

## Tests

- Update expectations to use `"suppressed"`.
- Example: threshold test asserts `variationIcon === "suppressed"` for ≤12 points.

## Codemod (optional)

Use your editor’s multi‑file search/replace or a codemod to update enum usages:


- `VariationIcon.None` → `VariationIcon.Suppressed`
- `variationIcon: 'none'` → `variationIcon: 'suppressed'`


 
Caveats:

- Intentional occurrences in docs and deprecation comments should be left intact.
- If you rely on external data that can still send `none`, keep a boundary normaliser.

## Verification

- Run:
  - `npm run test:components`
  - `npm run test:ssr-components`
  - `npm run build:fast`

## Related

- Thresholds behaviour: `../spc-thresholds.md`
- Refactor roadmap: `../spc-refactor-roadmap.md`
