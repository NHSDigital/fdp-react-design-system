import type { Meta, StoryObj } from '@storybook/react';
import { HeaderSearch } from '../src/components/HeaderSearch/HeaderSearch';
import { HeaderSearchProps } from '../src/components/HeaderSearch/HeaderSearch.types';

const meta: Meta<typeof HeaderSearch> = {
  title: 'Components/Header/HeaderSearch',
  component: HeaderSearch,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The HeaderSearch component provides a reusable search form for NHS headers.

## Features
- NHS design system compliant styling
- Accessible search form with proper ARIA attributes
- Configurable action URL and form attributes
- SVG search icon matching NHS.UK standards
- Responsive design for mobile and desktop

## Usage
Use this component within header components to provide search functionality.
        `
      }
    }
  },
  argTypes: {
    action: {
      control: 'text',
      description: 'Search action URL'
    },
    name: {
      control: 'text',
      description: 'Search input name attribute'
    },
    placeholder: {
      control: 'text',
      description: 'Search input placeholder text'
    },
    visuallyHiddenLabel: {
      control: 'text',
      description: 'Visually hidden label for screen readers'
    },
    visuallyHiddenButton: {
      control: 'text',
      description: 'Visually hidden button text for screen readers'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  }
};

export default meta;
type Story = StoryObj<HeaderSearchProps>;

export const Default: Story = {
  args: {}
};

export const CustomAction: Story = {
  args: {
    action: '/custom-search',
    placeholder: 'Search our site...'
  }
};

export const CustomLabels: Story = {
  args: {
    visuallyHiddenLabel: 'Search the medical database',
    visuallyHiddenButton: 'Submit search',
    placeholder: 'Enter medical terms...'
  }
};

export const WithFormAttributes: Story = {
  args: {
    formAttributes: {
      onSubmit: (e) => {
        e.preventDefault();
        alert('Search submitted!');
      }
    },
    inputAttributes: {
      maxLength: 100
    },
    buttonAttributes: {
      title: 'Submit search'
    }
  }
};
