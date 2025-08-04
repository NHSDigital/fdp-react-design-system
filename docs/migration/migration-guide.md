# NHS FDP Design System - Token Migration Guide

This guide shows how to replace hardcoded values in your components with the new tokens from the NHS FDP Design System.

## 🎯 Quick Reference

### Before and After Examples

#### Button Component Migration
```scss
// ❌ Before (hardcoded values)
.nhsuk-button {
  padding: 8px 16px; // mobile
  border: 2px solid transparent;
  border-radius: 4px;
  box-shadow: 0 4px 0 #004021;
  
  @include nhsuk-media-query($from: tablet) {
    padding: 12px 16px; // desktop
  }
}

// ✅ After (using tokens)
.nhsuk-button {
  padding: $nhs-fdp-component-button-padding-mobile-vertical $nhs-fdp-component-button-padding-mobile-horizontal;
  border: $nhs-fdp-border-width-form-element solid transparent;
  border-radius: $nhs-fdp-border-radius-small;
  box-shadow: 0 $nhs-fdp-component-button-shadow-size 0 $nhs-fdp-semantic-color-button-primary-shadow;
  
  @include nhsuk-media-query($from: tablet) {
    padding: $nhs-fdp-component-button-padding-desktop-vertical $nhs-fdp-component-button-padding-desktop-horizontal;
  }
}
```

#### Form Input Migration
```scss
// ❌ Before (hardcoded values)
.nhsuk-input {
  border: 2px solid #4c6272;
  min-height: 40px;
  padding: 4px;
  
  &:focus {
    border-color: #ffeb3b;
    box-shadow: 0 0 0 3px #ffeb3b;
  }
  
  &.error {
    border: 4px solid #d5281b;
  }
}

// ✅ After (using tokens)  
.nhsuk-input {
  border: $nhs-fdp-border-width-form-element solid $nhs-fdp-semantic-color-form-border;
  min-height: $nhs-fdp-component-form-input-min-height;
  padding: $nhs-fdp-component-form-input-padding;
  
  &:focus {
    border-color: $nhs-fdp-semantic-color-focus-background;
    box-shadow: $nhs-fdp-focus-input;
  }
  
  &.error {
    border: $nhs-fdp-border-width-form-element-error solid $nhs-fdp-state-error-border;
  }
}
```

#### Card Component Migration
```scss
// ❌ Before (hardcoded values)
.nhsuk-card {
  background: #ffffff;
  border: 1px solid #d8dde0;
  padding: 32px;
  
  &--clickable {
    border-bottom-width: 4px;
    
    &:hover {
      border-color: #aeb7bd;
    }
  }
}

// ✅ After (using tokens)
.nhsuk-card {
  background: $nhs-fdp-card-background-default;
  border: $nhs-fdp-border-width-default solid $nhs-fdp-border-color-card;
  padding: $nhs-fdp-component-card-padding-desktop;
  
  &--clickable {
    border-bottom-width: $nhs-fdp-border-width-card-bottom;
    
    &:hover {
      border-color: $nhs-fdp-border-color-card-hover;
    }
  }
}
```

## 📁 Token Categories

### 1. Border Tokens (`_borders.scss`)
Replace hardcoded border widths and radius values:

```scss
// Border Widths
$nhs-fdp-border-width-default: 1px;
$nhs-fdp-border-width-form-element: 2px;
$nhs-fdp-border-width-form-element-error: 4px;
$nhs-fdp-border-width-card-bottom: 4px;

// Border Radius
$nhs-fdp-border-radius-none: 0px;
$nhs-fdp-border-radius-small: 4px;
$nhs-fdp-border-radius-medium: 8px;

// Border Colors
$nhs-fdp-border-color-default: #d8dde0;
$nhs-fdp-border-color-form: #4c6272;
$nhs-fdp-border-color-card: #d8dde0;
```

### 2. Component Spacing (`_component-spacing.scss`)
Replace component-specific padding/margin values:

```scss
// Button Spacing
$nhs-fdp-component-button-padding-mobile-vertical: 8px;
$nhs-fdp-component-button-padding-mobile-horizontal: 16px;
$nhs-fdp-component-button-padding-desktop-vertical: 12px;
$nhs-fdp-component-button-shadow-size: 4px;

// Form Spacing  
$nhs-fdp-component-form-input-min-height: 40px;
$nhs-fdp-component-form-input-padding: 4px;
$nhs-fdp-component-form-checkbox-size: 40px;

// Card Spacing
$nhs-fdp-component-card-padding-mobile: 16px;
$nhs-fdp-component-card-padding-desktop: 32px;
```

### 3. Shadow & Effects (`_shadows.scss`)
Replace hardcoded box-shadow values:

```scss
$nhs-fdp-shadow-button-default: 0 4px 0 #004021;
$nhs-fdp-shadow-button-secondary: 0 4px 0 #005eb8;
$nhs-fdp-focus-input: 0 0 0 3px #ffeb3b;
$nhs-fdp-focus-button: 0 0 0 3px #ffeb3b;
```

### 4. Dimensions (`_dimensions.scss`)
Replace hardcoded size values:

```scss
// Icon Sizes
$nhs-fdp-size-icon-small: 16px;
$nhs-fdp-size-icon-medium: 18px;
$nhs-fdp-size-icon-large: 24px;

// Form Control Sizes
$nhs-fdp-size-form-control-medium: 40px;

// Input Widths (ex-based)
$nhs-fdp-size-form-input-width-xs: 5.4ex;  // 2 chars
$nhs-fdp-size-form-input-width-sm: 7.2ex;  // 3 chars
$nhs-fdp-size-form-input-width-xl: 20ex;   // 10 chars
```

### 5. State Colors (`semantic.json` - updated)
New state-based color tokens:

```scss
// Error States
$nhs-fdp-state-error-background: #d5281b;
$nhs-fdp-state-error-border: #d5281b;
$nhs-fdp-state-error-text: #ffffff;

// Success States
$nhs-fdp-state-success-background: #007f3b;
$nhs-fdp-state-success-border: #007f3b;

// Disabled States
$nhs-fdp-state-disabled-background: #d8dde0;
$nhs-fdp-state-disabled-text: #aeb7bd;
```

## 🔧 JavaScript Usage

### ES6 Imports
```javascript
// Import specific token categories
import { 
  BorderWidthFormElement, 
  BorderRadiusSmall 
} from './tokens/borders.js';

import {
  ComponentButtonPaddingMobileVertical,
  ComponentFormInputMinHeight
} from './tokens/component-spacing.js';

// Use in your components
const buttonStyles = {
  padding: `${ComponentButtonPaddingMobileVertical} ${ComponentButtonPaddingMobileHorizontal}`,
  borderRadius: BorderRadiusSmall,
  borderWidth: BorderWidthFormElement
};
```

### JSON Usage
```javascript
// Import nested JSON structure
import buttonTokens from './components/button-enhanced.json';
import formTokens from './components/form-enhanced.json';

// Access nested values
const primaryButton = {
  backgroundColor: buttonTokens.button.primary.background.default,
  padding: `${buttonTokens.button.spacing['padding-vertical-mobile']} ${buttonTokens.button.spacing['padding-horizontal-mobile']}`
};
```

### Story Features
- **Documentation**: Comprehensive component documentation
- **Controls**: Interactive property controls for testing
- **Accessibility info**: Built-in accessibility guidance
- **Design token usage**: Examples of token integration

### Viewing Stories
1. Start Storybook: `npm run storybook`
2. Navigate to http://localhost:6006
3. Browse components in the sidebar
4. Use Controls panel to interact with props
5. Check Docs tab for usage guidelines

## 🎨 SCSS Import Structure

Update your main SCSS file to import all token categories:

```scss
// Import all token categories
@import 'dist/scss/colors';
@import 'dist/scss/spacing';  
@import 'dist/scss/typography';
@import 'dist/scss/borders';
@import 'dist/scss/shadows';
@import 'dist/scss/animations';
@import 'dist/scss/dimensions';
@import 'dist/scss/component-spacing';

// Import component-specific tokens (optional)
@import 'dist/scss/components/button';
@import 'dist/scss/components/form';
@import 'dist/scss/components/card';
```

## ⚠️ Important Notes

1. **Token Collisions**: Some token names may conflict. Use the verbose build flag to identify conflicts:
   ```bash
   npx style-dictionary build --verbose
   ```

2. **Reference Resolution**: Tokens that reference other tokens (using `{token.name}` syntax) will be automatically resolved.

3. **Responsive Values**: Some tokens have mobile/desktop variants. Use appropriate media queries.

4. **Backwards Compatibility**: Keep old hardcoded values commented for reference during transition.

## 🚀 Benefits After Migration

- **Consistency**: All components use the same spacing/color/border values
- **Maintainability**: Change one token to update all components
- **Scalability**: Easy to add new variants and themes
- **Documentation**: Self-documenting code with descriptive token names
- **Cross-platform**: Same tokens work for web, iOS, Android
