# TypeScript and React Token Usage Guide

## Overview

The NHS FDP Design System now supports **TypeScript** and **React** token exports, following the same component hierarchy you've established. This guide shows you how to use these tokens in your applications.

## **File Structure**

```
packages/nhs-fdp/dist/
├── typescript/           # TypeScript exports (.ts files)
│   ├── index.ts          # Main exports file
│   ├── colors.ts         # Color tokens
│   ├── spacing.ts        # Spacing tokens  
│   ├── typography.ts     # Font tokens
│   ├── borders.ts        # Border tokens
│   ├── shadows.ts        # Shadow tokens
│   ├── animations.ts     # Animation tokens
│   ├── dimensions.ts     # Size tokens
│   └── components/       # Component-specific tokens
│       ├── button.ts
│       ├── form.ts
│       ├── link.ts
│       └── ...
│
├── react/               # React exports (.tsx files)
│   ├── index.tsx        # Main React exports
│   ├── tokens.tsx       # All tokens as React constants
│   ├── styled-components.ts  # Styled-components theme
│   ├── hooks/           # React hooks
│   │   └── useTokens.ts
│   ├── theme/           # Theme-organized tokens
│   │   ├── colors.tsx
│   │   ├── spacing.tsx
│   │   ├── typography.tsx
│   │   └── ...
│   └── components/      # Component-specific React tokens
│       ├── Button/
│       │   ├── tokens.tsx
│       │   └── enhanced.tsx
│       ├── Form/
│       └── Card/
```

## **Installation & Import**

### TypeScript Usage

```typescript
// Import all tokens
import * as tokens from '@nhs-fdp/tokens'
// or from path
import * as tokens from './packages/nhs-fdp/dist/typescript/index'

// Import specific token categories
import { ColorPrimaryBlue, ColorPrimaryGreen } from './packages/nhs-fdp/dist/typescript/colors'
import { SpacingMd, SpacingLg } from './packages/nhs-fdp/dist/typescript/spacing'
import { BorderWidthDefault, BorderRadiusSmall } from './packages/nhs-fdp/dist/typescript/borders'

// Import component-specific tokens
import { 
  SemanticColorButtonPrimaryBackground,
  SemanticColorButtonPrimaryText 
} from './packages/nhs-fdp/dist/typescript/components/button'
```

### React Usage

```tsx
// Import all React tokens
import * as nhsTokens from './packages/nhs-fdp/dist/react/index'

// Import specific categories
import { ColorPrimaryBlue, ColorPrimaryGreen } from './packages/nhs-fdp/dist/react/theme/colors'
import { SpacingMd, SpacingLg } from './packages/nhs-fdp/dist/react/theme/spacing'

// Import component-specific tokens
import * as ButtonTokens from './packages/nhs-fdp/dist/react/components/Button/tokens'

// Import React hooks
import { useColors, useSpacing, useTypography } from './packages/nhs-fdp/dist/react/hooks/useTokens'
```

## **Usage Examples**

### 1. TypeScript Components

#### **TypeScript:**
```typescript
import { 
  ColorPrimaryBlue, 
  Spacing4,           // 24px 
  BorderRadiusSmall,
  FontSize19Tablet    // NHS responsive font sizes
} from './packages/nhs-fdp/dist/typescript'

const buttonStyles = {
  backgroundColor: ColorPrimaryBlue,     // "#005eb8"
  padding: Spacing4,                     // "24px" (NHS 0-9 scale)
  borderRadius: BorderRadiusSmall,       // "4px"
  fontSize: FontSize19Tablet,            // "19px"
}
```

#### **NHS Spacing Scale (0-9):**
```typescript
// The NHS system uses a 0-9 spacing scale
import { 
  Spacing0,  // 0
  Spacing1,  // 4px  
  Spacing2,  // 8px
  Spacing3,  // 16px
  Spacing4,  // 24px
  Spacing5,  // 32px
  Spacing6,  // 40px
  Spacing7,  // 48px
  Spacing8,  // 56px
  Spacing9   // 64px
} from './packages/nhs-fdp/dist/typescript'
```

### 2. React Components

```tsx
import React from 'react'
import { 
  ColorPrimaryBlue, 
  ColorPrimaryWhite,
  SemanticColorButtonPrimaryBackground 
} from '../packages/nhs-fdp/dist/react'

const NHSButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <button
      style={{
        backgroundColor: SemanticColorButtonPrimaryBackground, // "#007f3b"
        color: ColorPrimaryWhite,                             // "#ffffff"
        border: 'none',
        padding: '12px 24px',
        borderRadius: '4px',
        fontWeight: 'bold'
      }}
    >
      {children}
    </button>
  )
}
```

### 3. React Hooks

```tsx
import React from 'react'
import { useColors, useSpacing } from '../packages/nhs-fdp/dist/react/hooks/useTokens'

#### **React Hooks:**
```tsx
import React from 'react'
import { useColors, useSpacing } from '../packages/nhs-fdp/dist/react/hooks/useTokens'

const MyComponent: React.FC = () => {
  const colors = useColors()
  const spacing = useSpacing()

  return (
    <div
      style={{
        backgroundColor: colors.ColorPrimaryBlue,
        padding: spacing.Spacing4,        // 24px (NHS 0-9 scale)
        margin: spacing.Spacing3,         // 16px
      }}
    >
      NHS styled component
    </div>
  )
}
```

### 4. Styled-Components Integration

```tsx
import styled, { ThemeProvider } from 'styled-components'
import { styledTheme } from '../packages/nhs-fdp/dist/react/styled-components'

// Your styled component
const StyledButton = styled.button`
  background-color: \${props => props.theme.ColorPrimaryBlue};
  color: \${props => props.theme.ColorPrimaryWhite};
  padding: \${props => props.theme.SpacingMd};
  border-radius: \${props => props.theme.BorderRadiusSmall};
  border: none;
  font-weight: \${props => props.theme.FontWeightSemibold};
  
  &:hover {
    background-color: \${props => props.theme.SemanticColorButtonPrimaryHover};
  }
`

// Wrap your app
const App = () => (
  <ThemeProvider theme={styledTheme}>
    <StyledButton>NHS Button</StyledButton>
  </ThemeProvider>
)
```

### 5. CSS-in-JS with Emotion

```tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { 
  ColorPrimaryBlue, 
  SpacingMd, 
  BorderRadiusSmall 
} from '../packages/nhs-fdp/dist/react'

const buttonStyle = css`
  background-color: \${ColorPrimaryBlue};
  padding: \${SpacingMd};
  border-radius: \${BorderRadiusSmall};
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
`

const MyButton = () => (
  <button css={buttonStyle}>
    Click me
  </button>
)
```

## **Component-Specific Tokens**

### Button Component Example

```tsx
import * as ButtonTokens from '../packages/nhs-fdp/dist/react/components/Button/tokens'

const PrimaryButton = () => (
  <button
    style={{
      backgroundColor: ButtonTokens.SemanticColorButtonPrimaryBackground,
      color: ButtonTokens.SemanticColorButtonPrimaryText,
      padding: '12px 24px',
    }}
  >
    Primary Action
  </button>
)

const SecondaryButton = () => (
  <button
    style={{
      backgroundColor: ButtonTokens.SemanticColorButtonSecondaryBackground,
      color: ButtonTokens.SemanticColorButtonSecondaryText,
      border: \`2px solid \${ButtonTokens.SemanticColorButtonSecondaryBorder}\`,
    }}
  >
    Secondary Action
  </button>
)
```

## **Available Token Categories**

### Core Tokens

- **Colors**: `ColorPrimary*`, `ColorSecondary*`, `ColorGrey1-5`
- **Spacing**: `Spacing0-9` (NHS 0-9 scale: 0, 4px, 8px, 16px, 24px, 32px, 40px, 48px, 56px, 64px)
- **Typography**: `FontFamilyBase`, `FontWeightNormal/Bold`, `FontSize14Mobile/Tablet`, `FontSize16Mobile/Tablet`, etc.
- **Borders**: `BorderWidth*`, `BorderRadius*`, `BorderColor*`
- **Shadows**: `ShadowButton*`, `ShadowCard*`
- **Animations**: `AnimationDuration*`, `AnimationEasing*`
- **Dimensions**: `DimensionBreakpoint*`, `DimensionContainer*`

### Component-Specific Tokens

- **Button**: `ButtonSpacingPadding*`, `ButtonTypographyWeight`
- **Form**: `FormSpacingInput*`, `FormSpacingCheckbox*`, `FormLabelTypographyWeight`, etc.
- **Card**: `CardSpacingPadding*`, `CardSpacingHeadingMargin`
- **Responsive**: `SpacingResponsive*Mobile/Tablet` for breakpoint-specific values

## **Next Steps**

1. **Add to package.json**: Set up path aliases in your TypeScript config
2. **Create components**: Use these tokens to build your NHS component library
3. **Theme provider**: Implement the React theme provider for global access
4. **Type safety**: Leverage TypeScript for better development experience

## **Benefits**

✅ **Type Safety**: Full TypeScript support with IntelliSense  
✅ **Tree Shaking**: Import only the tokens you need  
✅ **Component Organization**: Follows your NHS frontend component hierarchy  
✅ **React Integration**: Hooks, styled-components, and theme provider support  
✅ **Consistent Values**: Same token values across SCSS, JS, TS, and React  
✅ **Auto-generated**: No manual maintenance required  
