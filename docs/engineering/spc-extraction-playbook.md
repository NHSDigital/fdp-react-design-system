# SPC Extraction Playbook (Shadow Repo ➜ Canonical)

End‑to‑end guidance for spinning up a shadow repository for `@nhs-fdp/spc`, validating it in parallel with the monorepo, and promoting it to the canonical source once readiness gates are met.

---

## 1. Objectives

| Goal | Why it matters |
|------|----------------|
| Isolate SPC release cadence | Ship SPC fixes/features without full design-system release overhead |
| Maintain reversibility | Shadow phase keeps monorepo as source of truth until adoption proves value |
| Enforce quality gates | Prevent silent export breaks and bundle bloat pre‑extraction |
| Provide clean history | Optional subtree split for auditable evolution |

---

## 2. Readiness Prerequisites (Monorepo)

All should be green/stable before starting the shadow repo:

- `npm run spc:validate` PASS (build, SSR, export diff, size, CSS artifact)
- Export surface snapshot established
- Bundle gzip baseline recorded (`index.esm.js` & `spc.css`)
- Alias convergence complete (only root `@/` in barrels)

---

## 3. Phase 1 – Shadow Repo Creation (Now)

1. Create new private repo: `nhs-fdp-spc` (enterprise template: CODEOWNERS, Dependabot, branch protection).
2. Choose content import strategy:
   - Simple copy (fast): copy `packages/nhs-fdp-spc/` plus LICENSE & README.
   - History preserving: subtree split (see Appendix A) of `packages/nhs-fdp-spc` (+ optionally SPC source directories once internalised).
3. Add minimal files (if copy strategy):
   - `package.json` (scoped name, repository, bugs, homepage, exports, types)
   - `README.md`, `CHANGELOG.md`, `LICENSE`, `CODE_OF_CONDUCT.md` (if needed)
4. Set version to `0.0.0-alpha.0` (pre‑release tag only).
5. Configure `.npmrc` (GitHub Packages) & add publish tokens as repo secrets.

---

## 4. Phase 2 – Shadow CI Workflows

Recommended single workflow (or split):

| Job | Scripts | Purpose |
|-----|---------|---------|
| install | `npm ci` | Deterministic dependencies |
| build | `npm run build:spc` | JS + CSS integrity |
| validate | `npm run spc:validate` | Gates: size, SSR, exports, CSS |
| exports-check | `npm run spc:exports:check` | Prevent accidental removals |
| adoption-report (optional early) | (n/a – runs only in monorepo) | Not needed once extracted |
| test (optional) | `npm test` (if unit subset copied) | Lock behaviour early |
| publish (manual dispatch) | `npm publish --tag alpha` | Dry-run releases |

Artifacts / outputs:

- Upload dist (optional) for inspection.
- Generate summary with gzip sizes & export delta count.

---

## 5. Phase 3 – Ongoing Sync (Until Flip)

During shadow phase the monorepo stays authoritative. Keep the shadow repo updated by either:

1. Manual PRs: Periodically re-copy changes from monorepo SPC package.
2. Automation: A monorepo workflow triggered on `packages/nhs-fdp-spc/**` changes pushing to shadow (PAT secret). Ensure generated commits are labelled (e.g. `chore(shadow-sync): …`).

Release strategy: publish only `alpha` / `beta` tags; do not mark `latest`.

---

## 6. Phase 4 – Readiness Gates

Flip to canonical only when ALL pass:

| Gate | Target | Source |
|------|--------|--------|
| Adoption | ≥70% of SPC import lines use `@nhs-fdp/spc` | `npm run spc:adoption` (monorepo) |
| Export stability | 2 consecutive minor cycles with no breaking removals | export snapshot checks |
| CI health | 100% green on build + validate + parity | shadow repo CI |
| Parity completeness | Canonical numeric fixtures (XmR, T, G) unskipped | parity tests |
| Size budget | gzipped ESM bundle < target (e.g. 120KB tightened) | validate output |
| Documentation | Migration guide & external README finalised | docs |

---

## 7. Phase 5 – Canonical Flip

1. Final announcement & migration window (e.g. 4–6 weeks) posted in internal comms & CHANGELOG.
2. Shadow repo publishes first stable version (e.g. `0.1.0`).
3. Monorepo updates:
   - Replace legacy re-exports with a thin dependency on `@nhs-fdp/spc` OR mark as deprecated with console warning.
   - Update internal documentation to point to new repo.
4. Monitor for regressions (error rate, bundle size changes in consumers).
5. After window expires, remove deprecated legacy exports.

Rollback (if needed):

- Re-point consumers back to monorepo package version; publish patch release from monorepo including latest shadow code (subtree re-import if required).

---

## 8. Phase 6 – Post-Flip Hardening

- Introduce semantic release or conventional-changelog action for automated versioning.
- Tighten size budgets; track delta per PR.
- Add provenance: SBOM generation & license scan (if mandated by org policy).
- Consider splitting engine & UI sub-entries if adoption for pure logic emerges.

---

## 9. Metrics & Reporting

| Metric | Source | Action Threshold |
|--------|--------|------------------|
| Adoption % | `spc:adoption` | <70% → extend migration support |
| Bundle size delta | CI summary | >5% increase → require justification |
| Export churn | `spc:exports:check` diff count | >0 unintended → block merge |
| Parity failures | parity job | Any → block release |

---

## 10. Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| Divergent code between monorepo & shadow | Automate sync; diff on each PR |
| Hidden deep imports bypassing public API | Export snapshot + codemod enforcement |
| Size creep after extraction | CI size budget & trend report |
| Consumer lag on migration | Early comms + codemods + adoption dashboard |

---

## Appendix A – Subtree Split (History Preservation)

```bash
# From monorepo root (ensure clean working tree)
git checkout master
git pull

# 1. Create subtree branch for SPC package history only
git subtree split --prefix=packages/nhs-fdp-spc -b spc-package-history

# 2. (Optional) Add additional SPC source paths once isolated
# Repeat subtree split for each additional path if needed

# 3. Push to new (empty) shadow repo
git remote add spc-origin git@github.com:<org>/nhs-fdp-spc.git
git push spc-origin spc-package-history:main
```

If you also want engine source history that still lives outside the package, migrate those files physically into the package in the monorepo first, then repeat the split to ensure continuity.

---

## Appendix B – Minimal Shadow CI Workflow (Conceptual)

```yaml
name: spc-ci
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build:spc
      - run: npm run spc:validate
      - run: npm run spc:exports:check
      - name: Bundle summary
        run: |
          echo 'Bundle sizes:' >> $GITHUB_STEP_SUMMARY
          npx gzip-size-cli packages/nhs-fdp-spc/dist/index.esm.js >> $GITHUB_STEP_SUMMARY || true
```

---

## Appendix C – Migration Communication Template

> We are promoting `@nhs-fdp/spc` to its own repository. Legacy imports via `@nhs-fdp/design-system` will remain for a deprecation window of 6 weeks. Please run `npm run spc:codemod:imports` to migrate. Track progress with `npm run spc:adoption`. Report issues in #spc-migration.

---

## Change Log (Playbook)

| Date | Change |
|------|--------|
| 2025-11-10 | Initial version added alongside adoption metrics script |
