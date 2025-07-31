import type { Meta, StoryObj } from '@storybook/react';
import { SkipLink } from './SkipLink';

const meta: Meta<typeof SkipLink> = {
  title: 'NHS/Components/SkipLink',
  component: SkipLink,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'The skip link component allows keyboard users to skip to the main content or other important sections of the page.',
      },
    },
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'The text to display in the skip link',
    },
    href: {
      control: 'text',
      description: 'The href target for the skip link',
    },
    classes: {
      control: 'text',
      description: 'Additional CSS class names',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SkipLink>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'The default skip link that jumps to the main content. Tab to the link to see it appear.',
      },
    },
  },
};

export const CustomText: Story = {
  args: {
    text: 'Skip to navigation menu',
    href: '#navigation',
  },
  parameters: {
    docs: {
      description: {
        story: 'A skip link with custom text that jumps to a navigation section.',
      },
    },
  },
};

export const SkipToSearch: Story = {
  args: {
    text: 'Skip to search',
    href: '#search',
  },
  parameters: {
    docs: {
      description: {
        story: 'A skip link that allows users to jump directly to the search functionality.',
      },
    },
  },
};

// Story to demonstrate the skip link in context
export const InContext: Story = {
  render: () => (
    <div>
      <SkipLink />
      <SkipLink text="Skip to navigation" href="#navigation" />
      <header style={{ padding: '20px', backgroundColor: '#005eb8', color: 'white' }}>
        <h1>NHS Website Header</h1>
        <nav id="navigation" style={{ marginTop: '10px' }}>
          <a href="#" style={{ color: 'white', marginRight: '20px' }}>Services</a>
          <a href="#" style={{ color: 'white', marginRight: '20px' }}>Health A-Z</a>
          <a href="#" style={{ color: 'white' }}>Live Well</a>
        </nav>
      </header>
      <main id="maincontent" style={{ padding: '20px' }}>
        <h2>Main Content</h2>
        <p>This is the main content of the page. The skip links allow keyboard users to jump directly to this content or to the navigation above.</p>
        <p>To test the skip links, use Tab to navigate to them. They will only be visible when focused.</p>
      </main>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'This story shows skip links in context with header and main content. Use Tab to see the skip links appear.',
      },
    },
  },
};
