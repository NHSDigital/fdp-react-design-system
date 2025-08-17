import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AriaTabsDataGrid } from './AriaTabsDataGrid';
import { createGenericTabsConfig } from './AriaTabsDataGridFactory';
import type { DataOperationConfig } from './AriaTabsDataGridTypes';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
  featured: boolean;
}

// Small demo dataset
const products: Product[] = [
  { id: '1', name: 'Stethoscope', category: 'Medical', price: 24.5, inStock: true,  featured: true },
  { id: '2', name: 'Thermometer', category: 'Medical', price: 9.99, inStock: false, featured: false },
  { id: '3', name: 'Desk Chair', category: 'Furniture', price: 129.0, inStock: true,  featured: false },
  { id: '4', name: 'Surgical Mask', category: 'Medical', price: 0.19, inStock: true,  featured: true },
];

// Global boolean fallback (kept simple intentionally)
const dataConfig: DataOperationConfig<Product> = {
  booleanRenderer: (v: boolean) => v ? 'Yes' : 'No'
};

// Tabs + columns demonstrating per-column customRenderer precedence over global booleanRenderer
const tabPanels = createGenericTabsConfig(products, [
  {
    id: 'all',
    label: 'All Products',
    ariaLabel: 'All product data grid',
    columns: [
      { key: 'name', label: 'Name' },
      { key: 'category', label: 'Category' },
      { key: 'price', label: 'Price', render: (row: Product) => `£${row.price.toFixed(2)}` },
      // This column uses customRenderer to override the global booleanRenderer
      { 
        key: 'inStock', 
        label: 'In Stock',
        customRenderer: (value: boolean) => (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
            <span aria-hidden="true">{value ? '✅' : '❌'}</span>
            <span className="nhsuk-u-visually-hidden">{value ? 'In stock' : 'Out of stock'}</span>
          </span>
        )
      },
      // This boolean column does NOT supply customRenderer so it should use global booleanRenderer
      { key: 'featured', label: 'Featured' }
    ]
  }
]);

const meta: Meta<typeof AriaTabsDataGrid> = {
  title: 'NHS/Data/AriaTabsDataGrid',
  component: AriaTabsDataGrid,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `AriaTabsDataGrid basic story showing per-column customRenderer precedence over global booleanRenderer.

- Column \'In Stock\' supplies customRenderer -> shows icon + hidden text.
- Column \'Featured\' falls back to global booleanRenderer (Yes/No).
- Price column uses a simple format function.

This supports testing of the new customRenderer API.`
      }
    }
  }
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof AriaTabsDataGrid>>;

export const CustomRendererPrecedence: Story = {
  args: {
    ariaLabel: 'Product inventory grid',
    tabPanels,
    dataConfig
  }
};

// Minimal table-only variant (useful for layout / overflow debugging)
export const MinimalFourColumns: Story = {
  args: {
    ariaLabel: 'Minimal four column grid',
    tabPanels: createGenericTabsConfig(products, [
      {
        id: 'basic',
        label: 'Basic',
        ariaLabel: 'Basic four column grid',
        columns: [
          { key: 'name', label: 'Name' },
          { key: 'category', label: 'Category' },
          { key: 'price', label: 'Price', render: (row: Product) => `£${row.price.toFixed(2)}` },
          { key: 'inStock', label: 'In Stock' }
        ]
      }
    ]),
    dataConfig
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal four column story (no custom renderer) useful for header width and overflow tests.'
      }
    }
  }
};
