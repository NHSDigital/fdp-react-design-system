import type { Meta, StoryObj } from '@storybook/react';
import { DoDontList } from '.';

const meta: Meta<typeof DoDontList> = {
  title: 'Components/Interactive/DoDontList',
  component: DoDontList,
  parameters: {
    docs: {
      description: {
        component: `
The DoDontList component helps users understand more easily what they should and shouldn't do.

Use do and don't lists to give users clear guidance on what they should and shouldn't do in a particular circumstance.

Do and don't lists help users understand more easily what they should and shouldn't do by using visual indicators (ticks and crosses) alongside text.

See the [NHS Service Manual guidance on Do and Don't Lists](https://service-manual.nhs.uk/design-system/components/do-and-dont-lists) for more details.
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
    title: {
      description: 'Title to be displayed on the do and don\'t list component',
      control: 'text'
    },
    type: {
      description: 'Type of do and don\'t list component',
      control: 'select',
      options: ['tick', 'cross']
    },
    items: {
      description: 'Array of do and don\'t items',
      control: 'object'
    },
    hidePrefix: {
      description: 'If set to true when type is \'cross\', removes the default \'do not\' text prefix to each item',
      control: 'boolean'
    },
    headingLevel: {
      description: 'Heading level for the title',
      control: 'select',
      options: [1, 2, 3, 4, 5, 6]
    },
    className: {
      description: 'Additional CSS classes',
      control: 'text'
    }
  }
};

export default meta;
type Story = StoryObj<typeof DoDontList>;

const doItems = [
  { item: 'wash your hands with soap and water often – do this for at least 20 seconds' },
  { item: 'use hand sanitiser gel if soap and water are not available' },
  { item: 'wash your hands as soon as you get home' },
  { item: 'cover your mouth and nose with a tissue or your sleeve (not your hands) when you cough or sneeze' },
  { item: 'put used tissues in the bin immediately and wash your hands afterwards' }
];

const dontItems = [
  { item: 'touch your eyes, nose or mouth if your hands are not clean' },
  { item: 'share personal items like towels' },
  { item: 'get close to people who are unwell' },
  { item: 'forget to clean surfaces you touch often' }
];

const shortDoItems = [
  { item: 'get plenty of rest' },
  { item: 'drink lots of fluids' }
];

const shortDontItems = [
  { item: 'smoke' },
  { item: 'drink alcohol excessively' }
];

export const DoList: Story = {
  args: {
    title: 'Do',
    type: 'tick',
    items: doItems,
    headingLevel: 3
  }
};

export const DontList: Story = {
  args: {
    title: 'Don\'t',
    type: 'cross',
    items: dontItems,
    headingLevel: 3
  }
};

export const DontListWithoutPrefix: Story = {
  args: {
    title: 'Don\'t',
    type: 'cross',
    items: [
      { item: 'do not touch your eyes, nose or mouth if your hands are not clean' },
      { item: 'do not share personal items like towels' },
      { item: 'do not get close to people who are unwell' }
    ],
    hidePrefix: true,
    headingLevel: 3
  },
  parameters: {
    docs: {
      description: {
        story: 'When `hidePrefix` is true, the "do not" prefix is not automatically added to cross list items. This is useful when your content already includes the "do not" text.'
      }
    }
  }
};

export const ShortLists: Story = {
  args: {
    title: 'Do',
    type: 'tick',
    items: shortDoItems,
    headingLevel: 3
  },
  parameters: {
    docs: {
      description: {
        story: 'Do and don\'t lists work well with shorter content too.'
      }
    }
  }
};

export const DifferentHeadingLevels: Story = {
  args: {
    title: 'Important Guidelines',
    type: 'tick',
    items: shortDoItems,
    headingLevel: 2
  },
  parameters: {
    docs: {
      description: {
        story: 'You can specify different heading levels (1-6) for the list title to fit your page hierarchy.'
      }
    }
  }
};

export const CustomClassName: Story = {
  args: {
    title: 'Do',
    type: 'tick',
    items: shortDoItems,
    className: 'custom-do-dont-list'
  },
  parameters: {
    docs: {
      description: {
        story: 'You can add custom CSS classes for additional styling.'
      }
    }
  }
};

export const EmptyList: Story = {
  args: {
    title: 'Empty Guidance',
    type: 'tick',
    items: []
  },
  parameters: {
    docs: {
      description: {
        story: 'The component handles empty item arrays gracefully.'
      }
    }
  }
};

export const CompleteExample: Story = {
  render: (args) => (
    <div style={{ maxWidth: '600px' }}>
      <DoDontList
        title="Do"
        type="tick"
        items={doItems}
        headingLevel={3}
      />
      <DoDontList
        title="Don't"
        type="cross"
        items={dontItems}
        headingLevel={3}
        style={{ marginTop: '32px' }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A complete example showing both Do and Don\'t lists as they would typically appear together on a guidance page.'
      }
    }
  }
};

export const AccessibilityExample: Story = {
  args: {
    title: 'Accessible Guidelines',
    type: 'tick',
    items: [
      { item: 'use clear, simple language' },
      { item: 'provide alternative text for images' },
      { item: 'ensure good color contrast' },
      { item: 'make content keyboard accessible' }
    ],
    headingLevel: 2,
    'aria-label': 'Accessibility best practices'
  } as any,
  parameters: {
    docs: {
      description: {
        story: 'The component supports additional accessibility attributes through props spreading.'
      }
    }
  }
};
