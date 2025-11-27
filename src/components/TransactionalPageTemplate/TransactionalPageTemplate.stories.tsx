// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { TransactionalPageTemplate } from './TransactionalPageTemplate';
import { Button } from '../Button/Button';
import { Fieldset } from '../Fieldset/Fieldset';
import { Radios } from '../Radios/Radios';
import { Input } from '../Input/Input';
import { Label } from '../Label/Label';
import { DateInput } from '../DateInput/DateInput';
import { SummaryList } from '../SummaryList/SummaryList';

const meta: Meta<typeof TransactionalPageTemplate> = {
  title: 'Templates/TransactionalPageTemplate',
  component: TransactionalPageTemplate,
  parameters: {
	layout: 'fullscreen',
	docs: {
	  description: {
		component: `
The TransactionalPageTemplate component provides a complete page structure following NHS Service Manual guidance for transactional services like forms, applications, and user journeys.

## Key Features

- **Simplified Header**: No navigation, search, or account components - just NHS logo and service name
- **Back Link**: Built-in support for navigation back to previous pages
- **Responsive Layout**: NHS-standard width container with responsive grid system
- **Accessibility**: Skip links, semantic structure, and keyboard navigation support
- **Transactional Focus**: Optimized for single-task user journeys like forms and applications

## When to Use

Use this template for:
- Forms and applications
- Multi-step processes
- User account management pages
- Booking and appointment systems
- Any single-task transactional journey

## Key Differences from PageTemplate

- Simplified header without complex navigation
- Includes back link component
- Uses smaller main wrapper by default (better for forms)
- Focused on task completion rather than content browsing
		`
	  }
	}
  },
	// Removed 'autodocs' tag; dedicated docs page exists
  argTypes: {
	pageTitle: {
	  control: 'text',
	  description: 'Main page title/heading'
	},
	serviceName: {
	  control: 'text',
	  description: 'Service name displayed in the header'
	},
	serviceHref: {
	  control: 'text',
	  description: 'URL for the service name link'
	},
	columnWidth: {
	  control: 'select',
	  options: ['one-third', 'one-half', 'two-thirds', 'three-quarters', 'full'],
	  description: 'Width of the main content column'
	},
	mainWrapperSize: {
	  control: 'select',
	  options: ['default', 'large', 'small'],
	  description: 'Size variant for the main wrapper'
	},
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <TransactionalPageTemplate {...args}>
      <div>
        <p className="nhsuk-body-l">
          Choose an available appointment time from the options below.
        </p>
        
        <form>
          <Radios
			name="appointment"
			options={[
				{
					value: 'monday-9am',
					text: 'Monday 15 March 2024, 9:00am'
				},
				{
					value: 'tuesday-2pm',
					text: 'Tuesday 16 March 2024, 2:00pm'
				},
				{
					value: 'wednesday-11am',
					text: 'Wednesday 17 March 2024, 11:00am'
				}
			]}
		  />
          <Button className="nhsuk-button" type="submit">
            Confirm appointment
          </Button>
        </form>
      </div>
    </TransactionalPageTemplate>
  ),
  args: {
    pageTitle: 'Book an appointment',
    serviceName: 'NHS App',
    serviceHref: '/',
    backLinkProps: {
      text: 'Back to appointments',
      href: '/appointments'
    },
  },
};
