// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { Checkboxes } from './Checkboxes';
import { CheckboxItem } from './Checkboxes.types';

const meta: Meta<typeof Checkboxes> = {
  title: 'NHS/Components/Checkboxes',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Comparison between runtime styled checkboxes and CSS-based checkboxes',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockItems: CheckboxItem[] = [
  { value: 'email', text: 'Email', hint: 'We\'ll send you updates by email' },
  { value: 'phone', text: 'Phone', hint: 'We\'ll call you during business hours' },
  { 
    value: 'text', 
    text: 'Text message', 
    conditional: (
      <div className="nhs-form-group">
        <label className="nhs-label" htmlFor="mobile">
          Mobile phone number
        </label>
        <input className="nhs-input nhs-u-width-two-thirds" id="mobile" name="mobile" type="text" />
      </div>
    )
  },
];

export const RuntimeStyled: Story = {
  render: () => (
    <div>
      <h2 style={{ marginBottom: '24px', color: '#005eb8' }}>Runtime Styled (Current Approach)</h2>
      <Checkboxes
        name="contact-runtime"
        legend="How would you like to be contacted?"
        hint="Select all options that apply to you"
        items={mockItems}
      />
    </div>
  ),
};
