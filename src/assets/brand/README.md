# Brand Assets

Place shared brand assets here. Suggested structure:

- `src/assets/brand/nhs/` – NHS logos and marks
- `src/assets/brand/fdp/` – FDP logos and marks

Preferred formats: SVG (primary), with PNG fallbacks if required for external consumers.

## Referencing in Components

- Import SVG as React component (if SVGR is configured) or use `<img>` with the resolved URL via Vite.
- For Header: we can swap the NHS logo SVG when in FDP brand scope.

## Tokenising Logos (optional)

For variants (full, compact, monochrome, inverse) create a small mapping in TS, e.g. `src/assets/brand/index.ts` exporting a dictionary keyed by brand and variant.

If you want to drive background/foreground colours, prefer using existing CSS variables (semantics + brand overlays) rather than image-embedded colours.
