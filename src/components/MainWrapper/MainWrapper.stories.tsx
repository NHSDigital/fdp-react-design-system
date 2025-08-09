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

export const SizeVariants: Story = {
  render: () => (
    <div>
      <div style={{ marginBottom: '32px', border: '1px solid #ddd' }}>
        <h3 style={{ margin: '0 0 16px 16px', paddingTop: '16px' }}>Small Padding</h3>
        <Container>
          <MainWrapper size="small">
            <ContentBlock title="Small Main Wrapper">
              <p>Compact padding for dense layouts (8px mobile → 16px tablet+).</p>
            </ContentBlock>
          </MainWrapper>
        </Container>
      </div>

      <div style={{ marginBottom: '32px', border: '1px solid #ddd' }}>
        <h3 style={{ margin: '0 0 16px 16px', paddingTop: '16px' }}>Default Padding</h3>
        <Container>
          <MainWrapper size="default">
            <ContentBlock title="Default Main Wrapper">
              <p>Standard padding for most layouts (16px mobile → 24px tablet+).</p>
            </ContentBlock>
          </MainWrapper>
        </Container>
      </div>

      <div style={{ border: '1px solid #ddd' }}>
        <h3 style={{ margin: '0 0 16px 16px', paddingTop: '16px' }}>Large Padding</h3>
        <Container>
          <MainWrapper size="large">
            <ContentBlock title="Large Main Wrapper">
              <p>Spacious padding for generous layouts (24px mobile → 32px tablet+).</p>
            </ContentBlock>
          </MainWrapper>
        </Container>
      </div>
    </div>
  ),
};

export const DifferentElements: Story = {
  render: () => (
    <div>
      <Container>
        <MainWrapper as="main">
          <ContentBlock title="Semantic Main Element">
            <p>This uses the semantic <code>&lt;main&gt;</code> element (default).</p>
          </ContentBlock>
        </MainWrapper>
      </Container>

      <Container>
        <MainWrapper as="section">
          <ContentBlock title="Section Element">
            <p>This uses a <code>&lt;section&gt;</code> element instead.</p>
          </ContentBlock>
        </MainWrapper>
      </Container>

      <Container>
        <MainWrapper as="div">
          <ContentBlock title="Div Element">
            <p>This uses a generic <code>&lt;div&gt;</code> element.</p>
          </ContentBlock>
        </MainWrapper>
      </Container>
    </div>
  ),
};

export const TypicalPageLayout: Story = {
  render: () => (
    <div>
      {/* Simulate header/breadcrumbs area */}
      <div style={{ background: '#f0f4f8', padding: '16px 0', marginBottom: '0' }}>
        <Container>
          <Breadcrumb
            items={[
              { text: 'Home', href: '#' },
              { text: 'Services', href: '#' },
              { text: 'Book Appointment', active: true }
            ]}
          />
        </Container>
      </div>

      {/* Main content area */}
      <Container>
        <MainWrapper>
          <ContentBlock title="Book an Appointment">
            <p>Use our online booking system to schedule your appointment with a healthcare professional.</p>
            
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ marginBottom: '16px' }}>What you'll need</h3>
              <ul style={{ marginLeft: '20px' }}>
                <li>Your NHS number</li>
                <li>Details of your symptoms or condition</li>
                <li>Preferred appointment times</li>
                <li>Contact information</li>
              </ul>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ marginBottom: '16px' }}>Appointment Types</h3>
              <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                <div style={{ border: '1px solid #d1d5db', padding: '16px', borderRadius: '4px' }}>
                  <h4 style={{ marginBottom: '8px' }}>Face-to-face</h4>
                  <p style={{ margin: 0, fontSize: '14px' }}>In-person consultation at your local practice</p>
                </div>
                <div style={{ border: '1px solid #d1d5db', padding: '16px', borderRadius: '4px' }}>
                  <h4 style={{ marginBottom: '8px' }}>Telephone</h4>
                  <p style={{ margin: 0, fontSize: '14px' }}>Phone consultation with your GP</p>
                </div>
                <div style={{ border: '1px solid #d1d5db', padding: '16px', borderRadius: '4px' }}>
                  <h4 style={{ marginBottom: '8px' }}>Video Call</h4>
                  <p style={{ margin: 0, fontSize: '14px' }}>Online video consultation</p>
                </div>
              </div>
            </div>

            <button 
              style={{ 
                background: '#005eb8', 
                color: 'white', 
                border: 'none', 
                padding: '12px 24px', 
                borderRadius: '4px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Start Booking
            </button>
          </ContentBlock>
        </MainWrapper>
      </Container>

      {/* Footer area */}
      <div style={{ background: '#425563', color: 'white', padding: '24px 0', marginTop: '40px' }}>
        <Container>
          <p style={{ margin: 0, textAlign: 'center' }}>NHS Footer Content</p>
        </Container>
      </div>
    </div>
  ),
};

export const WithSidebar: Story = {
  render: () => (
    <Container>
      <MainWrapper>
        <div style={{ display: 'grid', gap: '32px', gridTemplateColumns: '1fr 300px' }}>
          <main>
            <ContentBlock title="Main Content Area">
              <p>This demonstrates a typical two-column layout with main content and sidebar.</p>
              <p>The MainWrapper provides consistent padding around the entire layout while the grid handles the column structure.</p>
              
              <h3>Section One</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              
              <h3>Section Two</h3>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </ContentBlock>
          </main>
          
          <aside style={{ background: '#f0f4f8', padding: '16px', borderRadius: '4px' }}>
            <h3 style={{ marginTop: 0, marginBottom: '16px' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '8px' }}>
                <a href="#" style={{ color: '#005eb8', textDecoration: 'none' }}>Book Appointment</a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="#" style={{ color: '#005eb8', textDecoration: 'none' }}>Test Results</a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="#" style={{ color: '#005eb8', textDecoration: 'none' }}>Prescription Requests</a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="#" style={{ color: '#005eb8', textDecoration: 'none' }}>Contact Practice</a>
              </li>
            </ul>
            
            <h4 style={{ marginTop: '24px', marginBottom: '12px' }}>Opening Hours</h4>
            <p style={{ fontSize: '14px', margin: 0 }}>
              Monday - Friday: 8:00 - 18:30<br />
              Saturday: 8:00 - 12:00<br />
              Sunday: Closed
            </p>
          </aside>
        </div>
      </MainWrapper>
    </Container>
  ),
};
