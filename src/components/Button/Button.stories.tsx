import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
	layout: 'centered',
	docs: {
	  description: {
		component: `
The NHS Button component follows the NHS design guidelines and uses design tokens for consistent styling.

## Usage

\`\`\`tsx
import { Button } from '@nhs-fdp/design-system';

// For light backgrounds (default)
<Button variant="primary">Continue</Button>
<Button variant="secondary">Find out more</Button>

// For dark backgrounds (NHS Blue, Green, etc.)
<Button variant="reverse">Start now</Button>
\`\`\`

## Background Guidelines

### Light Backgrounds
- **Primary**: Default blue button for main actions
- **Secondary**: White button with blue border for secondary actions
- **Warning**: Red button for destructive actions

### Dark Backgrounds (NHS Blue, Green, Dark Grey)
- **Reverse**: White button specifically designed for dark backgrounds
- Provides optimal contrast and meets WCAG AA standards

## Design Guidelines

- Use primary buttons for the main action on a page
- Use secondary buttons for secondary actions  
- Use reverse buttons on dark NHS color backgrounds
- Use warning buttons for destructive actions
- Limit the number of buttons on a page
- Button text should be clear and action-oriented

## Accessibility

- All button variants meet WCAG AA contrast requirements when used on appropriate backgrounds
- Reverse buttons should only be used on dark backgrounds for optimal accessibility
- Button focus states are clearly visible for keyboard navigation
		`,
	  },
	},
  },
  argTypes: {
	variant: {
	  control: 'select',
	  options: ['primary', 'secondary', 'reverse', 'warning', 'login'],
	  description: 'The button variant',
	},
	size: {
	  control: 'select',
	  options: ['small', 'default', 'large'],
	  description: 'The button size',
	},
	disabled: {
	  control: 'boolean',
	  description: 'Whether the button is disabled',
	},
	fullWidth: {
	  control: 'boolean',
	  description: 'Whether the button takes full width',
	},
	children: {
	  control: 'text',
	  description: 'Button content',
	},
  },
  args: {
	children: 'Button text',
	variant: 'primary',
	size: 'default',
	disabled: false,
	fullWidth: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {};

// Variant stories
export const Primary: Story = {
  args: {
	variant: 'primary',
	children: 'Continue',
  },
};

export const Secondary: Story = {
  args: {
	variant: 'secondary',
	children: 'Find out more',
  },
};

export const Reverse: Story = {
  args: {
	variant: 'reverse',
	children: 'Start now',
  },
  parameters: {
	backgrounds: { default: 'dark' },
	docs: {
	  description: {
		story: 'Reverse buttons are designed for use on dark backgrounds. Switch to the dark background to see the proper contrast.',
	  },
	},
  },
};

export const Warning: Story = {
  args: {
	variant: 'warning',
	children: 'Delete',
  },
};

export const Login: Story = {
  args: {
	variant: 'login',
	children: 'Sign in',
  },
};

// State stories
export const Disabled: Story = {
  args: {
	disabled: true,
	children: 'Disabled button',
  },
};

export const FullWidth: Story = {
  args: {
	fullWidth: true,
	children: 'Full width button',
  },
  parameters: {
	layout: 'padded',
  },
};

// Multiple buttons example
export const AllVariants: Story = {
  render: () => (
	<div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
	  <Button variant="primary">Primary button</Button>
	  <Button variant="secondary">Secondary button</Button>
	  <Button variant="reverse">Reverse button</Button>
	  <Button variant="warning">Warning button</Button>
	  <Button variant="login">Login button</Button>
	</div>
  ),
  parameters: {
	layout: 'padded',
  },
};

// Background Examples - Shows how different button variants work on different backgrounds
export const OnDarkBackgrounds: Story = {
	render: () => (
	<div style={{ 
		padding: '32px', 
		backgroundColor: '#d8dde0',
		borderRadius: '8px',
		display: 'flex', 
		flexDirection: 'column', 
		gap: '16px', 
		alignItems: 'flex-start' 
	}}>
		<h3 style={{ color: 'black', margin: '0 0 16px 0', fontFamily: 'Frutiger, Arial, sans-serif' }}>
			Buttons on Dark Backgrounds
		</h3>
		<Button variant="reverse">Reverse button (recommended)</Button>
		<Button variant="primary">Primary button</Button>
		<Button variant="secondary">Secondary button</Button>
		<Button variant="warning">Warning button</Button>
		<Button variant="login">Login button</Button>
	</div>
  ),
  parameters: {
	layout: 'padded',
	docs: {
	  description: {
		story: `This example shows how different button variants appear on dark backgrounds. 
		The **reverse** variant is specifically designed for dark backgrounds and provides the best contrast.
		
		**Usage Guidelines:**
		- Use \`nhsuk-button--reverse\` class or \`variant="reverse"\` on dark backgrounds
		- NHS Blue (#003087), NHS Green (#009639), or other dark colors
		- Always test contrast ratios for accessibility`,
	  },
	},
  },
};

export const OnLightBackgrounds: Story = {
  render: () => (
	<div style={{ 
		padding: '32px', 
		backgroundColor: '#ffffff',
		border: '1px solid #d8dde0',
		borderRadius: '8px',
		display: 'flex', 
		flexDirection: 'column', 
		gap: '16px', 
		alignItems: 'flex-start' 
	}}>
		<h3 style={{ color: '#212b32', margin: '0 0 16px 0', fontFamily: 'Frutiger, Arial, sans-serif' }}>
			Buttons on Light Backgrounds
		</h3>
		<Button variant="primary">Primary button (recommended)</Button>
		<Button variant="secondary">Secondary button</Button>
		<Button variant="warning">Warning button</Button>
		<Button variant="login">Login button</Button>
	</div>
  ),
  parameters: {
	layout: 'padded',
	docs: {
	  description: {
		story: `This example shows how different button variants appear on light backgrounds.
		The **primary** and **secondary** variants are designed for light backgrounds.
		
		**Usage Guidelines:**
		- Use \`nhsuk-button\` (primary) or \`nhsuk-button nhsuk-button--secondary\` on light backgrounds
		- White (#ffffff) or light grey backgrounds
		- The reverse button has poor contrast on light backgrounds and should be avoided`,
	  },
	},
  },
};

export const BackgroundComparison: Story = {
  render: () => (
	<div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
		
		{/* Light Background */}
		<div style={{ 
			padding: '24px', 
			backgroundColor: '#ffffff',
			border: '1px solid #d8dde0',
			borderRadius: '8px',
			minWidth: '280px'
		}}>
		<h4 style={{ margin: '0 0 16px 0', fontFamily: 'Frutiger, Arial, sans-serif', color: '#212b32' }}>
			Light Background
		</h4>
		<div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
			<Button variant="primary">Primary</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="warning">Warning button</Button>
		</div>
		</div>
		{/* Dark Background */}
		<div style={{ 
			padding: '24px', 
			backgroundColor: '#d8dde0',
			borderRadius: '8px',
			minWidth: '280px'
		}}>
			<h4 style={{ margin: '0 0 16px 0', fontFamily: 'Frutiger, Arial, sans-serif', color: '#212b32' }}>
				Dark Background
			</h4>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
				<Button variant="reverse">Reverse</Button>
				<Button variant="secondary">Secondary</Button>
				<Button variant="warning">Warning button</Button>
			</div>
		</div>
		{/* NHS Blue Background */}
		<div style={{ 
			padding: '24px', 
			backgroundColor: '#005eb8',
			borderRadius: '8px',
			minWidth: '280px'
		}}>
			<h4 style={{ margin: '0 0 16px 0', fontFamily: 'Frutiger, Arial, sans-serif', color: 'white' }}>
			NHS Blue Background
			</h4>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
				<Button variant="reverse">Reverse</Button>
				<Button variant="primary">Primary</Button>
				<Button variant="warning">Warning button</Button>
			</div>
		</div>
	</div>
		
  ),
  parameters: {
	layout: 'padded',
	docs: {
	  description: {
		story: `Side-by-side comparison showing recommended button variants for different background colors.
		
		**Legend:**
		- ✓ Recommended - Good contrast and accessibility
		- ~ Acceptable - Meets minimum contrast requirements  
		- ✗ Not recommended - Poor contrast or accessibility issues`,
	  },
	},
  },
};
