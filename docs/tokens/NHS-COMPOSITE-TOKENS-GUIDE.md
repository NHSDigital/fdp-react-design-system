# NHS Composite Tokens Usage Guide

This guide shows how to use the enhanced NHS typography composite tokens in React and TypeScript projects.

## Overview

The NHS design system now includes composite tokens for typography that provide complete styling information for headings and paragraphs, including responsive font sizes, line heights, margins, and other properties.

## Available Typography Tokens

### NHS Headings
- `nhsuk-heading-xl` (H1 equivalent) - Extra large heading
- `nhsuk-heading-l` (H2 equivalent) - Large heading  
- `nhsuk-heading-m` (H3 equivalent) - Medium heading
- `nhsuk-heading-s` (H4 equivalent) - Small heading
- `nhsuk-heading-xs` (H5 equivalent) - Extra small heading

### NHS Paragraphs
- `body` - Default paragraph text (nhsuk-body-m)
- `body-large` - Large body text (nhsuk-body-l)
- `body-small` - Small body text (nhsuk-body-s)
- `lede-text` - Lead paragraph (nhsuk-lede-text)
- `lede-text-small` - Small lead paragraph (nhsuk-lede-text--small)

## React Usage

### Method 1: Using Pre-built Components

```tsx
import { 
  NHSHeading1, 
  NHSHeading2, 
  NHSBodyText, 
  NHSLedeText 
} from '@nhs/design-system/react/components/NHSTypography';

function MyComponent() {
  return (
    <div>
      <NHSHeading1>This is an H1 with NHS styling</NHSHeading1>
      <NHSHeading2>This is an H2 with NHS styling</NHSHeading2>
      <NHSLedeText>This is lead text with NHS styling</NHSLedeText>
      <NHSBodyText>This is body text with NHS styling</NHSBodyText>
    </div>
  );
}
```

### Method 2: Using React Hooks

```tsx
import React from 'react';
import { useNHSHeadings, useNHSParagraphs, useNHSTypographySystem } from '@nhs/design-system/react/hooks/useTokens';

function MyComponent() {
  const headings = useNHSHeadings();
  const paragraphs = useNHSParagraphs();
  
  return (
    <div>
      <h1 style={{
        fontFamily: headings.xl.fontFamily,
        fontWeight: headings.xl.fontWeight,
        fontSize: headings.xl.fontSize.mobile,
        lineHeight: headings.xl.lineHeight,
        marginBottom: headings.xl.marginBottom.mobile,
      }}>
        NHS Heading XL
      </h1>
      
      <p style={{
        fontFamily: paragraphs.body.fontFamily,
        fontWeight: paragraphs.body.fontWeight,
        fontSize: paragraphs.body.fontSize.mobile,
        lineHeight: paragraphs.body.lineHeight,
        marginBottom: paragraphs.body.marginBottom.mobile,
      }}>
        NHS body text
      </p>
    </div>
  );
}
```

### Method 3: Using the NHS Theme Provider

```tsx
import React from 'react';
import { NHSThemeProvider, useNHSTheme } from '@nhs/design-system/react/theme/NHSThemeProvider';

function ThemedComponent() {
  const theme = useNHSTheme();
  
  return (
    <div>
      <h1 style={{
        fontFamily: theme.headings.xl.fontFamily,
        fontWeight: theme.headings.xl.fontWeight,
        fontSize: theme.headings.xl.fontSize.mobile,
      }}>
        Themed Heading
      </h1>
      
      <p style={{
        fontFamily: theme.paragraphs.body.fontFamily,
        fontSize: theme.paragraphs.body.fontSize.mobile,
      }}>
        Themed paragraph
      </p>
    </div>
  );
}

function App() {
  return (
    <NHSThemeProvider>
      <ThemedComponent />
    </NHSThemeProvider>
  );
}
```

### Method 4: Using with styled-components

```tsx
import styled from 'styled-components';
import { HeadingsNhsukHeadingXl, ParagraphsBody } from '@nhs/design-system/react';

const StyledHeading = styled.h1`
  font-family: ${HeadingsNhsukHeadingXl.fontFamily};
  font-weight: ${HeadingsNhsukHeadingXl.fontWeight};
  font-size: ${HeadingsNhsukHeadingXl.fontSize.mobile};
  line-height: ${HeadingsNhsukHeadingXl.lineHeight};
  margin-top: ${HeadingsNhsukHeadingXl.marginTop};
  margin-bottom: ${HeadingsNhsukHeadingXl.marginBottom.mobile};
  
  @media (min-width: 768px) {
    font-size: ${HeadingsNhsukHeadingXl.fontSize.tablet};
    margin-bottom: ${HeadingsNhsukHeadingXl.marginBottom.tablet};
  }
  
  @media print {
    font-size: ${HeadingsNhsukHeadingXl.fontSize.print};
  }
`;

const StyledParagraph = styled.p`
  font-family: ${ParagraphsBody.fontFamily};
  font-weight: ${ParagraphsBody.fontWeight};
  font-size: ${ParagraphsBody.fontSize.mobile};
  line-height: ${ParagraphsBody.lineHeight};
  margin-bottom: ${ParagraphsBody.marginBottom.mobile};
  
  @media (min-width: 768px) {
    font-size: ${ParagraphsBody.fontSize.tablet};
    margin-bottom: ${ParagraphsBody.marginBottom.tablet};
  }
`;
```

## TypeScript Usage

### Direct Token Import

```typescript
import { 
  HeadingsNhsukHeadingXl, 
  ParagraphsBody,
  NHSHeadingStyle,
  NHSParagraphStyle 
} from '@nhs/design-system/typescript';

// Use the composite tokens directly
const headingStyle: NHSHeadingStyle = HeadingsNhsukHeadingXl;
const paragraphStyle: NHSParagraphStyle = ParagraphsBody;

// Access responsive properties
const mobileHeadingSize = headingStyle.fontSize.mobile; // "33px"
const tabletHeadingSize = headingStyle.fontSize.tablet; // "48px"
```

### Type-safe Styling Functions

```typescript
import { NHSHeadingStyle, ResponsiveProperty } from '@nhs/design-system/typescript';

function createResponsiveStyle(
  fontSize: ResponsiveProperty<string>,
  marginBottom: ResponsiveProperty<string>
) {
  return {
    fontSize: fontSize.mobile,
    marginBottom: marginBottom.mobile,
    '@media (min-width: 768px)': {
      fontSize: fontSize.tablet,
      marginBottom: marginBottom.tablet,
    },
    '@media print': {
      fontSize: fontSize.print || fontSize.tablet,
    },
  };
}

// Use with NHS tokens
const headingStyles = createResponsiveStyle(
  HeadingsNhsukHeadingL.fontSize,
  HeadingsNhsukHeadingL.marginBottom
);
```

## Responsive Behavior

All NHS composite tokens include responsive properties:

- `mobile`: Base styles for mobile devices
- `tablet`: Enhanced styles for tablet and desktop (768px+)
- `print`: Optimized styles for print media

### CSS Media Queries

When implementing responsive styles, use these breakpoints:

```css
/* Mobile-first approach */
.nhs-heading {
  font-size: 33px; /* mobile size */
}

@media (min-width: 768px) {
  .nhs-heading {
    font-size: 48px; /* tablet size */
  }
}

@media print {
  .nhs-heading {
    font-size: 24pt; /* print size */
  }
}
```

## Build Commands

- **Basic build**: `npx style-dictionary build` - Generates standard tokens
- **Enhanced build**: `npm run build:tokens` - Generates tokens with enhanced React components and hooks

The enhanced build provides additional React utilities and better TypeScript support for composite tokens.

## Available Files

After building with enhanced mode, you'll find:

- `dist/react/components/NHSTypography.tsx` - Pre-built React components
- `dist/react/hooks/useTokens.ts` - React hooks for typography
- `dist/react/theme/NHSThemeProvider.tsx` - Theme context provider
- `dist/typescript/tokens.d.ts` - TypeScript declarations with proper composite types

## Best Practices

1. **Use semantic names**: Import `useNHSHeadings()` rather than individual token names
2. **Responsive design**: Always consider mobile, tablet, and print variants
3. **TypeScript support**: Leverage the provided interfaces for type safety
4. **Theme consistency**: Use the theme provider for consistent styling across components
5. **Component reuse**: Prefer the pre-built components when possible for consistency

## Migration from Simple Tokens

If upgrading from simple font tokens, composite tokens provide:

- ✅ Complete styling in one object
- ✅ Built-in responsive behavior  
- ✅ Consistent margin and spacing
- ✅ Better TypeScript support
- ✅ NHS-compliant styling out of the box

Replace individual font properties:
```typescript
// Old approach
const styles = {
  fontFamily: FontFamilyBase,
  fontWeight: FontWeightBold,
  fontSize: FontSize48Mobile,
  lineHeight: '1.09',
  marginBottom: '40px',
};

// New approach
const styles = HeadingsNhsukHeadingXl;
```
