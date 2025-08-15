# ResponsiveDataGrid Component

A flexible, responsive data grid component that automatically switches between table and card layouts based on viewport size, with enhanced column rendering capabilities for optimal display in each context.

## 🎯 Key Features

- **Responsive Layout**: Automatically switches between table (desktop) and card (mobile) views
- **Enhanced Column Renderers**: Different rendering logic for table vs card views
- **Healthcare Optimized**: Built-in healthcare data detection and specialized templates
- **Generic Architecture**: Plugin-based system supports any data domain
- **Accessibility First**: Full ARIA compliance with keyboard navigation
- **TypeScript Ready**: Complete type definitions for all features

## 🎨 Stylesheet Imports

### Required CSS Imports

Import the necessary stylesheets in the correct order for proper styling:

```tsx
// 1. Core ResponsiveDataGrid styles (always required)
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/css';

// 2. Healthcare card templates (if using healthcare data)
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/HealthcareCardTemplates/css';

// Component import
import { ResponsiveDataGrid } from '@fergusbisset/nhs-fdp-design-system';
```

### Import Order

**Critical:** Import stylesheets in this order:

1. `AriaTabsDataGrid.css` (foundation table styles) - *optional*
2. `ResponsiveDataGrid.css` (core responsive grid) - **required**
3. `HealthcareCardTemplates.css` (NHS healthcare styling) - *conditional*
4. Your custom CSS overrides - *optional*

### Usage-Specific Imports

```tsx
// Minimal bundle (generic data)
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/css';

// Healthcare bundle (NHS healthcare data)
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/css';
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/HealthcareCardTemplates/css';

// Full table functionality
import '@fergusbisset/nhs-fdp-design-system/components/SortableDataTable/css';
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/css';
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/HealthcareCardTemplates/css';
```

## 🚀 Quick Start

### Basic Usage

```tsx
import { ResponsiveDataGrid } from '@fergusbisset/nhs-fdp-design-system';

const MyDataGrid = () => (
  <ResponsiveDataGrid
    ariaLabel="Product data grid"
    tabPanels={[
      {
        id: 'products',
        label: 'Products',
        ariaLabel: 'Product list',
        data: products,
        columns: [
          {
            key: 'name',
            label: 'Product Name',
            sortable: true
          },
          {
            key: 'price',
            label: 'Price',
            sortable: true,
            align: 'right',
            // Enhanced renderers for optimal display
            tableRenderer: (data) => new Intl.NumberFormat('en-GB', {
              style: 'currency',
              currency: 'GBP'
            }).format(data.price),
            cardRenderer: (data) => `£${(data.price / 1000).toFixed(1)}K`
          }
        ]
      }
    ]}
    breakpoints={{
      mobile: 768,
      tablet: 1024,
      desktop: 1200
    }}
  />
);
```

## 🎨 Enhanced Column Renderers

### Overview

The ResponsiveDataGrid supports enhanced column definitions with separate renderers for table and card views, providing optimal formatting for each display context.

```typescript
interface ColumnDefinition {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  render?: (data: any) => any;              // Fallback renderer
  tableRenderer?: (data: any) => any;       // Table-specific renderer
  cardRenderer?: (data: any) => any;        // Card-specific renderer
}
```

### Renderer Priority

**Table View:**
1. `tableRenderer` (if provided)
2. `render` (fallback)
3. Raw field value

**Card View:**
1. `fieldRenderers` in `cardConfig` (if provided)
2. `cardRenderer` (if provided)
3. `render` (fallback)
4. Raw field value

### Healthcare Example

```tsx
const healthcareColumns: ColumnDefinition[] = [
  {
    key: 'patient_name',
    label: 'Patient Name',
    sortable: true,
    // Table: "Jane Smith (NHS: 123 456 7890)"
    tableRenderer: (data) => {
      const name = formatProperCase(data.patient_name);
      return `${name} (NHS: ${data.nhs_number})`;
    },
    // Card: "Jane S." (abbreviated for mobile)
    cardRenderer: (data) => abbreviateName(data.patient_name)
  },
  {
    key: 'ews_score',
    label: 'EWS Score',
    sortable: true,
    align: 'center',
    // Table: "8 (HIGH RISK)" with color coding
    tableRenderer: (data) => {
      const score = Number(data.ews_score);
      const level = score >= 7 ? 'HIGH RISK' : score >= 3 ? 'MEDIUM RISK' : 'LOW RISK';
      return `${score} (${level})`;
    },
    // Card: "🔴 8" with visual indicator
    cardRenderer: (data) => {
      const score = Number(data.ews_score);
      const indicator = score >= 7 ? '🔴' : score >= 3 ? '🟡' : '🟢';
      return `${indicator} ${score}`;
    }
  }
];
```

## 🏥 Healthcare Features

### Automatic Detection

The component automatically detects healthcare data and applies specialized formatting:

```tsx
// Automatic healthcare detection based on field names
const healthcareData = [
  {
    patient_name: 'John Doe',
    nhs_number: '123 456 7890',
    ews_score: 6,
    ward: 'Cardiology'
  }
];

// No special configuration needed - automatically applies healthcare plugin
<ResponsiveDataGrid tabPanels={[{ data: healthcareData, columns }]} />
```

### Healthcare-Specific Templates

Built-in templates for common healthcare data types:

- **Patient Cards**: Name, NHS number, ward, condition
- **Appointment Cards**: Time, patient, consultant, location
- **Medication Cards**: Name, dose, frequency, warnings
- **Vital Signs Cards**: EWS score, BP, heart rate, temperature

## 🔧 Configuration Options

### Breakpoints

Control when the layout switches between table and card views:

```tsx
<ResponsiveDataGrid
  breakpoints={{
    mobile: 768,    // Cards below 768px
    tablet: 1024,   // Mixed layout 768-1024px
    desktop: 1200   // Table above 1024px
  }}
/>
```

### Card Configuration

Customize how data appears in card view:

```tsx
<ResponsiveDataGrid
  cardConfig={{
    primaryField: 'name',
    secondaryFields: ['department', 'status', 'date'],
    hiddenFields: ['id', 'internal_notes'],
    fieldRenderers: {
      date: (value) => new Date(value).toLocaleDateString(),
      status: (value) => value.toUpperCase()
    }
  }}
/>
```

### Force Layout Mode

Override responsive behavior:

```tsx
<ResponsiveDataGrid
  forceLayout="cards"  // Always show cards
  // or forceLayout="table" for always table
/>
```

## 📱 Responsive Behavior

### Automatic Layout Switching

- **Desktop (>1024px)**: Table view with full column layout
- **Tablet (768-1024px)**: Hybrid view or condensed table
- **Mobile (<768px)**: Card view optimized for touch

### Touch-Friendly Cards

- Large touch targets for mobile interaction
- Swipe gestures for navigation
- Optimized typography for small screens
- Visual hierarchy with proper spacing

## ♿ Accessibility

### ARIA Compliance

- Full ARIA grid pattern implementation
- Screen reader announcements for layout changes
- Keyboard navigation between table and card modes
- High contrast mode support

### Keyboard Navigation

- **Tab**: Navigate between interactive elements
- **Arrow Keys**: Navigate within grids and cards
- **Enter/Space**: Activate selections
- **Escape**: Clear selections or exit modes

## 🧪 Testing

### Unit Tests

```bash
npm test -- ResponsiveDataGrid
```

### Visual Testing

The component includes comprehensive visual regression tests:

```bash
npm run test:visual
```

### Accessibility Testing

```bash
npm run test:a11y
```

## 📚 API Reference

### Props

```typescript
interface ResponsiveDataGridProps<T = any> {
  ariaLabel: string;
  tabPanels: ResponsiveTabPanelConfig<T>[];
  breakpoints?: ViewportConfig;
  forceLayout?: 'cards' | 'table' | 'hybrid';
  cardConfig?: CardConfiguration;
  domainPlugin?: DomainPlugin<T>;
  experimental?: ExperimentalFeatures;
}
```

### Column Definition

```typescript
interface ColumnDefinition {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  render?: (data: any) => any;
  tableRenderer?: (data: any) => any;    // NEW: Table-specific renderer
  cardRenderer?: (data: any) => any;     // NEW: Card-specific renderer
}
```

## 🔄 Migration Guide

### From Single Renderer

**Before:**
```tsx
{
  key: 'amount',
  label: 'Amount',
  render: (data) => `£${data.amount}`
}
```

**After:**
```tsx
{
  key: 'amount',
  label: 'Amount',
  tableRenderer: (data) => formatCurrency(data.amount),  // Detailed for table
  cardRenderer: (data) => abbreviateAmount(data.amount), // Concise for card
  render: (data) => `£${data.amount}`                    // Fallback
}
```

### Backward Compatibility

All existing code continues to work unchanged. The enhanced renderers are additive features that don't break existing implementations.

## 🎯 Best Practices

### Table Renderers
- Show comprehensive information (more space available)
- Use standard formatting (currency, dates, etc.)
- Include contextual details (NHS numbers, full names)
- Optimize for data analysis and comparison

### Card Renderers
- Prioritize essential information (limited space)
- Use visual indicators (icons, colors, abbreviations)
- Optimize for quick scanning and touch interaction
- Consider progressive disclosure patterns

### Performance
- Memoize expensive calculations
- Pre-process data when possible
- Use conditional rendering for complex displays
- Consider virtualization for large datasets

## 📖 Examples

For complete working examples, see:

- [Enhanced Renderers Example](./examples/EnhancedRenderersExample.tsx)
- [Healthcare Implementation](./examples/HealthcareExample.tsx)
- [E-commerce Implementation](./examples/EcommerceExample.tsx)
- [Storybook Stories](./ResponsiveDataGrid.stories.tsx)

## 🔗 Related Components

- [AriaTabsDataGrid](../SortableDataTable/AriaTabsDataGrid.md) - Underlying table component
- [Card](../Card/README.md) - Card component used in mobile view
- [Select](../Select/README.md) - Sorting controls
- [Button](../Button/README.md) - Action buttons

## 📄 License

Part of the NHS FDP Design System - see main repository license.
