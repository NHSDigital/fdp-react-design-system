import type { Meta, StoryObj } from '@storybook/react';
import { Radios } from './Radios';
import { Input } from '../Input';
import { Label } from '../Label';

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

const yesNoOptions = [
  { value: 'yes', text: 'Yes' },
  { value: 'no', text: 'No' },
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

const urgencyOptions = [
	{ value: 'urgent', text: 'Urgent - within 24 hours' },
	{ value: 'soon', text: 'Soon - within a week' },
	{ value: 'routine', text: 'Routine - within a month' },
];

export const Default: Story = {
  args: {
	name: 'contact-method',
	options: basicOptions,
  },
};

export const WithValue: Story = {
  args: {
	name: 'contact-method-value',
	options: basicOptions,
	value: 'email',
  },
};

export const YesNo: Story = {
  args: {
	name: 'consent',
	options: yesNoOptions,
  },
  parameters: {
	docs: {
	  description: {
		story: 'Simple yes/no radio button group.',
	  },
	},
  },
};

export const WithConditionalContent: Story = {
  args: {
	name: 'contact-preference',
	options: contactPreferenceOptions,
  },
  parameters: {
	docs: {
	  description: {
		story: `Radio buttons with conditional Input components that appear when an option is selected. 
		
This example demonstrates how to collect contact preferences with the appropriate input fields for each method:
- **Email**: Shows an email input field
- **Phone**: Shows a phone number input field  
- **Text message**: Shows a mobile number input field

The conditional content includes proper form labels and input types for accessibility and user experience.`,
	  },
	},
  },
};

export const AppointmentTypes: Story = {
  args: {
	name: 'appointment-type',
	options: appointmentOptions,
  },
  parameters: {
	docs: {
	  description: {
		story: 'Radio buttons with text-based conditional content for appointment type selection.',
	  },
	},
  },
};

export const UrgencySelection: Story = {
  args: {
	name: 'urgency',
	options: urgencyOptions,
	value: 'routine',
  },
  parameters: {
	docs: {
	  description: {
		story: 'Medical appointment urgency selection with pre-selected option.',
	  },
	},
  },
};

export const WithError: Story = {
  args: {
	name: 'contact-method-error',
	options: basicOptions,
	hasError: true,
	describedBy: 'contact-method-error-message',
  },
};

export const Disabled: Story = {
  args: {
	name: 'contact-method-disabled',
	options: basicOptions.map(option => ({ ...option, disabled: true })),
	value: 'email',
  },
};

export const Required: Story = {
  args: {
	name: 'contact-method-required',
	options: basicOptions,
  },
};

// Variant examples
export const SmallVariant: Story = {
  args: {
	name: 'contact-method-small',
	size: 'small',
	options: basicOptions,
  },
  parameters: {
	docs: {
	  description: {
		story: 'Smaller radio buttons for compact layouts.',
	  },
	},
  },
};

export const InlineVariant: Story = {
  args: {
	name: 'yes-no-inline',
	inline: true,
	options: yesNoOptions,
  },
  parameters: {
	docs: {
	  description: {
		story: 'Radio buttons displayed inline (horizontally) instead of stacked.',
	  },
	},
  },
};

export const InlineWithMore: Story = {
  args: {
	name: 'urgency-inline',
	inline: true,
	options: urgencyOptions,
  },
  parameters: {
	docs: {
	  description: {
		story: 'Multiple radio buttons in inline layout.',
	  },
	},
  },
};

// With conditional Input component
export const WithConditionalInput: Story = {
  args: {
	name: 'contact-input',
	options: [
	  { 
		value: 'email', 
		text: 'Email',
		conditional: {
			id: 'contact-email-radio',
			name: 'contact-email-radio',
			label: 'Email address',
			type: 'email',
			placeholder: 'Enter your email address',
			width: 'full'
		}
	  },
	  { 
		value: 'phone', 
		text: 'Phone',
		conditional: {
			id: 'contact-phone-radio',
			name: 'contact-phone-radio',
			label: 'Phone number',
			type: 'tel',
			placeholder: 'Enter your phone number',
			width: 'full'
		}
	  },
	  { value: 'post', text: 'Post' },
	],
  },
  parameters: {
	docs: {
	  description: {
		story: 'Radio buttons with Input component integration for conditional content.',
	  },
	},
  },
};

// Mixed conditional content (ReactNode and Input component)
export const WithMixedConditionalRadio: Story = {
  args: {
	name: 'contact-mixed-radio',
	options: [
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
		  <div>
			<p style={{ marginBottom: '16px', color: '#212b32' }}>
				We'll call you during business hours (9am to 5pm, Monday to Friday).
			</p>
			{/* <Label htmlFor="custom-phone-radio">
			  Phone number
			</Label> */}
			<Input
				type="tel"
				id="custom-phone-radio"
				name="custom-phone-radio"
				placeholder="Enter phone number"
				width="full"
			/>
		  </div>
		)
	  },
	  { value: 'post', text: 'Post' },
	],
  },
  parameters: {
	docs: {
	  description: {
		story: 'Radio buttons with mixed conditional content - both Input component and custom ReactNode.',
	  },
	},
  },
};
