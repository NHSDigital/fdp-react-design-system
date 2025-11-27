import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AriaTabsDataGrid } from './AriaTabsDataGrid';
import type { DataOperationConfig } from './AriaTabsDataGridTypes';
import type { ColumnDefinition } from './AriaDataGridTypes';
import { SortType, NullsPosition, BooleanOrder } from './AriaDataGridTypes';
import { annotateWithOriginalIndex } from './sortUtils';

interface Row {
  id: string;
  name: string;
  price: number | string | null;
  inStock: boolean | null;
  due: string | null; // ISO or null
}

const rawRows: Row[] = [
  { id: '1', name: 'Alpha', price: 10, inStock: true,  due: '2025-09-20' },
  { id: '2', name: 'Bravo', price: '2', inStock: false, due: null          },
  { id: '3', name: 'Charlie', price: NaN as any, inStock: true,  due: '2025-09-21' },
  { id: '4', name: 'Delta', price: 2.5, inStock: null,  due: 'invalid-date' },
  { id: '5', name: 'Echo',  price: '10', inStock: false, due: '2025-09-18' },
  { id: '6', name: 'Foxtrot', price: null, inStock: true, due: null },
];

const rows = annotateWithOriginalIndex(rawRows);

const columns: ColumnDefinition[] = [
  { key: 'name', label: 'Name', sortType: SortType.String },
  { key: 'price', label: 'Price', sortType: SortType.Number, nullsPosition: NullsPosition.Last, useRendererForSort: false },
  { key: 'inStock', label: 'In Stock', sortType: SortType.Boolean, booleanOrder: BooleanOrder.TrueFirst },
  { key: 'due', label: 'Due Date', sortType: SortType.Date, nullsPosition: NullsPosition.First },
];

const dataConfig: DataOperationConfig<Row> = {
  booleanRenderer: (v: boolean) => (v ? 'Yes' : 'No'),
  sortingOptions: {
    nullsPosition: NullsPosition.Last,
    booleanOrder: BooleanOrder.FalseFirst,
    stable: true,
  },
};

const meta: Meta<typeof AriaTabsDataGrid> = {
  title: 'NHS/Data/AriaTabsDataGrid/Sorting',
  component: AriaTabsDataGrid,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Demonstrates sorting features: numeric with NaN/null handling, boolean ordering (true-first), date sorting with nulls-first, and stable tie-breaking via original indices.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<React.ComponentProps<typeof AriaTabsDataGrid>>;

export const DateBooleanNumericStable: Story = {
  args: {
    ariaLabel: 'Sorting demo grid',
    dataConfig,
    tabPanels: [
      {
        id: 'sorting',
        label: 'Sorting',
        ariaLabel: 'Sorting demo',
        data: rows,
        columns,
      },
    ],
  },
};
