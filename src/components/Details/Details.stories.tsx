// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { Details } from './Details';

const meta: Meta<typeof Details> = {
  title: 'NHS/Content/Details',
  component: Details,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Progressive disclosure widget that allows users to show and hide additional content. Includes support for both standard details and expander card variant.'
      }
    }
  },
  argTypes: {
    summaryText: {
      control: 'text',
      description: 'Text for the summary (visible part that can be clicked)'
    },
    summaryHtml: {
      control: 'text',
      description: 'HTML content for the summary (overrides summaryText if provided)'
    },
    text: {
      control: 'text',
      description: 'Text content for the details body'
    },
    html: {
      control: 'text',
      description: 'HTML content for the details body (overrides text if provided)'
    },
    open: {
      control: 'boolean',
      description: 'Whether the details should be open by default'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    },
    id: {
      control: 'text',
      description: 'Unique identifier'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Details>;

export const Default: Story = {
  args: {
    summaryText: 'Where can I find my NHS number?',
    text: 'Your NHS number is a 10 digit number, like 485 777 3456. You can find your NHS number on any document sent to you by the NHS. This may include: prescriptions, test results, hospital letters, appointment letters, or your NHS medical card.'
  }
};
