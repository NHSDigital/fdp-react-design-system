import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'NHS/Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The Header component provides navigation and branding for NHS services. It includes support for logos, service names, search functionality, account navigation, and main navigation.

## Features
- NHS branding with official logo
- Flexible navigation with responsive menu
- Search functionality
- Account management integration  
- Organisation variant for NHS trusts
- White variant for different backgrounds
- Full accessibility support with ARIA navigation

## Usage Guidelines
- Always include the NHS logo for consistency
- Use clear, descriptive navigation labels
- Implement proper focus management for keyboard users
- Consider mobile-first responsive behavior
- Follow NHS Digital Service Manual guidelines

## Accessibility
- Uses semantic HTML5 header element
- Proper ARIA navigation landmarks
- Keyboard accessible menu toggle
- Screen reader friendly hidden labels
- Focus indicators for all interactive elements
        `
      }
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'white', 'organisation'],
      description: 'Header color variant'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'The default header with NHS branding. This is the standard configuration used across most NHS digital services.'
      }
    }
  }
};

export const WithService: Story = {
  args: {
    service: {
      text: 'NHS App',
      href: '/app'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with a service name that links to the service homepage. The NHS logo and service name are combined into a single link when hrefs match.'
      }
    }
  }
};

export const WithSearch: Story = {
  args: {
    service: {
      text: 'NHS Digital'
    },
    search: {
      action: '/search',
      placeholder: 'Search NHS services',
      visuallyHiddenLabel: 'Search NHS Digital',
      visuallyHiddenButton: 'Search'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with integrated search functionality. The search form is responsive and includes proper accessibility labels.'
      }
    }
  }
};

export const WithNavigation: Story = {
  args: {
    service: {
      text: 'NHS Digital Services'
    },
    navigation: {
      ariaLabel: 'Main navigation',
      items: [
        {
          href: '/',
          text: 'Home',
          current: true
        },
        {
          href: '#',
          text: 'Health records'
        },
        {
          href: '#',
          text: 'Appointments'
        },
        {
          href: '#',
          text: 'Prescriptions'
        },
        {
          href: '#',
          text: 'Services'
        }
      ]
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with main navigation. The current page is indicated with `current: true` and uses proper ARIA attributes. Navigation automatically becomes responsive on smaller screens.'
      }
    }
  }
};

export const WithAccount: Story = {
  args: {
    service: {
      text: 'NHS Digital'
    },
    search: {
      placeholder: 'Search'
    },
    account: {
      ariaLabel: 'Account navigation',
      items: [
        {
          href: '/profile',
          text: 'Your profile',
          icon: true
        },
        {
          action: '/logout',
          method: 'post',
          text: 'Sign out'
        }
      ]
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with account management. Supports both link and form-based account actions. The user icon is automatically included when `icon: true` is set.'
      }
    }
  }
};

export const FullFeatured: Story = {
  args: {
    service: {
      text: 'NHS App',
      href: '/'
    },
    search: {
      action: '/search',
      placeholder: 'Search NHS App',
      visuallyHiddenLabel: 'Search the NHS App',
      visuallyHiddenButton: 'Search'
    },
    account: {
      ariaLabel: 'Your account',
      items: [
        {
          href: '/profile',
          text: 'Your NHS account',
          icon: true
        },
        {
          action: '/logout',
          method: 'post',
          text: 'Sign out'
        }
      ]
    },
    navigation: {
      ariaLabel: 'App navigation',
      items: [
        {
				href: '/',
				text: 'Home',
				current: true
		},
		{
				href: '/services',
				text: 'Services'
		},
		{
				href: '/appointments',
				text: 'Appointments'
		},
		{
				href: '/prescriptions',
				text: 'Prescriptions'
		},
		{
				href: '/health-records',
				text: 'Health records'
		},
		{
				href: '/messages',
				text: 'Messages'
		},
		{
				href: '/symptoms',
				text: 'Check symptoms'
		},
		{
				href: '/conditions',
				text: 'Health A-Z'
		},
		{
				href: '/medicines',
				text: 'Medicines A-Z'
		},
		{
				href: '/live-well',
				text: 'Live Well'
		},
		{
				href: '/mental-health',
				text: 'Mental health'
		},
		{
				href: '/social-care',
				text: 'Care and support'
		}
      ]
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete header with all features: service branding, search, account management, and navigation. This represents a typical NHS digital service header.'
      }
    }
  }
};

export const OrganisationVariant: Story = {
  args: {
    variant: 'organisation',
    organisation: {
      name: 'Royal Free London',
      split: 'NHS Foundation Trust',
      descriptor: 'Part of NHS Digital'
    },
    navigation: {
      items: [
        {
          href: '/',
          text: 'Home',
          current: true
        },
        {
          href: '#',
          text: 'Our services'
        },
        {
          href: '#',
          text: 'For patients'
        },
        {
          href: '#',
          text: 'For professionals'
        },
        {
          href: '#',
          text: 'About us'
        }
      ]
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Organisation variant for NHS trusts and health organizations. Features custom organisation branding alongside the NHS logo.'
      }
    }
  }
};

export const WhiteVariant: Story = {
  args: {
    variant: 'white',
    service: {
      text: 'NHS Digital'
    },
    search: {
      placeholder: 'Search'
    },
    navigation: {
      white: true,
      items: [
        {
          href: '/',
          text: 'Home',
          current: true
        },
        {
          href: '#',
          text: 'Services'
        },
        {
          href: '#',
          text: 'Support'
        }
      ]
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'White variant header with white navigation. Used when the header needs to integrate with light-colored page designs.'
      }
    }
  }
};

export const CustomLogo: Story = {
  args: {
    logo: {
      src: '/api/placeholder/220/80',
      ariaLabel: 'NHS Trust Logo'
    },
    organisation: {
      name: 'Specialist NHS Trust',
      descriptor: 'Excellence in Healthcare'
    },
    variant: 'organisation'
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with custom logo image for NHS organisations that have their own branding alongside the NHS identity.'
      }
    }
  }
};

export const WithManyNavigationItems: Story = {
  args: {
    service: {
      text: 'NHS Digital Services'
    },
    navigation: {
      ariaLabel: 'Main navigation',
      items: [
        {
          href: '/',
          text: 'Home',
          current: true
        },
        {
          href: '/services',
          text: 'Services'
        },
        {
          href: '/appointments',
          text: 'Appointments'
        },
        {
          href: '/prescriptions',
          text: 'Prescriptions'
        },
        {
          href: '/health-records',
          text: 'Health records'
        },
        {
          href: '/messages',
          text: 'Messages'
        },
        {
          href: '/symptoms',
          text: 'Check symptoms'
        },
        {
          href: '/conditions',
          text: 'Health A-Z'
        },
        {
          href: '/medicines',
          text: 'Medicines A-Z'
        },
        {
          href: '/live-well',
          text: 'Live Well'
        },
        {
          href: '/mental-health',
          text: 'Mental health'
        },
        {
          href: '/social-care',
          text: 'Care and support'
        }
      ]
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Header with many navigation items to demonstrate the overflow behavior. When there are too many items to fit in the available space, excess items will move to a "More" dropdown menu on desktop, or all items will be available in the mobile menu.'
      }
    }
  }
};


