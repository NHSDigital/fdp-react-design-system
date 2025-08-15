# Quick Implementation Guide: Enhanced Column Renderers

This guide shows you how to implement and use the new enhanced column renderers in ResponsiveDataGrid for optimal display in both table and card views.

## 🎯 What Are Enhanced Renderers?

Enhanced column renderers allow you to specify different formatting logic for table view vs card view, optimizing the display for each context:

- **Table View**: More space for detailed information
- **Card View**: Limited space requiring concise, mobile-friendly display

## 🎨 Stylesheet Setup

### Required CSS Imports

Before using ResponsiveDataGrid, import the necessary stylesheets in the correct order:

```tsx
// 1. Core ResponsiveDataGrid styles (always required)
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/css';

// 2. Healthcare templates (if using NHS healthcare data)
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/HealthcareCardTemplates/css';
```

### Import Order Matters!

**Critical:** Import stylesheets in this specific order:

1. `ResponsiveDataGrid.css` - Core responsive grid functionality
2. `HealthcareCardTemplates.css` - NHS healthcare card styling
3. Your custom CSS - Application-specific overrides

```tsx
// ✅ Correct order
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/css';
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/HealthcareCardTemplates/css';
import './my-custom-styles.css';

// ❌ Wrong order - healthcare styles may not apply correctly
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/HealthcareCardTemplates/css';
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/css';
```

## ⚡ Quick Setup

### 1. Import the Component

```tsx
import { ResponsiveDataGrid } from '@fergusbisset/nhs-fdp-design-system';
import { ColumnDefinition } from '@fergusbisset/nhs-fdp-design-system';
```

### 2. Define Enhanced Columns

```tsx
const columns: ColumnDefinition[] = [
  {
    key: 'name',
    label: 'Name',
    sortable: true,
    // Standard renderer (fallback)
    render: (data) => data.name,
    // Table-specific renderer (detailed)
    tableRenderer: (data) => `${data.name} (ID: ${data.id})`,
    // Card-specific renderer (concise)
    cardRenderer: (data) => {
      return data.name.length > 20 
        ? `${data.name.substring(0, 17)}...` 
        : data.name;
    }
  }
];
```

### 3. Use in ResponsiveDataGrid

```tsx
<ResponsiveDataGrid
  ariaLabel="My data grid"
  tabPanels={[
    {
      id: 'data',
      label: 'Data',
      ariaLabel: 'Data table',
      data: myData,
      columns: columns // Enhanced columns with dual renderers
    }
  ]}
/>
```

## 🏥 Healthcare Example

Perfect for NHS healthcare data that needs different levels of detail:

```tsx
const healthcareColumns: ColumnDefinition[] = [
  {
    key: 'patient_name',
    label: 'Patient',
    sortable: true,
    tableRenderer: (data) => {
      // Table: Full name with NHS number
      return `${formatName(data.patient_name)} (NHS: ${data.nhs_number})`;
    },
    cardRenderer: (data) => {
      // Card: Just abbreviated name
      return abbreviateName(data.patient_name);
    }
  },
  {
    key: 'ews_score',
    label: 'EWS',
    sortable: true,
    tableRenderer: (data) => {
      // Table: Detailed risk assessment
      const score = data.ews_score;
      const risk = score >= 7 ? 'HIGH' : score >= 3 ? 'MEDIUM' : 'LOW';
      return `${score} (${risk} RISK)`;
    },
    cardRenderer: (data) => {
      // Card: Visual indicator
      const score = data.ews_score;
      const icon = score >= 7 ? '🔴' : score >= 3 ? '🟡' : '🟢';
      return `${icon} ${score}`;
    }
  }
];
```

## � Sorting Configuration

ResponsiveDataGrid supports two sorting modes to suit different use cases:

### Simple Sorting (Default)

By default, ResponsiveDataGrid includes a basic dropdown sorting interface that requires only the core CSS:

```tsx
<ResponsiveDataGrid
  ariaLabel="My data grid"
  tabPanels={[
    {
      id: 'data',
      label: 'Data',
      ariaLabel: 'Data table',
      data: myData,
      columns: columns // Columns with sortable: true
    }
  ]}
/>
```

**CSS Required:**
```tsx
// ResponsiveDataGrid includes all styling for simple sorting controls
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/css';
```

### Advanced Sorting

For enhanced sorting capabilities with multi-column sorting and visual status indicators, enable advanced sorting:

```tsx
<ResponsiveDataGrid
  enableAdvancedSorting={true}
  ariaLabel="My data grid"
  tabPanels={[
    {
      id: 'data',
      label: 'Data',
      ariaLabel: 'Data table',
      data: myData,
      columns: columns
    }
  ]}
/>
```

**Additional CSS Required for Advanced Sorting:**
```tsx
// Core ResponsiveDataGrid styles (includes Select and Button for simple sorting)
import '@fergusbisset/nhs-fdp-design-system/components/ResponsiveDataGrid/css';

// Additional dependencies for advanced sorting features
import '@fergusbisset/nhs-fdp-design-system/components/SortableDataTable/SortStatusControl/css';
import '@fergusbisset/nhs-fdp-design-system/components/Tag/css';
```

### When to Use Each Mode

| Mode | Use Case | CSS Dependencies | Features |
|------|----------|------------------|----------|
| **Simple** | Basic data display with dropdown sorting | ResponsiveDataGrid.css only* | Single column sorting via dropdown |
| **Advanced** | Complex data grids requiring multi-column sorting | ResponsiveDataGrid.css + SortStatusControl.css + Tag.css | Multi-column sorting, visual indicators, enhanced UX |

*ResponsiveDataGrid.css automatically includes Select and Button styling needed for simple sorting controls.

## �💰 Financial Example

Great for financial data that needs precision vs readability:

```tsx
const financialColumns: ColumnDefinition[] = [
  {
    key: 'amount',
    label: 'Amount',
    sortable: true,
    align: 'right',
    tableRenderer: (data) => {
      // Table: Full currency formatting
      return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP'
      }).format(data.amount);
    },
    cardRenderer: (data) => {
      // Card: Abbreviated for large numbers
      const amount = data.amount;
      if (amount >= 1000000) return `£${(amount/1000000).toFixed(1)}M`;
      if (amount >= 1000) return `£${(amount/1000).toFixed(1)}K`;
      return `£${amount}`;
    }
  },
  {
    key: 'transaction_date',
    label: 'Date',
    sortable: true,
    tableRenderer: (data) => {
      // Table: Full date with day of week
      return new Date(data.transaction_date).toLocaleDateString('en-GB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    },
    cardRenderer: (data) => {
      // Card: Relative time or short date
      const date = new Date(data.transaction_date);
      const now = new Date();
      const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
      
      if (diffDays === 0) return 'Today';
      if (diffDays === 1) return 'Yesterday';
      if (diffDays < 7) return `${diffDays} days ago`;
      return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
    }
  }
];
```

## 🛠️ Common Patterns

### Pattern 1: Detailed vs Summary

```tsx
{
  key: 'status',
  label: 'Status',
  tableRenderer: (data) => `🟢 Active since ${data.start_date}`,
  cardRenderer: (data) => '🟢'
}
```

### Pattern 2: Full vs Abbreviated Text

```tsx
{
  key: 'description',
  label: 'Description',
  tableRenderer: (data) => data.description,
  cardRenderer: (data) => data.description.length > 30 
    ? `${data.description.substring(0, 27)}...` 
    : data.description
}
```

### Pattern 3: Different Data Points

```tsx
{
  key: 'contact',
  label: 'Contact',
  tableRenderer: (data) => `${data.name} (${data.email})`,
  cardRenderer: (data) => data.phone || data.email
}
```

## 🔄 Migration Strategy

### Step 1: Identify Columns That Need Enhancement

Look for columns where you currently compromise between table and card display.

### Step 2: Add Enhanced Renderers Gradually

```tsx
// Before
{
  key: 'amount',
  label: 'Amount',
  render: (data) => `£${data.amount}`
}

// After (keeping original as fallback)
{
  key: 'amount',
  label: 'Amount',
  render: (data) => `£${data.amount}`,           // Keep for backward compatibility
  tableRenderer: (data) => formatCurrency(data.amount),  // Add table enhancement
  cardRenderer: (data) => abbreviateAmount(data.amount)  // Add card enhancement
}
```

### Step 3: Test Both Views

Always test your enhanced renderers in both table and card views:

```tsx
// Force table view for testing
<ResponsiveDataGrid forceLayout="table" {...props} />

// Force card view for testing  
<ResponsiveDataGrid forceLayout="cards" {...props} />
```

## ✅ Best Practices Checklist

### For Table Renderers
- [ ] Show complete, detailed information
- [ ] Use consistent formatting (dates, currency, etc.)
- [ ] Include helpful context (IDs, codes, etc.)
- [ ] Ensure rendered values work with sorting

### For Card Renderers
- [ ] Prioritize most important information
- [ ] Use visual indicators (icons, colors)
- [ ] Keep text concise for mobile screens
- [ ] Consider touch target sizes

### General
- [ ] Always provide fallback `render` function
- [ ] Test on different screen sizes
- [ ] Verify accessibility with screen readers
- [ ] Performance test with large datasets

## 🚨 Common Pitfalls

### 1. Forgetting the Fallback

```tsx
// ❌ Bad: No fallback
{
  key: 'amount',
  tableRenderer: (data) => formatCurrency(data.amount),
  cardRenderer: (data) => abbreviateAmount(data.amount)
}

// ✅ Good: With fallback
{
  key: 'amount',
  render: (data) => `£${data.amount}`,              // Fallback
  tableRenderer: (data) => formatCurrency(data.amount),
  cardRenderer: (data) => abbreviateAmount(data.amount)
}
```

### 2. Making Card Renderers Too Verbose

```tsx
// ❌ Bad: Too much text for card
cardRenderer: (data) => `Patient: ${data.name}, Ward: ${data.ward}, Consultant: ${data.consultant}`

// ✅ Good: Concise for card
cardRenderer: (data) => data.name
```

### 3. Inconsistent Sorting

Make sure your table renderer produces sortable values:

```tsx
// ❌ Bad: HTML in table renderer breaks sorting
tableRenderer: (data) => `<span class="highlight">${data.value}</span>`

// ✅ Good: Clean values that sort properly
tableRenderer: (data) => `⭐ ${data.value}`
```

## 📝 Quick Reference

| Property | Purpose | Priority |
|----------|---------|----------|
| `tableRenderer` | Table view formatting | 1st for table |
| `cardRenderer` | Card view formatting | 2nd for card |
| `render` | Fallback formatting | Fallback for both |

## 🎯 Need Help?

- Check the [complete documentation](./README.md)
- See [working examples](./examples/)
- Review [test cases](./EnhancedRenderers.test.ts)
- View [Storybook stories](./ResponsiveDataGrid.stories.tsx)

The enhanced renderers give you fine-grained control over how your data appears in different contexts while maintaining full backward compatibility.
