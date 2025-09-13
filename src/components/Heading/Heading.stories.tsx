// PRUNE: KEEP_ALL (Expanded single-story gallery showcasing all Heading variants)
import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '.';
import headingStaticHtml from '../../../docs/static-html/Heading.html?raw';
import ParityBlock, { toNunjucksMacro } from '../../storybook/ParityBlock';

const meta: Meta<typeof Heading> = {
  title: 'NHS/Components/Heading',
  component: Heading,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
The Heading component provides a reusable abstraction for heading elements that separates semantic meaning from visual appearance.
This component eliminates the need for repetitive switch statements across components and promotes consistent heading usage.

### Key Benefits
- **Semantic Flexibility**: Use appropriate heading levels (h1-h6) for document structure
- **Visual Consistency**: Apply size variants independent of semantic level
- **Automatic Level Mapping**: When level is not specified, it's automatically determined from size (xxl/xl→h1, l→h2, m→h3, s→h4, xs→h5)
- **Reduced Code Duplication**: Eliminates repetitive heading logic across components
- **Better Architecture**: Single source of truth for heading rendering

### When to use this component
- When you need headings with consistent styling across your application
- To maintain proper semantic heading hierarchy while controlling visual size
- In place of manual heading switch statements in other components
- When you want to separate content structure from visual presentation
- For quick heading creation using only the size prop (level will be auto-assigned)

### Design System Benefits
This component addresses the architectural concern about repetitive heading logic found in components like Panel.
Instead of switch statements in every component, use this abstraction for cleaner, more maintainable code.
        `,
      },
    },
  },
  argTypes: {
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      description: 'The semantic heading level (h1-h6) for proper document structure. If not provided, will be automatically determined from size prop.',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 's', 'm', 'l', 'xl', 'xxl'],
      description: 'Visual size variant independent of semantic level. When level is not specified: xxl/xl→h1, l→h2, m→h3, s→h4, xs→h5',
    },
    text: {
      control: 'text',
      description: 'Plain text content for the heading',
    },
    html: {
      control: 'text',
      description: 'HTML content for the heading (alternative to text)',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

/**
 * Default heading with medium size
 */
export const AllVariants: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Gallery of all semantic + visual heading combinations. Use this as a reference for sizing, auto-mapped levels, and explicit level overrides.'
      }
    }
  },
  render: () => {
  const samples: { size: any; label: string; level?: 1 | 2 | 3 | 4 | 5 | 6 }[] = [
      { size: 'xxl', label: 'XXL (auto → h1)' },
      { size: 'xl', label: 'XL (auto → h1)' },
      { size: 'l', label: 'L (auto → h2)' },
      { size: 'm', label: 'M (auto → h3)' },
      { size: 's', label: 'S (auto → h4)' },
      { size: 'xs', label: 'XS (auto → h5)' },
      { size: 'm', level: 1, label: 'M forced level=1 (h1 visual m)' },
      { size: 's', level: 2, label: 'S forced level=2 (h2 visual s)' },
      { size: 'xs', level: 6, label: 'XS forced level=6 (h6 visual xs)' }
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {samples.map((s, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <code style={{ fontSize: '12px', color: '#555' }}>{s.label}</code>
            <Heading size={s.size as any} {...(s.level ? { level: s.level } : {})} text={`Example heading – ${s.label}`} />
          </div>
        ))}
        <div style={{ marginTop: '24px' }}>
          <code style={{ fontSize: '12px', color: '#555' }}>HTML prop example (size m auto → h3)</code>
          <Heading size="m" html="<em>Heading with <strong>HTML</strong> content</em>" />
        </div>
      </div>
    );
  }
};

export const Parity: Story = {
  name: 'Parity: React | Nunjucks | Static HTML',
  args: { size: 'xl', text: 'Page title (xl → h1)' },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story:
          'Side-by-side view: React live render, Nunjucks macro invocation (code), and the canonical Static HTML snippet (generated).',
      },
    },
  },
  render: (args) => {
    const props: Record<string, unknown> = {};
    if (args.level) props.level = args.level;
    if (args.size) props.size = args.size;
    if (args.className) props.className = args.className;
    if (args.marginBottom) props.marginBottom = args.marginBottom;
    props.text = args.text || (typeof args.children === 'string' ? args.children : 'Heading');

    return (
      <ParityBlock
        macroCode={toNunjucksMacro('heading', props)}
        staticHtml={headingStaticHtml}
      >
        <Heading {...args} />
      </ParityBlock>
    );
  },
};
