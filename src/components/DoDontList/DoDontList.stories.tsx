// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { DoDontList } from '.';

const meta: Meta<typeof DoDontList> = {
  title: 'NHS/Content/DoDontList',
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
