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

export const WithTextStatuses: Story = {
  args: {
    items: [
      {
        title: { text: 'Personal details' },
        hint: { text: 'Your name, address and contact details' },
        href: '#',
        status: {
          text: 'Completed',
          classes: 'nhsuk-task-list__status--completed'
        }
      },
      {
        title: { text: 'Work history' },
        hint: { text: 'Your previous employment details' },
        href: '#',
        status: {
          text: 'In progress',
          classes: 'nhsuk-task-list__status--in-progress'
        }
      },
      {
        title: { text: 'Medical information' },
        hint: { text: 'Details about your medical history' },
        status: {
          text: 'Cannot start yet',
          classes: 'nhsuk-task-list__status--cannot-start-yet'
        }
      }
    ]
  }
};

export const WithTagStatuses: Story = {
  args: {
    items: [
      {
        title: { text: 'Identity verification' },
        hint: { text: 'Prove your identity using official documents' },
        href: '#',
        status: {
          tag: {
            text: 'Completed',
            color: 'green' as const
          }
        }
      },
      {
        title: { text: 'Address verification' },
        hint: { text: 'Confirm your current address' },
        href: '#',
        status: {
          tag: {
            text: 'In progress',
            color: 'blue' as const
          }
        }
      },
      {
        title: { text: 'Bank details' },
        hint: { text: 'Provide your bank account information' },
        href: '#',
        status: {
          tag: {
            text: 'Not started',
            color: 'grey' as const
          }
        }
      },
      {
        title: { text: 'Declaration' },
        hint: { text: 'Read and agree to the terms and conditions' },
        status: {
          tag: {
            text: 'Cannot start yet',
            color: 'grey' as const
          }
        }
      }
    ]
  }
};

export const WithoutHints: Story = {
  args: {
    items: [
      {
        title: { text: 'Check eligibility' },
        href: '#',
        status: {
          tag: {
            text: 'Completed',
            classes: 'nhsuk-tag--green'
          }
        }
      },
      {
        title: { text: 'Personal details' },
        href: '#',
        status: {
          text: 'In progress',
          classes: 'nhsuk-task-list__status--in-progress'
        }
      },
      {
        title: { text: 'Submit application' },
        status: {
          text: 'Cannot start yet',
          classes: 'nhsuk-task-list__status--cannot-start-yet'
        }
      }
    ]
  }
};

export const WithoutLinks: Story = {
  args: {
    items: [
      {
        title: { text: 'Check before you start' },
        hint: { text: 'Information you need to know before starting' },
        status: {
          tag: {
            text: 'Completed',
            color: 'green' as const
          }
        }
      },
      {
        title: { text: 'Personal details' },
        hint: { text: 'Your name, address and contact details' },
        status: {
          text: 'In progress',
          classes: 'nhsuk-task-list__status--in-progress'
        }
      },
      {
        title: { text: 'Medical information' },
        hint: { text: 'Details about your health and medical history' },
        status: {
          text: 'Cannot start yet',
          classes: 'nhsuk-task-list__status--cannot-start-yet'
        }
      }
    ]
  }
};

export const WithHtmlContent: Story = {
  args: {
    items: [
      {
        title: { 
          html: '<strong>Important:</strong> Check eligibility' 
        },
        hint: { 
          html: 'You must be <strong>18 or over</strong> to apply' 
        },
        href: '#',
        status: {
          html: '<strong>Completed</strong>',
          classes: 'nhsuk-task-list__status--completed'
        }
      },
      {
        title: { 
          html: 'Personal details <span class="nhsuk-u-font-weight-normal">(required)</span>' 
        },
        hint: { 
          html: 'Your <em>full name</em>, address and contact details' 
        },
        href: '#',
        status: {
          tag: {
            text: 'In progress',
            color: 'blue' as const
          }
        }
      }
    ]
  }
};

export const MixedStatuses: Story = {
  args: {
    items: [
      {
        title: { text: 'Eligibility check' },
        hint: { text: 'Check if you can apply for this service' },
        href: '#',
        status: {
          tag: {
            text: 'Completed',
            color: 'green' as const
          }
        }
      },
      {
        title: { text: 'Personal information' },
        hint: { text: 'Your name, date of birth and contact details' },
        href: '#',
        status: {
          text: 'In progress',
          classes: 'nhsuk-task-list__status--in-progress'
        }
      },
      {
        title: { text: 'Supporting documents' },
        hint: { text: 'Upload documents that support your application' },
        href: '#',
        status: {
          tag: {
            text: 'Incomplete',
            color: 'red' as const
          }
        }
      },
      {
        title: { text: 'Review and submit' },
        hint: { text: 'Check your answers and submit your application' },
        status: {
          text: 'Cannot start yet',
          classes: 'nhsuk-task-list__status--cannot-start-yet'
        }
      }
    ]
  }
};

export const LongTaskList: Story = {
  args: {
    items: [
      {
        title: { text: '1. Check before you start' },
        hint: { text: 'What you need to know before you apply' },
        href: '#',
        status: { tag: { text: 'Completed', color: 'green' as const } }
      },
      {
        title: { text: '2. Personal details' },
        hint: { text: 'Your name, address and contact information' },
        href: '#',
        status: { tag: { text: 'Completed', color: 'green' as const } }
      },
      {
        title: { text: '3. Employment history' },
        hint: { text: 'Details of your current and previous employment' },
        href: '#',
        status: { tag: { text: 'Completed', color: 'green' as const } }
      },
      {
        title: { text: '4. Medical information' },
        hint: { text: 'Your medical history and current conditions' },
        href: '#',
        status: { text: 'In progress', classes: 'nhsuk-task-list__status--in-progress' }
      },
      {
        title: { text: '5. Supporting documents' },
        hint: { text: 'Upload documents to support your application' },
        href: '#',
        status: { tag: { text: 'Not started', color: 'grey' as const } }
      },
      {
        title: { text: '6. Additional information' },
        hint: { text: 'Any other relevant information' },
        status: { text: 'Cannot start yet', classes: 'nhsuk-task-list__status--cannot-start-yet' }
      },
      {
        title: { text: '7. Review and submit' },
        hint: { text: 'Check your answers and submit your application' },
        status: { text: 'Cannot start yet', classes: 'nhsuk-task-list__status--cannot-start-yet' }
      }
    ]
  }
};

export const CustomClasses: Story = {
  args: {
    className: 'my-custom-task-list',
    items: [
      {
        title: { text: 'Task with custom classes', classes: 'my-custom-title' },
        hint: { text: 'This task has custom styling' },
        href: '#',
        status: {
          text: 'Custom status',
          classes: 'my-custom-status'
        },
        classes: 'my-custom-item'
      }
    ]
  }
};

export const Playground: Story = {
  args: {
    items: basicTaskItems,
    idPrefix: 'playground'
  }
};
