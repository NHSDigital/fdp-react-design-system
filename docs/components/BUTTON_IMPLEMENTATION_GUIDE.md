# NHS Button Component - Implementation Guide

## Overview

You've successfully created the first component in your NHS design system! Here's a complete walkthrough of what we've built and how to use it.

## What We've Created

### 🎯 **NHS Button Component**
- **Location**: `src/components/Button/`
- **Features**: 
  - 5 variants (primary, secondary, reverse, warning, login)
  - 3 sizes (small, default, large)
  - Full accessibility support
  - Complete design token integration
  - Responsive design
  - TypeScript support

### 📚 **Storybook Stories**
- **File**: `Button.stories.tsx`
- **Coverage**: All variants, sizes, states, and interactive examples
- **Documentation**: Built-in docs with usage guidelines

### 🧪 **Comprehensive Tests**
- **File**: `Button.test.tsx` 
- **Coverage**: 
  - Rendering tests
  - Variant tests
  - Size tests
  - State tests
  - Accessibility tests
  - Event handling
  - Design token integration

## Usage Examples

### Basic Usage

```tsx
import { Button, NHSThemeProvider } from 'nhs-fdp-design-system';

function App() {
  return (
    <NHSThemeProvider>
      <Button variant="primary" onClick={() => console.log('Clicked!')}>
        Continue
      </Button>
    </NHSThemeProvider>
  );
}
```

### All Variants

```tsx
<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
  <Button variant="primary">Primary Action</Button>
  <Button variant="secondary">Secondary Action</Button>
  <Button variant="reverse">Reverse (for dark backgrounds)</Button>
  <Button variant="warning">Delete</Button>
  <Button variant="login">Sign In</Button>
</div>
```

### Sizes and States

```tsx
<>
  {/* Sizes */}
  <Button size="small">Small</Button>
  <Button size="default">Default</Button>
  <Button size="large">Large</Button>
  
  {/* States */}
  <Button disabled>Disabled</Button>
  <Button fullWidth>Full Width</Button>
</>
```

### Form Integration

```tsx
<form onSubmit={handleSubmit}>
  <Button type="submit" variant="primary">
    Submit Form
  </Button>
  <Button type="reset" variant="secondary">
    Reset
  </Button>
</form>
```

## Design Token Integration

The button automatically uses your design tokens:

```tsx
// These values come from your token system:
// - theme.button.ButtonPrimaryBackgroundDefault
// - theme.color.ColorButtonPrimaryText  
// - theme.button.ButtonSpacingPaddingVerticalMobile
// - theme.font.FontFamilyBase
// ... and many more!
```

## Testing Your Button

Run the tests:

```bash
npm test Button.test.tsx
```

View in Storybook:

```bash
npm run storybook
# Navigate to Components -> Button
```

## Next Steps: Building More Components

Now that you have the foundation, here's how to create your next component:

### 1. **Choose Your Next Component**
I recommend these components in order of complexity:

1. **Link** - Similar to Button but simpler
2. **Input** - More complex with form states
3. **Card** - Layout component with multiple child elements
4. **Header/Footer** - Complex layout components

### 2. **Follow The Same Pattern**

For each new component, create:

```
src/components/[ComponentName]/
  ├── index.ts                    # Exports
  ├── [ComponentName].tsx         # Main component
  ├── [ComponentName].types.ts    # TypeScript types
  ├── [ComponentName].styles.ts   # Design token styles
  ├── [ComponentName].css         # CSS for interactions
  ├── [ComponentName].stories.tsx # Storybook stories
  └── [ComponentName].test.tsx    # Tests
```

### 3. **Use Your Design Tokens**

Always reference your theme tokens:

```tsx
const theme = useNHSTheme();

const styles = {
  color: theme.color.ColorTextPrimary,
  fontSize: theme.font.FontSize19Mobile,
  padding: theme.spacing.Spacing3,
  // ... etc
};
```

### 4. **Build Scripts**

Build your library:

```bash
npm run build:tokens    # Generate tokens
npm run build:lib       # Build components
npm run build          # Build everything
```

## Architecture Benefits

What you've built provides:

✅ **Design Token Integration** - All styles come from your token system  
✅ **Type Safety** - Full TypeScript support throughout  
✅ **Accessibility** - WCAG compliant with proper ARIA support  
✅ **Testing** - Comprehensive test coverage  
✅ **Documentation** - Auto-generated docs via Storybook  
✅ **Responsive** - Mobile-first design with breakpoint handling  
✅ **NHS Guidelines** - Follows official NHS design principles  
✅ **Developer Experience** - Great IDE support with autocomplete  

## Tips for Scaling

1. **Component Composition**: Build larger components by combining smaller ones
2. **Shared Utilities**: Create common hooks and utilities in `src/utils/`
3. **Theme Customization**: Allow theme overrides for different NHS organizations
4. **Performance**: Use React.memo() for expensive components
5. **Bundle Size**: Tree-shake unused tokens and components

---

You've successfully created a production-ready NHS Button component with full testing, documentation, and design token integration! 🎉
