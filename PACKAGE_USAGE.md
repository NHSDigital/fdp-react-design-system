# NHS FDP Design System Usage

## Installation

For GitHub Packages, users need to configure their `.npmrc` file:

```
@fergusbisset:registry=https://npm.pkg.github.com
```

Then install:
```bash
npm install @fergusbisset/nhs-fdp-design-system
```

## Usage

```tsx
import { Button, NHSThemeProvider, Card } from '@fergusbisset/nhs-fdp-design-system';
import '@fergusbisset/nhs-fdp-design-system/dist/nhs-fdp-design-system.css';

function App() {
  return (
    <NHSThemeProvider>
      <Button variant="primary">Click me</Button>
      <Card title="NHS Card">Content here</Card>
    </NHSThemeProvider>
  );
}
```

## TypeScript Support

The package includes TypeScript declarations for all components and types.

```tsx
import type { NHSButtonProps, CardProps } from '@fergusbisset/nhs-fdp-design-system';
```
