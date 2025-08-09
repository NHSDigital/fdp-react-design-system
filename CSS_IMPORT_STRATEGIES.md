# NHS FDP Design System - CSS Import Strategies

This design system supports two CSS import strategies to optimize performance based on your use case.

## 🚀 Performance Comparison

| Strategy | CSS Size | Use Case | Performance |
|----------|----------|----------|-------------|
| **Full Bundle** | 218 kB | All components needed | Good for comprehensive apps |
| **Core + Components** | 26 kB + per component | Selective usage | **Best** - up to 88% smaller |

## 1. Full Bundle Approach (Current)

Import everything at once - best for applications using many components.

### Next.js Implementation

```tsx
// app/layout.tsx
import '@fergusbisset/nhs-fdp-design-system/css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
```

```tsx
// pages/example.tsx
import { Grid, Row, Column, Button, Header } from '@fergusbisset/nhs-fdp-design-system'

export default function ExamplePage() {
  return (
    <Grid>
      <Row>
        <Column width="full">
          <Header serviceName="My Service" />
          <Button>Click me</Button>
        </Column>
      </Row>
    </Grid>
  )
}
```

## 2. 🎯 Core + Component-Level Imports (Recommended)

Import only what you need - **up to 88% smaller CSS bundle**.

### Next.js Implementation

```tsx
// app/layout.tsx - Import only core layout styles
import '@fergusbisset/nhs-fdp-design-system/core/css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
```

```tsx
// pages/example.tsx - Components import their own styles automatically
import { Grid, Row, Column } from '@fergusbisset/nhs-fdp-design-system/core'
import { Button } from '@fergusbisset/nhs-fdp-design-system/components/Button'
import { Header } from '@fergusbisset/nhs-fdp-design-system/components/Header'

export default function ExamplePage() {
  return (
    <Grid>
      <Row>
        <Column width="full">
          <Header serviceName="My Service" />
          <Button>Click me</Button>
        </Column>
      </Row>
    </Grid>
  )
}
```

### Alternative: Mixed Approach

```tsx
// app/layout.tsx
import '@fergusbisset/nhs-fdp-design-system/core/css'

// Import commonly used components in layout
import { Grid, Row, Column } from '@fergusbisset/nhs-fdp-design-system/core'

// pages/example.tsx  
import { Button } from '@fergusbisset/nhs-fdp-design-system/components/Button'
// Button styles are automatically included when Button component is imported
```

## 🎯 Core Bundle Contents

The core bundle (`/core`) includes only essential layout and utility components:

- **Grid System**: `Grid`, `Row`, `Column`, `Container`
- **Layout**: `MainWrapper` 
- **Utilities**: `SpacingUtilities`, `WidthUtilities`
- **Accessibility**: `SkipLink`
- **Base styles**: Fonts, typography, utilities

**Total size: 26 kB** (vs 218 kB for full bundle)

## Available Component Imports

```tsx
// Layout & Structure
import { Grid, Row, Column } from '@fergusbisset/nhs-fdp-design-system/core'
import { Header } from '@fergusbisset/nhs-fdp-design-system/components/Header'
import { Footer } from '@fergusbisset/nhs-fdp-design-system/components/Footer'

// Form Components
import { Button } from '@fergusbisset/nhs-fdp-design-system/components/Button'
import { Input } from '@fergusbisset/nhs-fdp-design-system/components/Input'
import { Select } from '@fergusbisset/nhs-fdp-design-system/components/Select'

// Navigation
import { Breadcrumb } from '@fergusbisset/nhs-fdp-design-system/components/Breadcrumb'
import { Pagination } from '@fergusbisset/nhs-fdp-design-system/components/Pagination'

// Content
import { Card } from '@fergusbisset/nhs-fdp-design-system/components/Card'
import { Table } from '@fergusbisset/nhs-fdp-design-system/components/Table'
import { Tabs } from '@fergusbisset/nhs-fdp-design-system/components/Tabs'

// And more...
```

## Recommendation

**Use the Core + Component approach** for:
- ✅ Better performance (up to 88% smaller bundles)
- ✅ Code splitting benefits  
- ✅ Micro-frontend architectures
- ✅ Applications that don't use all components
- ✅ Modern bundling practices

**Use the Full Bundle approach** for:
- ✅ Applications using most/all components
- ✅ Rapid prototyping
- ✅ When bundle size is not a primary concern

## Bundle Analysis

```bash
# Full bundle
CSS: 218 kB | JS: 321 kB

# Core + individual components (example with 3 components)
CSS: 26 kB (core) + ~8-15 kB per component = ~50-70 kB total
JS: 16 kB (core) + per component

# Savings: ~70% smaller bundles for typical usage
```
