// PRUNE: KEEP_ALL (Expanded to include conditional content example)
import type { Meta, StoryObj } from '@storybook/react';
import { Radios } from './Radios';
import { Input } from '../Input';

const meta: Meta<typeof Radios> = {
  title: 'NHS/Components/Radios',
  component: Radios,
  parameters: {
	layout: 'padded',
	docs: {
	  description: {
		component: `
The NHS Radios component provides radio button groups following NHS design guidelines with design token integration.

## Features

- **Single selection**: Only one option can be selected at a time
- **Conditional content**: Show/hide additional content based on selection
- **Size variants**: Regular, small, and inline layouts
- **Error state handling**: Visual error indicators with proper styling
- **Accessibility**: Screen reader support with proper ARIA attributes
- **Design token integration**: Uses NHS color, spacing, and typography tokens
- **Keyboard navigation**: Full keyboard support for selection

## Usage

\`\`\`tsx
import { Radios } from '@nhs-fdp/design-system';

// Basic usage
<Radios 
  name="contact-method" 
  options={[
	{ value: 'email', text: 'Email' },
	{ value: 'phone', text: 'Phone' },
	{ value: 'post', text: 'Post' },
  ]}
/>

// With conditional content
<Radios 
  name="appointment-type" 
  options={[
	{ 
	  value: 'face-to-face', 
	  text: 'Face to face appointment',
	  conditional: 'Please arrive 10 minutes early'
	},
	{ 
	  value: 'phone', 
	  text: 'Phone appointment',
	  conditional: 'We will call you at your preferred time'
	},
  ]}
/>

// Inline layout
<Radios 
  name="yes-no" 
  variant="inline"
  options={[
	{ value: 'yes', text: 'Yes' },
	{ value: 'no', text: 'No' },
  ]}
/>
\`\`\`

## Accessibility

- Proper ARIA attributes for screen readers
- Fieldset and legend for grouping
- Error state indication with visual and semantic markup
- Keyboard navigation support (arrow keys, space)
- Focus indicators meeting WCAG contrast requirements
		`,
	  },
	},
  },
  argTypes: {
	size: {
	  control: 'select',
	  options: ['normal', 'small'],
	  description: 'Size variant of the radio buttons',
	},
	inline: {
	  control: 'boolean',
	  description: 'Whether to display radios inline (horizontally)',
	},
	hasError: {
	  control: 'boolean',
	  description: 'Whether the radio group is in an error state',
	},
  },
};

export default meta;
type Story = StoryObj<typeof Radios>;

const basicOptions = [
  { value: 'email', text: 'Email' },
  { value: 'phone', text: 'Phone' },
  { value: 'post', text: 'Post' },
];


const appointmentOptions = [
  { 
	value: 'face-to-face', 
	text: 'Face to face appointment',
	conditional: 'Please arrive 10 minutes early for your appointment.'
  },
  { 
	value: 'phone', 
	text: 'Phone appointment',
	conditional: 'We will call you at your preferred time. Please ensure you are available.'
  },
  { 
	value: 'video', 
	text: 'Video call appointment',
	conditional: 'You will receive a link to join the video call 15 minutes before your appointment.'
  },
];

const contactPreferenceOptions = [
  { 
	value: 'email', 
	text: 'Email',
	conditional: (
	  <div style={{ marginTop: '16px' }}>
		{/* <Label htmlFor="email-address">Email address</Label> */}
		<Input
			id="email-address"
			name="email-address"
			type="email"
			placeholder="Enter your email address"
			autoComplete="email"
		/>
	  </div>
	)
  },
  { 
	value: 'phone', 
	text: 'Phone',
	conditional: (
	  <div style={{ marginTop: '16px' }}>
		{/* <Label htmlFor="phone-number">Phone number</Label> */}
		<Input
			id="phone-number"
			name="phone-number"
			type="tel"
			placeholder="Enter your phone number"
			autoComplete="tel"
		/>
	  </div>
	)
  },
  { 
	value: 'text', 
	text: 'Text message',
	conditional: (
	  <div style={{ marginTop: '16px' }}>
		{/* <Label htmlFor="mobile-number">Mobile number</Label> */}
		<Input
			id="mobile-number"
			name="mobile-number"
			type="tel"
			placeholder="Enter your mobile number"
			autoComplete="tel"
		/>
	  </div>
	)
  },
];


export const Default: Story = {
	args: {
	name: 'contact-method',
	options: basicOptions,
	},
};

export const WithConditionalInformation: Story = {
	args: {
		name: 'appointment-type',
		options: appointmentOptions,
	},
	parameters: {
		docs: {
			description: {
				story: 'Displays informational text beneath each selected appointment type using the conditional prop.'
			}
		}
	}
};

export const WithConditionalInteractiveFields: Story = {
	args: {
		name: 'contact-preference',
		options: contactPreferenceOptions,
	},
	parameters: {
		docs: {
			description: {
				story: 'Demonstrates conditional sections containing interactive form fields (inputs) for the selected option.'
			}
		}
	}
};
