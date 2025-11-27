// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { PageTemplate } from './PageTemplate';
import { DashboardSummaryGrid } from '../DashboardSummaryGrid';

const meta: Meta<typeof PageTemplate> = {
  title: 'Templates/PageTemplate',
  component: PageTemplate,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
The PageTemplate component provides a complete page layout following NHS Service Manual guidance.

## Features

- **Complete Page Structure**: Includes SkipLink, Header, WidthContainer, MainWrapper, Grid, and Footer
- **Clean Component Composition**: Uses the structure: \`<SkipLink/><Header/><WidthContainer><MainWrapper><Row><Column><Heading /></></></></><Footer />\`
- **Flexible Layout**: Configurable column widths and wrapper sizes
- **NHS Compliance**: Follows NHS design patterns and accessibility guidelines
- **Header Integration**: Convenient props for service, navigation, search, and account configuration

## When to Use

Use PageTemplate when you want a complete, consistent page layout without having to compose multiple layout components manually. Perfect for:

- Service pages with standard NHS layout
- Content pages with consistent structure
- Dashboard-style applications
- Any page requiring NHS-compliant layout

## Alternative: WidthContainer

For simpler layouts, you can use the standalone \`WidthContainer\` component which provides just the NHS-standard page width container.
        `,
      },
    },
  },
  argTypes: {
    pageTitle: {
      control: 'text',
      description: 'Main page title/heading',
    },
    columnWidth: {
      control: { type: 'select' },
      options: ['one-quarter', 'one-third', 'one-half', 'two-thirds', 'three-quarters', 'full'],
      description: 'Column width for main content area',
    },
    mainWrapperSize: {
      control: { type: 'select' },
      options: ['default', 'large', 'small'],
      description: 'Size variant for MainWrapper',
    },
    children: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const SampleContent = () => (
  <div>
    <p>This is the main content area of your page. You can include any content here such as:</p>
    <ul>
      <li>Forms and input components</li>
      <li>Content sections</li>
      <li>Data tables and charts</li>
      <li>Navigation and action buttons</li>
    </ul>
    <p>The PageTemplate handles all the layout structure, so you can focus on your content.</p>
  </div>
);

export const Default: Story = {
  args: {
    pageTitle: 'NHS Digital Service',
    service: {
      text: 'NHS App',
      href: '/',
    },
    children: <SampleContent />,
  },
};
