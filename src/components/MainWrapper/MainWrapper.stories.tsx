// PRUNED STORY FILE: Reduced to a single representative story.
// Original duplicates commented out to minimise Storybook surface area.
import type { Meta, StoryObj } from '@storybook/react';
import { MainWrapper } from './MainWrapper';
import { Container } from '../Grid';
import { Heading } from '../Heading';
import { Breadcrumb } from '../Breadcrumb';

const meta: Meta<typeof MainWrapper> = {
  title: 'Layout/MainWrapper',
  component: MainWrapper,
  parameters: {
    docs: {
      description: {
        component: `
The MainWrapper component provides consistent padding around main content areas following NHS UK spacing conventions.

## Features

- **Responsive Padding**: Different padding values for mobile and tablet/desktop
- **Size Variants**: Default, large, and small padding options
- **Semantic HTML**: Renders as \`<main>\` by default, customizable with \`as\` prop
- **Design Token Based**: Uses NHS FDP responsive spacing tokens

## Usage

\`\`\`tsx
import { Container, MainWrapper } from '@fergusbisset/nhs-fdp-design-system';

// Basic usage
<Container>
  <MainWrapper>
    <h1>Page Title</h1>
    <p>Main content goes here...</p>
  </MainWrapper>
</Container>

// With size variants
<MainWrapper size="large">Spacious layout</MainWrapper>
<MainWrapper size="small">Compact layout</MainWrapper>

// Custom element
<MainWrapper as="section">Section content</MainWrapper>
\`\`\`

## Spacing Values

- **Default**: 16px mobile → 24px tablet+
- **Large**: 24px mobile → 32px tablet+  
- **Small**: 8px mobile → 16px tablet+
        `,
      },
    },
  },
  argTypes: {
    as: {
      control: 'select',
      options: ['main', 'div', 'section'],
      description: 'The HTML element to render',
    },
    size: {
      control: 'select',
      options: ['default', 'large', 'small'],
      description: 'Padding size variant',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component for demonstrating spacing
const ContentBlock = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div style={{ marginBottom: '24px' }}>
    <Heading level={2}>
      {title}
    </Heading>
    {children}
  </div>
);

export const Default: Story = {
  args: {
    size: 'default',
  },
  render: (args) => (
    <Container>
      <MainWrapper {...args}>
        <ContentBlock title="Default Main Wrapper">
          <p>This demonstrates the default main wrapper with standard padding (16px mobile → 24px tablet+).</p>
          <p>The main wrapper provides consistent vertical spacing around your main content area.</p>
        </ContentBlock>
      </MainWrapper>
    </Container>
  ),
};
