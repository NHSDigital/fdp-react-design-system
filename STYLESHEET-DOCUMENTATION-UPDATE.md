# Stylesheet Import Documentation Update

## 📚 Usage-Specific Imports

#### Minimal Bundle (Generic Data)
```tsx
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/css';
```

#### Healthcare Bundle (NHS Data)
```tsx
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/css';
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/HealthcareCardTemplates/css';
```

#### Full Table Functionality
```tsx
import '@fergusbisset/nhs-fdp-design-system/components/SortableDataTable/css';
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/css';
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/HealthcareCardTemplates/css';
```

### Development vs Production

#### Development (Source Files)
```tsx
import './ResponsiveDataGrid.scss';
import './HealthcareCardTemplates.scss';
```

#### Production (Built CSS)
```tsx
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/css';
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/HealthcareCardTemplates/css';
```

## 📄 Files Updated

### 1. Generic Implementation Guide
**File:** `src/components/ResponsiveDataGrid/GENERIC_IMPLEMENTATION.md`
- Added comprehensive **"🎨 Stylesheet Imports"** section
- Covers all usage scenarios (basic, healthcare, advanced)
- Import order guidelines with explanations
- Development vs production import patterns
- Bundle size optimization strategies
- CSS variables and customization options
- Troubleshooting guide for common style issues

### 2. Main Component README
**File:** `src/components/ResponsiveDataGrid/README.md`
- Added **"🎨 Stylesheet Imports"** section before Quick Start
- Required CSS imports with proper order
- Usage-specific import patterns (minimal, healthcare, full)
- Critical import order requirements highlighted

### 3. Quick Implementation Guide
**File:** `docs/components/ResponsiveDataGrid-Implementation-Guide.md`
- Added **"🎨 Stylesheet Setup"** section early in the guide
- Step-by-step import instructions
- Correct vs incorrect import order examples
- Developer-focused quick setup guide

### 4. Enhanced Renderers Deep Dive
**File:** `docs/components/ResponsiveDataGrid-Enhanced-Renderers.md`
- Added **"Stylesheet Requirements"** section
- CSS import setup with enhanced renderer context
- Bundle optimization for different use cases
- Foundation to advanced styling imports

## 🎯 Key Information Documented

### Required Import Order

**Critical Order:**
1. `AriaTabsDataGrid.css` (foundation table styles) - *optional*
2. `ResponsiveDataGrid.css` (core responsive grid styles) - **required**
3. `HealthcareCardTemplates.css` (domain-specific card templates) - *optional*

### Import Examples

#### Minimal Bundle (Generic Data)
```tsx
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/css';
```

#### Healthcare Bundle (NHS Styling)
```tsx
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/css';
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/HealthcareCardTemplates/css';
```

#### Full Table Functionality
```tsx
import '@fergusbisset/nhs-fdp-design-system/components/SortableDataTable/css';
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/css';
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/HealthcareCardTemplates/css';
```
4. Custom CSS overrides - *optional*

### Usage-Specific Imports

#### Minimal Bundle (Generic Data)
```tsx
import '@fergusbisset/nhs-fdp-design-system/dist/components/ResponsiveDataGrid/ResponsiveDataGrid.css';
```

#### Healthcare Bundle (NHS Data)
```tsx
import '@fergusbisset/nhs-fdp-design-system/dist/components/ResponsiveDataGrid/ResponsiveDataGrid.css';
import '@fergusbisset/nhs-fdp-design-system/dist/components/ResponsiveDataGrid/HealthcareCardTemplates.css';
```

#### Full Table Functionality
```tsx
import '@fergusbisset/nhs-fdp-design-system/dist/components/SortableDataTable/AriaTabsDataGrid.css';
import '@fergusbisset/nhs-fdp-design-system/dist/components/ResponsiveDataGrid/ResponsiveDataGrid.css';
import '@fergusbisset/nhs-fdp-design-system/dist/components/ResponsiveDataGrid/HealthcareCardTemplates.css';
```

### Development vs Production

#### Development (Source Files)
```tsx
import './ResponsiveDataGrid.scss';
import './HealthcareCardTemplates.scss';
```

#### Production (Built CSS)
```tsx
import '@fergusbisset/nhs-fdp-design-system/dist/components/ResponsiveDataGrid/ResponsiveDataGrid.css';
import '@fergusbisset/nhs-fdp-design-system/dist/components/ResponsiveDataGrid/HealthcareCardTemplates.css';
```

## 🔧 Documented Features

### CSS Variables and Customization
```css
:root {
  --responsive-grid-card-gap: 1.5rem;
  --responsive-grid-table-padding: 1rem;
  --healthcare-card-border-radius: 8px;
}
```

### Bundle Size Optimization

- **Selective imports** based on feature usage
- **Conditional healthcare styles** only when needed
- **Foundation styles** only for advanced table functionality

### Troubleshooting Guide

Common issues and solutions:
- Cards not displaying correctly → Import `ResponsiveDataGrid.css`
- Healthcare cards missing NHS styling → Import `HealthcareCardTemplates.css` after core styles
- Table view styling broken → Import `AriaTabsDataGrid.css` first
- Styles not applying in production → Check import paths match build output

## 📋 Documentation Locations

### Primary Documentation
- `src/components/ResponsiveDataGrid/GENERIC_IMPLEMENTATION.md` - **Most comprehensive**
- `src/components/ResponsiveDataGrid/README.md` - **Main component guide**

### Supplementary Documentation  
- `docs/components/ResponsiveDataGrid-Implementation-Guide.md` - **Quick start focused**
- `docs/components/ResponsiveDataGrid-Enhanced-Renderers.md` - **Technical deep dive**

## ✅ Developer Benefits

### Clear Guidance
- Exact import statements for copy-paste usage
- Proper order requirements to prevent styling issues
- Usage-specific patterns for different scenarios

### Bundle Optimization
- Minimal imports for basic usage
- Conditional imports for domain-specific features
- Full imports for advanced functionality

### Troubleshooting
- Common style issues and solutions
- Development vs production import patterns
- CSS cascade understanding

### Customization
- CSS variable documentation
- Custom override patterns
- Theme customization guidance

## 🚀 Implementation Impact

Developers now have:

1. **Clear Setup Instructions**: No guessing about required imports
2. **Proper Import Order**: Prevents CSS cascade issues
3. **Bundle Optimization**: Choose only needed stylesheets
4. **Troubleshooting Guide**: Quick solutions for common problems
5. **Customization Options**: CSS variables and override patterns

This comprehensive stylesheet documentation ensures developers can successfully implement ResponsiveDataGrid with proper styling, avoid common CSS issues, and optimize their bundle size based on their specific usage requirements.
