# Semantic Typography Structure - Usage Guide

## 🎉 MAJOR IMPROVEMENT: Device-Grouped Typography

Instead of the old clunky naming like `FontSize16Mobile`, we now have a much more semantic and intuitive structure:

## New Semantic Structure

### TypeScript Usage
```typescript
import { Typography } from './packages/nhs-fdp/dist/typescript/semantic-typography';

// Clean, intuitive device-first approach
const styles = {
  mobile: Typography.Mobile.Size16,      // "14px"
  tablet: Typography.Tablet.Size16,      // "16px"  
  print: Typography.Print.Size16,        // "12pt"
  
  // Font families are grouped semantically
  fontFamily: Typography.Family.Base,    // "Frutiger W01"
  fontWeight: Typography.Weight.Bold,    // "600"
};
```

### React Hooks Usage
```typescript
import { useTypography } from './packages/nhs-fdp/dist/react/hooks/useTokens';

const MyComponent = () => {
  const typography = useTypography();
  
  return (
    <div style={{
      // Device-first typography selection
      fontSize: typography.Mobile.Size19,        // Much clearer than FontSize19Mobile
      fontFamily: typography.Family.Base,        // Much clearer than FontFamilyBase
      fontWeight: typography.Weight.Bold,        // Much clearer than FontWeightBold
      
      // Responsive approach
      '@media (min-width: 768px)': {
        fontSize: typography.Tablet.Size19       // Clear tablet targeting
      }
    }}>
      Semantic NHS Typography
    </div>
  );
};
```

### SCSS Usage
```scss
@import 'packages/nhs-fdp/dist/scss/semantic-typography';

.my-component {
  // Device-grouped variables
  font-size: $typography-mobile-size-16;
  font-family: $typography-family-base;
  font-weight: $typography-weight-bold;
  
  @media (min-width: 768px) {
    font-size: $typography-tablet-size-16;
  }
  
  // Or use the semantic maps
  font-size: map-get($typography-mobile, size-16);
}
```

## Structure Comparison

### ❌ Old Clunky Way:
```typescript
fontSize: tokens.FontSize16Mobile        // What does this mean?
fontFamily: tokens.FontFamilyBase        // Unclear grouping
fontWeight: tokens.FontWeightBold        // Disconnected
```

### ✅ New Semantic Way:
```typescript
fontSize: typography.Mobile.Size16       // Clear: Mobile context, Size 16
fontFamily: typography.Family.Base       // Clear: Font Family, Base variant  
fontWeight: typography.Weight.Bold       // Clear: Font Weight, Bold variant
```

## Benefits

1. **🎯 Device-First Approach**: Immediately clear which device/context you're targeting
2. **🧠 Cognitive Load Reduction**: Grouped structure is much easier to remember
3. **💡 Better IntelliSense**: IDE autocomplete works better with nested structure
4. **📱 Responsive Design**: Natural progression from Mobile → Tablet → Print
5. **🔒 Backward Compatibility**: Old token names still work for existing code
6. **🎨 Design System Alignment**: Matches how designers think about typography

## Available Typography Groups

### Device Contexts
- `Typography.Mobile.*` - Mobile-optimized sizes
- `Typography.Tablet.*` - Tablet-optimized sizes  
- `Typography.Print.*` - Print-optimized sizes

### Font Properties
- `Typography.Family.*` - Font family variants (Base, Fallback, Print)
- `Typography.Weight.*` - Font weights (Normal, Bold, Light)
- `Typography.Base.*` - Base typography settings (Size, LineHeight)

### Available Sizes
- `Size14`, `Size16`, `Size19`, `Size22`, `Size26`, `Size36`, `Size48`

## Migration Guide

### Before (Clunky)
```typescript
const styles = {
  mobileTitle: FontSize26Mobile,          // 22px
  tabletTitle: FontSize26Tablet,          // 26px
  mobileBody: FontSize16Mobile,           // 14px
  tabletBody: FontSize16Tablet,           // 16px
  font: FontFamilyBase,                   // "Frutiger W01"
  weight: FontWeightBold                  // "600"
};
```

### After (Semantic)
```typescript
const styles = {
  title: {
    mobile: Typography.Mobile.Size26,     // 22px - Clear context
    tablet: Typography.Tablet.Size26,     // 26px - Clear context
  },
  body: {
    mobile: Typography.Mobile.Size16,     // 14px - Clear context  
    tablet: Typography.Tablet.Size16,     // 16px - Clear context
  },
  font: Typography.Family.Base,           // "Frutiger W01" - Clear grouping
  weight: Typography.Weight.Bold          // "600" - Clear purpose
};
```

## Generated Files

1. **`packages/nhs-fdp/dist/typescript/semantic-typography.ts`** - Main semantic TypeScript structure
2. **`packages/nhs-fdp/dist/scss/_semantic-typography.scss`** - Device-grouped SCSS variables + maps
3. **`packages/nhs-fdp/dist/react/hooks/useTokens.ts`** - Enhanced React hooks with semantic structure

This semantic approach makes the NHS design system much more intuitive and developer-friendly! 🚀
