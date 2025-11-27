import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { StepByStepNavigation } from './StepByStepNavigation';

const meta: Meta<typeof StepByStepNavigation> = {
  title: 'NHS/Content/StepByStepNavigation',
  component: StepByStepNavigation,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Guides users through a multi-step journey with clear ordering, current state, and optional sub-steps.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof StepByStepNavigation>;

const items = [
  { id: 'start', title: 'Check before you start', href: '#start', status: 'completed' as const },
  { id: 'create', title: 'Create an account', href: '#create', status: 'completed' as const },
  { id: 'upload', title: 'Upload documents', description: 'Proof of identity and sponsor letter.', items: [
    { id: 'id', title: 'Upload proof of identity', href: '#id' },
    { id: 'sponsor', title: 'Upload sponsor letter', href: '#sponsor' }
  ]},
  { id: 'submit', title: 'Submit your application', href: '#submit' },
];

export const FullWidth: Story = {
  args: {
    variant: 'full-width',
    heading: 'Apply for data access',
    summary: 'Follow these steps to complete your application.',
    items,
    currentStepId: 'upload'
  }
};

export const Sidebar: Story = {
  args: {
    variant: 'sidebar',
    ariaLabel: 'Apply steps',
    items,
    currentStepId: 'upload'
  }
};

export const ControlledExpansion: Story = {
  render: (args) => {
    const [expanded, setExpanded] = useState<string[]>(['upload']);
    return (
      <div>
        <div style={{ marginBottom: 12 }}>
          <button onClick={() => setExpanded([])}>Collapse all</button>{' '}
          <button onClick={() => setExpanded(['upload'])}>Expand “Upload documents”</button>
        </div>
        <StepByStepNavigation
          {...args}
          expandedIds={expanded}
          onToggle={(id, isOpen) => {
            setExpanded((prev) => {
              const set = new Set(prev);
              if (isOpen) set.add(id); else set.delete(id);
              return Array.from(set);
            });
          }}
        />
      </div>
    );
  },
  args: {
    variant: 'full-width',
    heading: 'Controlled expansion',
    summary: 'This story demonstrates the controlled expandedIds API.',
    items,
    currentStepId: 'upload'
  }
};

export const ShowHideAll: Story = {
  args: {
    variant: 'full-width',
    heading: 'Show / hide all controls',
    summary: 'Use these controls to quickly expand or collapse step content.',
    items,
    showAllControls: true,
    currentStepId: 'upload'
  }
};

export const SingleOpen: Story = {
  args: {
    variant: 'full-width',
    heading: 'Single-open (accordion) mode',
    summary: 'Only one step can be open at a time.',
    items,
    singleOpen: true,
    currentStepId: 'upload'
  }
};
