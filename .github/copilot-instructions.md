# NHS FDP Design System

NHS FDP Design System is a comprehensive React component library with TypeScript, design tokens, Storybook documentation, and comprehensive testing infrastructure. It uses Vite for building, Vitest for testing, and Style Dictionary for design token generation.

**ALWAYS follow these instructions first. Only search for additional information if these instructions are incomplete or incorrect.**

## Working Effectively

### Bootstrap and Build
- Install dependencies: `npm install` (takes ~1 minute)
- Build design tokens: `npm run build:tokens:smart` (usually instantaneous if unchanged)
- **Full build process**: `npm run build:parity` 
  - **TIMING**: Takes ~33 seconds. NEVER CANCEL. Set timeout to 120+ seconds.
  - This runs: clean dist → tokens → multi build → ESM/UMD builds → CSS compilation → component JS → types → verification
- **Quick build** (development): `npm run build:fast` (faster iteration, ~7 seconds)
- **Type checking only**: `npm run typecheck` (~2 seconds)

### Development Workflow
- **Storybook development**: `npm run storybook`
  - Starts at http://localhost:6006
  - **TIMING**: Loads in ~6 seconds. NEVER CANCEL. Set timeout to 60+ seconds.
  - Provides comprehensive component library with docs and testing
- **Vite dev server**: `npm run dev` 
  - Starts at http://localhost:5173 (~1 second)
  - For demo/example development
- **Clean build artifacts**: `npm run clean:dist`

### Testing Infrastructure
- **Component tests**: `npm run test:components`
  - **TIMING**: Takes ~4 minutes, ~1000 tests. NEVER CANCEL. Set timeout to 300+ seconds.
  - Uses Vitest + React Testing Library + JSDOM
  - One expected test failure in AriaTabsDataGrid (aria-describedby assertion)
- **SSR tests**: `npm run test:ssr-components` 
  - **TIMING**: Takes ~5 seconds, 153 tests. Set timeout to 30+ seconds.
  - Tests server-side rendering compatibility
- **Smoke tests**: `npm run test:smoke` (~2 seconds, basic functionality check)
- **Watch mode**: `npm run test:watch` (for development)

### Build for Production
- **Storybook build**: `npm run build-storybook`
  - **TIMING**: Takes ~36 seconds. NEVER CANCEL. Set timeout to 120+ seconds.
  - Outputs to `storybook-static/`

### Code Quality
- **Linting**: `npm run lint` 
  - **CURRENT STATE**: 5 unused eslint-disable directive errors (non-blocking)
  - **TIMING**: ~5 seconds. Set timeout to 30+ seconds.
  - ALWAYS run `npm run lint` before committing changes
- **Type checking**: `npm run typecheck` (~2 seconds)

## Validation Scenarios

### ALWAYS Test After Changes
1. **Build validation**: Run `npm run build:parity` to ensure all builds succeed
2. **Component testing**: Run `npm run test:components` for comprehensive test coverage
3. **SSR compatibility**: Run `npm run test:ssr-components` for server-side rendering
4. **Code quality**: Run `npm run lint` and `npm run typecheck`

### Manual Testing Scenarios
1. **Storybook functionality**: 
   - Start with `npm run storybook`
   - Navigate to multiple component stories
   - Verify components render and interact correctly
   - Test different variants and props
2. **Component accessibility**:
   - Use Storybook's accessibility addon
   - Test keyboard navigation
   - Verify ARIA attributes and roles
3. **SSR analysis**: Run `npm run analyze:ssr` (~1 second) for comprehensive SSR compatibility report

## Architecture Overview

### Key Directories
- `src/components/` - React components (55+ components)
- `src/styles/` - Global styles and font configuration
- `src/tokens/` - Design token definitions
- `config/` - Build and test configurations
- `scripts/` - Build automation and verification scripts
- `docs/` - Comprehensive documentation
- `tests/` - SSR analysis and specialized tests

### Component Structure
Each component follows a standardized pattern:
- `Component.tsx` - Main component
- `Component.types.ts` - TypeScript interfaces
- `Component.scss` - Component styles
- `Component.stories.tsx` - Storybook documentation
- `Component.client.test.tsx` - Interactive behavior tests
- `Component.ssr.test.tsx` - Server-side rendering tests  
- `Component.hydration.test.tsx` - SSR to client hydration tests
- `Component.a11y.test.tsx` - Accessibility tests (some components)

### Testing Strategy (Critical)
Follow the established 3-tier testing pattern:
- **Client tests**: Interactive behavior, events, keyboard, accessibility
- **SSR tests**: Structural output, roles, semantics, conditional rendering
- **Hydration tests**: SSR → client integrity + post-hydration interaction

Use React Testing Library query priority:
1. `getByRole` (with `name` option)
2. `getByLabelText`
3. `getByPlaceholderText` 
4. `getByText` (scoped, exact)
5. `getByTestId` (only when no semantic alternative)

### Design Token System
- Built with Style Dictionary
- Smart building: `npm run build:tokens:smart` (skips if unchanged)
- Full rebuild: `npm run build:tokens` 
- Outputs CSS custom properties, SCSS variables, and TypeScript constants

### Package Publishing
- **GitHub Packages**: Requires `.npmrc` configuration with GitHub token
- **Build before publish**: Always run `npm run build:parity` 
- **Version management**: Use `npm run release:patch|minor|major|prerelease`

## Common Tasks

### Adding New Components
1. Create component directory in `src/components/`
2. Follow established file structure (see Component Structure above)
3. Add component to `src/components/index.ts` 
4. Create comprehensive tests (client/SSR/hydration)
5. Add Storybook stories with documentation
6. Run full build and test suite
7. Update package.json exports if needed

### Modifying Existing Components
1. Update component files as needed
2. Update corresponding tests to match changes
3. Update Storybook stories if behavior changes
4. Run `npm run test:components` to verify no regression
5. Run `npm run build:parity` to ensure builds succeed
6. Test manually in Storybook

### Working with Design Tokens
1. Modify token files in appropriate config directory
2. Run `npm run build:tokens` to regenerate
3. Test components that use modified tokens
4. Verify CSS output in `dist/` after full build

### Troubleshooting Build Issues
- **Token build fails**: Check Style Dictionary config files
- **Component JS build fails**: Check individual component exports
- **Type build fails**: Run `npm run typecheck` for detailed errors
- **CSS build fails**: Check SCSS imports and token references
- **Verification fails**: Check package.json exports alignment

## SSR Compatibility

### Current State (as of latest analysis)
- **Total components**: 149
- **SSR compatibility**: 92% overall
- **Fully compatible**: 135 components (91%)
- **Compatible with hydration**: 3 components (2%)
- **Client-only**: 1 component (1%)
- **Requires refactoring**: 10 components (7%)

### SSR Analysis Tool
- Run: `npm run analyze:ssr` (~1 second)
- Generates detailed reports in `ssr-analysis-report/`
- Identifies blocking issues and provides automated fixes
- Use for impact assessment when modifying components

### Critical SSR Guidelines
- Avoid direct `document` or `window` access in component rendering
- Use conditional rendering for client-only features
- Test SSR compatibility with `npm run test:ssr-components`
- Components should render meaningful content server-side

## Performance Expectations

### Build Times (Set appropriate timeouts)
- `npm install`: ~60 seconds
- `npm run build:parity`: ~33 seconds (NEVER CANCEL - timeout 120+ seconds)
- `npm run test:components`: ~240 seconds (NEVER CANCEL - timeout 300+ seconds)
- `npm run build-storybook`: ~36 seconds (NEVER CANCEL - timeout 120+ seconds)
- `npm run storybook`: ~6 seconds startup (NEVER CANCEL - timeout 60+ seconds)
- `npm run lint`: ~5 seconds
- `npm run test:ssr-components`: ~5 seconds
- `npm run analyze:ssr`: ~1 second

### Known Issues
- **Node version**: Style Dictionary requires Node 22+, currently using Node 20 (non-blocking warning)
- **Linting**: 5 unused eslint-disable directive errors (non-blocking)
- **Test failure**: 1 minor AriaTabsDataGrid aria-describedby test failure (non-blocking)

## Distribution and Dependencies

### GitHub Packages Setup
The package is published to GitHub Packages. To install:
1. Create `.npmrc` with:
   ```
   @fergusbisset:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
   ```
2. Verify setup: `npm whoami --registry=https://npm.pkg.github.com`

### Key Dependencies
- **React 19** + TypeScript
- **Vite 7** for building
- **Vitest 3** for testing
- **Storybook 9** for documentation
- **Style Dictionary 5** for design tokens
- **React Aria** for accessible interactions
- **D3** for data visualization components

ALWAYS reference these instructions and fallback to bash commands or search only when information is missing or incorrect.