# NHS FDP Design System - Token Analysis

Based on analysis of the NHS UK Frontend components, here are the tokenizable values that should be added to the design system:

## 🎨 Component-Specific Colors (beyond what you have)

### Error States

- `$nhsuk-error-color` (form validation errors)
- `$nhsuk-form-border-color` (default form borders)
- Border colors for error states

### Interactive States  

- `$nhsuk-border-color` (general borders - tables, summary lists)
- Hover states for various components
- Active/pressed states
- Disabled states

### Background Colors

- Card backgrounds
- Panel backgrounds (currently hardcoded to green)
- Form field backgrounds
- Alternative background colors

## 📐 Border & Radius Tokens

### Border Widths

- `$nhsuk-border-width-form-element` (2px)
- `$nhsuk-border-width-form-element-error` (4px)
- `$card-border-width` (1px)
- `$card-border-bottom-width` (4px)
- `$nhsuk-border-width-panel` (4px)

### Border Radius

- `$button-border-radius` (form element border width * 2)
- Input field radius (currently 0)
- Card radius (if any)
- Panel radius (if any)

## 📏 Component-Specific Spacing

### Button Spacing

- `$button-padding-top-bottom-mobile` (8px)
- `$button-padding-top-bottom-desktop` (12px)
- `$button-padding-left-right` (16px)
- `$button-shadow-size` (border-radius value)

### Form Component Spacing

- `$nhsuk-checkboxes-size` (40px - 6 spacing units)
- `$nhsuk-checkboxes-label-padding-left-right` (12px)
- Input field padding (currently 1 spacing unit)
- Input field min-height (40px)

### Card Component Spacing

- Card content padding (currently 5 responsive spacing)
- Card heading margin-bottom (3 spacing units)

### Navigation Spacing

- Breadcrumb chevron positioning values (9px, 2px margins)
- Breadcrumb icon sizes (18px, 19px)

### Summary List Spacing

- Row padding values
- Cell padding (2 spacing top/bottom, 4 spacing right)
- Actions column width (20%)

## 🎯 Component Dimensions

### Fixed Sizes

- Checkbox/radio button sizes
- Icon sizes (18px, 19px, 24px found in breadcrumbs)
- Form input widths (various ex-based values)
- Panel border width
- Button shadow sizes

### Responsive Breakpoints

- Component-specific breakpoints (some components hide/show at tablet)

## 🎨 Shadow & Effects

### Box Shadows

- Button shadows (0 4px 0 color)
- Card shadows (if any)
- Focus shadows
- Hover shadows

### Focus States

- Focus outline widths
- Focus colors
- Focus offsets

## 📱 Component-Specific Media Queries

### Responsive Behavior

- Button width changes (100% mobile, auto desktop)
- Navigation visibility toggles
- Card responsive padding
- Form layout changes

## 🔤 Typography Scales

### Component-Specific Font Sizes

- Button text (19px, bold)
- Card headings (various sizes)
- Panel titles (48px)
- Panel content (26px)
- Breadcrumb text (16px)
- Summary list text (19px)
- Form labels and hints

## ⚡ Interactive Timing

### Animation/Transition Values

- Hover transition durations
- Focus transition timing
- Button press animations
- Touch action optimizations

## 📋 Recommendations for Implementation

1. **High Priority Tokens:**
   - Border widths and radius values
   - Component padding/margin scales
   - Error and interactive state colors
   - Focus and shadow definitions

2. **Medium Priority Tokens:**
   - Component-specific dimensions
   - Typography scales for components
   - Animation timing values

3. **Lower Priority Tokens:**
   - Complex responsive behavior patterns
   - Component-specific media queries

## 🎯 Suggested Token Structure

```json
{
  "component": {
    "button": {
      "padding": {
        "mobile": { "vertical": "8px", "horizontal": "16px" },
        "desktop": { "vertical": "12px", "horizontal": "16px" }
      },
      "border": {
        "radius": "4px",
        "width": "2px"
      },
      "shadow": {
        "size": "4px"
      }
    },
    "form": {
      "border": {
        "width": {
          "default": "2px",
          "error": "4px"
        }
      },
      "input": {
        "min-height": "40px",
        "padding": "4px"
      }
    },
    "card": {
      "border": {
        "width": {
          "default": "1px",
          "bottom": "4px"
        }
      },
      "padding": "32px"
    }
  }
}
```

This analysis shows significant opportunities to tokenize hardcoded values in the NHS components, which would improve consistency and maintainability.
