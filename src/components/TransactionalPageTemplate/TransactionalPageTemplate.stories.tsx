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
  tags: ['autodocs'],
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

export const RegistrationForm: Story = {
  render: (args) => (
    <TransactionalPageTemplate {...args}>
      <div>
        <p className="nhsuk-body">
          Complete this form to register for NHS online services.
        </p>
        
        <form>
          <Fieldset
            legend={{
              text: 'Personal details',
            }}
          >
            <div className="nhsuk-form-group">
              <Label htmlFor="first-name">First name</Label>
              <Input
                id="first-name"
                name="first-name"
                type="text"
              />
            </div>
            
            <div className="nhsuk-form-group">
              <Label htmlFor="last-name">Last name</Label>
              <Input
                id="last-name"
                name="last-name"
                type="text"
              />
            </div>
            
            <div className="nhsuk-form-group">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
              />
            </div>
          </Fieldset>
          
          <Fieldset
            legend={{
              text: 'Date of birth'
            }}
          >
            <DateInput
              id="dob"
              namePrefix="dob"
              items={[
                {
                  name: 'day',
                  label: 'Day',
                  classes: 'nhsuk-input--width-2',
                  inputmode: 'numeric'
                },
                {
                  name: 'month',
                  label: 'Month',
                  classes: 'nhsuk-input--width-2',
                  inputmode: 'numeric'
                },
                {
                  name: 'year',
                  label: 'Year',
                  classes: 'nhsuk-input--width-4',
                  inputmode: 'numeric'
                }
              ]}
            />
          </Fieldset>
          
          <Button type="submit">
            Continue
          </Button>
        </form>
      </div>
    </TransactionalPageTemplate>
  ),
  args: {
    pageTitle: 'Register for NHS online services',
    serviceName: 'NHS Online Services',
    serviceHref: '/',
    backLinkProps: {
      text: 'Back',
      href: '/start'
    },
  },
};

export const ConfirmationPage: Story = {
  render: (args) => (
    <TransactionalPageTemplate {...args}>
      <div>
        <div className="nhsuk-panel nhsuk-panel--confirmation">
          <h2 className="nhsuk-panel__title">
            Application complete
          </h2>
          <div className="nhsuk-panel__body">
            Your reference number<br />
            <strong>HDJ2123F</strong>
          </div>
        </div>
        
        <p className="nhsuk-body">
          We have sent you a confirmation email.
        </p>
        
        <h2 className="nhsuk-heading-m">What happens next</h2>
        <p className="nhsuk-body">
          We will review your application and contact you within 5 working days.
        </p>
        
        <a className="nhsuk-button" href="/jobs">
          Apply for another job
        </a>
      </div>
    </TransactionalPageTemplate>
  ),
  args: {
    pageTitle: 'Application submitted',
    serviceName: 'NHS Jobs',
    serviceHref: '/jobs',
    // No back link for confirmation pages
    backLinkProps: undefined,
  },
};

export const WithButtonBackLink: Story = {
  render: (args) => {
    const handleBackClick = () => {
      // In a real application, this would use router.back() or similar
      alert('Going back to previous page');
    };

    return (
      <TransactionalPageTemplate
        {...args}
        backLinkProps={{
          text: 'Back',
          element: 'button',
          onClick: handleBackClick
        }}
      >
        <div>
          <p className="nhsuk-body">
            Check your details are correct before continuing.
          </p>
          
          <SummaryList
            items={[
              {
                key: { text: 'Name' },
                value: { text: 'Sarah Phillips' },
                actions: {
                  items: [{
                    href: '/edit-name',
                    text: 'Change',
                    visuallyHiddenText: ' name'
                  }]
                }
              },
              {
                key: { text: 'Address' },
                value: { 
                  children: (
                    <>
                      72 Guild Street<br />
                      London<br />
                      SE23 6FH
                    </>
                  )
                },
                actions: {
                  items: [{
                    href: '/edit-address',
                    text: 'Change',
                    visuallyHiddenText: ' address'
                  }]
                }
              },
              {
                key: { text: 'Delivery option' },
                value: { text: 'Next day delivery' },
                actions: {
                  items: [{
                    href: '/edit-delivery',
                    text: 'Change',
                    visuallyHiddenText: ' delivery option'
                  }]
                }
              }
            ]}
          />
          
          <form>
            <Button type="submit">
              Confirm and continue
            </Button>
          </form>
        </div>
      </TransactionalPageTemplate>
    );
  },
  args: {
    pageTitle: 'Confirm your details',
    serviceName: 'NHS Prescription Service',
    serviceHref: '/prescriptions',
  },
};

export const FullWidth: Story = {
  render: (args) => (
    <TransactionalPageTemplate {...args}>
      <div>
        <p className="nhsuk-body-l">
          Upload up to 3 documents to verify your identity.
        </p>
        
        <div className="nhsuk-grid-row">
          <div className="nhsuk-grid-column-one-half">
            <h2 className="nhsuk-heading-m">Accepted documents</h2>
            <ul className="nhsuk-list nhsuk-list--bullet">
              <li>Passport</li>
              <li>Driving licence</li>
              <li>National identity card</li>
              <li>Birth certificate</li>
            </ul>
          </div>
          <div className="nhsuk-grid-column-one-half">
            <h2 className="nhsuk-heading-m">File requirements</h2>
            <ul className="nhsuk-list nhsuk-list--bullet">
              <li>PDF, JPG or PNG format</li>
              <li>Maximum file size 5MB</li>
              <li>Good quality and readable</li>
              <li>Full document visible</li>
            </ul>
          </div>
        </div>
        
        <form>
          <div className="nhsuk-form-group">
            <Label htmlFor="file-upload">Choose files</Label>
            <input className="nhsuk-file-upload" id="file-upload" name="file-upload" type="file" multiple accept=".pdf,.jpg,.jpeg,.png" />
          </div>
          
          <Button type="submit">
            Upload files
          </Button>
        </form>
      </div>
    </TransactionalPageTemplate>
  ),
  args: {
    pageTitle: 'Upload documents',
    serviceName: 'NHS Digital Identity',
    serviceHref: '/identity',
    columnWidth: 'full',
    mainWrapperSize: 'large',
    backLinkProps: {
      text: 'Back to document selection',
      href: '/documents'
    },
  },
};
