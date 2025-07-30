#!/usr/bin/env node

/**
 * NHS FDP Component Generator
 * 
 * Generates a new component with all the necessary files following the established patterns.
 * 
 * Usage: node scripts/generate-component.js ComponentName
 */

const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];

if (!componentName) {
  console.error('❌ Please provide a component name');
  console.log('Usage: node scripts/generate-component.js ComponentName');
  process.exit(1);
}

const componentDir = path.join(__dirname, '..', 'src', 'components', componentName);

// Check if component already exists
if (fs.existsSync(componentDir)) {
  console.error(`❌ Component "${componentName}" already exists`);
  process.exit(1);
}

// Create component directory
fs.mkdirSync(componentDir, { recursive: true });

// Templates
const templates = {
  types: `export interface ${componentName}Props {
  /** Additional CSS classes */
  className?: string;
  /** Children elements */
  children?: React.ReactNode;
}`,

  component: `import React from 'react';
import classNames from 'classnames';
import './${componentName}.scss';
import { ${componentName}Props } from './${componentName}.types';

export const ${componentName}: React.FC<${componentName}Props> = ({
  className,
  children,
  ...props
}) => {
  const componentClasses = classNames(
    'nhsuk-${componentName.toLowerCase()}',
    className
  );

  return (
    <div className={componentClasses} {...props}>
      {children}
    </div>
  );
};`,

  scss: `// NHS ${componentName} SCSS - Uses compiled design tokens
@use '../../../packages/nhs-fdp/dist/scss/tokens' as nhs;

.nhsuk-${componentName.toLowerCase()} {
  // Base styles using design tokens
  font-family: "#{nhs.$nhs-fdp-font-family-base}", #{nhs.$nhs-fdp-font-family-fallback};
  color: nhs.$nhs-fdp-semantic-color-text-primary;
  
  // Add component-specific styles here
}`,

  stories: `import type { Meta, StoryObj } from '@storybook/react';
import { ${componentName} } from './${componentName}';

const meta: Meta<typeof ${componentName}> = {
  title: 'Components/${componentName}',
  component: ${componentName},
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: \`
The NHS ${componentName} component follows NHS design guidelines with design token integration.

## Features

- **Accessibility**: Screen reader support with proper ARIA attributes
- **Design token integration**: Uses NHS color, spacing, and typography tokens
- **Responsive design**: Adapts to different screen sizes

## Usage

\\\`\\\`\\\`tsx
import { ${componentName} } from '@nhs-fdp/design-system';

// Basic usage
<${componentName}>
  ${componentName} content
</${componentName}>
\\\`\\\`\\\`

## Accessibility

- Proper semantic markup
- Screen reader compatible
- Focus indicators meeting WCAG contrast requirements
        \`,
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ${componentName}>;

export const Default: Story = {
  args: {
    children: '${componentName} content',
  },
};

export const WithCustomClass: Story = {
  args: {
    children: '${componentName} with custom styling',
    className: 'custom-${componentName.toLowerCase()}',
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with custom CSS class applied.',
      },
    },
  },
};`,

  test: `import { render, screen } from '@testing-library/react';
import { ${componentName} } from './${componentName}';

describe('${componentName}', () => {
  it('renders successfully', () => {
    render(<${componentName}>Test content</${componentName}>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<${componentName} className="custom-class">Test</${componentName}>);
    const component = screen.getByText('Test');
    expect(component).toHaveClass('custom-class');
    expect(component).toHaveClass('nhsuk-${componentName.toLowerCase()}');
  });
});`,

  index: `export { ${componentName} } from './${componentName}';
export type { ${componentName}Props } from './${componentName}.types';`
};

// Generate files
const files = [
  { name: `${componentName}.types.ts`, content: templates.types },
  { name: `${componentName}.tsx`, content: templates.component },
  { name: `${componentName}.scss`, content: templates.scss },
  { name: `${componentName}.stories.tsx`, content: templates.stories },
  { name: `${componentName}.test.tsx`, content: templates.test },
  { name: 'index.ts', content: templates.index }
];

files.forEach(file => {
  const filePath = path.join(componentDir, file.name);
  fs.writeFileSync(filePath, file.content);
  console.log(`✅ Created ${file.name}`);
});

console.log(`\\n🎉 Component "${componentName}" generated successfully!`);
console.log(`📁 Location: src/components/${componentName}/`);
console.log(`\\n📝 Next steps:`);
console.log(`1. Implement the component logic in ${componentName}.tsx`);
console.log(`2. Add styles using design tokens in ${componentName}.scss`);
console.log(`3. Update the TypeScript types in ${componentName}.types.ts`);
console.log(`4. Add comprehensive tests in ${componentName}.test.tsx`);
console.log(`5. Create Storybook stories in ${componentName}.stories.tsx`);
console.log(`6. Update src/components/index.ts to export the new component`);
