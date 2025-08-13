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

### 🔧 **Custom Domain Plugin**

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

### 🔄 **From Healthcare-Specific to Generic**

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

### 📝 **Configuration Changes**

| Old Property | New Property | Description |
|-------------|--------------|-------------|
| `badgeFields: string[]` | `badges: BadgeConfig[]` | More flexible badge configuration |
| N/A | `getPriority: (data) => PriorityLevel` | Custom priority logic |
| N/A | `getVariant: (data) => CardVariant` | Custom card variant logic |
| N/A | `fieldRenderers: Record<string, Function>` | Custom field formatting |

## Benefits

### ✅ **Fully Generic**
- Works with any data type and domain
- No healthcare assumptions in core logic
- Configurable field mapping and rendering

### 🔌 **Plugin Architecture**
- Healthcare functionality moved to optional plugin
- Easy to create custom domain plugins
- Clean separation of concerns

### 🔄 **Backward Compatible**
- Existing healthcare code continues to work
- Automatic healthcare detection
- Legacy prop conversion

### 🎨 **Highly Configurable**
- Custom badge rendering and styling
- Flexible priority and status determination
- Domain-specific field formatters

### 📊 **Performance**
- Only loads domain-specific code when needed
- Lazy plugin loading possible
- Optimized for tree-shaking

## Advanced Configuration

### 🎨 **Custom Badge Rendering**

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

### 🔄 **Custom Field Renderers**

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
