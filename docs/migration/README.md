# Migration Guides

This folder collects migration guides for the NHS FDP Design System.

## SPC Engine

- SPC Settings V2 (grouped settings) – migration path, normaliser behaviour, and codemod usage:
  - See `spc-settings-v2-migration.md`.
- Variation icon canonicalisation — migrate `VariationIcon.None` to `VariationIcon.Suppressed`:
  - See `spc-variationicon-none-to-suppressed.md`.
- Constants centralisation — prefer importing enums/registries from `spcConstants.ts` (re-exported via `spc.ts` for compatibility):
  - See `spc-constants-centralisation.md`.

Quick commands:

```sh
# scan (dry-run)
npm run spc:codemod:scan

# apply safe edits (dot-access only)
npm run spc:codemod:apply
```

After applying, run the validation suite:

```sh
npm run test:components
npm run test:ssr-components
npm run build:parity
```
