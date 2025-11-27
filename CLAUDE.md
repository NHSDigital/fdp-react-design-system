# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with this repository.

## Project Overview

NHS FDP Design System - A comprehensive React component library built with design tokens, providing reusable components for NHS digital services. The library supports React 19, Next.js 13+, and includes SSR-safe server variants for many components.

## Common Commands

### Development
```bash
npm run storybook          # Start Storybook dev server on port 6006
npm run dev                # Start Vite dev server
```

### Building
```bash
npm run build              # Full production build (alias for build:parity)
npm run build:parity       # Complete build with all verification steps
npm run build:quiet        # Clean build output (filters npm warnings)
npm run build:fast         # Quick dev build for iteration
npm run build:tokens       # Build design tokens only
```

### Testing
```bash
npm run test               # Run component tests (vitest)
npm run test:components    # Run full component test suite
npm run test:ssr-components # Run SSR compatibility tests
npm run test:smoke         # Quick smoke test
npm run test:runtime       # Playwright runtime tests
```

### Code Quality
```bash
npm run lint               # ESLint check
npm run typecheck          # TypeScript type checking
```

### Examples
```bash
npm run examples:next:dev  # Run Next.js example app on port 4100
npm run examples:express:start # Run Express/Nunjucks example
```

## Architecture

### Directory Structure
- `src/components/` - React components (70+ components)
- `packages/nhs-fdp/` - Design tokens source (Style Dictionary)
- `config/` - Build configs (Vite, Vitest, TypeScript, Style Dictionary)
- `examples/` - Next.js and Express example apps
- `docs/` - All documentation (never create docs at root level)
- `scripts/` - Build and verification scripts

### Component Structure Pattern
Each component typically contains:
- `ComponentName.tsx` - Main client component
- `ComponentName.server.tsx` - SSR-safe server variant (if applicable)
- `ComponentName.render.tsx` - Pure render function (shared by client/server)
- `ComponentName.scss` - Styles
- `ComponentName.stories.tsx` - Storybook stories
- `ComponentName.test.tsx` - Unit tests
- `index.ts` - Exports

### Server/Client Variant Pattern
Components with interactivity use a split pattern:
- `.render.tsx` - Pure render function (no hooks/effects)
- `.tsx` - Client variant with state and data attributes for behaviours
- `.server.tsx` - Server variant invoking pure renderer only

Server variants can be imported via `@fergusbisset/nhs-fdp-design-system/components/ComponentName/server`

### Design Token System
Built with Style Dictionary, tokens are in `packages/nhs-fdp/tokens/`:
- Source tokens define primitives and semantics
- Output to CSS, SCSS, JS in `packages/nhs-fdp/dist/`
- Run `npm run build:tokens` when modifying tokens

### Behaviour Layer
Progressive enhancement scripts in `src/behaviours/` provide client-side interactivity without React hydration. Key behaviours include header overflow handling, character count, etc.

## Key Patterns

### Adding Components
1. Create component directory in `src/components/`
2. Implement `.tsx`, `.scss`, `index.ts`, `.stories.tsx`, `.test.tsx`
3. For interactive components, add `.server.tsx` and `.render.tsx`
4. Export from `src/components/index.ts`
5. Run `npm run build:parity` to update exports and verify

### SSR Considerations
- Server components must not use React hooks
- Use `ComponentName.server.tsx` for SSR-safe variants
- Verify with `npm run verify:server-variants`
- Test with `npm run test:ssr-components`

### Export Management
The build system auto-generates exports:
- `npm run update:css-exports` - Update CSS subpath exports
- `npm run update:js-exports` - Update JS subpath exports
- Verification scripts ensure parity between components and exports

## Configuration Files
- `tsconfig.json` - Extends `config/tsconfig.json`
- `config/vite.*.config.ts` - Multiple Vite configs for different build targets
- `config/vitest.*.config.ts` - Test configurations
- `config/style-dictionary.config.js` - Token build configuration

## Important Notes

1. **Documentation Location**: All docs go in `docs/` subdirectories, never at repo root
2. **React Version**: Uses React 19.2.0
3. **Package Registry**: Published to GitHub Packages (`@fergusbisset` scope)
4. **Next.js Compatibility**: Supports Next.js 13.4+ through 16
5. **Pre-version Checks**: `npm run preversion` runs lint, tests, and build before version bumps
