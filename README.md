# NHS FDP Design System

A comprehensive design system for NHS digital services built with React, TypeScript, and design tokens.

## Overview

The NHS FDP Design System provides a complete set of reusable components, design tokens, and guidelines to help teams build consistent, accessible NHS digital services.

## Quick Start

The package is, for the time being, published to GitHub Packages, so you'll need to configure your `.npmrc`:

This guide will help you configure your `.npmrc` file to install and use the `@fergusbisset/nhs-fdp-design-system` package.

### Global Configuration (recommended for personal development)

Create or edit your global `.npmrc` file:

**Step 1: Create/edit the file**
```bash
# Open the file in your editor (replace YOUR_ACTUAL_TOKEN with your real token)
nano ~/.npmrc
# or
code ~/.npmrc
```

**Step 2: Add this content to ~/.npmrc**
```
# Configure the registry for @fergusbisset scoped packages
@fergusbisset:registry=https://npm.pkg.github.com

# Add your GitHub personal access token (replace YOUR_GITHUB_TOKEN with actual token)
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

**Important:** 
- Replace `YOUR_GITHUB_TOKEN` with your actual GitHub Personal Access Token
- Do NOT source this file - npm reads it automatically
- No need to run any commands after creating the file

### Project-specific Configuration

Alternatively, create a `.npmrc` file in your project root:

```bash
# Location: your-project/.npmrc

@fergusbisset:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

### Setting up GitHub Personal Access Token

To access packages like this from GitHub Packages, you'll need a Personal Access Token:

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Set an expiration date
4. Select scopes:
   - ✅ `read:packages` (to download packages)
   - ✅ `repo` (if the repository is private)
5. Copy the generated token
6. Add it to your `.npmrc` file

### Quick Setup Verification

After setting up your `.npmrc`, verify everything is working:

```bash
# 1. Check if npm can read your config
npm config list

# 2. Verify authentication (if using GitHub Packages)
npm whoami --registry=https://npm.pkg.github.com

# 3. Test package access
npm view @fergusbisset/nhs-fdp-design-system
```

If these commands work without errors, your setup is correct!

## Installation

```bash
npm install @fergusbisset/nhs-fdp-design-system
```

## Basic Usage

```tsx
import { Button, Panel, Heading } from '@fergusbisset/nhs-fdp-design-system';
import '@nhs-fdp/design-system/dist/index.css';

function App() {
  return (
    <Panel>
      <Heading level={1}>Welcome to NHS FDP Design System</Heading>
      <Button variant="primary">Get Started</Button>
    </Panel>
  );
}
```

## Project Structure

```
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

## Development

### Prerequisites

- Node.js 18+
- npm 9+

### Setup

```bash
# Clone the repository
git clone https://github.com/fergusbisset/nhs-fdp-design-system.git
cd nhs-fdp-design-system

# Install dependencies
npm install

# Build design tokens
npm run build:tokens

# Start development server
npm run storybook
```

### Available Scripts

```bash
npm run build:tokens    # Build design tokens
npm run storybook       # Start Storybook development server
npm run build-storybook # Build Storybook for production
npm run test            # Run component tests
npm run test:visual     # Run visual regression tests
npm run lint            # Run ESLint
npm run type-check      # Run TypeScript type checking
```

## Architecture

### Design Token System

Built with [Style Dictionary](https://amn.github.io/style-dictionary/), our design tokens provide:

- **Semantic tokens** for consistent theming
- **Component tokens** for specific component styling  
- **Multi-platform output** (CSS, SCSS, JavaScript, iOS, Android)

### Component Architecture

- **React functional components** with TypeScript
- **Compound component patterns** for flexible APIs
- **Polymorphic components** for semantic flexibility
- **CSS Modules** with design token integration

## Contributing

We welcome contributions! Please see our contributing guidelines:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amaing-feature`)
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

- **Issues**: [GitHub Issues](https://github.com/fergusbisset/nhs-fdp-design-system/issues)
- **Discussions**: [GitHub Discussions](https://github.com/fergusbisset/nhs-fdp-design-system/discussions)
- **Documentation**: [Project Documentation](./docs/README.md)

