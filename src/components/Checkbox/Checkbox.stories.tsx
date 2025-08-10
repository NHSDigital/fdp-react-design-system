import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'NHS/Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The NHS single Checkbox component provides a boolean selection interface following NHS design guidelines.

## Features

- **Boolean values**: Returns true/false instead of string arrays
- **Controlled and uncontrolled modes**: Support for both React patterns
- **Error handling**: Visual error indicators with proper styling
- **Hint text**: Additional guidance text below the checkbox
- **Accessibility**: Screen reader support with proper ARIA attributes
- **Design token integration**: Uses NHS color, spacing, and typography tokens

## Usage

\`\`\`tsx
import { Checkbox } from '@nhs-fdp/design-system';

// Controlled checkbox
const [agreed, setAgreed] = useState(false);
<Checkbox 
  id="agree-terms" 
  checked={agreed}
  onChange={(checked) => setAgreed(checked)}
>
  I agree to the terms and conditions
</Checkbox>

// Uncontrolled checkbox with hint
<Checkbox 
  id="newsletter" 
  defaultChecked={false}
  hint="We'll send you updates about your health records"
>
  Subscribe to email updates
</Checkbox>
\`\`\`

## When to Use

- **Single boolean choices**: Agreement checkboxes, preferences, toggles
- **Consent forms**: Terms acceptance, privacy agreements
- **Optional features**: Newsletter subscriptions, notifications
- **Settings**: Enable/disable functionality

Use the \`Checkboxes\` component instead when you need multiple selection from a group of options.
        `,
      },
    },
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked (controlled mode)',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked by default (uncontrolled mode)',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    hint: {
      control: 'text',
      description: 'Hint text to display below the checkbox',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display',
    },
    children: {
      control: 'text',
      description: 'The label text for the checkbox',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    id: 'checkbox-default',
    children: 'I agree to the terms and conditions',
  },
};

export const WithHint: Story = {
  args: {
    id: 'checkbox-hint',
    children: 'Subscribe to email updates',
    hint: "We'll send you important updates about your health records and appointments",
  },
};

export const WithError: Story = {
  args: {
    id: 'checkbox-error',
    children: 'I agree to the terms and conditions',
    errorMessage: 'You must agree to the terms and conditions to continue',
  },
};

export const Disabled: Story = {
  args: {
    id: 'checkbox-disabled',
    children: 'This option is currently unavailable',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    id: 'checkbox-disabled-checked',
    children: 'This feature is automatically enabled',
    disabled: true,
    defaultChecked: true,
  },
};

export const DefaultChecked: Story = {
  args: {
    id: 'checkbox-default-checked',
    children: 'Send me SMS reminders',
    defaultChecked: true,
    hint: 'You can change this preference at any time in your account settings',
  },
};

// Interactive example with controlled state
export const Controlled: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    
    return (
      <div>
        <Checkbox
          {...args}
          checked={checked}
          onChange={(newChecked) => {
            setChecked(newChecked);
            console.log('Checkbox changed:', newChecked);
          }}
        >
          {args.children}
        </Checkbox>
        <p style={{ marginTop: '16px', fontSize: '14px', color: '#505a5f' }}>
          Current state: <strong>{checked ? 'Checked' : 'Unchecked'}</strong>
        </p>
      </div>
    );
  },
  args: {
    id: 'checkbox-controlled',
    children: 'Enable two-factor authentication',
    hint: 'Adds an extra layer of security to your account',
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a controlled checkbox with state management. The current state is displayed below.',
      },
    },
  },
};

// Multiple single checkboxes example
export const MultipleSingleCheckboxes: Story = {
  render: () => {
    const [preferences, setPreferences] = useState({
      email: false,
      sms: true,
      push: false,
    });

    const updatePreference = (key: keyof typeof preferences) => (checked: boolean) => {
      setPreferences(prev => ({ ...prev, [key]: checked }));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '24px' }}>Notification Preferences</h3>
        
        <Checkbox
          id="pref-email"
          checked={preferences.email}
          onChange={updatePreference('email')}
          hint="Receive appointment reminders and health updates via email"
        >
          Email notifications
        </Checkbox>

        <Checkbox
          id="pref-sms"
          checked={preferences.sms}
          onChange={updatePreference('sms')}
          hint="Get text messages for urgent health alerts"
        >
          SMS notifications
        </Checkbox>

        <Checkbox
          id="pref-push"
          checked={preferences.push}
          onChange={updatePreference('push')}
          hint="Receive push notifications on your mobile device"
        >
          Push notifications
        </Checkbox>

        <div style={{ 
          marginTop: '16px', 
          padding: '16px', 
          backgroundColor: '#f0f4f5', 
          borderRadius: '4px',
          fontSize: '14px'
        }}>
          <strong>Current preferences:</strong>
          <ul style={{ marginTop: '8px', marginBottom: '0' }}>
            <li>Email: {preferences.email ? '✓ Enabled' : '✗ Disabled'}</li>
            <li>SMS: {preferences.sms ? '✓ Enabled' : '✗ Disabled'}</li>
            <li>Push: {preferences.push ? '✓ Enabled' : '✗ Disabled'}</li>
          </ul>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing multiple independent single checkboxes for different preferences. Each checkbox manages its own boolean state.',
      },
    },
  },
};
