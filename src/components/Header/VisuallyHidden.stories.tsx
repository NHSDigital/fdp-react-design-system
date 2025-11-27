import type { Meta, StoryObj } from '@storybook/react';

// Simple test component to verify visually hidden utility
const VisuallyHiddenTest = () => {
  return (
    <div>
      <h2>Visually Hidden Test</h2>
      <p>This story tests the .nhsuk-u-visually-hidden utility class.</p>
      
      <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px 0' }}>
        <h3>Search Label Test</h3>
        <label className="nhsuk-u-visually-hidden" htmlFor="test-search">
          Search the NHS website
        </label>
        <input id="test-search" type="search" placeholder="Search..." style={{ padding: '8px', width: '200px' }} />
        <p>↑ The search label should be visually hidden but accessible to screen readers</p>
      </div>
      
      <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px 0' }}>
        <h3>Button Text Test</h3>
        <button style={{ padding: '8px 12px', background: '#005eb8', color: 'white', border: 'none', borderRadius: '4px' }}>
          <svg style={{ width: '20px', height: '20px', fill: 'currentColor' }} viewBox="0 0 24 24">
            <path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"/>
          </svg>
          <span className="nhsuk-u-visually-hidden">Search</span>
        </button>
        <p>↑ The "Search" text should be visually hidden but accessible to screen readers</p>
      </div>
      
      <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px 0' }}>
        <h3>Navigation Helper Text Test</h3>
        <button style={{ padding: '8px 12px', background: '#005eb8', color: 'white', border: 'none', borderRadius: '4px' }}>
          <span className="nhsuk-u-visually-hidden">Browse </span>
          More
        </button>
        <p>↑ The "Browse " text should be visually hidden but accessible to screen readers</p>
      </div>
      
      <div style={{ padding: '20px', border: '1px solid #f44336', margin: '20px 0', background: '#ffebee' }}>
        <h3>Debugging Information</h3>
        <button onClick={() => {
          const hiddenElements = document.querySelectorAll('.nhsuk-u-visually-hidden');
          console.log('=== Visually Hidden Debug ===');
          console.log(`Found ${hiddenElements.length} elements with .nhsuk-u-visually-hidden class`);
          
          hiddenElements.forEach((element, index) => {
            const computedStyle = window.getComputedStyle(element);
            console.log(`Element ${index + 1}:`, element.tagName, element.textContent?.trim());
            console.log('  position:', computedStyle.position);
            console.log('  width:', computedStyle.width);
            console.log('  height:', computedStyle.height);
            console.log('  overflow:', computedStyle.overflow);
            console.log('  clip:', computedStyle.clip);
            console.log('  clip-path:', computedStyle.clipPath);
            console.log('---');
          });
        }}>
          Debug CSS in Console
        </button>
        <p>Click the button above to see detailed CSS information in the browser console</p>
      </div>
    </div>
  );
};

const meta = {
  title: 'NHS/Utilities/Visually Hidden',
  component: VisuallyHiddenTest,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof VisuallyHiddenTest>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
