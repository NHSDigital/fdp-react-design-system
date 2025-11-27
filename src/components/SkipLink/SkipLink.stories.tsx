// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { SkipLink } from './SkipLink';

const meta: Meta<typeof SkipLink> = {
  title: 'NHS/Components/SkipLink',
  component: SkipLink,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'The skip link component allows keyboard users to skip to the main content or other important sections of the page.',
      },
    },
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'The text to display in the skip link',
    },
    href: {
      control: 'text',
      description: 'The href target for the skip link',
    },
    classes: {
      control: 'text',
      description: 'Additional CSS class names',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SkipLink>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'The default skip link that jumps to the main content. Tab to the link to see it appear.',
      },
    },
  },
};
