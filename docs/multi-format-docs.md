---
title: Multi-Format Component Documentation Workflow
---

## Multi‑Format Component Documentation Workflow

This design system now generates documentation pages that show each component in three forms:

1. React usage (source of truth)
2. Nunjucks macro invocation (templating environments)
3. Canonical static HTML snippet (copy/paste & other stacks)

## Sources of Truth

React SSR output is treated as the canonical HTML. Nunjucks macros are generated / updated to achieve *HTML parity* with the React version (enforced by macro parity tests and the HTML normaliser). Static HTML snippets are derived from SSR-rendering the React component with representative props and then normalising.

### Normalisation Rules

The normaliser (`tests/macroParity/utils/htmlNormaliser.ts`) ensures deterministic comparison by:

- Collapsing whitespace
- Sorting attributes within tags
- Normalising boolean attributes (e.g. `disabled=""` -> `disabled`, `open=""` -> `open`)
- Removing empty comment placeholders
- Trimming text node edges
- Collapsing redundant nested spans

This produces stable HTML across React SSR, Nunjucks and raw copies.

### Static HTML Generation Script

Script: `scripts/generate-static-html-examples.ts`

Process:

1. Imports built component code from `dist/src/components/<Component>/index.js`
2. Renders with `renderToStaticMarkup`
3. Passes through the normaliser
4. Writes to `docs/static-html/<Component>.html`

Currently implemented for: Radios (extend by adding entries to the `components` array).

Add another component:

```ts
components.push({
  name: 'Button',
  importPath: 'Button',
  elementExport: 'Button', // if named
  props: { children: 'Save' },
  outFile: 'Button.html'
});
```

Then run:

```bash
npm run examples:generate:html
```

### Runtime Documentation Pages

Two environments expose docs pages:

| Environment | Route | Purpose |
|-------------|-------|---------|
| Next.js | `/components/radios` | React example, macro snippet string, static HTML (read from generated file) |
| Express and Nunjucks | `/components/radios` | Live macro render and static HTML snippet |

Next.js page (`examples/nextjs/app/components/radios/page.tsx`) attempts to read the generated file on the server (falling back to a placeholder). Express route (`examples/express-njk/server.mjs`) reads file and injects `staticHtml` into the template (`views/radios.njk`).

### Test Coverage

Playwright spec `tests/runtime/docs-pages.spec.ts` performs smoke checks for both routes (presence of heading, macro output visibility, snippet placeholder / content).

Existing runtime specs ensure behaviours and hydration remain warning-free.

### Integration with CI

The `test:runtime` script now runs static HTML generation before executing Playwright tests:

```json
"test:runtime": "npm run examples:build && npm run examples:generate:html && playwright test tests/runtime"
```

### Extending the System

Steps to add documentation for a new component:

1. Ensure component built & parity tests exist.
2. Add entry in generation script with representative props.
3. Create/update docs pages (Next.js & Nunjucks) following Radios pattern.
4. Run `npm run examples:generate:html`.
5. Add Playwright assertions if unique behaviours need coverage.

### Future Automation Opportunities

- Auto-derive macro snippet from the React props object (serialise to macro call signature)
- Add a script to validate generated static HTML matches both React and macro outputs via the normaliser (triple diff)
- Embed accessibility notes and behaviour initialisation guidance per component
- Generate MDX/Markdown docs directly from props metadata (TypeScript type introspection)

### Maintenance Principles

1. Single canonical source: React SSR output.
2. Deterministic transformations only (no hand-edited static HTML).
3. Tests enforce parity to avoid silent drift.
4. Scripts are idempotent and safe to re-run locally or in CI.

---
Questions / improvements: open an issue or extend the generation script with your component.
