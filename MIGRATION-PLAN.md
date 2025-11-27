# Migration Plan: NHS FDP Design System to NHSDigital GitHub

This document outlines the step-by-step process to migrate from `fergusbisset/nhs-fdp-design-system` to `NHSDigital/fdp-react-design-system` with npm public registry publishing.

## Overview

| Item | From | To |
|------|------|-----|
| **Repository** | `github.com/fergusbisset/nhs-fdp-design-system` | `github.com/NHSDigital/fdp-react-design-system` |
| **Package Name** | `@nhsdigital/nhs-fdp-design-system` | `@nhsdigital/nhs-fdp-design-system` |
| **Registry** | GitHub Packages | npm public registry |
| **Author** | Fergus Bisset | FDP Product Design Team |

---

## Phase 1: Merge NHSDigital Template

The NHSDigital template provides standardized CI/CD, security scanning, and compliance tooling.

### Step 1.1: Add NHSDigital remote and fetch template
```bash
git remote add nhsdigital https://github.com/NHSDigital/fdp-react-design-system.git
git fetch nhsdigital main
```

### Step 1.2: Merge template (allowing unrelated histories)
```bash
git merge nhsdigital/main --allow-unrelated-histories -m "Merge NHSDigital repository template"
```

### Step 1.3: Resolve conflicts
Expected conflicts (template vs existing files):
- `.gitignore` - Merge both (keep our npm/node ignores, add template's report ignores)
- `README.md` - Keep ours, but adopt template structure where appropriate
- `.github/` workflows - Keep template's CI/CD structure, adapt for npm

### Step 1.4: Review and integrate template components
Template provides:
- `.github/workflows/` - CI/CD pipeline stages (commit, test, build, publish, deploy)
- `.github/actions/` - Security scanning, linting, dependency checks
- `.github/ISSUE_TEMPLATE/` - Standardized issue templates
- `scripts/` - Git hooks, linting configs
- `docs/adr/` - Architecture Decision Record templates
- `docs/user-guides/` - Security and compliance guides
- `Makefile` - Standardized make targets
- `.devcontainer/` - VS Code dev container config
- `LICENCE.md` - MIT licence (NHS standard)

---

## Phase 2: Remove Unnecessary Dependencies

### Step 2.1: Remove Chromatic
```bash
npm uninstall chromatic @chromatic-com/storybook
```

Remove from `package.json` scripts:
- `"chromatic": "npx chromatic"`
- `"chromatic:ci": "npx chromatic --exit-zero-on-changes"`
- `"chromatic:review": "npx chromatic --auto-accept-changes"`

### Step 2.2: Remove GSAP
```bash
npm uninstall gsap
```

Update components to use fallbacks:
- `src/components/Parallax/ParallaxScene.tsx` - Already has native scroll fallback
- `src/components/ProductRoadmap/ProductRoadmap.tsx` - Already has CSS fallback

Changes needed:
1. Remove GSAP import attempts from both components
2. Use native scroll/CSS-only implementations
3. Update component documentation to reflect no GSAP dependency

---

## Phase 3: Remove Unnecessary Documentation

### Files to DELETE (agent work, tracking, aspirational):

```bash
# Burndown/tracking docs
rm docs/data-visualisation/DATA-VIZ-BURNDOWN.md
rm docs/roadmaps/DATA-VIZ-BURNDOWN.md
rm docs/roadmaps/SPC_V2_SQL_PARITY_BURNDOWN.mdx

# Agent work summaries
rm docs/BUILD_OUTPUT_CLEANUP.md
rm docs/STYLESHEET-DOCUMENTATION-UPDATE.md
rm docs/roadmaps/DOCUMENTATION-UPDATES-SUMMARY.md
rm docs/roadmaps/ENHANCED-RENDERERS-SUMMARY.md

# Implementation tracking
rm docs/spc-refactor-roadmap.md
rm docs/guides/macro-parity-tracking.md

# Future planning/gap analyses
rm docs/product-marketing-onboarding.md
rm docs/roadmaps/clinical-operations-extensions.md
rm docs/roadmaps/govuk-parity-gap-analysis.md
rm docs/roadmaps/ukhsa-data-viz-parity-gap-analysis.md
rm docs/roadmaps/lms-extensions.md
rm docs/roadmaps/ai-interaction-roadmap.tsx
```

### Files to REVIEW (decide based on current relevance):
- `docs/roadmaps/ARCHITECTURE_SSR_NUNJUCKS_MIGRATION.mdx` - Keep architecture info, remove roadmap framing
- `docs/slot-matrix-stories.md` - Keep if SlotMatrix is active

---

## Phase 4: Remove Unnecessary Functionality

### Step 4.1: Remove FDP Internal Dashboards
Delete `src/components/FDP/` contents EXCEPT Subnav:

```bash
# Remove internal dashboard components (keep Subnav)
rm -rf src/components/FDP/IPRDashboard
rm -rf src/components/FDP/PODDashboard
rm -rf src/components/FDP/CMRBRoomBookings
rm -rf src/components/FDP/NationalHomepage
rm src/components/FDP/*.syntheticData.ts
```

Update `src/components/FDP/index.ts` to only export Subnav (already the case).

### Step 4.2: Remove Development/Migration Scripts
Delete scripts that were for one-time migrations:

```bash
# Migration scripts
rm scripts/audit-test-migration.ts
rm scripts/convert-tests-batch.js
rm scripts/convert-tests-react19.js
rm scripts/convert-tests-comprehensive.js
rm scripts/fix-hint-tests.js
rm scripts/fix-syntax-errors.js

# Storybook pruning (one-time)
rm scripts/prune-stories.ts
rm scripts/repair-pruned-stories.ts
rm scripts/fix-autodocs-mdx.ts

# Analysis scripts (dev-only)
rm scripts/analyze-logic-v2-exports.ts
rm scripts/analyze-spc-exports.ts
rm scripts/analyze-ssr.ts
rm scripts/inventory-design-system.ts
rm scripts/ssr-autofix.ts

# Roadmap scripts (internal tooling)
rm scripts/distribute-roadmap-child-dates.cjs
rm scripts/rebase-roadmap-categories.cjs
rm scripts/rolling-roadmap-dates.cjs
rm scripts/transform-roadmap-content.cjs

# SPC-specific (will be extracted later)
rm scripts/spc-subtree-sync.sh
```

Update `package.json` to remove corresponding npm scripts.

---

## Phase 5: Update Package Configuration

### Step 5.1: Update package.json

```json
{
  "name": "@nhsdigital/nhs-fdp-design-system",
  "author": "FDP Product Design Team",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/NHSDigital/fdp-react-design-system.git"
  },
  "bugs": {
    "url": "https://github.com/NHSDigital/fdp-react-design-system/issues"
  },
  "homepage": "https://github.com/NHSDigital/fdp-react-design-system#readme",
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org/"
  }
}
```

### Step 5.2: Update all internal package references
Search and replace throughout codebase:
- `@nhsdigital/nhs-fdp-design-system` → `@nhsdigital/nhs-fdp-design-system`

Files to update:
- `README.md` (all import examples)
- `docs/` (all documentation)
- `examples/nextjs/` (package.json and imports)
- `examples/express-njk/` (if applicable)
- Storybook stories with import examples

### Step 5.3: Update README.md
- Remove GitHub Packages authentication instructions
- Add npm public registry installation: `npm install @nhsdigital/nhs-fdp-design-system`
- Update repository URLs
- Update author/team references

---

## Phase 6: Update CI/CD for npm Publishing

### Step 6.1: Adapt NHSDigital workflow for npm
The template provides `.github/workflows/cicd-2-publish.yaml`. Update to:

```yaml
# .github/workflows/npm-publish.yaml
name: Publish to npm

on:
  release:
    types: [published]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm run build
      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

### Step 6.2: Set up npm access
1. Create npm organization account for `@nhsdigital` (if not exists)
2. Generate npm access token
3. Add `NPM_TOKEN` secret to GitHub repository

---

## Phase 7: Final Cleanup and Verification

### Step 7.1: Update CLAUDE.md
Update with new repository info, package name, and commands.

### Step 7.2: Run full verification
```bash
npm run lint
npm run typecheck
npm run test
npm run test:ssr-components
npm run build:parity
```

### Step 7.3: Test local installation
```bash
npm pack
# In a test project:
npm install /path/to/nhsdigital-fdp-react-design-system-x.x.x.tgz
```

### Step 7.4: Update git remote and push
```bash
git remote set-url origin https://github.com/NHSDigital/fdp-react-design-system.git
git push -u origin main
```

---

## Phase 8: Post-Migration Tasks

### Step 8.1: Archive old repository
- Add deprecation notice to `fergusbisset/nhs-fdp-design-system`
- Point users to new repository

### Step 8.2: First npm publish
```bash
npm version 1.0.0  # Or appropriate version for fresh start
npm publish --access public
```

### Step 8.3: Verify npm installation
```bash
npm install @nhsdigital/nhs-fdp-design-system
```

---

## Future: SPC Extraction (Post-Migration)

After the main migration is stable, extract SPC to its own repository:

1. Create new repo: `NHSDigital/fdp-spc-charts` (or similar)
2. Extract `src/components/DataVisualisation/charts/SPC/`
3. Set up as separate npm package: `@nhsdigital/fdp-spc-charts`
4. Update main design system to optionally depend on SPC package
5. Update documentation

---

## Checklist

### Phase 1: Template Merge
- [x] Add NHSDigital remote
- [x] Merge template with `--allow-unrelated-histories`
- [x] Resolve merge conflicts
- [x] Review and integrate template CI/CD

### Phase 2: Dependencies
- [x] Remove Chromatic
- [x] Remove GSAP
- [x] Update ParallaxScene to use fallback only
- [x] Update ProductRoadmap to use fallback only

### Phase 3: Documentation
- [x] Delete 16 identified docs files
- [x] Review 2 ambiguous files

### Phase 4: Functionality
- [x] Remove FDP internal dashboards (keep Subnav)
- [x] Remove ~20 development/migration scripts
- [x] Update package.json scripts

### Phase 5: Package Config
- [x] Update package name to `@nhsdigital/nhs-fdp-design-system`
- [x] Update author to "FDP Product Design Team"
- [x] Update license to MIT
- [x] Update publishConfig for npm public
- [x] Search/replace all package references

### Phase 6: CI/CD
- [x] Configure npm publish workflow
- [ ] Set up NPM_TOKEN secret (requires manual setup in GitHub)

### Phase 7: Verification
- [ ] All tests pass
- [ ] Build succeeds
- [ ] Local pack/install test works

### Phase 8: Go Live
- [ ] Push to NHSDigital repo
- [ ] Publish to npm
- [ ] Archive old repo
