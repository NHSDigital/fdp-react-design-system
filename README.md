# NHS FDP Design System

A comprehensive design system for NHS digital services built with React, TypeScript, and design tokens.

## 🎯 Overview

The NHS FDP Design System provides a complete set of reusable components, design tokens, and guidelines to help teams build consistent, accessible NHS digital services.

### ✨ Features

- **🧩 50+ React Components** - Pre-built, accessible components following NHS design patterns
- **🎨 Design Token System** - Consistent visual properties managed through Style Dictionary
- **♿ Accessibility First** - WCAG 2.1 AA compliance built-in
- **📱 Responsive Design** - Mobile-first responsive components
- **🔍 TypeScript Support** - Full type safety and IntelliSense
- **📚 Storybook Integration** - Interactive component documentation
- **🧪 Testing Suite** - Comprehensive unit and visual regression tests

## 🚀 Quick Start

### Installation

```bash
npm install @nhs-fdp/design-system
```

### Basic Usage

```tsx
import { Button, Panel, Heading } from '@nhs-fdp/design-system';
import '@nhs-fdp/design-system/dist/index.css';

function App() {
  return (
    <Panel>
      <Heading level={1}>Welcome to NHS Digital</Heading>
      <Button variant="primary">Get Started</Button>
    </Panel>
  );
}
```

## 📁 Project Structure

```
nhs-fdp-design-system/
├── docs/                    # 📚 Documentation
│   ├── components/          # Component guides
│   ├── migration/           # Migration documentation
│   ├── tokens/              # Design token documentation
│   ├── testing/             # Testing guides
│   └── guides/              # Development guides
├── src/                     # 💻 Source code
│   ├── components/          # React components
│   ├── styles/              # Global styles
│   └── tokens/              # Design token definitions
├── examples/                # 🎮 Usage examples
├── config/                  # ⚙️ Configuration files
├── tests/                   # 🧪 Test suites
└── storybook/               # 📖 Storybook configuration
```

## 📖 Documentation

- **[📚 Full Documentation](./docs/README.md)** - Comprehensive guides and references
- **[🚀 Migration Guide](./docs/migration/migration-guide.md)** - Upgrade from legacy systems
- **[🎨 Design Tokens](./docs/tokens/NHS-COMPOSITE-TOKENS-GUIDE.md)** - Token system overview
- **[🧪 Testing Guide](./docs/testing/VISUAL_TESTING_GUIDE.md)** - Testing strategies
- **[🧩 Component Library](http://localhost:6006)** - Interactive Storybook

## 🛠️ Development

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
npm run build:tokens     # Build design tokens
npm run storybook       # Start Storybook development server
npm run build-storybook # Build Storybook for production
npm run test           # Run component tests
npm run test:visual    # Run visual regression tests
npm run lint          # Run ESLint
npm run type-check    # Run TypeScript type checking
```

## 🏗️ Architecture

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

## 🤝 Contributing

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

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Related Projects

- [NHS Design System](https://service-manual.nhs.uk/design-system) - Official NHS design guidance
- [NHS.UK Frontend](https://github.com/nhsuk/nhsuk-frontend) - Original NHS.UK frontend library
- [Style Dictionary](https://amzn.github.io/style-dictionary/) - Design token build system

## 💬 Support

- **Issues**: [GitHub Issues](https://github.com/fergusbisset/nhs-fdp-design-system/issues)
- **Discussions**: [GitHub Discussions](https://github.com/fergusbisset/nhs-fdp-design-system/discussions)
- **Documentation**: [Project Documentation](./docs/README.md)

---

Built with ❤️ for the NHS digital community.
