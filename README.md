# NHS FDP Design System

A comprehensive design system for NHS digital services built with React, TypeScript, and design tokens.

## Overview

The NHS FDP Design System provides a complete set of reusable components, design tokens, and guidelines to help teams build consistent, accessible NHS digital services.

## Installation

```bash
npm install @nhsdigital/nhs-fdp-design-system
```

## Basic Usage

```tsx
import { Button, Panel, Heading } from '@nhsdigital/nhs-fdp-design-system';
import '@nhsdigital/nhs-fdp-design-system/dist/nhs-fdp-design-system.css';

function App() {
  return (
    <Panel>
      <Heading level={1}>Welcome to NHS FDP Design System</Heading>
      <Button variant="primary">Get Started</Button>
    </Panel>
  );
}
```

### Component-level imports

You can import individual components via stable subpaths to keep bundles lean and make intent explicit:

```tsx
// Import a single component (JS + types)
import Button from '@nhsdigital/nhs-fdp-design-system/components/Button';

// Many components are available this way, e.g.
import Card from '@nhsdigital/nhs-fdp-design-system/components/Card';
import Grid from '@nhsdigital/nhs-fdp-design-system/components/Grid';

// Server-only variants (where available)
import { HeaderServer } from '@nhsdigital/nhs-fdp-design-system/components/Header/server';

// Styles can still be brought in globally or per-component via CSS subpaths
import '@nhsdigital/nhs-fdp-design-system/components/Button/css';
```

Notes:

- Subpath exports are generated from the built `dist/src/components/*/index.{js,d.ts}` entries.
- Server subpaths (e.g. `components/Header/server`) are available where a server-safe variant exists.
- Tree-shaking works with both the root entry and component subpaths; choose whichever suits your project structure.

## Next.js Setup

Interactive components (Header overflow, CharacterCount, etc.) require the behaviour bundle to run on the client. Keep your root layout as a Server Component and add a tiny client-only initializer.

### Quick Setup (recommended)

```tsx
// app/layout.tsx (Server Component)
import '@nhsdigital/nhs-fdp-design-system/dist/nhs-fdp-design-system.css';
import { HeaderServer } from '@nhsdigital/nhs-fdp-design-system/ssr';
import { NHSBehavioursInit } from '@nhsdigital/nhs-fdp-design-system/nextjs';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NHSBehavioursInit /> {/* client island ensures behaviours are bundled and initialised */}
        <HeaderServer serviceName="Service" navigation={{ items: [ { href: '/', text: 'Home' } ] }} />
        {children}
      </body>
    </html>
  );
}
```

Why this works:

- Your layout stays server-rendered (no "use client").
- NHSBehavioursInit runs only on the client and imports the behaviours bundle so the Header can enhance.

**[Complete Next.js Setup Guide](./docs/NEXTJS-QUICK-START.md)** – Detailed setup, verification, and troubleshooting

## Project Structure

```text
nhs-fdp-design-system/
├── docs/                    # Documentation
│   ├── components/          # Component guides
│   ├── migration/           # Migration documentation
│   ├── tokens/              # Design token documentation
│   ├── testing/             # Testing guides
│   └── guides/              # Development guides
├── src/                     # Source code
│   ├── components/          # React components
│   ├── styles/              # Global styles
│   └── tokens/              # Design token definitions
├── examples/                # Usage examples
├── config/                  # Configuration files
├── tests/                   # Test suites
└── storybook/               # Storybook configuration
```

## Documentation

- **[Full Documentation](./docs/README.md)** - Comprehensive guides and references
- **[Migration Guide](./docs/migration/migration-guide.md)** - Upgrade from legacy systems
- **[Design Tokens](./docs/tokens/NHS-COMPOSITE-TOKENS-GUIDE.md)** - Token system overview
- **[Component Library](http://localhost:6006)** - Interactive Storybook
- **[SSR Testing Guide](./docs/testing/ssr-testing.md)** - Unified server-side test patterns
- **[Hydration Testing](./docs/guides/testing-hydration.mdx)** - Split SSR / client / hydration test pattern & helper
- **[Multi‑Render Architecture](./docs/guides/multi-render-architecture.md)** - React and Nunjucks macro generation & parity
- **[Behaviour Layer](./docs/guides/behaviours.md)** - Progressive enhancement, events & teardown API

### Server / Client Variant Pattern

Some interactive components adopt an explicit split to guarantee deterministic, hook‑free server markup and eliminate hydration warnings while still providing a progressive enhancement path:

- `Component.render.tsx` – Pure render function producing static JSX (no hooks / side effects). Shared source of truth.
- `Component.tsx` – Client interactive variant that wraps the pure renderer and adds state, effects and data attributes for behaviours.
- `Component.server.tsx` – Server (static) variant invoking the pure renderer only. Contains no React hooks (enforced via `npm run verify:server-variants`).

Current migrated components: `Radios`, `Header` (exporting `RadiosServer`, `HeaderServer`). You can import server variants via `@nhsdigital/nhs-fdp-design-system/components/ComponentName/server`.

Quick SSR usage (Next.js server components):

```tsx
// Import SSR-safe components only
import { Header, ButtonServer, SummaryList, Input, Textarea, Select } from '@nhsdigital/nhs-fdp-design-system/ssr';
```

## Development

### Prerequisites

- Node.js 18+
- npm 9+

### Setup

```bash
# Clone the repository
git clone https://github.com/NHSDigital/fdp-react-design-system.git
cd fdp-react-design-system

# Install dependencies
npm install

# Build design tokens
npm run build:tokens

# Start development server
npm run storybook
```

### Available Scripts

```bash
# Build
npm run build                  # Full production build (alias for build:parity)
npm run build:parity           # Complete build with all verification steps
npm run build:quiet            # Clean build output (filters npm warnings)
npm run build:fast             # Quick dev build (skips some verification)

# Design tokens
npm run build:tokens           # Build design tokens (smart rebuild)

# Storybook
npm run storybook              # Start Storybook (dev)
npm run build-storybook        # Build Storybook (static)

# Tests
npm run test:components        # Run full component test suite (quiet summary)
npm run test:metrics           # Run full suite with metrics summary (and text coverage)
npm run test:ssr-components    # Run server-side rendering compatibility tests

# Code quality
npm run lint                   # ESLint
npm run typecheck              # TypeScript type checking
```

## Architecture

### Design Token System

Built with [Style Dictionary](https://amzn.github.io/style-dictionary/), our design tokens provide:

- **Semantic tokens** for consistent theming
- **Component tokens** for specific component styling
- **Multi-platform output** (CSS, SCSS, JavaScript, iOS, Android)

### Component Architecture

- **React functional components** with TypeScript
- **Compound component patterns** for flexible APIs
- **Polymorphic components** for semantic flexibility
- **CSS Modules** with design token integration

### Data Visualisation

Primary overview: [Data Visualisation Overview](./docs/data-visualisation/README.md)

## Contributing

We welcome contributions! Please see our contributing guidelines:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Workflow

1. **Components**: Add new components in `src/components/`
2. **Stories**: Create Storybook stories for documentation
3. **Tests**: Write unit and visual regression tests
4. **Tokens**: Update design tokens in `packages/nhs-fdp/tokens/`

## Related Projects

- [NHS Design System](https://service-manual.nhs.uk/design-system) - Official NHS design guidance
- [NHS.UK Frontend](https://github.com/nhsuk/nhsuk-frontend) - Original NHS.UK frontend library
- [Style Dictionary](https://amzn.github.io/style-dictionary/) - Design token build system

## Support

- **Issues**: [GitHub Issues](https://github.com/NHSDigital/fdp-react-design-system/issues)
- **Discussions**: [GitHub Discussions](https://github.com/NHSDigital/fdp-react-design-system/discussions)
- **Documentation**: [Project Documentation](./docs/README.md)

## Licence

Unless stated otherwise, the codebase is released under the MIT License. This covers both the codebase and any sample code in the documentation.

Any HTML or Markdown documentation is [© Crown Copyright](https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/) and available under the terms of the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).
