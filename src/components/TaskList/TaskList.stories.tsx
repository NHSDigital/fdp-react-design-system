// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { TaskList } from '.';

const meta: Meta<typeof TaskList> = {
  title: 'NHS/Content/TaskList',
  component: TaskList,
  parameters: {
    docs: {
      description: {
        component: `
The TaskList component helps users understand the tasks involved in completing a transaction, the order they should complete tasks in and when they have completed tasks.

Use the TaskList component to show users a list of tasks. Help users of services complete tasks by showing them:

- what the tasks are
- the order they should complete tasks in
- when they've completed tasks

See the [NHS Service Manual guidance on Task Lists](https://service-manual.nhs.uk/design-system/components/task-list) for more details.
        `
      }
    },
    layout: 'padded',
    backgrounds: {
      default: 'nhs-grey',
      values: [
        {
          name: 'nhs-grey',
          value: '#f0f4f5' // NHS Grey 5 - standard NHS page background
        },
        {
          name: 'white',
          value: '#ffffff'
        }
      ]
    }
  },
  argTypes: {
    items: {
      description: 'Array of task list items',
      control: 'object'
    },
    className: {
      description: 'Additional CSS classes',
      control: 'text'
    },
    id: {
      description: 'HTML id attribute',
      control: 'text'
    },
    idPrefix: {
      description: 'Prefix for generating IDs',
      control: 'text'
    }
  }
};

export default meta;
type Story = StoryObj<typeof TaskList>;

const basicTaskItems = [
  {
    title: { text: 'Check before you start' },
    href: '#',
    status: {
      tag: {
        text: 'Completed',
        color: 'green' as const
      }
    }
  },
  {
    title: { text: 'Personal details' },
    hint: { text: 'Provide your personal details' },
    href: '#',
    status: {
      tag: {
        text: 'Completed',
        color: 'green' as const
      }
    }
  },
  {
    title: { text: 'Eligibility' },
    hint: { text: 'Answer questions about your eligibility' },
    href: '#',
    status: {
      text: 'In progress',
      classes: 'nhsuk-task-list__status--in-progress'
    }
  },
  {
    title: { text: 'Submit application' },
    hint: { text: 'Submit your completed application' },
    status: {
      text: 'Cannot start yet',
      classes: 'nhsuk-task-list__status--cannot-start-yet'
    }
  }
];

export const Default: Story = {
  args: {
    items: basicTaskItems
  }
};
