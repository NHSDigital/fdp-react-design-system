# ResponsiveDataGrid - Generic Implementation

The ResponsiveDataGrid component has been refactored to be fully generic while maintaining backward compatibility with healthcare-specific functionality through a plugin system.

## Architecture Overview

### 🏗️ **Core Components**

1. **ResponsiveDataGrid** - The main component with automatic domain detection
2. **GenericResponsiveDataGrid** - Fully generic version with explicit plugin support
3. **HealthcareResponsiveDataGrid** - Pre-configured healthcare version

### 🔌 **Plugin System**

The component now uses a plugin architecture to handle domain-specific logic:

```typescript
interface DomainPlugin<T = any> {
  name: string;
  defaultCardConfig: GenericCardConfig<T>;
  cssImport?: string;
  cardTemplates?: Record<string, CardTemplate>;
  fieldTypes?: Record<string, TypeDetector>;
}
```

## 🎨 Stylesheet Imports

### Required Stylesheets

The ResponsiveDataGrid component requires specific stylesheet imports in the correct order for proper styling and functionality.

#### Basic Usage (All Scenarios)

```tsx
// Core ResponsiveDataGrid styles (always required)
import '@fergusbisset/nhs-fdp-design-system/dist/components/ResponsiveDataGrid/ResponsiveDataGrid.css';

// Component imports
import { ResponsiveDataGrid } from '@fergusbisset/nhs-fdp-design-system';
```

#### Healthcare-Specific Usage

```tsx
// 1. Core ResponsiveDataGrid styles (required first)
import '@fergusbisset/nhs-fdp-design-system/dist/components/ResponsiveDataGrid/ResponsiveDataGrid.css';

// 2. Healthcare card templates (for healthcare data)
import '@fergusbisset/nhs-fdp-design-system/dist/components/ResponsiveDataGrid/HealthcareCardTemplates.css';

// Component imports
import { ResponsiveDataGrid } from '@fergusbisset/nhs-fdp-design-system';
```

#### Advanced Usage with AriaTabsDataGrid

```tsx
// 1. Core table styles (foundation)
import '@fergusbisset/nhs-fdp-design-system/dist/components/SortableDataTable/AriaTabsDataGrid.css';

// 2. ResponsiveDataGrid styles (builds on table styles)
import '@fergusbisset/nhs-fdp-design-system/dist/components/ResponsiveDataGrid/ResponsiveDataGrid.css';

// 3. Healthcare templates (if using healthcare data)
import '@fergusbisset/nhs-fdp-design-system/dist/components/ResponsiveDataGrid/HealthcareCardTemplates.css';

// Component imports
import { ResponsiveDataGrid } from '@fergusbisset/nhs-fdp-design-system';
```

### Import Order Guidelines

**Critical:** Stylesheets must be imported in the following order to ensure proper cascade:

1. **Foundation styles** (`AriaTabsDataGrid.css`) - Base table styling
2. **Core component styles** (`ResponsiveDataGrid.css`) - Responsive grid layout
3. **Domain-specific styles** (`HealthcareCardTemplates.css`) - Healthcare templates
4. **Custom overrides** (your custom CSS) - Application-specific styling

### Development vs Production

#### Development (Source Files)

```tsx
// When working with source files during development
import './ResponsiveDataGrid.scss';
import './HealthcareCardTemplates.scss';
```

#### Production (Built CSS)

```tsx
// When using the published package
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/css';
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/HealthcareCardTemplates/css';
```

### Bundle Size Optimisation

#### Selective Imports

```tsx
// Minimal bundle - only core functionality
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/css';

// Healthcare bundle - includes domain-specific styles
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/css';
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/HealthcareCardTemplates/css';

// Full bundle - includes all table functionality
import '@fergusbisset/nhs-fdp-design-system/components/SortableDataTable/css';
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/css';
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/HealthcareCardTemplates/css';
```

### CSS Variables and Customisation

The stylesheets expose CSS custom properties for theming:

```css
/* Override default spacing */
:root {
  --responsive-grid-card-gap: 1.5rem;
  --responsive-grid-table-padding: 1rem;
  --healthcare-card-border-radius: 8px;
}
```

### Troubleshooting Style Issues

**Issue:** Cards not displaying correctly
**Solution:** Ensure `ResponsiveDataGrid.css` is imported

**Issue:** Healthcare cards missing NHS styling  
**Solution:** Import `HealthcareCardTemplates.css` after core styles

**Issue:** Table view styling broken
**Solution:** Import `AriaTabsDataGrid.css` first, then other stylesheets

**Issue:** Styles not applying in production
**Solution:** Check import paths match your build output structure

## Usage Examples

### 📊 **Generic Usage (Any Domain)**

```tsx
import { GenericResponsiveDataGrid } from '@/components/ResponsiveDataGrid';

// For any data type
const GenericExample = () => (
  <GenericResponsiveDataGrid
    tabPanels={[
      {
        label: 'Products',
        data: products,
        columns: productColumns
      }
    ]}
    cardConfig={{
      primaryField: 'name',
      secondaryFields: ['price', 'category', 'stock'],
      badges: [
        { fieldKey: 'status', color: 'primary' },
        { fieldKey: 'priority', color: 'warning' }
      ],
      getPriority: (item) => item.stock < 10 ? 'high' : 'medium',
      getVariant: (item) => item.featured ? 'primary' : 'default'
    }}
  />
);
```

### 🏥 **Healthcare Usage (Automatic Detection)**

```tsx
import { ResponsiveDataGrid } from '@/components/ResponsiveDataGrid';

// Automatically detects healthcare data and applies healthcare plugin
const HealthcareExample = () => (
  <ResponsiveDataGrid
    tabPanels={[
      {
        label: 'Patients',
        data: patients, // Contains ews_score, nhs_number, etc.
        columns: patientColumns
      }
    ]}
    cardConfig={{
      primaryField: 'name',
      secondaryFields: ['nhs_number', 'ward', 'condition'],
      badgeFields: ['ews_score', 'priority']
    }}
  />
);
```

### 🎯 **Explicit Healthcare Usage**

```tsx
import { HealthcareResponsiveDataGrid } from '@/components/ResponsiveDataGrid';

// Explicitly uses healthcare plugin
const ExplicitHealthcareExample = () => (
  <HealthcareResponsiveDataGrid
    tabPanels={healthcareTabs}
    cardConfig={{
      primaryField: 'patient_name',
      secondaryFields: ['nhs_number', 'ward', 'consultant'],
      badges: [
        { fieldKey: 'ews_score', className: 'ews-badge' },
        { fieldKey: 'priority', color: 'danger' }
      ]
    }}
  />
);
```

### **Custom Domain Plugin**

```tsx
import { GenericResponsiveDataGrid, DomainPlugin } from '@/components/ResponsiveDataGrid';

// Create custom domain plugin
const ecommercePlugin: DomainPlugin = {
  name: 'ecommerce',
  defaultCardConfig: {
    primaryField: 'name',
    secondaryFields: ['price', 'category', 'rating'],
    badges: [
      { fieldKey: 'stock_status', color: 'success' },
      { fieldKey: 'discount', color: 'warning' }
    ],
    getPriority: (product) => product.stock < 5 ? 'high' : 'medium',
    getVariant: (product) => product.featured ? 'primary' : 'default',
    fieldRenderers: {
      price: (value) => `£${value.toFixed(2)}`,
      rating: (value) => `⭐ ${value}/5`
    }
  }
};

const EcommerceExample = () => (
  <GenericResponsiveDataGrid
    domainPlugin={ecommercePlugin}
    tabPanels={productTabs}
  />
);
```

## Migration Guide

### **From Healthcare-Specific to Generic**

**Before (Healthcare-specific):**

```tsx
<ResponsiveDataGrid
  cardConfig={{
    primaryField: 'name',
    badgeFields: ['ews_score', 'priority']
  }}
/>
```

**After (Generic with healthcare auto-detection):**
```tsx
// Same code works! Auto-detects healthcare data
<ResponsiveDataGrid
  cardConfig={{
    primaryField: 'name',
    badgeFields: ['ews_score', 'priority'] // Converted to badges array
  }}
/>

// Or explicit generic approach:
<GenericResponsiveDataGrid
  domainPlugin={healthcarePlugin}
  cardConfig={{
    primaryField: 'name',
    badges: [
      { fieldKey: 'ews_score', className: 'ews-badge' },
      { fieldKey: 'priority', color: 'warning' }
    ]
  }}
/>
```

### **Configuration Changes**

| Old Property | New Property | Description |
|-------------|--------------|-------------|
| `badgeFields: string[]` | `badges: BadgeConfig[]` | More flexible badge configuration |
| N/A | `getPriority: (data) => PriorityLevel` | Custom priority logic |
| N/A | `getVariant: (data) => CardVariant` | Custom card variant logic |
| N/A | `fieldRenderers: Record<string, Function>` | Custom field formatting |

## Benefits

### **Fully Generic**
- Works with any data type and domain
- No healthcare assumptions in core logic
- Configurable field mapping and rendering

### **Plugin Architecture**
- Healthcare functionality moved to optional plugin
- Easy to create custom domain plugins
- Clean separation of concerns

### **Backward Compatible**
- Existing healthcare code continues to work
- Automatic healthcare detection
- Legacy prop conversion

### **Highly Configurable**
- Custom badge rendering and styling
- Flexible priority and status determination
- Domain-specific field formatters

### **Performance**
- Only loads domain-specific code when needed
- Lazy plugin loading possible
- Optimised for tree-shaking

## Advanced Configuration

### **Custom Badge Rendering**

```tsx
const customBadges: BadgeConfig[] = [
  {
    fieldKey: 'status',
    render: (value, data) => {
      const icon = getStatusIcon(value);
      return `${icon} ${value.toUpperCase()}`;
    },
    color: 'primary',
    className: 'custom-status-badge'
  },
  {
    fieldKey: 'priority',
    render: (value) => `Priority: ${value}`,
    color: value => value === 'high' ? 'danger' : 'default'
  }
];
```

### **Custom Field Renderers**

```tsx
const fieldRenderers = {
  created_date: (value) => new Date(value).toLocaleDateString(),
  price: (value, data) => {
    const currency = data.currency || 'GBP';
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency
    }).format(value);
  },
  email: (value) => `📧 ${value}`
};
```

This refactoring makes the ResponsiveDataGrid truly generic while preserving all healthcare functionality through the plugin system. The component can now be used for any domain with appropriate configuration.

## Enhanced Column Renderers

### 🎯 **Overview**

The ResponsiveDataGrid now supports enhanced column definitions with separate renderers for table and card views, providing optimal display formatting for each context.

### 📋 **Enhanced Column Definition Interface**

```typescript
interface ColumnDefinition {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  render?: (data: any) => any;              // Original renderer (fallback)
  tableRenderer?: (data: any) => any;       // Table-specific renderer
  cardRenderer?: (data: any) => any;        // Card-specific renderer
}
```

### 🔄 **Renderer Priority System**

The rendering system uses a clear priority order:

**Table View:**

1. `tableRenderer` (if provided)
2. `render` (fallback)
3. Raw field value

**Card View:**

1. `fieldRenderers` in `GenericCardConfig` (if provided)
2. `cardRenderer` (if provided)
3. `render` (fallback)
4. Raw field value

### 💻 **Implementation Examples**

#### Basic Example: Currency Formatting

```tsx
const columns: ColumnDefinition[] = [
  {
    key: 'amount',
    label: 'Amount',
    sortable: true,
    align: 'right',
    // Table view: Full currency formatting
    tableRenderer: (data) => {
      return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP'
      }).format(data.amount);
    },
    // Card view: Abbreviated for space efficiency
    cardRenderer: (data) => {
      const amount = data.amount;
      if (amount >= 1000000) {
        return `£${(amount / 1000000).toFixed(1)}M`;
      } else if (amount >= 1000) {
        return `£${(amount / 1000).toFixed(1)}K`;
      }
      return `£${amount}`;
    }
  }
];
```

#### Healthcare Example: Patient Information

```tsx
const healthcareColumns: ColumnDefinition[] = [
  {
    key: 'patient_name',
    label: 'Patient Name',
    sortable: true,
    // Table view: Full name with NHS number
    tableRenderer: (data) => {
      const name = data.patient_name || 'Unknown';
      const formattedName = name.split(' ')
        .map(part => part.charAt(0).toUpperCase() and part.slice(1).toLowerCase())
        .join(' ');
      return `${formattedName} (NHS: ${data.nhs_number})`;
    },
    // Card view: Abbreviated name for mobile
    cardRenderer: (data) => {
      const name = data.patient_name || 'Unknown';
      const parts = name.split(' ');
      if (parts.length > 1) {
        return `${parts[0].charAt(0)}${parts[0].slice(1).toLowerCase()} ${parts[parts.length - 1].charAt(0)}.`;
      }
      return parts[0].charAt(0) and parts[0].slice(1).toLowerCase();
    }
  },
  {
    key: 'ews_score',
    label: 'EWS Score',
    sortable: true,
    align: 'center',
    // Table view: Detailed risk assessment
    tableRenderer: (data) => {
      const score = Number(data.ews_score);
      const level = score >= 7 ? 'HIGH RISK' : score >= 3 ? 'MEDIUM RISK' : 'LOW RISK';
      const colorClass = score >= 7 ? 'text-danger' : score >= 3 ? 'text-warning' : 'text-success';
      return `<span class="${colorClass}"><strong>${score}</strong> (${level})</span>`;
    },
    // Card view: Visual indicator for quick scanning
    cardRenderer: (data) => {
      const score = Number(data.ews_score);
      const indicator = score >= 7 ? '🔴' : score >= 3 ? '🟡' : '🟢';
      return `${indicator} ${score}`;
    }
  },
  {
    key: 'appointment_time',
    label: 'Appointment',
    sortable: true,
    // Table view: Full date and time with day
    tableRenderer: (data) => {
      const date = new Date(data.appointment_time);
      return date.toLocaleString('en-GB', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    // Card view: Relative time for quick understanding
    cardRenderer: (data) => {
      const date = new Date(data.appointment_time);
      const now = new Date();
      const diffHours = Math.round((date.getTime() - now.getTime()) / (1000 * 60 * 60));
      
      if (Math.abs(diffHours) < 24) {
        return diffHours > 0 ? `In ${diffHours}h` : `${Math.abs(diffHours)}h ago`;
      }
      return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
    }
  }
];
```

#### E-commerce Example: Product Data

```tsx
const ecommerceColumns: ColumnDefinition[] = [
  {
    key: 'product_name',
    label: 'Product',
    sortable: true,
    // Table view: Full product name with SKU
    tableRenderer: (data) => `${data.product_name} (SKU: ${data.sku})`,
    // Card view: Shortened name only
    cardRenderer: (data) => {
      const name = data.product_name;
      return name.length > 25 ? `${name.substring(0, 22)}...` : name;
    }
  },
  {
    key: 'stock_level',
    label: 'Stock',
    sortable: true,
    align: 'center',
    // Table view: Detailed stock information
    tableRenderer: (data) => {
      const stock = data.stock_level;
      const status = stock === 0 ? 'Out of Stock' : 
                    stock < 10 ? 'Low Stock' : 'In Stock';
      const colorClass = stock === 0 ? 'text-danger' : 
                        stock < 10 ? 'text-warning' : 'text-success';
      return `<span class="${colorClass}">${stock} units (${status})</span>`;
    },
    // Card view: Simple status indicator
    cardRenderer: (data) => {
      const stock = data.stock_level;
      if (stock === 0) return '❌ Out';
      if (stock < 10) return `⚠️ ${stock}`;
      return `✅ ${stock}`;
    }
  }
];
```

### 🔧 **Usage in ResponsiveDataGrid**

```tsx
import { ResponsiveDataGrid } from '@/components/ResponsiveDataGrid';

const ExampleWithEnhancedRenderers = () => (
  <ResponsiveDataGrid
    ariaLabel="Enhanced renderers example"
    tabPanels={[
      {
        id: 'data',
        label: 'Data',
        ariaLabel: 'Data table with enhanced renderers',
        data: sampleData,
        columns: enhancedColumns // Using columns with tableRenderer/cardRenderer
      }
    ]}
    breakpoints={{
      mobile: 768,
      tablet: 1024,
      desktop: 1200
    }}
    cardConfig={{
      primaryField: 'name',
      secondaryFields: ['category', 'status', 'date'],
      // fieldRenderers can still be used for additional customisation
      fieldRenderers: {
        category: (value, data) => `📂 ${value}`,
        status: (value, data) => value.toUpperCase()
      }
    }}
  />
);
```

### 🎨 **Best Practices**

#### For Table Renderers

- **Detailed Information**: Tables have more space, show comprehensive data
- **Consistent Formatting**: Use standard date/currency formatters
- **Accessibility**: Include proper ARIA labels and semantic HTML
- **Sortable Data**: Ensure rendered values work well with sorting

#### For Card Renderers  

- **Concise Display**: Cards have limited space, prioritise essential information
- **Quick Scanning**: Use icons, abbreviations, and visual cues
- **Mobile-Friendly**: Consider touch targets and readability on small screens
- **Progressive Disclosure**: Show summary in card, details available in table

#### Performance Considerations

- **Memoization**: Consider memoizing expensive calculations
- **Conditional Rendering**: Only compute complex renderers when needed
- **Data Preparation**: Pre-process data when possible instead of in render logic

### 🔄 **Migration from Single Renderer**

**Before (Single Renderer):**

```tsx
{
  key: 'amount',
  label: 'Amount',
  render: (data) => `£${data.amount}`
}
```

**After (Enhanced Renderers):**

```tsx
{
  key: 'amount',
  label: 'Amount',
  tableRenderer: (data) => new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP'
  }).format(data.amount),
  cardRenderer: (data) => `£${(data.amount / 1000).toFixed(1)}K`,
  render: (data) => `£${data.amount}` // Fallback for backward compatibility
}
```

### ✅ **Backward Compatibility**

All existing code continues to work unchanged. The `render` function serves as a fallback when specific renderers are not provided, ensuring seamless migration.

## ⚙️ Action Zones (Top / Inline / Bottom)

The ResponsiveDataGrid exposes three tiers of action placement so developers can compose toolbars, filters, export controls, pagination and bulk operations in predictable locations across all layouts.

### Zones Overview

| Zone | Prop | Typical Uses | Layout Behavior |
|------|------|--------------|-----------------|
| Top (component-level) | `topActions` | Global filters, add/create buttons, view toggles (card vs table) | Cards: sits to the right of tabs (wraps above on narrow widths). Table: full-width row above table, right-aligned |
| Tab Inline (AriaTabsDataGrid) | `gridActions` | Per-tab actions (export CSV, column visibility, density, advanced filters) that should appear inline beside tabs when space allows | Auto inline beside tablist; collapses above when insufficient space or when `forceGridActionsAbove` is true |
| Bottom | `bottomActions` | Pagination, bulk selection actions, secondary export, footnotes | Renders after the data region (cards or table) spanning full width |

### Choosing Between `topActions` and `gridActions`

Use `gridActions` when actions semantically belong to the tabbed data set (e.g. export current tab, toggle columns). These forward to the underlying `AriaTabsDataGrid` `actions` slot and inherit its responsive inline/above placement logic.

Use `topActions` for higher‑level or cross‑tab actions (create new item, global filters) that should not shift position when the AriaTabsDataGrid decides to reflow its inline actions.

Combine them when you need both: `topActions` stays consistently positioned; `gridActions` may inline with tabs when wide enough.

### Props Summary

```ts
interface ResponsiveDataGridProps {
  topActions?: React.ReactNode;
  bottomActions?: React.ReactNode;
  gridActions?: React.ReactNode;        // forwarded to AriaTabsDataGrid actions
  forceGridActionsAbove?: boolean;      // force gridActions to render on their own row
}
```

### Basic Examples

#### 1. Top Actions Only

```tsx
<ResponsiveDataGrid
  ariaLabel="Products"
  tabPanels={[{ label: 'All', data, columns }]}
  topActions={<Button onClick={openNew}>New Product</Button>}
/>;
```

#### 2. Inline Tab Actions (gridActions)

```tsx
<ResponsiveDataGrid
  ariaLabel="Dataset"
  tabPanels={[{ label: 'Active', data, columns }]}
  gridActions={(
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Button size="small" onClick={exportCsv}>Export CSV</Button>
      <Button size="small" variant="secondary" onClick={toggleColumns}>Columns</Button>
    </div>
  )}
/>;
```

#### 3. Force Actions Above Tabs

```tsx
<ResponsiveDataGrid
  ariaLabel="Patients"
  tabPanels={[{ label: 'Ward A', data: patientsA, columns: patientCols }]}
  gridActions={<FilterToolbar />}
  forceGridActionsAbove
/>;
```

#### 4. Top and Inline and Bottom

```tsx
<ResponsiveDataGrid
  ariaLabel="Orders"
  tabPanels={[{ label: 'Open', data: orders, columns: orderCols }]}
  topActions={<Button onClick={createOrder}>Create Order</Button>}
  gridActions={<OrderViewToggles />}
  bottomActions={<Pagination current={page} onChange={setPage} />}
/>;
```

### Card vs Table Layout Differences

| Layout | topActions | gridActions | bottomActions |
|--------|------------|-------------|---------------|
| Cards  | Right of tabs (wraps above when narrow) | Inline with tabs if space; else own row above cards | Below card grid |
| Table  | Full-width row above table (right-aligned) | Inline with tabs (same row) unless forced above | Below table |

### Accessibility Notes

- Each action zone is outside individual card focus order; ensure keyboard users can reach controls before or after navigating tab or table content.
- Provide aria-labels / aria-describedby on composite toolbars (e.g. `<div role="toolbar" aria-label="Grid actions">`).
- When forcing gridActions above, consider adding a visually hidden heading for context if many controls are present.

### Styling Hooks

CSS class names (BEM style) exposed for customization in `ResponsiveDataGrid.scss`:

| Selector | Purpose |
|----------|---------|
| `.nhsuk-responsive-data-grid__top-actions` | Container for `topActions` |
| `.nhsuk-responsive-data-grid__bottom-actions` | Container for `bottomActions` |
| `.aria-tabs-datagrid-adaptive__actions` | Underlying AriaTabsDataGrid action zone (`gridActions`) |

Override spacing or alignment with custom CSS (import after core styles):

```css
.nhsuk-responsive-data-grid__top-actions { gap: .75rem; }
.nhsuk-responsive-data-grid__bottom-actions { padding-top: 1rem; border-top: 1px solid var(--color-border-muted); }
```

### Testing Tips

- Use `getByRole('toolbar', { name: /grid actions/i })` for semantic toolbars.
- Provide `data-testid` on custom action wrappers for deterministic selection when semantic queries aren’t feasible.
- In visual regression, capture both wide (inline) and narrow (wrapped/forced) states.

### Common Patterns

1. **Filter and Export**: Place filters in `gridActions` (inline beside tabs) and heavy exports (PDF, XLSX) in `topActions` so they wrap earlier on small screens.
2. **Create and Pagination**: `topActions` for create button, `bottomActions` for pagination to mimic common list/detail layouts.
3. **View Toggles**: Card/table toggle button group in `gridActions` aligns with other per-tab controls.

This action zone model keeps domain/tooling actions close to the data (inline) while reserving persistent global actions for a stable top region and end-of-flow bulk operations at the bottom.
