# Multi‑Render Architecture (React and Nunjucks and Static HTML)

This design system now supports three interoperable rendering paths:

1. React (SSR and hydration) – canonical implementation used in applications
2. Nunjucks macros – schema‑driven generation for server templating environments
3. Static / plain HTML enhanced progressively by the behaviour layer

All three paths share: design tokens, CSS, accessible markup structure, and progressive enhancement behaviours.

## Goals

- Deterministic HTML parity across renderers (verified with macro parity tests)
- Zero hand‑maintained duplication for macros (auto‑generated from component schema where possible)
- Progressive enhancement: initial HTML is fully accessible; behaviours add interactivity only
- Safe default escaping for any user/content string – only explicitly marked HTML is unescaped

### Macro Generation Pipeline

File: `scripts/generate-nunjucks-macros.ts`

Pipeline steps when running `npm run generate:nunjucks` (or implicitly inside certain build flows):

1. Import each `*.schema.ts` describing component props (e.g. `Button.schema.ts`, `Checkboxes.schema.ts`)
2. Emit a Nunjucks macro file per component into `dist/macros/`
3. Copy any manually maintained macros that are not schema‑generated
4. Produce `dist/macros/index.json` manifest

Schema properties become documented `@param` lines at the top of each macro for quick reference.

### Using Macros in Nunjucks

After installing the package you can import macros directly from the published `macros` export (directory export provided via `package.json`):


```njk
{% from "@nhsdigital/nhs-fdp-design-system/macros/checkboxes.njk" import checkboxes %}
{% set html = checkboxes({
  name: 'preferences',
  items: [
    { value: 'email', text: 'Email updates', checked: true },
    { value: 'sms', text: 'SMS alerts', conditional: '<p>Enter your number on the next screen.</p>' },
  ]
}) %}
{{ html | safe }}
```

Notes:

- Macro return values are plain HTML strings; pipe through `| safe` only when you deliberately want to prevent a second escaping pass.
- Conditional content inside Checkboxes / Radios is escaped by default to mirror the React baseline. Supplying raw HTML is intentional; parity tests assert the exact escaping strategy.

### Adding a New Schema‑Generated Macro

1. Create `src/components/MyComponent/MyComponent.schema.ts` exporting `MyComponentSchema` (shape consistent with existing schemas – must include `name` and `props` array).
2. Implement / update React component.
3. Add generation logic in `scripts/generate-nunjucks-macros.ts` (follow existing small function pattern).
4. Run: `npm run generate:nunjucks`.
5. Add a parity test under `tests/macroParity/myComponent.macroParity.test.tsx` comparing React SSR output with macro output (use existing tests as template).

### Parity Testing

Location: `tests/macroParity/`.

Pattern per test:

1. Render React component to string (SSR) with props.
2. Render Nunjucks macro with same props.
3. Normalise HTML (shared utility) to eliminate incidental differences (attribute ordering, whitespace).
4. Assert strict equality.

Run all macro parity tests:

```bash
npm run test:macro-parity
```

### Escaping Strategy

| Context | Strategy | Rationale |
|---------|----------|-----------|
| `item.conditional` (Checkboxes, Radios) | Escaped (entities) | Match React string child SSR |
| `params.html` (explicit HTML channels) | safe filter | Intentional raw HTML injection |
| Default text / label props | Escaped | Prevent XSS & ensure parity |

### When Parity Differs Intentionally

Occasionally early React effects update the DOM post‑mount (e.g. CharacterCount message). Macros replicate only the initial SSR state; subsequent dynamic changes are driven client‑side by behaviours for all render paths.

### Troubleshooting

| Issue | Likely Cause | Fix |
|-------|--------------|-----|
| Parity test raw `<p>` vs `&lt;p&gt;` | Wrong escape filter | Adjust macro (escape vs raw) |
| Macro not regenerated | Missing `--generate` | Run generation with flag |
| New schema ignored | Not in attempts array | Add to generator attempts |
| Attribute mismatch | Normaliser gap / order diff | Update normaliser or macro ordering |

### Roadmap

- Auto‑diff guided suggestions on parity failures
- Optional unsafe HTML flag per conditional item (`allowHtml: true` => use `| safe`)
- Central schema type generation to enforce consistency

See also: `docs/guides/macro-parity-tracking.md` for a living coverage matrix and batching plan.

---

For deeper SSR test patterns see: `docs/testing/ssr-testing.md`.
