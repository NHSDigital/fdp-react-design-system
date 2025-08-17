import type { Meta, StoryObj } from '@storybook/react';
import { GenericCard } from './GenericCard';
import { createGenericCard, defaultGenericCardConfig } from './GenericCardRenderer';
import type { GenericCardConfig } from './ResponsiveDataGridGeneric.types';

interface DemoItem {
  id: string;
  name: string;
  status: 'active' | 'pending' | 'completed';
  priority: 'high' | 'medium' | 'low';
  category: string;
  owner: string;
}

const demoData: DemoItem = {
  id: 'ITEM-001',
  name: 'Example Work Item',
  status: 'active',
  priority: 'medium',
  category: 'Operations',
  owner: 'Jane Smith'
};

// Minimal column definitions aligned with grid shape
const columns = [
  { key: 'name', label: 'Name' },
  { key: 'status', label: 'Status' },
  { key: 'priority', label: 'Priority' },
  { key: 'category', label: 'Category' },
  { key: 'owner', label: 'Owner' }
];

const meta: Meta<typeof GenericCard> = {
  title: 'NHS/Data/ResponsiveDataGrid/GenericCard',
  component: GenericCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `\nThe standalone **GenericCard** component provides the same styling, focus and accessibility behaviour as cards rendered inside the **ResponsiveDataGrid**, without needing the grid itself.\n\nUse it when you want a lightweight card presentation for a single record or small sets outside of a full data grid context.\n\nTwo primary usage patterns are shown:\n- Component form via <GenericCard /> which wraps **createGenericCard**\n- Direct helper usage via **createGenericCard()** returning CardProps for manual <Card /> rendering.\n`
      }
    }
  },
  argTypes: {
    headingOverride: { control: 'text', description: 'Override generated heading' }
  }
};

export default meta;
type Story = StoryObj<typeof GenericCard>;

// Base config extending defaults
const baseConfig: GenericCardConfig<DemoItem> = {
  ...defaultGenericCardConfig,
  primaryField: 'name',
  secondaryFields: ['id', 'category', 'owner'],
  badges: [
    { fieldKey: 'priority', color: 'warning', render: (v: string) => v.toUpperCase() },
    { fieldKey: 'status', color: 'primary' }
  ],
  getVariant: (item) => (item.priority === 'high' ? 'primary' : 'default')
};

export const Basic: Story = {
  name: 'Component Usage',
  args: {
    data: demoData,
    columns,
  config: baseConfig as any
  }
};

export const WithHeadingOverride: Story = {
  args: {
    data: demoData,
    columns,
  config: baseConfig as any,
    headingOverride: 'Custom heading override'
  }
};

// Helper-only example (rendered value of the helper output)
export const HelperFunction = () => {
  const cardProps = createGenericCard(demoData, columns as any, baseConfig);
  return (
    <pre style={{ fontSize: '12px', background: '#f5f5f5', padding: '1rem', overflowX: 'auto' }}>
      {JSON.stringify(cardProps, null, 2)}
    </pre>
  );
};
HelperFunction.parameters = {
  docs: {
    description: {
      story: 'Using createGenericCard directly returns plain CardProps allowing you to render <Card {...props} /> yourself or inspect the derived heading / description HTML.'
    }
  }
};
