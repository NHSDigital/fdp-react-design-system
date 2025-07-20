# NHS UK Frontend Design Tokens

This directory contains design tokens for NHS UK Frontend, implemented using [Style Dictionary](https://amzn.github.io/style-dictionary/).

## What are Design Tokens?

Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (like hex values for color or pixel values for spacing) to maintain consistency and enable theming.

## Token Categories

### Colors (`colors.json`)
- **Primary Colors**: Core NHS brand colors
- **Secondary Colors**: Extended palette colors  
- **Greyscale**: Grey color variations
- **Semantic Colors**: Contextual color mappings

### Spacing (`spacing.json`)
- **Static Spacing**: Fixed spacing values (0-9 scale)
- **Responsive Spacing**: Mobile/tablet spacing variations

### Typography (`typography.json`)  
- **Font Families**: Primary, fallback, and print fonts
- **Font Weights**: Normal, bold, light
- **Font Sizes**: Responsive typography scale
- **Line Heights**: Corresponding line heights

### Globals (`globals.json`)
- **Breakpoints**: Screen size breakpoints
- **Borders**: Border widths and radius
- **Shadows**: Box shadow values
- **Icons**: Icon dimensions
- **Grid**: Layout dimensions

### Semantic (`semantic.json`)
- **Text Colors**: Semantic text color mappings
- **Link Colors**: Link state colors
- **Button Colors**: Button variant colors
- **Form Colors**: Form element colors

## Token Structure

Tokens follow a hierarchical structure:

```json
{
  "category": {
    "subcategory": {
      "property": {
        "value": "#005eb8",
        "type": "color",
        "description": "NHS Blue primary color"
      }
    }
  }
}
```

## Usage

### Building Tokens

```bash
# Build tokens
npm run tokens

# Test token structure  
npm run test:tokens

# Build entire project (includes tokens)
npm run build
```

### Generated Files

Style Dictionary generates multiple output formats:

- **SCSS Variables**: `packages/nhsuk-frontend/src/nhsuk/core/settings/tokens/`
- **CSS Custom Properties**: `packages/nhsuk-frontend/dist/css/tokens.css`  
- **JavaScript Objects**: `packages/nhsuk-frontend/dist/js/tokens.js`

### SCSS Usage

```scss
// Import token-based variables
@import "settings/tokens/colors";
@import "settings/tokens/spacing";

// Use in styles
.my-component {
  background-color: $color-primary-blue;
  padding: $spacing-4;
  margin-bottom: $spacing-responsive-4-mobile;
  
  @media (min-width: 641px) {
    margin-bottom: $spacing-responsive-4-tablet;
  }
}
```

### CSS Custom Properties Usage

```css
:root {
  --color-primary-blue: #005eb8;
  --spacing-4: 24px;
}

.my-component {
  background-color: var(--color-primary-blue);
  padding: var(--spacing-4);
}
```

### JavaScript Usage

```javascript
import tokens from './dist/js/tokens.js'

console.log(tokens.color.primary.blue.value) // "#005eb8"
```

## Token Reference

### Color Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `color-primary-blue` | #005eb8 | Primary NHS blue |
| `color-primary-green` | #007f3b | Success, primary buttons |
| `color-primary-red` | #d5281b | Errors, warnings |
| `color-grey-4` | #d8dde0 | Borders, dividers |

### Spacing Tokens

| Token | Mobile | Tablet | Usage |
|-------|--------|--------|-------|
| `spacing-1` | 4px | 4px | Minimal spacing |
| `spacing-4` | 16px | 24px | Standard spacing |
| `spacing-7` | 40px | 48px | Large spacing |

### Typography Tokens

| Token | Mobile | Tablet | Usage |
|-------|--------|--------|-------|
| `font-size-19` | 16px | 19px | Body text |
| `font-size-36` | 27px | 36px | Headings |
| `font-weight-bold` | 600 | 600 | Bold text |

## Migration Guide

### Step 1: Token-Based Variables
Replace direct color/spacing imports with token-based equivalents:

```scss
// Before
@import "settings/colors";

// After  
@import "settings/tokens/colors";
```

### Step 2: Update Variable References
Use generated token variables:

```scss
// Before
color: $color_nhsuk-blue;

// After
color: $color-primary-blue;
```

### Step 3: Semantic Tokens
Adopt semantic token usage:

```scss
// Before
background-color: $color_nhsuk-green;

// After
background-color: $button-primary-background;
```

## Contributing

### Adding New Tokens

1. Add token to appropriate JSON file in `tokens/`
2. Run `npm run tokens` to generate SCSS/CSS/JS files
3. Run `npm run test:tokens` to validate structure
4. Update documentation

### Token Naming Convention

- Use kebab-case for token names
- Follow hierarchical structure
- Include meaningful descriptions
- Specify correct type (color, spacing, fontSize, etc.)

### Token Types

- `color` - Color values (#hex, rgb(), etc.)
- `spacing` - Spacing/sizing values (px, rem, em)
- `fontSize` - Font size values  
- `fontWeight` - Font weight values (400, 600, etc.)
- `fontFamily` - Font family strings
- `lineHeight` - Line height values
- `borderWidth` - Border width values
- `borderRadius` - Border radius values
- `boxShadow` - Box shadow values
- `dimension` - Generic dimensional values
- `breakpoint` - Media query breakpoints

## Files

- `colors.json` - Color palette and variants
- `spacing.json` - Spacing scale and responsive values
- `typography.json` - Font properties and responsive sizes  
- `globals.json` - Global values (breakpoints, borders, etc.)
- `semantic.json` - Semantic color mappings and component variants

Each token file follows the same structure with `value`, `type`, and optional `description` properties.
