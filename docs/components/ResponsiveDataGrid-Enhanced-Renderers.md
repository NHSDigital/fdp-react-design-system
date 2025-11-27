# Enhanced Column Renderers for ResponsiveDataGrid

The ResponsiveDataGrid now supports enhanced column definitions with separate renderers for table and card views, providing optimal display for each context.

## Enhanced ColumnDefinition Interface

The `ColumnDefinition` interface has been extended with two new optional properties:

```typescript
export interface ColumnDefinition {
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

## Stylesheet Requirements

### CSS Import Setup

Before implementing enhanced renderers, ensure you import the required stylesheets:

```tsx
// Essential imports for ResponsiveDataGrid
import '@nhsdigital/fdp-design-system/components/ResponsiveDataGrid/css';

// Additional imports for healthcare implementations
import '@nhsdigital/fdp-design-system/components/ResponsiveDataGrid/HealthcareCardTemplates/css';

// Your component imports
import { ResponsiveDataGrid, ColumnDefinition } from '@nhsdigital/fdp-design-system';
```

### Import Order Requirements

**Critical:** Import stylesheets in this specific order to ensure proper CSS cascade:

```tsx
// 1. Foundation (if using full table functionality)
import '@nhsdigital/fdp-design-system/components/SortableDataTable/css';

// 2. Core responsive grid (required)
import '@nhsdigital/fdp-design-system/components/ResponsiveDataGrid/css';

// 3. Domain-specific styling (conditional)
import '@nhsdigital/fdp-design-system/components/ResponsiveDataGrid/HealthcareCardTemplates/css';

// 4. Custom overrides (your CSS)
import './custom-grid-styles.css';
```

### Bundle Optimization

Choose imports based on your usage:

```tsx
// Minimal bundle - generic data only
import '@nhsdigital/fdp-design-system/components/ResponsiveDataGrid/css';

// Healthcare bundle - NHS clinical data
import '@nhsdigital/fdp-design-system/components/ResponsiveDataGrid/css';
import '@nhsdigital/fdp-design-system/components/ResponsiveDataGrid/HealthcareCardTemplates/css';
```

## Renderer Priority

The rendering system uses the following priority order:

### Table View

1. `tableRenderer` (if provided)
2. `render` (fallback)
3. Raw field value

### Card View

1. `fieldRenderers` in `GenericCardConfig` (if provided)
2. `cardRenderer` (if provided)
3. `render` (fallback)
4. Raw field value

## Usage Examples

### Basic Example: Different Formats for Table vs Card

```typescript
const columns: ColumnDefinition[] = [
  {
    key: 'patient_name',
    label: 'Patient Name',
    sortable: true,
    // Table view: Show full name in proper case
    tableRenderer: (data) => {
      const name = data.patient_name || 'Unknown';
      return name.split(' ')
        .map(part => part.charAt(0).toUpperCase() and part.slice(1).toLowerCase())
        .join(' ');
    },
    // Card view: Show abbreviated name for space efficiency
    cardRenderer: (data) => {
      const name = data.patient_name || 'Unknown';
      const parts = name.split(' ');
      if (parts.length > 1) {
        return `${parts[0]} ${parts[parts.length - 1].charAt(0)}.`;
      }
      return parts[0];
    }
  },
  {
    key: 'appointment_time',
    label: 'Appointment',
    sortable: true,
    // Table view: Show full date and time
    tableRenderer: (data) => {
      const date = new Date(data.appointment_time);
      return date.toLocaleString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    // Card view: Show relative time for quick scanning
    cardRenderer: (data) => {
      const date = new Date(data.appointment_time);
      const now = new Date();
      const diffHours = Math.round((date.getTime() - now.getTime()) / (1000 * 60 * 60));
      
      if (diffHours < 24 && diffHours > -24) {
        return `${diffHours > 0 ? 'In ' : ''}${Math.abs(diffHours)}h${diffHours < 0 ? ' ago' : ''}`;
      }
      return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
    }
  }
];
```

### Healthcare-Specific Example

```typescript
const healthcareColumns: ColumnDefinition[] = [
  {
    key: 'ews_score',
    label: 'EWS Score',
    sortable: true,
    // Table view: Show detailed score with risk level
    tableRenderer: (data) => {
      const score = Number(data.ews_score);
      const level = score >= 7 ? 'HIGH RISK' : score >= 3 ? 'MEDIUM RISK' : 'LOW RISK';
      return `${score} (${level})`;
    },
    // Card view: Show compact badge-style format
    cardRenderer: (data) => {
      const score = Number(data.ews_score);
      const level = score >= 7 ? '🔴' : score >= 3 ? '🟡' : '🟢';
      return `${level} ${score}`;
    }
  },
  {
    key: 'vital_signs',
    label: 'Vitals',
    // Table view: Show full vital signs data
    tableRenderer: (data) => {
      const { bp_systolic, bp_diastolic, heart_rate, temperature } = data;
      return `BP: ${bp_systolic}/${bp_diastolic}, HR: ${heart_rate}, T: ${temperature}°C`;
    },
    // Card view: Show most critical vital only
    cardRenderer: (data) => {
      const { bp_systolic, heart_rate } = data;
      if (bp_systolic > 140 || heart_rate > 100) {
        return `⚠️ BP: ${bp_systolic}, HR: ${heart_rate}`;
      }
      return `BP: ${bp_systolic}, HR: ${heart_rate}`;
    }
  },
  {
    key: 'medications',
    label: 'Medications',
    // Table view: Show full medication list
    tableRenderer: (data) => {
      if (!data.medications || data.medications.length === 0) return 'None';
      return data.medications.map(med => `${med.name} ${med.dose}`).join(', ');
    },
    // Card view: Show count and critical medications only
    cardRenderer: (data) => {
      if (!data.medications || data.medications.length === 0) return 'None';
      const critical = data.medications.filter(med => med.critical);
      if (critical.length > 0) {
        return `${data.medications.length} meds (${critical.length} critical)`;
      }
      return `${data.medications.length} medications`;
    }
  }
];
```

### Financial Data Example

```typescript
const financialColumns: ColumnDefinition[] = [
  {
    key: 'amount',
    label: 'Amount',
    sortable: true,
    align: 'right',
    // Table view: Show full currency with symbol
    tableRenderer: (data) => {
      return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP'
      }).format(data.amount);
    },
    // Card view: Show abbreviated format for large numbers
    cardRenderer: (data) => {
      const amount = data.amount;
      if (amount >= 1000000) {
        return `£${(amount / 1000000).toFixed(1)}M`;
      } else if (amount >= 1000) {
        return `£${(amount / 1000).toFixed(1)}K`;
      }
      return `£${amount}`;
    }
  },
  {
    key: 'status',
    label: 'Status',
    // Table view: Show full status with description
    tableRenderer: (data) => {
      const statusMap = {
        'pending': '⏳ Pending Review',
        'approved': '✅ Approved',
        'rejected': '❌ Rejected',
        'paid': '💰 Paid'
      };
      return statusMap[data.status] || data.status;
    },
    // Card view: Show icon only for space efficiency
    cardRenderer: (data) => {
      const iconMap = {
        'pending': '⏳',
        'approved': '✅',
        'rejected': '❌',
        'paid': '💰'
      };
      return iconMap[data.status] || data.status;
    }
  }
];
```

## Migration Guide

### From Single Renderer

If you currently use the `render` function:

```typescript
// Before
{
  key: 'amount',
  label: 'Amount',
  render: (data) => `£${data.amount}`
}

// After - different formats for table vs card
{
  key: 'amount',
  label: 'Amount',
  tableRenderer: (data) => new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP'
  }).format(data.amount),
  cardRenderer: (data) => `£${(data.amount / 1000).toFixed(1)}K`
}
```

### Backward Compatibility

All existing code continues to work unchanged. The `render` function serves as a fallback when the specific renderers are not provided.

## Best Practices

### Table Renderers

- **Detailed information**: Tables have more space, show complete data
- **Consistent formatting**: Use standard date/currency formatters
- **Sortable data**: Ensure rendered values work well with sorting
- **Accessibility**: Include proper ARIA labels for complex data

### Card Renderers

- **Concise display**: Cards have limited space, prioritize essential info
- **Quick scanning**: Use icons, abbreviations, and visual cues
- **Progressive disclosure**: Show summary in card, details in table
- **Mobile-friendly**: Consider touch targets and readability

### Performance Considerations

- **Memoization**: Consider memoizing expensive calculations
- **Conditional rendering**: Only compute complex renderers when needed
- **Data preparation**: Pre-process data when possible instead of rendering logic

## Testing

Test both table and card views to ensure renderers work correctly:

```typescript
describe('Enhanced Column Renderers', () => {
  it('should use tableRenderer in table view', () => {
    // Test table-specific rendering
  });

  it('should use cardRenderer in card view', () => {
    // Test card-specific rendering
  });

  it('should fallback to render function when specific renderer not provided', () => {
    // Test fallback behavior
  });
});
```
