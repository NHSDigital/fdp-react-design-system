import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'NHS/Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'The pagination component allows users to navigate between pages of content.',
      },
    },
  },
  argTypes: {
    previousUrl: {
      control: 'text',
      description: 'URL for the previous page',
    },
    previousPage: {
      control: 'text',
      description: 'Text/title for the previous page',
    },
    nextUrl: {
      control: 'text',
      description: 'URL for the next page',
    },
    nextPage: {
      control: 'text',
      description: 'Text/title for the next page',
    },
    classes: {
      control: 'text',
      description: 'Additional CSS class names',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    previousUrl: '/conditions/depression/symptoms',
    previousPage: 'Symptoms',
    nextUrl: '/conditions/depression/treatment',
    nextPage: 'Treatment',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default pagination with both previous and next links.',
      },
    },
  },
};

export const BothLinks: Story = {
  args: {
    previousUrl: '/conditions/depression/symptoms',
    previousPage: 'Symptoms',
    nextUrl: '/conditions/depression/treatment',
    nextPage: 'Treatment',
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination with both previous and next links.',
      },
    },
  },
};

export const PreviousOnly: Story = {
  args: {
    previousUrl: '/conditions/mental-health',
    previousPage: 'Mental health',
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination with only a previous link (useful for last pages).',
      },
    },
  },
};

export const NextOnly: Story = {
  args: {
    nextUrl: '/conditions/depression/causes',
    nextPage: 'Causes',
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination with only a next link (useful for first pages).',
      },
    },
  },
};

export const LongPageTitles: Story = {
  args: {
    previousUrl: '/guide/step-1',
    previousPage: 'Understanding your mental health and wellbeing',
    nextUrl: '/guide/step-3',
    nextPage: 'Getting professional help and support services',
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination with longer page titles to show how the component handles text wrapping.',
      },
    },
  },
};

export const NumberedPages: Story = {
  args: {
    previousUrl: '/guide/page-2',
    previousPage: 'Page 2 of 10',
    nextUrl: '/guide/page-4',
    nextPage: 'Page 4 of 10',
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination with numbered pages.',
      },
    },
  },
};

export const CustomClasses: Story = {
  args: {
    previousUrl: '/prev',
    previousPage: 'Previous section',
    nextUrl: '/next',
    nextPage: 'Next section',
    classes: 'custom-pagination-spacing',
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination with custom CSS classes applied.',
      },
    },
  },
};

export const Empty: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Empty pagination component (no links provided). The navigation container is still rendered for potential dynamic content.',
      },
    },
  },
};
